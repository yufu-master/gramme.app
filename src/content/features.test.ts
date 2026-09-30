import { describe, expect, it } from "vitest";
import { features, nombreEnLettres, nombreModules } from "./features";

/**
 * Le catalogue des modules, et les phrases qui l'annoncent.
 *
 * Motif : « Neuf modules, une seule application » est resté en titre après
 * l'ajout de quatre modules. Rien ne cassait — un titre faux s'affiche très
 * bien — et c'était la première phrase de la page.
 */
describe("les modules", () => {
  it("annonce le nombre qu'il y a vraiment", () => {
    expect(nombreModules).toBe(nombreEnLettres(features.length));
  });

  it("refuse un nombre que la table ne sait pas écrire", () => {
    expect(() => nombreEnLettres(features.length)).not.toThrow();
    expect(() => nombreEnLettres(99)).toThrow(/dépasse la table/);
  });

  it("n'a ni slug ni nom en double", () => {
    expect(new Set(features.map((f) => f.slug)).size).toBe(features.length);
    expect(new Set(features.map((f) => f.name)).size).toBe(features.length);
  });

  it("montre une capture de l'application, décrite", () => {
    for (const f of features) {
      expect(f.image.src, f.slug).toMatch(/^\/images\//);
      expect(f.image.alt.length, f.slug).toBeGreaterThan(20);
    }
  });

  it("écrit chaque module en entier", () => {
    for (const f of features) {
      expect(f.bullets.length, f.slug).toBeGreaterThanOrEqual(3);
      expect(f.sections.length, f.slug).toBeGreaterThanOrEqual(3);
      expect(f.faq.length, f.slug).toBeGreaterThanOrEqual(2);
      expect(f.keywords.length, f.slug).toBeGreaterThanOrEqual(3);
      expect(f.metaTitle.length, `${f.slug} metaTitle`).toBeLessThanOrEqual(65);
      expect(f.metaDescription.length, `${f.slug} metaDescription`).toBeLessThanOrEqual(165);
    }
  });

  it("n'emploie pas le tiret cadratin, que le reste du site n'emploie pas", () => {
    for (const f of features) {
      const tout = [f.summary, f.intro, ...f.bullets, ...f.sections.flatMap((s) => [s.title, s.text])].join(" ");
      expect(tout, f.slug).not.toContain("—");
    }
  });
});
