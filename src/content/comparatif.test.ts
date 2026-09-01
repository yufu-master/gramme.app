import { describe, expect, it } from "vitest";
import {
  RELEVE_LE,
  blocsComparatif,
  cheminsDeChoix,
  concurrents,
  pagesConcurrent,
  panierCompare,
} from "./comparatif";

/**
 * Rien ne couvrait le comparatif jusqu'ici. Tant qu'il n'y avait qu'une page
 * concurrent, une relecture suffisait. À vingt-cinq, plus personne ne relit, et
 * c'est exactement là que les défauts s'installent : un chiffre orphelin, une
 * ligne de panier manquante qui fait DISPARAÎTRE une section entière sans
 * erreur, un module compté deux fois de deux façons différentes.
 *
 * Ces tests ne jugent pas le contenu. Ils vérifient que le contenu est complet
 * et cohérent avec lui-même, ce qu'aucune relecture ne fait de façon fiable.
 */

const ids = concurrents.map((c) => c.id);

describe("comparatif — l'ossature tient", () => {
  it("chaque page dédiée correspond à une fiche concurrent", () => {
    // Sinon la page appelle `notFound()` en production, et rien au build ne le
    // dit : l'adresse est dans le sitemap et répond 404.
    for (const page of pagesConcurrent) {
      expect(ids, `page ${page.id} sans fiche concurrent`).toContain(page.id);
    }
  });

  it("chaque concurrent a sa ligne de panier", () => {
    // La section « ce que la même boulangerie paie » est rendue seulement si
    // les deux lignes existent. Sans elle, la page perd son argument central et
    // ne le signale nulle part.
    for (const c of concurrents) {
      expect(
        panierCompare.some((l) => l.id === c.id),
        `${c.nom} absent de panierCompare : la section prix disparaîtrait en silence`,
      ).toBe(true);
    }
  });

  it("chaque ligne du tableau porte une valeur pour chaque concurrent", () => {
    for (const bloc of blocsComparatif) {
      for (const ligne of bloc.lignes) {
        for (const id of ids) {
          expect(
            ligne.valeurs[id],
            `« ${ligne.critere} » n'a pas de valeur pour ${id}`,
          ).toBeDefined();
        }
      }
    }
  });

  it("le tableau du pilier garde un nombre de colonnes lisible", () => {
    // Au-delà de cinq colonnes plus le critère, le tableau ne se lit plus sur
    // un écran. Les concurrents supplémentaires passent en `secondaire` et
    // gardent leur page dédiée.
    const principaux = concurrents.filter((c) => c.rang === "principal");
    expect(principaux.length).toBeLessThanOrEqual(5);
    expect(principaux.some((c) => c.id === "gramme")).toBe(true);
  });
});

describe("comparatif — les pages dédiées", () => {
  it("nomme exactement trois choses que le concurrent fait mieux", () => {
    // Le gabarit écrit « Trois points » en toutes lettres. Et un comparatif où
    // l'auteur gagne partout ne convainc personne et se plaide mal.
    for (const page of pagesConcurrent) {
      expect(page.mieuxQueNous.length, page.id).toBe(3);
      for (const point of page.mieuxQueNous) {
        expect(point.texte.length, `${page.id} : « ${point.titre} »`).toBeGreaterThan(120);
      }
    }
  });

  it("envoie parfois chez le concurrent, jamais uniquement chez nous", () => {
    // Une page qui répond « nous » à chaque situation est une brochure. Elle ne
    // se fait citer nulle part et ne tient pas devant un lecteur qui compare.
    for (const page of pagesConcurrent) {
      const versLui = page.quandLuiQuandNous.filter((q) => q.verdict === "lui");
      expect(versLui.length, `${page.id} ne concède aucune situation`).toBeGreaterThanOrEqual(1);
    }
  });

  it("tient les titres et les descriptions dans les bornes de Google", () => {
    // `title.absolute` : le gabarit n'ajoute rien, la chaîne est le titre final.
    for (const page of pagesConcurrent) {
      expect(page.metaTitle.length, page.id).toBeLessThanOrEqual(60);
      expect(page.metaDescription.length, page.id).toBeGreaterThanOrEqual(120);
      expect(page.metaDescription.length, page.id).toBeLessThanOrEqual(160);
    }
  });

  it("ne laisse pas deux pages se disputer le même titre", () => {
    const titres = pagesConcurrent.map((p) => p.metaTitle);
    expect(new Set(titres).size).toBe(titres.length);
    const descriptions = pagesConcurrent.map((p) => p.metaDescription);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it("porte ses propres phrases d'hygiène, jamais celles du gabarit", () => {
    // « Ce que X ne documente pas » était écrit en dur dans le gabarit : vrai
    // d'Otami, FAUX de Melba qui documente la traçabilité en module payant. Une
    // affirmation sur un tiers vient de la fiche de ce tiers.
    for (const page of pagesConcurrent) {
      expect(page.hygiene.intro.length, page.id).toBeGreaterThan(80);
      expect(page.hygiene.altSociale.length, page.id).toBeGreaterThan(30);
    }
  });

  it("n'écrit aucun tiret cadratin dans la prose publiée", () => {
    for (const page of pagesConcurrent) {
      const prose = [
        page.h1,
        page.chapeau,
        page.hygiene.intro,
        ...page.mieuxQueNous.flatMap((m) => [m.titre, m.texte]),
        ...page.quandLuiQuandNous.flatMap((q) => [q.profil, q.texte]),
        ...page.faq.flatMap((f) => [f.q, f.a]),
      ].join(" ");
      expect(prose, page.id).not.toContain("—");
    }
  });
});

describe("comparatif — les chiffres ne se contredisent pas", () => {
  it("toute FOURCHETTE annoncée correspond aux bornes du panier", () => {
    // C'est le test qui aurait attrapé le « 33,25 € » : la page annonçait « les
    // tarifs publics vont de 33,25 € à 208 € » à quelques centimètres d'un
    // tableau qui affichait 39,90 €. Le chiffre venait d'un calcul annuel
    // abandonné, et les deux se lisaient d'un seul coup d'œil.
    //
    // Le test ne vérifie QUE les fourchettes (« de X à Y »), pas tous les
    // montants : « 49 € » est le prix d'un module et « 300 € » celui de notre
    // mise en service. Exiger que chaque euro cité soit un total de panier
    // ferait échouer le test sur des chiffres parfaitement justes, et un test
    // qui crie à tort finit désactivé.
    const totaux = panierCompare
      .map((l) => l.totalMensuelHt)
      .filter((t): t is number => t !== null);
    const enTexte = (n: number) => n.toFixed(2).replace(".", ",").replace(/,00$/, "");
    const attendu = { min: enTexte(Math.min(...totaux)), max: enTexte(Math.max(...totaux)) };

    let fourchettes = 0;
    for (const chemin of cheminsDeChoix) {
      for (const [, bas, haut] of chemin.conseil.matchAll(/de (\d+(?:,\d+)?) € à (\d+(?:,\d+)?) €/g)) {
        fourchettes += 1;
        expect(bas, `borne basse annoncée dans « ${chemin.profil} »`).toBe(attendu.min);
        expect(haut, `borne haute annoncée dans « ${chemin.profil} »`).toBe(attendu.max);
      }
    }
    // Si plus aucune fourchette n'est annoncée, le test ne vérifie plus rien et
    // doit le dire plutôt que de passer en silence.
    expect(fourchettes, "aucune fourchette trouvée : le test ne protège plus de rien").toBeGreaterThan(0);
  });

  it("le relevé porte une date, et elle est récente", () => {
    // « Une page datée d'il y a deux ans est un mensonge lent. » Le test ne sait
    // pas si le relevé est juste ; il sait dire qu'il est vieux.
    expect(RELEVE_LE).toMatch(/^\d{1,2} [a-zéû]+ 20\d{2}$/);
  });

  it("aucun total de panier n'est inventé", () => {
    // Un total qui n'est pas calculable se dit « non calculable », jamais
    // estimé. Et un total affiché doit expliquer ce qu'il additionne.
    for (const ligne of panierCompare) {
      if (ligne.totalMensuelHt !== null) {
        expect(ligne.totalMensuelHt, ligne.id).toBeGreaterThan(0);
        expect(ligne.detail.length, `${ligne.id} : un total sans détail n'est pas vérifiable`).toBeGreaterThan(80);
      }
      expect(ligne.nuance.length, ligne.id).toBeGreaterThan(80);
    }
  });
});
