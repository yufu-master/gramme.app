import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { publishedArticles } from "@/content/articles";
import { publishedGuides } from "@/content/guides";
import { features } from "@/content/features";
import { siteRoutes } from "@/lib/routes";
import { pagesLogiciel } from "@/content/logiciels";
import { concurrents, pagesConcurrent } from "@/content/comparatif";

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

/**
 * Une page métier mène toujours à un contenu qui l'approfondit.
 *
 * Relevé le 07/09/2026, après que Clermont a écrit « je vois pas les nouveaux
 * articles sur l'équilibrage de recettes » : les guides existaient et étaient
 * au sitemap, mais `/logiciel-chocolaterie` et `/logiciel-glacerie` étaient
 * les DEUX SEULES pages métier à ne lier aucun guide ni aucun article. Or ce
 * sont exactement les pages où atterrit quelqu'un qui cherche l'équilibrage :
 * il lisait la page, ne trouvait rien à lire ensuite, et repartait.
 *
 * Une page qui vend un sujet doit mener à ce qu'on a écrit dessus. C'est vrai
 * pour le lecteur, et c'est vrai pour un moteur qui mesure la profondeur d'un
 * site à la façon dont ses pages se répondent.
 */
describe("chaque page métier mène à un contenu de fond", () => {
  it("lie au moins un guide ou un article", () => {
    const sansFond = pagesLogiciel
      .filter((p) => !p.liens.some((l) => l.href.startsWith("/guides/") || l.href.startsWith("/articles/")))
      .map((p) => p.path);
    expect(
      sansFond,
      "pages métier qui ne mènent à aucun guide ni article : leur en écrire un, ou relier un existant",
    ).toEqual([]);
  });
});

/**
 * `llms.txt` est une liste tenue à la main, et elle a déjà divergé.
 *
 * Ce fichier est ce que lisent les moteurs génératifs pour savoir ce que le
 * site contient : il pèse plus qu'une page de plus. Le 07/09/2026, trois
 * guides publiés n'y figuraient pas, ce qui les rendait invisibles là où ils
 * comptaient le plus. C'est la même faute que le sitemap, un cran plus loin :
 * un catalogue parallèle finit toujours par diverger.
 */
describe("llms.txt annonce ce que le site publie", () => {
  const texte = readFileSync(join(__dirname, "..", "..", "public", "llms.txt"), "utf8");

  it("cite chaque guide publié", () => {
    const absents = publishedGuides.filter((g) => !texte.includes(`/guides/${g.slug}`)).map((g) => g.slug);
    expect(absents, "guides publiés absents de public/llms.txt").toEqual([]);
  });

  it("cite chaque article publié", () => {
    const absents = publishedArticles.filter((a) => !texte.includes(`/articles/${a.slug}`)).map((a) => a.slug);
    expect(absents, "articles publiés absents de public/llms.txt").toEqual([]);
  });

  it("cite chaque page métier", () => {
    const absents = pagesLogiciel.filter((p) => !texte.includes(p.path)).map((p) => p.path);
    expect(absents, "pages métier absentes de public/llms.txt").toEqual([]);
  });

  /**
   * Les modules et les concurrents manquaient à ce contrôle, et le fichier a
   * redivergé : relevé du 17/09/2026, CINQ modules sur treize n'y figuraient
   * pas, dont `allergenes-etiquetage` et `hygiene-haccp`, c'est à dire les deux
   * seuls sujets où la sonde nous place au premier rang. Le fichier annonçait
   * par ailleurs un comparatif couvrant LogiBake, marque qui n'a pas de page.
   * Un catalogue tenu à la main diverge toujours : ce qui n'est pas testé
   * finit faux.
   */
  it("cite chacun des modules livrés", () => {
    const absents = features.filter((f) => !texte.includes(`\`${f.slug}\``)).map((f) => f.slug);
    expect(absents, "modules absents de public/llms.txt").toEqual([]);
  });

  it("n'annonce un face-à-face qu'avec les concurrents qui ont une page", () => {
    const avecPage = new Set(pagesConcurrent.map((p) => p.id));
    const promis = concurrents
      .filter((c) => c.id !== "gramme" && !avecPage.has(c.id))
      .filter((c) => texte.includes(`comparé à`) && texte.includes(c.nom));
    // Un concurrent cité ailleurs (un tarif de marché, un argument) reste
    // permis : ce qui est interdit, c'est de promettre une page qui n'existe pas.
    const phrases = texte.split("\n").filter((l) => l.includes("comparé à") || l.includes("confronte Gramme à"));
    for (const phrase of phrases) {
      for (const c of concurrents) {
        if (c.id === "gramme" || avecPage.has(c.id)) continue;
        expect(phrase.includes(c.nom), `llms.txt promet un comparatif ${c.nom} sans page`).toBe(false);
      }
    }
    expect(promis.map((c) => c.nom), "comparatifs promis sans page").toEqual([]);
  });

  it("ne cite aucun guide qui n'existe plus", () => {
    const cites = [...texte.matchAll(/gramme\.app\/guides\/([a-z0-9-]+)/g)].map((m) => m[1]);
    const connus = new Set(publishedGuides.map((g) => g.slug));
    expect([...new Set(cites)].filter((c) => !connus.has(c)), "cités dans llms.txt sans page").toEqual([]);
  });
});
