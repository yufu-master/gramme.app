import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { pagesArrivee, estPageArrivee } from "@/content/arrivee";
import { sitemapEntries } from "@/lib/routes";

const racine = path.resolve(__dirname, "..", "..");
const fichiers = [
  "src/content/arrivee.ts",
  "src/components/arrivee/PageArrivee.tsx",
  "src/components/arrivee/RappelForm.tsx",
];
const INTERDITS = [/conforme/i, /certifi/i, /essai gratuit/i, /—/];

describe("pages d'arrivée du papier", () => {
  it("restent hors du sitemap et reconnues par le gabarit", () => {
    const adresses = sitemapEntries("").map((e) => e.url);
    for (const p of pagesArrivee) {
      expect(adresses).not.toContain(p.chemin);
      expect(estPageArrivee(p.chemin)).toBe(true);
    }
  });

  it("portent noindex et un openGraph complet avec image", () => {
    for (const p of pagesArrivee) {
      const src = readFileSync(path.join(racine, "app", p.chemin, "page.tsx"), "utf8");
      expect(src).toContain("metadonneesArrivee");
    }
    const meta = readFileSync(path.join(racine, "src/components/arrivee/metadonnees.ts"), "utf8");
    expect(meta).toContain("index: false");
    expect(meta).toContain("imageSociale");
    expect(meta).toContain("ogPage");
  });

  it("n'emploient aucun mot ni tiret interdit dans le texte lu", () => {
    for (const f of fichiers) {
      const src = readFileSync(path.join(racine, f), "utf8");
      for (const motif of INTERDITS) expect(src, `${f} ${motif}`).not.toMatch(motif);
    }
  });
});
