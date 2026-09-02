import Image from "next/image";

/**
 * Une capture de l'application, posée dans un contour d'appareil.
 *
 * Pourquoi un composant et pas une image de cadre : les visuels multi-appareils
 * du site étaient des PNG de trois à cinq mégaoctets où le cadre, l'écran et le
 * contenu étaient cuits ensemble. Impossible de changer l'écran montré sans
 * repasser par un outil de maquette — et le texte d'interface de ces rendus
 * était du faux texte (« Scanner une fecture », « Foundeboves »), lisible à
 * l'œil sur l'accueil en pleine largeur.
 *
 * Ici le contour est en CSS et la capture est un vrai fichier : elle reste
 * nette, `next/image` la sert en AVIF au bon format, et changer d'écran est une
 * ligne. Le contour ne cherche pas à imiter un modèle de téléphone précis — un
 * dessin d'iPhone reconnaissable vieillit en deux ans et pose des questions de
 * marque. Il dit « appareil », c'est tout ce qu'on lui demande.
 */
type Appareil = "telephone" | "tablette" | "navigateur";

/**
 * Bande réservée à la caméra frontale, en pourcentage de la hauteur de l'écran.
 *
 * L'écran GRANDIT d'autant au lieu de rogner la capture. Première version : la
 * bande était prise SUR les 844 px de l'image, et `object-cover` rognait
 * d'autant en bas — la barre de navigation du téléphone se retrouvait coupée.
 * Le cadre est donc un peu plus haut que l'écran photographié, comme un vrai
 * téléphone dont la dalle dépasse la zone d'affichage.
 */
const BANDE_CAMERA_PCT = 3;
const BANDE_CAMERA = `${BANDE_CAMERA_PCT}%`;

/** 844 px d'image sous une bande de 3 % : l'écran fait 844 / 0,97 de haut. */
const RATIO_TELEPHONE_AVEC_BANDE = `390 / ${Math.round(844 / (1 - BANDE_CAMERA_PCT / 100))}`;

const RATIOS: Record<Appareil, string> = {
  // 390 × 844 et 1024 × 768 : les tailles réelles de capture.
  telephone: "390 / 844",
  tablette: "1024 / 768",
  navigateur: "1440 / 900",
};

export function CadreAppareil({
  appareil,
  src,
  alt,
  priority = false,
  sizes,
  className = "",
}: {
  appareil: Appareil;
  src: string;
  alt: string;
  priority?: boolean;
  /** Indispensable avec `fill` : sans lui, Next sert l'image en pleine largeur. */
  sizes: string;
  className?: string;
}) {
  if (appareil === "navigateur") {
    return (
      <figure className={`overflow-hidden rounded-xl border border-[#dcead2] bg-white shadow-[0_20px_70px_rgba(58,92,39,0.14)] ${className}`}>
        {/* La barre de fenêtre : trois pastilles, rien de plus. Elle suffit à
            dire « c'est un écran d'ordinateur » sans imiter un navigateur
            précis, qui daterait l'image. */}
        <div className="flex items-center gap-1.5 border-b border-[#eef5e8] bg-[#f6fbf2] px-3 py-2">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#d8e6cf]" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#d8e6cf]" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#d8e6cf]" />
        </div>
        <div className="relative w-full" style={{ aspectRatio: RATIOS.navigateur }}>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
        </div>
      </figure>
    );
  }

  const estTelephone = appareil === "telephone";

  return (
    <figure
      className={`relative mx-auto ${estTelephone ? "rounded-[2rem] p-2" : "rounded-[1.25rem] p-2.5"} bg-[#27421f] shadow-[0_20px_70px_rgba(58,92,39,0.22)] ${className}`}
    >
      <div
        className={`relative overflow-hidden bg-white ${estTelephone ? "rounded-[1.5rem]" : "rounded-[0.75rem]"}`}
        style={{ aspectRatio: estTelephone ? RATIO_TELEPHONE_AVEC_BANDE : RATIOS[appareil] }}
      >
        {/* Le bandeau de la caméra frontale.
            La pastille était dessinée PAR-DESSUS la capture : le titre de
            l'écran passait dessous, et on lisait « TEMPÉRATURES » barré d'un
            trait vert. Un téléphone ne fait pas ça — son écran commence sous la
            caméra. On réserve donc la bande, en blanc, et la capture démarre
            en dessous. En pourcentage : le cadre est rendu à des largeurs très
            différentes selon les pages. */}
        {estTelephone ? (
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 z-10 flex items-center justify-center bg-white"
            style={{ height: BANDE_CAMERA }}
          >
            <span className="h-[3px] w-[18%] rounded-full bg-[#27421f]/70" />
          </div>
        ) : null}
        <div className="absolute inset-x-0 bottom-0" style={{ top: estTelephone ? BANDE_CAMERA : 0 }}>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
        </div>
      </div>
    </figure>
  );
}
