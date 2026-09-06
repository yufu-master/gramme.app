import { describe, expect, it } from "vitest";
import { publishedArticles } from "@/content/articles";
import { publishedGuides } from "@/content/guides";
import { features } from "@/content/features";
import { siteRoutes } from "@/lib/routes";

/**
 * Le maillage interne, dans les deux sens.
 *
 * Relevé du 06/09/2026 : les pages métier descendaient vers les guides, et
 * AUCUN guide ne remontait. Le type `Guide` n'avait qu'un `relatedSlug`,
 * résolu dans le même dossier — un guide ne pouvait lier qu'un guide, un
 * article qu'un article, et les deux rubriques ne se croisaient jamais. Le
 * bloc « Continuer » était codé en dur.
 *
 * Ce test garde les liens qu'on vient de poser : un lien vers une adresse qui
 * n'existe pas est une 404 qu'on s'inflige, et elle ne se voit qu'en cliquant.
 */

/** Les adresses que le site sert vraiment, statiques et dynamiques. */
const STATIQUES = new Set(siteRoutes.map((r) => r.path));
const SLUGS_FONCTIONNALITES = new Set(features.map((f) => `/fonctionnalites/${f.slug}`));
const SLUGS_GUIDES = new Set(publishedGuides.map((g) => `/guides/${g.slug}`));
const SLUGS_ARTICLES = new Set(publishedArticles.map((a) => `/articles/${a.slug}`));

function adresseServie(href: string): boolean {
  // Une ancre sur l'accueil (`/#fonctionnalites`) reste valable : c'est la
  // page d'accueil, avec un point de chute.
  const sansAncre = href.split("#")[0] || "/";
  return (
    STATIQUES.has(sansAncre) ||
    SLUGS_FONCTIONNALITES.has(sansAncre) ||
    SLUGS_GUIDES.has(sansAncre) ||
    SLUGS_ARTICLES.has(sansAncre) ||
    /^\/comparatif\/[a-z0-9-]+$/.test(sansAncre)
  );
}

const CONTENUS = [
  ...publishedGuides.map((g) => ({ rubrique: "guides", ...g })),
  ...publishedArticles.map((a) => ({ rubrique: "articles", ...a })),
];

describe("le maillage remonte, et il ne mène nulle part de faux", () => {
  it("garde au moins onze contenus publiés — un test qui ne voit rien ne garde rien", () => {
    expect(CONTENUS.length).toBeGreaterThanOrEqual(11);
  });

  it("ne pointe que vers des adresses que le site sert vraiment", () => {
    for (const c of CONTENUS) {
      for (const lien of c.liens ?? []) {
        expect(adresseServie(lien.href), `${c.rubrique}/${c.slug} pointe vers ${lien.href}`).toBe(true);
        expect(lien.label.length, `${c.slug} : libellé trop court`).toBeGreaterThan(10);
      }
    }
  });

  /**
   * C'est le défaut qu'on corrige : un contenu qui ne remonte pas laisse le
   * lecteur au bout d'une impasse, et prive la page pilier du signal que ce
   * guide lui apporte.
   */
  it("fait remonter chaque contenu vers au moins deux pages", () => {
    const orphelins = CONTENUS.filter((c) => (c.liens ?? []).length < 2);
    expect(
      orphelins.map((c) => `${c.rubrique}/${c.slug}`),
      "ces contenus ne remontent vers rien",
    ).toEqual([]);
  });

  it("garde le lien latéral dans sa propre rubrique — il s'y résout", () => {
    // `GuideArticle` construit `${base}/${relatedSlug}` : un guide ne peut
    // pointer que vers un guide, un article que vers un article.
    for (const g of publishedGuides) {
      expect(SLUGS_GUIDES.has(`/guides/${g.relatedSlug}`), `${g.slug} → ${g.relatedSlug}`).toBe(true);
    }
    for (const a of publishedArticles) {
      expect(SLUGS_ARTICLES.has(`/articles/${a.relatedSlug}`), `${a.slug} → ${a.relatedSlug}`).toBe(true);
    }
  });
});
