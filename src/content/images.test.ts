import { describe, expect, it } from "vitest";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

/**
 * Les images du site, vérifiées contre le disque.
 *
 * Motif : pendant quinze jours, des pages ont affiché des captures d'août que
 * plus personne ne rafraîchissait, et une page HACCP montrait le stock. Rien
 * ne cassait — une image périmée s'affiche très bien. Ce fichier rend ces deux
 * fautes bruyantes : une adresse qui ne mène nulle part, et une capture que
 * plus aucune page ne cite (donc oubliée par le script de captures).
 */

const RACINE = path.resolve(__dirname, "..", "..");
const PUBLIC = path.join(RACINE, "public");

function fichiersSources(dossier: string): string[] {
  const trouves: string[] = [];
  for (const entree of readdirSync(dossier, { withFileTypes: true })) {
    if (entree.name === "node_modules" || entree.name.startsWith(".")) continue;
    const chemin = path.join(dossier, entree.name);
    if (entree.isDirectory()) trouves.push(...fichiersSources(chemin));
    else if (/\.(ts|tsx)$/.test(entree.name) && !entree.name.endsWith(".test.ts")) trouves.push(chemin);
  }
  return trouves;
}

/** Toutes les adresses `/images/...` citées, avec le fichier qui les cite. */
function referencesImages(): Map<string, string[]> {
  const refs = new Map<string, string[]>();
  for (const source of [...fichiersSources(path.join(RACINE, "src")), ...fichiersSources(path.join(RACINE, "app"))]) {
    const texte = readFileSync(source, "utf8");
    for (const trouve of texte.matchAll(/\/images\/[A-Za-z0-9_@./-]+\.(?:png|jpe?g|svg|webp|avif)/g)) {
      const adresse = trouve[0];
      refs.set(adresse, [...(refs.get(adresse) ?? []), path.relative(RACINE, source)]);
    }
  }
  return refs;
}

/**
 * Les captures qu'aucune page n'affiche AUJOURD'HUI, et la raison de les
 * garder. Publier l'une d'elles impose de la retirer d'ici : un contrôle le
 * vérifie, pour que cette liste reste vraie.
 */
const EN_RESERVE: Record<string, string> = {
  "/images/app/documents.png": "écran interne (coffre à documents) : aucune page commerciale ne le décrit encore",
  "/images/app/equipe.png": "écran interne (membres et rôles) : sujet des pages tarifs, sans capture",
  "/images/app/reglages.png": "écran interne (réglages de l'atelier) : rien à vendre là-dessus",
  "/images/app/nouveautes.png": "journal des versions : sert aux courriels de version, pas au site",
  "/images/app/haccp-apercu.png": "variante de haccp-temperatures.png, gardée pour la future page HACCP détaillée",
  "/images/app/haccp-etiqueter.png": "doublon d'usage avec recette-etiquetage.png sur le volet HACCP",
  "/images/app/haccp-nettoyage.png": "réservée à la future page « plan de nettoyage »",
  "/images/app/haccp-historique-nettoyage.png": "registre : illustre mal en vignette, gardée pour un guide de contrôle sanitaire",
  "/images/app/haccp-historique-temperatures.png": "même raison que l'historique de nettoyage",
  "/images/app/haccp-temperatures-courbe.png": "cadrage serré, gardé pour un article sur les écarts de température",
  "/images/app/prix-historique.png": "gardée pour la future page « hausse des prix des matières »",
  "/images/app/stock-produits.png": "gardée pour la future page « stock de produits finis »",
  "/images/app/vitrine-resultat.png": "gardée pour la future page « marge réelle par produit »",
};

describe("les images du site", () => {
  const refs = referencesImages();

  it("existe pour chaque adresse citée", () => {
    const manquantes: string[] = [];
    for (const [adresse, sources] of refs) {
      if (!existsSync(path.join(PUBLIC, adresse))) manquantes.push(`${adresse} — cité par ${sources.join(", ")}`);
    }
    expect(manquantes, "adresses sans fichier").toEqual([]);
  });

  it("n'est jamais une capture creuse", () => {
    // Une capture ratée écrit parfois un fichier de quelques octets : elle
    // passe le contrôle d'existence et s'affiche en blanc. Le seuil ne vaut
    // que pour les captures : un logo d'intégration de 128 × 128 pèse
    // légitimement moins d'un kilo-octet.
    const creuses: string[] = [];
    for (const adresse of refs.keys()) {
      if (!adresse.startsWith("/images/app/")) continue;
      const fichier = path.join(PUBLIC, adresse);
      if (existsSync(fichier) && statSync(fichier).size < 20_000) creuses.push(adresse);
    }
    expect(creuses, "captures de moins de 20 Ko").toEqual([]);
  });

  it("cite toutes les captures produites par le script, ou dit pourquoi elle ne le fait pas", () => {
    // Une capture que personne n'affiche est une capture qu'on oubliera de
    // refaire, et c'est ainsi que le site a montré des écrans d'août pendant
    // quinze jours. Une orpheline doit donc être DÉCLARÉE, avec sa raison :
    // le contrôle n'interdit pas la réserve, il interdit l'oubli.
    const captures = readdirSync(path.join(PUBLIC, "images", "app"))
      .filter((f) => f.endsWith(".png"))
      // Les variantes téléphone et tablette servent aux blocs responsives, qui
      // n'en citent qu'une partie : elles ne se réclament pas d'une page.
      .filter((f) => !/-(telephone|tablette)\.png$/.test(f))
      .map((f) => `/images/app/${f}`);
    const orphelines = captures.filter((c) => !refs.has(c) && !(c in EN_RESERVE));
    expect(orphelines, "captures ni affichées ni déclarées en réserve").toEqual([]);
  });

  it("ne garde pas en réserve une capture désormais affichée", () => {
    // La réserve se vide quand on publie : sinon elle devient une liste morte
    // qu'on ne relit plus.
    const perimees = Object.keys(EN_RESERVE).filter((c) => refs.has(c));
    expect(perimees, "en réserve alors qu'une page les affiche").toEqual([]);
  });

  it("ne garde pas en réserve une capture qui n'existe plus", () => {
    const disparues = Object.keys(EN_RESERVE).filter((c) => !existsSync(path.join(PUBLIC, c)));
    expect(disparues, "déclarées en réserve sans fichier").toEqual([]);
  });
});
