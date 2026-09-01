import { describe, expect, it } from "vitest";
import { classerAppareil, classerNavigateur, classerSysteme } from "./appareil";

const IPHONE =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1";
const IPAD_MENTEUR =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/17.0 Safari/605.1.15";

describe("classerAppareil", () => {
  it("tranche sur la largeur, pas sur l'user-agent", () => {
    // Safari sur iPad se déclare « Macintosh » depuis des années : sans la
    // largeur, une tablette compterait comme un ordinateur de bureau.
    expect(classerAppareil(IPHONE, 390)).toBe("telephone");
    expect(classerAppareil(IPAD_MENTEUR, 1440)).toBe("ordinateur");
    expect(classerAppareil("Mozilla/5.0 (Linux; Android 13; Tablet)", 800)).toBe("tablette");
  });

  it("retombe sur l'user-agent quand la largeur manque", () => {
    expect(classerAppareil(IPHONE, 0)).toBe("telephone");
  });
});

describe("classerNavigateur", () => {
  it("ne confond pas Edge et Opera avec Chrome", () => {
    // Les trois portent « Chrome » dans leur user-agent : l'ordre des tests est
    // tout ce qui les sépare.
    expect(classerNavigateur("Mozilla/5.0 Chrome/120 Safari/537.36 Edg/120")).toBe("Edge");
    expect(classerNavigateur("Mozilla/5.0 Chrome/120 Safari/537.36 OPR/106")).toBe("Opera");
    expect(classerNavigateur("Mozilla/5.0 Chrome/120 Safari/537.36")).toBe("Chrome");
    expect(classerNavigateur(IPHONE)).toBe("Safari");
  });
});

describe("classerSysteme", () => {
  it("place iOS avant macOS", () => {
    // L'user-agent d'un iPhone contient « Mac OS X ».
    expect(classerSysteme(IPHONE)).toBe("iOS");
    expect(classerSysteme("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)")).toBe("macOS");
  });
});
