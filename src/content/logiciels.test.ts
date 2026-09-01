import { describe, expect, it } from "vitest";
import { pagesLogiciel } from "./logiciels";
import { siteRoutes } from "@/lib/routes";

/**
 * Ces règles sont déjà appliquées à l'import, donc au build. Les redire ici
 * sert à deux choses : documenter POURQUOI chacune existe, et attraper une
 * garde qu'on aurait affaiblie en croyant l'assouplir. Une assertion qu'on
 * relâche silencieusement ne protège plus de rien.
 */
describe("pages « quel logiciel pour… »", () => {
  it("couvre les intentions de catégorie sur lesquelles la sonde IA nous trouvait absents", () => {
    // Mesuré le 31/08/2026 : cité 3/3 sur les questions de marque, 1/6 sur les
    // questions de catégorie. Les cinq manquantes sont ces cinq pages.
    const chemins = pagesLogiciel.map((p) => p.path);
    expect(chemins).toContain("/logiciel-boulangerie");
    expect(chemins).toContain("/logiciel-cout-de-revient");
    expect(chemins).toContain("/logiciel-fiches-techniques");
    expect(chemins).toContain("/logiciel-releves-temperature");
    expect(chemins).toContain("/logiciel-scan-factures");
  });

  it("tient les titres sous la coupure de Google, gabarit compris", () => {
    for (const p of pagesLogiciel) {
      expect(`${p.metaTitle} | Gramme`.length, p.path).toBeLessThanOrEqual(60);
    }
  });

  it("tient les descriptions dans la fourchette que Google ne réécrit pas", () => {
    for (const p of pagesLogiciel) {
      expect(p.metaDescription.length, p.path).toBeGreaterThanOrEqual(120);
      expect(p.metaDescription.length, p.path).toBeLessThanOrEqual(160);
    }
  });

  it("ne laisse pas deux pages se disputer le même titre", () => {
    // La cannibalisation constatée entre /tarifs et l'article sur les prix :
    // deux pages au titre identique se pénalisent l'une l'autre.
    const titres = pagesLogiciel.map((p) => p.metaTitle);
    expect(new Set(titres).size).toBe(titres.length);
    const descriptions = pagesLogiciel.map((p) => p.metaDescription);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it("porte une FAQ, le format que les moteurs génératifs reprennent le plus", () => {
    for (const p of pagesLogiciel) {
      expect(p.faq.length, p.path).toBeGreaterThanOrEqual(4);
      for (const q of p.faq) {
        expect(q.q.endsWith("?"), `${p.path} : « ${q.q} »`).toBe(true);
        expect(q.a.length, `${p.path} : réponse à « ${q.q} »`).toBeGreaterThan(80);
      }
    }
  });

  it("ne promet jamais une conformité que le produit refuse d'écrire", () => {
    // L'application n'écrit nulle part « conforme », « certifié » ni
    // « validé » : trois tests balaient ce vocabulaire dans les documents
    // qu'elle produit. Une page de vente ne peut pas promettre davantage.
    for (const p of pagesLogiciel) {
      const prose = [p.h1, ...p.intro, ...p.problemes.map((x) => x.texte), ...p.reponses.map((x) => x.texte)].join(" ");
      expect(prose, p.path).not.toMatch(/vous rend conforme|garantit la conformité|certifi[ée]/i);
    }
  });

  it("n'écrit aucun tiret cadratin dans la prose publiée", () => {
    for (const p of pagesLogiciel) {
      const tout = [
        p.h1,
        ...p.intro,
        ...p.problemes.flatMap((x) => [x.titre, x.texte]),
        ...p.reponses.flatMap((x) => [x.titre, x.texte]),
        ...p.faq.flatMap((x) => [x.q, x.a]),
        p.metaTitle,
        p.metaDescription,
      ].join(" ");
      expect(tout, p.path).not.toContain("—");
    }
  });

  it("déclare une vraie capture du produit, au format que l'on annonce aux réseaux", () => {
    // `imageSociale` déclare 1920 × 1200. Les captures de `/images/app/` font
    // exactement cela ; celles de `/images/feature-*.png` font 2880 × 1620.
    // Facebook recadre d'après le ratio DÉCLARÉ : se tromper de dossier
    // produirait une vignette rognée de travers, invisible avant un partage.
    for (const p of pagesLogiciel) {
      expect(p.image.src, p.path).toMatch(/^\/images\/app\//);
      expect(p.image.alt.length, p.path).toBeGreaterThan(20);
    }
  });

  it("figure au sitemap et au fil d'Ariane", () => {
    for (const p of pagesLogiciel) {
      const route = siteRoutes.find((r) => r.path === p.path);
      expect(route, `${p.path} absente de siteRoutes`).toBeDefined();
      expect(route?.sitemap).toBe(true);
      expect(route?.breadcrumb).toBe(true);
    }
  });

  it("relie chaque page à des adresses internes existantes", () => {
    // Une page orpheline n'est atteinte ni par les robots ni par les lecteurs.
    // Un lien vers une adresse absente du site est pire : c'est une 404 posée
    // par nous-mêmes.
    const connues = new Set(siteRoutes.map((r) => r.path));
    for (const p of pagesLogiciel) {
      expect(p.liens.length, p.path).toBeGreaterThanOrEqual(2);
      for (const lien of p.liens) {
        const statique = connues.has(lien.href);
        const dynamique = /^\/(guides|articles|fonctionnalites|comparatif)\/[a-z0-9-]+$/.test(lien.href);
        expect(statique || dynamique, `${p.path} pointe vers ${lien.href}`).toBe(true);
      }
    }
  });
});
