import { describe, expect, it } from "vitest";
import { normaliserTelephone } from "./telephone";

describe("numéro de téléphone du formulaire de contact", () => {
  it("accepte les écritures françaises courantes et les remet en forme", () => {
    expect(normaliserTelephone("0612345678")).toBe("06 12 34 56 78");
    expect(normaliserTelephone("06 12 34 56 78")).toBe("06 12 34 56 78");
    expect(normaliserTelephone("06.12.34.56.78")).toBe("06 12 34 56 78");
    expect(normaliserTelephone("01-45-67-89-10")).toBe("01 45 67 89 10");
  });

  it("accepte l'indicatif français, avec ou sans le 0 entre parenthèses", () => {
    expect(normaliserTelephone("+33 6 12 34 56 78")).toBe("+33 6 12 34 56 78");
    expect(normaliserTelephone("+33 (0)6 12 34 56 78")).toBe("+33 6 12 34 56 78");
    expect(normaliserTelephone("0033612345678")).toBe("+33 6 12 34 56 78");
  });

  it("accepte un numéro étranger écrit avec son indicatif", () => {
    expect(normaliserTelephone("+41 79 123 45 67")).toBe("+41791234567");
    expect(normaliserTelephone("+32 470 12 34 56")).toBe("+32470123456");
  });

  it("refuse ce qui ne peut pas servir à rappeler", () => {
    for (const faux of ["", "   ", "06 12 34", "6123456789", "0012", "+33 6 12", "06 12 34 56 78 99", "appelez-moi", "0612a45678", "+1234567890123456"]) {
      expect(normaliserTelephone(faux), faux).toBeNull();
    }
  });
});
