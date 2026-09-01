import { describe, expect, it } from "vitest";
import { normaliserChemin } from "./chemin";

describe("normaliserChemin", () => {
  it("efface le jeton de mise en service, qui est une clé d'accès", () => {
    // Le seul test de ce fichier qui n'est pas une commodité d'affichage : un
    // jeton recopié dans une table d'audience serait une clé d'accès en clair,
    // lisible par tous les superviseurs, conservée quatre-vingt-dix jours.
    expect(normaliserChemin("/mise-en-service/a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2"))
      .toBe("/mise-en-service/[token]");
  });

  it("garde le slug des pages publiques, qui est justement ce qu'on mesure", () => {
    expect(normaliserChemin("/guides/logiciel-haccp-boulangerie")).toBe("/guides/logiciel-haccp-boulangerie");
    expect(normaliserChemin("/articles/calculer-sa-marge")).toBe("/articles/calculer-sa-marge");
    expect(normaliserChemin("/comparatif/otami")).toBe("/comparatif/otami");
  });

  it("réunit les variantes d'une même page", () => {
    for (const variante of ["/tarifs", "/tarifs/", "/tarifs?utm_source=x", "/tarifs#grille"]) {
      expect(normaliserChemin(variante)).toBe("/tarifs");
    }
  });

  it("laisse la racine intacte", () => {
    expect(normaliserChemin("/")).toBe("/");
    expect(normaliserChemin("")).toBe("/");
    expect(normaliserChemin("/?utm_source=chatgpt.com")).toBe("/");
  });
});
