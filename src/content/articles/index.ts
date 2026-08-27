import type { Guide } from "@/content/guides/types";
import { assertPublishedGuidesHaveNoPlaceholders } from "@/content/guides/types";
import { articleMarge } from "./calculer-sa-marge-boulangerie-patisserie";
import { articlePerte } from "./pourcentage-perte-marge-boulangerie";
import { articlePrix } from "./prix-logiciel-gestion-boulangerie";
import { articleTelephone } from "./logiciel-boulangerie-sur-telephone";

/**
 * Articles — la rubrique éditoriale, distincte des guides.
 *
 * Un **guide** est une référence qu'on consulte : comment calculer un coût de
 * revient, ce que la réglementation impose. Un **article** est un point de vue
 * appuyé sur ce qu'on constate dans les ateliers : pourquoi ce calcul est faux
 * presque partout, ce que coûte vraiment un logiciel. Les deux se référencent
 * sur des requêtes différentes, d'où deux rubriques plutôt qu'un fourre-tout.
 *
 * Ils partagent en revanche le même type et le même rendu : le jour où il
 * faudra corriger le balisage `Article` ou le sommaire, une seule correction
 * suffira.
 */
export const articles: Guide[] = [articleMarge, articlePerte, articlePrix, articleTelephone];

assertPublishedGuidesHaveNoPlaceholders(articles);

export const publishedArticles: Guide[] = articles.filter((a) => !a.draft);

export function getArticleBySlug(slug: string): Guide | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}
