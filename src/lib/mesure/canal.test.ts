import { describe, expect, it } from "vitest";
import { classerCanal, decouperReferent, estHoteIa } from "./canal";

describe("classerCanal", () => {
  it("range les moteurs génératifs en « ia » et pas en « référent »", () => {
    for (const hote of ["chatgpt.com", "www.perplexity.ai", "gemini.google.com", "claude.ai"]) {
      expect(classerCanal({ referentHote: hote })).toBe("ia");
    }
  });

  it("reconnaît ChatGPT à son UTM même sans référent", () => {
    // ChatGPT ajoute `utm_source=chatgpt.com` à ses liens et beaucoup de ces
    // visites arrivent sans `Referer`. Sans cette règle, elles tomberaient en
    // « direct » et le canal IA paraîtrait vide alors qu'il travaille.
    expect(classerCanal({ referentHote: null, utmSource: "chatgpt.com" })).toBe("ia");
  });

  it("ne confond pas Gemini avec la recherche Google", () => {
    expect(classerCanal({ referentHote: "gemini.google.com" })).toBe("ia");
    expect(classerCanal({ referentHote: "www.google.fr" })).toBe("organique");
    expect(classerCanal({ referentHote: "google.co.uk" })).toBe("organique");
  });

  it("distingue moteurs, sociaux, référents et direct", () => {
    expect(classerCanal({ referentHote: "duckduckgo.com" })).toBe("organique");
    expect(classerCanal({ referentHote: "www.linkedin.com" })).toBe("social");
    expect(classerCanal({ referentHote: "boulangerie-forum.fr" })).toBe("referent");
    expect(classerCanal({ referentHote: null })).toBe("direct");
  });

  it("laisse la campagne primer sur le référent", () => {
    expect(classerCanal({ referentHote: "google.fr", utmMedium: "cpc" })).toBe("payant");
    expect(classerCanal({ referentHote: "google.fr", utmMedium: "email" })).toBe("email");
  });

  it("repère nos propres domaines", () => {
    expect(classerCanal({ referentHote: "get.gramme.app" })).toBe("interne");
  });
});

describe("decouperReferent", () => {
  it("ne garde que l'hôte et le chemin, jamais l'URL entière", () => {
    // La requête d'un référent peut porter ce que la personne a tapé chez un
    // tiers. On ne la stocke pas.
    expect(decouperReferent("https://www.google.fr/search?q=cout+de+revient+boulangerie")).toEqual({
      hote: "www.google.fr",
      chemin: "/search",
    });
  });

  it("encaisse un référent vide ou illisible", () => {
    expect(decouperReferent(null)).toEqual({ hote: null, chemin: null });
    expect(decouperReferent("pas une url")).toEqual({ hote: null, chemin: null });
  });
});

describe("estHoteIa", () => {
  it("ignore la casse et le préfixe www", () => {
    expect(estHoteIa("WWW.Perplexity.AI")).toBe(true);
    expect(estHoteIa("boulangerie.fr")).toBe(false);
  });
});
