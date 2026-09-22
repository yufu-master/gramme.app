import { describe, expect, it } from "vitest";
import { aBesoinDeConversion } from "./image-questionnaire";
import { ACCEPTED_MIME } from "@/content/onboarding";

function fichier(nom: string, type: string, taille = 1024): File {
  const f = new File([new Uint8Array(1)], nom, { type });
  Object.defineProperty(f, "size", { value: taille });
  return f;
}

describe("conversion des photos du questionnaire", () => {
  /**
   * LE cas de la tâche DEV #165 : la photo d'iPhone traversait toute la
   * chaîne et n'était refusée qu'à l'analyse.
   */
  it("convertit une photo iPhone, même quand le navigateur ne lui donne pas de type", () => {
    expect(aBesoinDeConversion(fichier("IMG_4312.HEIC", "image/heic"))).toBe(true);
    expect(aBesoinDeConversion(fichier("IMG_4312.heic", ""))).toBe(true);
    expect(aBesoinDeConversion(fichier("IMG_4312.heif", ""))).toBe(true);
  });

  it("laisse passer un JPEG ou un PNG de taille raisonnable", () => {
    expect(aBesoinDeConversion(fichier("facture.jpg", "image/jpeg"))).toBe(false);
    expect(aBesoinDeConversion(fichier("logo.png", "image/png"))).toBe(false);
  });

  it("réencode une photo trop lourde pour le plafond de dépôt", () => {
    expect(aBesoinDeConversion(fichier("grosse.jpg", "image/jpeg", 14 * 1024 * 1024))).toBe(true);
  });

  it("ne touche jamais à un PDF, un CSV ou un tableur", () => {
    expect(aBesoinDeConversion(fichier("facture.pdf", "application/pdf", 20 * 1024 * 1024))).toBe(false);
    expect(aBesoinDeConversion(fichier("ventes.csv", "text/csv", 9 * 1024 * 1024))).toBe(false);
    expect(
      aBesoinDeConversion(
        fichier(
          "mercuriale.xlsx",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          9 * 1024 * 1024,
        ),
      ),
    ).toBe(false);
  });

  /**
   * Nommer `image/heic` dans l'`accept` désactive la conversion automatique
   * d'iOS : c'est la moitié du correctif, et elle doit le rester.
   */
  it("n'annonce jamais le HEIC dans les formats acceptés", () => {
    expect(ACCEPTED_MIME).not.toContain("image/heic");
    expect(ACCEPTED_MIME).not.toContain("image/heif");
  });
});
