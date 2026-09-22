/**
 * Convertir en JPEG une photo déposée dans le questionnaire de mise en service.
 *
 * Pourquoi ce fichier existe (tâche DEV #165). Une photo prise avec un iPhone
 * arrive en HEIC. Elle traversait TOUTE la chaîne sans encombre — la liste
 * blanche du site l'acceptait, le stockage la gardait, la copie vers l'atelier
 * du client la recopiait — pour être refusée au tout dernier moment, juste
 * avant l'analyse, par le garde-fou des fonctions de scan
 * (`supabase/functions/_shared/scans.ts`). Le chef avait fini son
 * questionnaire, et rien ne marchait.
 *
 * Deux choses se corrigent ensemble, et elles se complètent :
 *
 * 1. **Ne plus annoncer `image/heic` dans l'`accept` du champ** (voir
 *    `ACCEPTED_MIME` dans `src/content/onboarding.ts`). Tant qu'on ne le
 *    nomme pas, iOS transcode lui-même la photo en JPEG au moment de la
 *    choisir. Dès qu'on le nomme, il livre le HEIC natif. C'est la même règle
 *    que l'application suit déjà (`src/lib/scan-file-accept.ts` côté `gramme`).
 * 2. **Convertir ici, avant le premier octet envoyé.** L'astuce d'iOS ne
 *    couvre pas tout : un fichier exporté à la main, glissé depuis un
 *    ordinateur, ou choisi par une application tierce arrive quand même en
 *    HEIC.
 *
 * La conversion n'a besoin d'aucune bibliothèque : Safari et iOS savent
 * décoder le HEIC nativement, et `createImageBitmap` s'appuie dessus. Effet de
 * bord bienvenu, une photo de facture de 14 Mo redescend sous le plafond de
 * téléversement, et son orientation EXIF est appliquée — une photo prise de
 * travers arrivait couchée, ce qui dégradait la lecture.
 *
 * Portage de `src/lib/scan-image-normalize.ts` du dépôt `gramme`. Les deux
 * fichiers ne partagent pas de code : les dépôts sont séparés, et une
 * dépendance croisée coûterait plus cher que ces quarante lignes. Ils
 * partagent en revanche les MÊMES réglages — si l'un change, regarder l'autre.
 */

/** Au-delà, on redimensionne : suffisant pour la lecture d'une facture ou d'une fiche. */
const MAX_DIMENSION = 2600;
/** Au-delà, on réencode même un format déjà accepté (photos très lourdes). */
const MAX_BYTES_WITHOUT_REENCODE = 4 * 1024 * 1024;
const JPEG_QUALITY = 0.9;

/** Types que le serveur accepte tels quels. */
const TYPES_SURS = new Set(["image/jpeg", "image/png", "image/webp"]);

export class ImageIllisibleError extends Error {
  constructor(nomFichier: string) {
    super(
      `Impossible de lire « ${nomFichier} » dans ce navigateur. ` +
        `Réessayez depuis votre téléphone, ou convertissez la photo en JPEG.`,
    );
    this.name = "ImageIllisibleError";
  }
}

function estPdf(file: File): boolean {
  return file.type === "application/pdf" || /\.pdf$/i.test(file.name);
}

/** Un tableur ou un document : rien à convertir, et rien à comprendre non plus. */
function estImage(file: File): boolean {
  return file.type.startsWith("image/") || /\.(hei[cf]|jpe?g|png|webp|gif|bmp|tiff?)$/i.test(file.name);
}

/**
 * Faut-il convertir ? Le déclenchement se base sur le type et le poids, pas sur
 * les dimensions : décoder chaque fichier juste pour le mesurer coûterait plus
 * cher que le gain.
 *
 * Le nom compte autant que le type MIME : certains navigateurs livrent un
 * `.heic` avec un `type` vide, et se fier au seul `type` laissait alors passer
 * le fichier — c'est d'ailleurs ce qui contournait déjà la liste blanche du
 * formulaire.
 */
export function aBesoinDeConversion(file: File): boolean {
  if (estPdf(file) || !estImage(file)) return false;
  if (/\.hei[cf]$/i.test(file.name)) return true;
  if (!TYPES_SURS.has(file.type)) return true;
  return file.size > MAX_BYTES_WITHOUT_REENCODE;
}

function nomEnJpg(nom: string): string {
  const base = nom.replace(/\.[^./\\]+$/, "");
  return `${base || "photo"}.jpg`;
}

/**
 * Décode par `createImageBitmap` (qui respecte l'orientation EXIF), avec repli
 * sur `<img>` là où il ne gère pas le type.
 */
async function decoder(file: File): Promise<ImageBitmap | HTMLImageElement> {
  if (typeof createImageBitmap === "function") {
    try {
      return await createImageBitmap(file, { imageOrientation: "from-image" });
    } catch {
      /* on tente le repli <img> */
    }
  }

  const url = URL.createObjectURL(file);
  try {
    return await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new ImageIllisibleError(file.name));
      img.src = url;
    });
  } finally {
    URL.revokeObjectURL(url);
  }
}

function dimensions(source: ImageBitmap | HTMLImageElement): { l: number; h: number } {
  const l = "naturalWidth" in source ? source.naturalWidth : source.width;
  const h = "naturalHeight" in source ? source.naturalHeight : source.height;
  return { l, h };
}

/**
 * Rend un JPEG prêt à partir. Un fichier déjà acceptable revient tel quel, et
 * un PDF n'est jamais touché.
 *
 * @throws ImageIllisibleError si le navigateur ne sait pas décoder le fichier.
 */
export async function convertirEnJpegSiBesoin(file: File): Promise<File> {
  if (!aBesoinDeConversion(file)) return file;

  const source = await decoder(file);
  const { l, h } = dimensions(source);
  if (!l || !h) throw new ImageIllisibleError(file.name);

  const ratio = Math.min(1, MAX_DIMENSION / Math.max(l, h));
  const largeur = Math.max(1, Math.round(l * ratio));
  const hauteur = Math.max(1, Math.round(h * ratio));

  const canvas = document.createElement("canvas");
  let blob: Blob | null = null;
  try {
    canvas.width = largeur;
    canvas.height = hauteur;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new ImageIllisibleError(file.name);
    ctx.drawImage(source as CanvasImageSource, 0, 0, largeur, hauteur);
    blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY),
    );
  } finally {
    if ("close" in source) source.close();
    // iOS plafonne la mémoire canvas de l'onglet : sans cette remise à zéro,
    // chaque photo laisse une vingtaine de Mo derrière elle et Safari finit par
    // refuser de décoder — un questionnaire, c'est parfois trente photos.
    canvas.width = 0;
    canvas.height = 0;
  }
  if (!blob) throw new ImageIllisibleError(file.name);

  return new File([blob], nomEnJpg(file.name), {
    type: "image/jpeg",
    lastModified: file.lastModified,
  });
}
