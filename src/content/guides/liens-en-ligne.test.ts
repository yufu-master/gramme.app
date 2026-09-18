import { describe, expect, it } from "vitest";
import { publishedArticles } from "@/content/articles";
import { publishedGuides } from "@/content/guides";
import { features } from "@/content/features";
import { siteRoutes } from "@/lib/routes";
import type { Guide } from "./types";

/**
 * Les liens posés DANS la prose des guides et des articles, et leurs sources.
 *
 * `maillage.test.ts` garde les liens de fin d'article (`liens`). Les liens en
 * ligne, écrits `[texte](/adresse)` au fil du texte, lui échappent : une faute
 * de frappe dans un slug y donnerait une 404 que rien ne signale. Ce fichier
 * ferme ce trou, avec la même définition d'une adresse servie.
 */

const STATIQUES = new Set(siteRoutes.map((r) => r.path));
const FONCTIONNALITES = new Set(features.map((f) => `/fonctionnalites/${f.slug}`));
const GUIDES = new Set(publishedGuides.map((g) => `/guides/${g.slug}`));
const ARTICLES = new Set(publishedArticles.map((a) => `/articles/${a.slug}`));

function adresseServie(href: string): boolean {
  const sansAncre = href.split("#")[0] || "/";
  return (
    STATIQUES.has(sansAncre) ||
    FONCTIONNALITES.has(sansAncre) ||
    GUIDES.has(sansAncre) ||
    ARTICLES.has(sansAncre) ||
    /^\/comparatif\/[a-z0-9-]+$/.test(sansAncre)
  );
}

const CONTENUS = [
  ...publishedGuides.map((g) => ({ chemin: `/guides/${g.slug}`, g })),
  ...publishedArticles.map((a) => ({ chemin: `/articles/${a.slug}`, g: a })),
];

/** Le même motif que `renderInline` : seules les adresses internes font un lien. */
const LIEN = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/** Les textes que `GuideArticle` passe par `renderInline`, donc où un lien s'affiche. */
function textesRendus(g: Guide): string[] {
  const textes: string[] = [];
  for (const b of g.blocks) {
    if (b.type === "p") textes.push(b.text);
    if (b.type === "table") textes.push(...b.rows.flat());
  }
  return textes;
}

/**
 * Les textes rendus en clair (ou seulement dans le JSON-LD) : un lien y
 * apparaîtrait avec ses crochets, à l'écran comme dans les données structurées.
 */
function textesBruts(g: Guide): string[] {
  const textes = [g.title, g.description, g.summary, g.intro];
  for (const b of g.blocks) {
    if (b.type === "h2") textes.push(b.text);
    if (b.type === "howto-steps") for (const s of b.steps) textes.push(s.name, s.text);
  }
  for (const s of g.howTo?.steps ?? []) textes.push(s.name, s.text);
  for (const f of g.faqs) textes.push(f.q, f.a);
  return textes;
}

function liensEnLigne(g: Guide): { texte: string; href: string }[] {
  return textesRendus(g).flatMap((t) => [...t.matchAll(LIEN)].map((m) => ({ texte: m[1], href: m[2] })));
}

describe("les liens en ligne mènent à une page servie", () => {
  it("ne pointent que vers des adresses que le site sert vraiment", () => {
    const morts = CONTENUS.flatMap(({ chemin, g }) =>
      liensEnLigne(g)
        .filter((l) => !adresseServie(l.href))
        .map((l) => `${chemin} → ${l.href}`),
    );
    expect(morts, "liens en ligne vers une adresse non servie").toEqual([]);
  });

  it("ne pointent jamais vers la page elle-même", () => {
    const boucles = CONTENUS.flatMap(({ chemin, g }) =>
      liensEnLigne(g)
        .filter((l) => l.href.split("#")[0] === chemin)
        .map((l) => chemin),
    );
    expect(boucles).toEqual([]);
  });

  it("portent une ancre qui décrit la cible, jamais « cliquez ici »", () => {
    const vagues = CONTENUS.flatMap(({ chemin, g }) =>
      liensEnLigne(g)
        .filter((l) => /^(ici|cliquez ici|ce lien|en savoir plus|lire la suite)$/i.test(l.texte.trim()))
        .map((l) => `${chemin} : « ${l.texte} »`),
    );
    expect(vagues).toEqual([]);
  });

  it("donnent à chaque contenu au moins trois liens dans sa prose", () => {
    const pauvres = CONTENUS.filter(({ g }) => liensEnLigne(g).length < 3).map(({ chemin }) => chemin);
    expect(pauvres, "contenus avec moins de trois liens en ligne").toEqual([]);
  });

  it("ne s'écrivent pas là où le rendu les afficherait entre crochets", () => {
    const fautifs = CONTENUS.flatMap(({ chemin, g }) =>
      textesBruts(g)
        .filter((t) => /\]\(\//.test(t))
        .map((t) => `${chemin} : « ${t.slice(0, 60)}… »`),
    );
    expect(fautifs).toEqual([]);
  });
});

/**
 * Une source officielle, ou pas de source.
 *
 * Une adresse morte coûte plus qu'une adresse absente. On ne garde donc que
 * les domaines officiels dont la forme d'adresse est stable, et chaque ajout
 * d'un domaine ici est une décision, pas un réflexe.
 */
const DOMAINES_OFFICIELS = new Set([
  "eur-lex.europa.eu",
  "www.legifrance.gouv.fr",
  "ciqual.anses.fr",
  "www.insee.fr",
]);

describe("les sources sont officielles", () => {
  it("n'utilisent que des adresses https sur un domaine officiel", () => {
    for (const { chemin, g } of CONTENUS) {
      for (const s of g.sources ?? []) {
        const url = new URL(s.url);
        expect(url.protocol, `${chemin} : ${s.url}`).toBe("https:");
        expect(DOMAINES_OFFICIELS.has(url.hostname), `${chemin} : domaine non retenu ${url.hostname}`).toBe(true);
        expect(s.label.length, `${chemin} : libellé de source trop court`).toBeGreaterThan(10);
      }
    }
  });

  it("ne citent pas deux fois la même adresse dans un contenu", () => {
    for (const { chemin, g } of CONTENUS) {
      const urls = (g.sources ?? []).map((s) => s.url);
      expect(new Set(urls).size, chemin).toBe(urls.length);
    }
  });
});
