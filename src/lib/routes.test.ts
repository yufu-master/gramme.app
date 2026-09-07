import { describe, expect, it } from "vitest";
import { readdirSync } from "node:fs";
import path from "node:path";
import { siteRoutes, sitemapEntries } from "@/lib/routes";
import { features, featurePath } from "@/content/features";
import { publishedGuides } from "@/content/guides";
import { publishedArticles } from "@/content/articles";
import { pagesConcurrent } from "@/content/comparatif";
import { pagesLogiciel } from "@/content/logiciels";

/**
 * UNE PAGE NOUVELLE ENTRE AU SITEMAP, OU LE BUILD S'ARRÊTE.
 *
 * Demande de Clermont, 07/09/2026 : « est-ce que tu as bien mis pour le
 * référencement sur le site le sitemap de toutes les nouvelles pages ? faut
 * que ce soit une règle que l'on mette toujours à jour les nouvelles fonctions
 * pour que ce soit référencé le plus vite possible ».
 *
 * L'état au moment de la demande : le sitemap se dérive TOUT SEUL des
 * catalogues — un module ajouté à `features.ts`, un guide ajouté à
 * `content/guides`, une page concurrent : tous entrent sans qu'on y pense.
 * Mais les pages FIXES sont une liste tenue à la main (`siteRoutes`), et rien
 * ne reliait cette liste aux fichiers réellement présents dans `app/`. Créer
 * `app/metiers/page.tsx` et oublier la ligne donnait une page en ligne,
 * invisible des moteurs, sans qu'aucun contrôle ne bronche.
 *
 * Ce fichier ferme le trou dans les deux sens : une page sans déclaration
 * échoue, une déclaration sans page échoue aussi.
 */

const RACINE_APP = path.resolve(__dirname, "..", "..", "app");

/**
 * Les pages qui n'ont RIEN à faire dans un sitemap, et pourquoi.
 *
 * Une exclusion se déclare ici avec sa raison. Sans cette liste, la tentation
 * serait d'assouplir le contrôle à la première page technique — et c'est
 * ainsi qu'un filet meurt.
 */
const HORS_SITEMAP: Record<string, string> = {
  "/merci": "page de remerciement après un formulaire : elle n'a de sens qu'au retour d'un envoi",
  "/mise-en-service/[token]": "lien privé et daté, propre à un atelier : l'indexer serait une fuite",
};

/** Les routes servies par un segment dynamique, avec le catalogue qui les remplit. */
const SEGMENTS_DYNAMIQUES: Record<string, () => string[]> = {
  "/fonctionnalites/[slug]": () => features.map((f) => featurePath(f.slug)),
  "/guides/[slug]": () => publishedGuides.map((g) => `/guides/${g.slug}`),
  "/articles/[slug]": () => publishedArticles.map((a) => `/articles/${a.slug}`),
  "/comparatif/[concurrent]": () => pagesConcurrent.map((c) => `/comparatif/${c.id}`),
};

/** Toutes les routes que `app/` sert réellement, lues sur le disque. */
function routesDeLApplication(dossier: string = RACINE_APP, prefixe = ""): string[] {
  const trouvees: string[] = [];
  for (const entree of readdirSync(dossier, { withFileTypes: true })) {
    if (!entree.isDirectory()) {
      if (entree.name === "page.tsx") trouvees.push(prefixe || "/");
      continue;
    }
    // Les groupes de route `(nom)` ne paraissent pas dans l'adresse.
    const segment = entree.name.startsWith("(") ? "" : `/${entree.name}`;
    trouvees.push(...routesDeLApplication(path.join(dossier, entree.name), prefixe + segment));
  }
  return trouvees;
}

describe("le sitemap suit le site", () => {
  const routes = routesDeLApplication();
  const adressesDuSitemap = new Set(sitemapEntries("").map((e) => e.url || "/"));

  it("trouve les pages sur le disque", () => {
    expect(routes.length).toBeGreaterThan(25);
    expect(routes).toContain("/");
    expect(routes).toContain("/metiers");
  });

  it("n'a aucune page fixe hors du sitemap sans raison écrite", () => {
    const declarees = new Set(siteRoutes.map((r) => r.path));
    const oubliees = routes
      .filter((r) => !r.includes("["))
      .filter((r) => !declarees.has(r) && !(r in HORS_SITEMAP));
    expect(
      oubliees,
      "pages servies par app/ mais absentes de siteRoutes : les y ajouter, ou les inscrire dans HORS_SITEMAP avec leur raison",
    ).toEqual([]);
  });

  it("n'a aucune déclaration qui ne mène nulle part", () => {
    const surLeDisque = new Set(routes);
    const fantomes = siteRoutes.map((r) => r.path).filter((p) => !surLeDisque.has(p));
    expect(fantomes, "déclarées dans siteRoutes sans page dans app/").toEqual([]);
  });

  it("sert chaque page dynamique par son catalogue, et chacune est au sitemap", () => {
    const manquantes: string[] = [];
    for (const [segment, catalogue] of Object.entries(SEGMENTS_DYNAMIQUES)) {
      expect(routes, `${segment} n'existe plus dans app/`).toContain(segment);
      for (const adresse of catalogue()) {
        if (!adressesDuSitemap.has(adresse)) manquantes.push(adresse);
      }
    }
    expect(manquantes, "produites par un catalogue mais absentes du sitemap").toEqual([]);
  });

  it("ne laisse aucun segment dynamique sans catalogue déclaré", () => {
    // Une nouvelle page `[slug]` sans entrée dans SEGMENTS_DYNAMIQUES publierait
    // un nombre inconnu d'adresses qu'aucun sitemap n'annoncerait.
    const dynamiques = routes.filter((r) => r.includes("["));
    const orphelins = dynamiques.filter((r) => !(r in SEGMENTS_DYNAMIQUES) && !(r in HORS_SITEMAP));
    expect(orphelins, "segment dynamique sans catalogue ni exclusion").toEqual([]);
  });

  it("annonce chaque page métier et chaque module", () => {
    for (const p of pagesLogiciel) expect(adressesDuSitemap, p.path).toContain(p.path);
    for (const f of features) expect(adressesDuSitemap, f.slug).toContain(featurePath(f.slug));
  });

  it("ne publie pas deux fois la même adresse", () => {
    const toutes = sitemapEntries("").map((e) => e.url);
    expect(new Set(toutes).size, "doublons dans le sitemap").toBe(toutes.length);
  });
});
