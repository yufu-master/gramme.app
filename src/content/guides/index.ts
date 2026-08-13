import type { Guide } from "./types";
import { assertPublishedGuidesHaveNoPlaceholders } from "./types";
import { guideAllergenes } from "./etiquette-allergene-boulangerie-obligation";
import { guideCoefficientCoutMatiere } from "./coefficient-cout-matiere-boulangerie";
import { guideCoutDeRevient } from "./calcul-cout-de-revient-boulangerie";
import { guideFicheTechniqueModele } from "./fiche-technique-patisserie-modele";
import { guideHaccp } from "./logiciel-haccp-boulangerie";
import { guideLogicielChef } from "./logiciel-concu-par-un-chef-patissier";
import { guideScannerFiches } from "./scanner-fiches-techniques-patisserie";

/** Tous les guides (brouillons inclus). Ordre = ordre d'affichage sur /guides. */
export const guides: Guide[] = [
  guideCoutDeRevient,
  guideFicheTechniqueModele,
  guideAllergenes,
  guideCoefficientCoutMatiere,
  guideHaccp,
  guideScannerFiches,
  guideLogicielChef,
];

assertPublishedGuidesHaveNoPlaceholders(guides);

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
