/**
 * Le croissant de l'atelier de démonstration, lu en base le 02/11/2026 et non
 * estimé : 80 g d'une pâte de 4 400 g qui contient 1 000 g de beurre de tourage
 * à 9,20 €/kg. La marge de référence est celle de sa fiche dans l'application.
 * On ne fait bouger que le beurre de tourage : le reste de la fiche ne change pas.
 */
export const CROISSANT = {
  grammesBeurre: (80 / 4400) * 1000,
  prixBeurreReference: 9.2,
  coutRevientReference: 0.465,
  prixVenteHt: 1.327,
} as const;

export function margeCroissant(prixBeurreKg: number) {
  const ecart = (CROISSANT.grammesBeurre * (prixBeurreKg - CROISSANT.prixBeurreReference)) / 1000;
  const coutRevient = CROISSANT.coutRevientReference + ecart;
  const marge = CROISSANT.prixVenteHt - coutRevient;
  return {
    coutRevient,
    marge,
    margePct: (marge / CROISSANT.prixVenteHt) * 100,
    ecartSurMille: -ecart * 1000,
  };
}
