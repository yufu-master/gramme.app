import type { Guide } from "./types";
import { assertPublishedGuidesHaveNoEmDash, assertPublishedGuidesHaveNoPlaceholders } from "./types";
import { guideActiviteEau } from "./activite-eau-ganache-conservation";
import { guideAllergenes } from "./etiquette-allergene-boulangerie-obligation";
import { guideEquilibrage } from "./equilibrage-recette-comment-calculer";
import { guidePacPod } from "./calcul-pac-pod-glace";
import { guideCoefficientCoutMatiere } from "./coefficient-cout-matiere-boulangerie";
import { guideCoutDeRevient } from "./calcul-cout-de-revient-boulangerie";
import { guideFicheTechniqueModele } from "./fiche-technique-patisserie-modele";
import { guideHaccp } from "./logiciel-haccp-boulangerie";
import { guideLogicielChef } from "./logiciel-concu-par-un-chef-patissier";
import { guideScannerFiches } from "./scanner-fiches-techniques-patisserie";
import { guidePrixMenuChefADomicile } from "./prix-menu-chef-a-domicile";

/** Tous les guides (brouillons inclus). Ordre = ordre d'affichage sur /guides. */
export const guides: Guide[] = [
  // Les trois guides d'équilibrage en tête : c'est le sujet le plus
  // différenciant du produit, et il n'avait aucune page le 07/09/2026.
  guideEquilibrage,
  guidePacPod,
  guideActiviteEau,
  guideCoutDeRevient,
  guideFicheTechniqueModele,
  guideAllergenes,
  guideCoefficientCoutMatiere,
  guideHaccp,
  guideScannerFiches,
  guideLogicielChef,
  guidePrixMenuChefADomicile,
];

assertPublishedGuidesHaveNoPlaceholders(guides);
assertPublishedGuidesHaveNoEmDash(guides);

/** Guides publiés uniquement — index, sitemap, llms.txt. */
export const publishedGuides: Guide[] = guides.filter((g) => !g.draft);

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}

export function getPublishedGuideSlugs(): string[] {
  return publishedGuides.map((g) => g.slug);
}
