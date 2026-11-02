import { cartesContact } from "./cartes-contact";

/**
 * Les pages d'arrivée du papier (flyer, cartes de visite).
 *
 * UN SEUL GABARIT, DEUX ACCROCHES. Le plan de campagne teste deux accroches
 * (A : le beurre, B : le croissant), chacune avec la photo de son flyer. Deux pages
 * écrites à la main divergeraient au premier ajustement et fausseraient le
 * test : tout ce qui n'est pas l'accroche vit donc dans le gabarit.
 *
 * Ces pages sont hors menu, hors sitemap et en noindex : on n'y arrive que par
 * un QR code imprimé.
 */

export type PageArrivee = {
  chemin: string;
  accroche: string;
  /** Une phrase sous l'accroche, dans le même ton. */
  suite: string;
  titreOnglet: string;
  image: { src: string; alt: string; width: number; height: number };
  description: string;
};

export const pagesArrivee: PageArrivee[] = [
  {
    chemin: "/beurre",
    accroche: "Le beurre augmente. Et votre marge ?",
    suite:
      "Vous voyez passer les hausses sur vos factures. Gramme les range pour vous et recalcule ce que chaque recette vous rapporte.",
    titreOnglet: "Le beurre augmente. Et votre marge ?",
    image: { src: "/images/hero-balance-beurre.jpg", alt: "Une balance de pâtissier, du beurre face à un poids", width: 2400, height: 1339 },
    description: "Voyez en deux minutes ce que Gramme fait de vos factures et de vos marges.",
  },
  {
    chemin: "/croissant",
    accroche: "Votre croissant vous rapporte combien ?",
    suite:
      "Vous connaissez votre prix de vente. Gramme calcule le coût de chaque fournée à partir de vos vraies factures.",
    titreOnglet: "Votre croissant vous rapporte combien ?",
    image: { src: "/images/croissant-balance.jpg", alt: "Une balance de pâtissier, un croissant face à un poids", width: 1920, height: 1080 },
    description: "Voyez en deux minutes ce que Gramme fait de vos factures et de vos marges.",
  },
];

// Les pages des cartes de visite ont leur propre gabarit, mais le même dépouillement.
export const CHEMINS_ARRIVEE = [...pagesArrivee, ...cartesContact].map((p) => p.chemin);

export function estPageArrivee(chemin: string | null | undefined): boolean {
  return !!chemin && CHEMINS_ARRIVEE.includes(chemin.replace(/\/$/, "") || "/");
}

export function pageArrivee(chemin: string): PageArrivee {
  const page = pagesArrivee.find((p) => p.chemin === chemin);
  if (!page) throw new Error(`Page d'arrivée inconnue : ${chemin}`);
  return page;
}
