import type { Guide } from "./types";
import { assertPublishedGuidesHaveNoPlaceholders } from "./types";
import { guideLogicielChef } from "./logiciel-concu-par-un-chef-patissier";
import { guideScannerFiches } from "./scanner-fiches-techniques-patisserie";

/** Tous les guides (brouillons inclus). */
export const guides: Guide[] = [guideLogicielChef, guideScannerFiches];

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
