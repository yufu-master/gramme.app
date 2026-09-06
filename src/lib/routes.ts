import type { MetadataRoute } from "next";
import { features, featurePath } from "@/content/features";
import { publishedArticles } from "@/content/articles";
import { publishedGuides } from "@/content/guides";
import { pagesConcurrent } from "@/content/comparatif";
import { pagesLogiciel } from "@/content/logiciels";
import { SITE_URL } from "@/lib/seo";

export type SiteRoute = {
  path: string;
  title: string;
  /** Inclure dans sitemap.xml */
  sitemap: boolean;
  /** Priorité sitemap 0–1 */
  priority?: number;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  /** Afficher dans le fil d'Ariane (pages profondes) */
  breadcrumb?: boolean;
};

/**
 * Source de vérité des routes du site vitrine.
 * Les guides publiés sont ajoutés automatiquement depuis src/content/guides.
 */
export const siteRoutes: SiteRoute[] = [
  { path: "/", title: "Accueil", sitemap: true, priority: 1, changeFrequency: "weekly", breadcrumb: false },
  {
    path: "/fonctionnalites",
    title: "Fonctionnalités",
    sitemap: true,
    priority: 0.85,
    changeFrequency: "monthly",
    breadcrumb: true,
  },
  {
    path: "/logiciel-patisserie",
    title: "Logiciel pâtisserie",
    sitemap: true,
    priority: 0.95,
    changeFrequency: "monthly",
    breadcrumb: true,
  },
  /*
    Les pages « quel logiciel pour… », en priorité 0,95 comme la pâtisserie.
    Ce sont les pages d'intention d'achat : c'est sur elles que se joue la
    présence dans les réponses des moteurs génératifs, qui ne citent Gramme que
    lorsqu'une de nos pages figure dans les sources qu'ils ont récupérées.
  */
  ...pagesLogiciel.map((page) => ({
    path: page.path,
    title: page.nom,
    sitemap: true,
    priority: 0.95,
    changeFrequency: "monthly" as const,
    breadcrumb: true,
  })),
  {
    path: "/tarifs",
    title: "Tarifs",
    sitemap: true,
    priority: 0.9,
    changeFrequency: "monthly",
    breadcrumb: true,
  },
  {
    path: "/comment-ca-marche",
    title: "Comment ça marche",
    sitemap: true,
    priority: 0.85,
    changeFrequency: "monthly",
    breadcrumb: true,
  },
  {
    path: "/guides",
    title: "Guides",
    sitemap: true,
    priority: 0.85,
    changeFrequency: "weekly",
    breadcrumb: true,
  },
  {
    path: "/a-propos-de-gramme",
    title: "À propos de Gramme",
    sitemap: true,
    priority: 0.8,
    changeFrequency: "monthly",
    breadcrumb: true,
  },
  {
    path: "/articles",
    title: "Articles",
    sitemap: true,
    priority: 0.85,
    changeFrequency: "weekly",
    breadcrumb: true,
  },
  {
    path: "/comparatif",
    title: "Comparatif",
    sitemap: true,
    priority: 0.9,
    changeFrequency: "monthly",
    breadcrumb: true,
  },
  {
    path: "/faq",
    title: "FAQ",
    sitemap: true,
    priority: 0.85,
    changeFrequency: "monthly",
    breadcrumb: true,
  },
  {
    path: "/contact",
    title: "Contact",
    sitemap: true,
    priority: 0.8,
    changeFrequency: "monthly",
    breadcrumb: true,
  },
  {
    path: "/demo",
    title: "Démonstration",
    sitemap: true,
    priority: 0.9,
    changeFrequency: "monthly",
    breadcrumb: true,
  },
  {
    path: "/integrations",
    title: "Intégrations",
    sitemap: true,
    priority: 0.75,
    changeFrequency: "monthly",
    breadcrumb: true,
  },
  {
    path: "/securite",
    title: "Sécurité",
    sitemap: true,
    priority: 0.55,
    changeFrequency: "yearly",
    breadcrumb: true,
  },
  {
    path: "/politique-de-confidentialite",
    title: "Politique de confidentialité",
    sitemap: true,
    priority: 0.3,
    changeFrequency: "yearly",
    breadcrumb: true,
  },
  {
    path: "/mentions-legales",
    title: "Mentions légales",
    sitemap: true,
    priority: 0.3,
    changeFrequency: "yearly",
    breadcrumb: true,
  },
  {
    path: "/cgv",
    title: "Conditions générales de vente",
    sitemap: true,
    priority: 0.3,
    changeFrequency: "yearly",
    breadcrumb: true,
  },
  {
    path: "/merci",
    title: "Merci",
    sitemap: false,
    breadcrumb: false,
  },
];

export function getRouteByPath(path: string): SiteRoute | undefined {
  const normalized = path === "" ? "/" : path.replace(/\/$/, "") || "/";
  return siteRoutes.find((r) => r.path === normalized);
}

/**
 * La date de dernière modification des pages fixes du site.
 *
 * Elle valait `new Date()` : chaque déploiement datait les 45 pages de
 * l'instant du build, y compris les CGV ou les mentions légales qui n'avaient
 * pas bougé depuis des mois. Un `lastmod` qui change à chaque build sans que
 * le contenu change est un signal que Google apprend à ignorer, et il
 * l'ignore alors aussi le jour où une page change vraiment. À avancer à la
 * main quand une page fixe est réécrite ; les guides et les articles portent
 * leur propre `updatedAt`.
 */
export const DERNIERE_MISE_A_JOUR_PAGES_FIXES = "2026-09-03";

export function sitemapEntries(baseUrl: string = SITE_URL): MetadataRoute.Sitemap {
  const lastModified = new Date(DERNIERE_MISE_A_JOUR_PAGES_FIXES);
  const staticEntries = siteRoutes
    .filter((r) => r.sitemap)
    .map((r) => ({
      url: `${baseUrl}${r.path === "/" ? "/" : r.path}`,
      lastModified,
      changeFrequency: r.changeFrequency ?? "monthly",
      priority: r.priority ?? 0.5,
    }));

  const featureEntries: MetadataRoute.Sitemap = features.map((feature) => ({
    url: `${baseUrl}${featurePath(feature.slug)}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guideEntries: MetadataRoute.Sitemap = publishedGuides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = publishedArticles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /**
   * Les pages dédiées à un concurrent, en priorité haute.
   *
   * Elles répondent à une intention plus proche de l'achat que la page pilier
   * — on tape le nom d'un outil quand on est en train de le comparer au sien —
   * et l'éditeur concerné ne se compare jamais lui-même.
   */
  const concurrentEntries: MetadataRoute.Sitemap = pagesConcurrent.map((page) => ({
    url: `${baseUrl}/comparatif/${page.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    ...staticEntries,
    ...featureEntries,
    ...guideEntries,
    ...articleEntries,
    ...concurrentEntries,
  ];
}
