import { describe, expect, it } from "vitest";
import { margeCroissant } from "./croissant-beurre";

describe("marge du croissant selon le prix du beurre", () => {
  it("retombe sur la fiche de l'application au prix de référence", () => {
    const r = margeCroissant(9.2);
    expect(r.marge).toBeCloseTo(0.862, 3);
    expect(r.margePct).toBeCloseTo(64.97, 1);
    expect(r.ecartSurMille).toBeCloseTo(0, 5);
  });

  it("perd 18 g × la hausse par croissant", () => {
    const r = margeCroissant(12.2);
    expect(r.coutRevient).toBeCloseTo(0.465 + 0.0545, 3);
    expect(r.ecartSurMille).toBeCloseTo(-54.55, 1);
  });
});
