import type { MetadataRoute } from "next";
import { features, featurePath } from "@/content/features";
import { publishedGuides } from "@/content/guides";
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
    path: "/ressources",
    title: "Ressources",
    sitemap: true,
    priority: 0.4,
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
    priority: 0.7,
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
    title: "CGV",
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

export function sitemapEntries(baseUrl: string = SITE_URL): MetadataRoute.Sitemap {
  const lastModified = new Date();
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

  return [...staticEntries, ...featureEntries, ...guideEntries];
}
