import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { estPageArrivee } from "@/content/arrivee";
import { cartesContact } from "@/content/cartes-contact";
import { sitemapEntries } from "@/lib/routes";
import { construireVcard } from "@/lib/vcard";

const racine = path.resolve(__dirname, "..", "..");

describe("pages des cartes de visite", () => {
  it("restent hors du sitemap, sans menu ni pied de page", () => {
    const adresses = sitemapEntries("").map((e) => e.url);
    for (const c of cartesContact) {
      expect(adresses).not.toContain(c.chemin);
      expect(estPageArrivee(c.chemin)).toBe(true);
    }
  });

  it("composent le même numéro que celui qu'elles affichent", () => {
    for (const c of cartesContact) {
      expect(`+33${c.telephone.replace(/\s/g, "").slice(1)}`).toBe(c.telephoneInternational);
    }
  });

  it("ne reprennent pas d'accroche de campagne et ne prêtent pas l'histoire de Jeremy", () => {
    for (const c of cartesContact) expect(c.phrase).not.toMatch(/beurre|croissant/i);
    const mathieu = cartesContact.find((c) => c.identifiant === "mathieu");
    expect(mathieu?.phrase).not.toMatch(/laboratoire/i);
  });

  it("n'emploient ni mot ni tiret interdit dans le texte lu", () => {
    for (const f of ["src/content/cartes-contact.ts", "src/components/arrivee/PageCarte.tsx"]) {
      const src = readFileSync(path.join(racine, f), "utf8");
      for (const motif of [/conforme/i, /certifi/i, /essai gratuit/i, /—/]) expect(src, `${f} ${motif}`).not.toMatch(motif);
    }
  });
});

describe("fiche contact", () => {
  it("écrit une vCard lisible, lignes en CRLF", () => {
    const v = construireVcard(cartesContact[0]);
    expect(v.startsWith("BEGIN:VCARD\r\nVERSION:3.0\r\n")).toBe(true);
    expect(v).toContain("N:Tuaz;Jeremy;;;");
    expect(v).toContain("TEL;TYPE=CELL:+33695425196");
    expect(v.endsWith("END:VCARD\r\n")).toBe(true);
  });

  it("échappe la ponctuation qui découperait un champ", () => {
    const v = construireVcard({ ...cartesContact[0], fonction: "Chef, fondateur; associé" });
    expect(v).toContain("TITLE:Chef\\, fondateur\; associé");
  });
});
