/**
 * Le numéro de téléphone d'un prospect, obligatoire depuis le 23/10/2026 pour
 * les demandes qu'on veut rappeler vite (voir `telephoneObligatoire`).
 *
 * Un artisan qui remplit le formulaire ne relit pas toujours ses courriels, et
 * nos réponses tombent parfois dans les indésirables : sans numéro, la demande
 * se perdait. On accepte ce qu'on tape en France (06 12 34 56 78, 06.12…,
 * +33 6…, 0033 6…) et un numéro étranger écrit avec son indicatif (+41…, +32…).
 * On ne devine jamais un indicatif : sans « + », il faut dix chiffres
 * commençant par 0.
 */
export function normaliserTelephone(brut: string): string | null {
  const texte = String(brut ?? "").trim();
  if (!texte) return null;
  // Seuls chiffres, espaces, points, tirets, parenthèses et un « + » en tête.
  if (!/^\+?[\d\s.\-()]+$/.test(texte)) return null;

  let chiffres = texte.replace(/\D/g, "");
  const international = texte.startsWith("+") || chiffres.startsWith("00");
  if (chiffres.startsWith("00")) chiffres = chiffres.slice(2);

  if (international) {
    // Un « 0 » glissé après l'indicatif français : +33 (0)6… se lit +33 6…
    if (chiffres.startsWith("330")) chiffres = `33${chiffres.slice(3)}`;
    if (chiffres.startsWith("33")) {
      const national = chiffres.slice(2);
      if (!/^[1-9]\d{8}$/.test(national)) return null;
      return `+33 ${national[0]} ${national.slice(1).replace(/(\d{2})(?=\d)/g, "$1 ")}`.trim();
    }
    if (chiffres.length < 8 || chiffres.length > 15) return null;
    return `+${chiffres}`;
  }

  if (!/^0[1-9]\d{8}$/.test(chiffres)) return null;
  return chiffres.replace(/(\d{2})(?=\d)/g, "$1 ");
}

/**
 * Les sujets où le numéro reste FACULTATIF : une question de support ou une
 * remarque se traite par courriel, et un numéro forcé y fait fuir. Tout le
 * reste (démo, tarifs, candidatures Gramme Chef, un sujet ajouté demain) le
 * rend obligatoire : c'est là qu'un prospect qui ne lit pas ses courriels se
 * perd. Décision de Clermont du 23/10/2026, à mesurer sur deux semaines.
 */
export const SUJETS_TELEPHONE_FACULTATIF = ["Support technique", "Autre"] as const;

export function telephoneObligatoire(sujet: string): boolean {
  return !(SUJETS_TELEPHONE_FACULTATIF as readonly string[]).includes(String(sujet ?? "").trim());
}
