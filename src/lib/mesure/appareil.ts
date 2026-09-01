/**
 * Type d'appareil, navigateur et système, déduits de l'user-agent.
 *
 * Volontairement grossier. Un analyseur exhaustif (une des grosses
 * bibliothèques du genre) pèserait plus lourd que tout le reste de la mesure
 * réunie, pour une précision dont personne n'a l'usage ici : la seule question
 * posée à ces chiffres est « est-ce qu'on est lisible sur téléphone », et elle
 * se répond avec trois catégories.
 *
 * LE POINT DE BASCULE EST À 768, comme la tablette de `resize_window` et comme
 * le point d'arrêt `md` de Tailwind : la largeur d'écran envoyée par le
 * navigateur tranche mieux que l'user-agent, qui ment sur iPad depuis des
 * années (Safari iPadOS se déclare « Macintosh »). L'user-agent ne sert donc
 * qu'à départager téléphone et tablette une fois la largeur connue.
 */

export type Appareil = "telephone" | "tablette" | "ordinateur";

export function classerAppareil(userAgent: string, largeur: number): Appareil {
  const ua = String(userAgent || "").toLowerCase();
  const tactile = /android|iphone|ipad|ipod|mobile|tablet|silk|kindle/.test(ua);

  if (largeur > 0) {
    if (largeur < 768) return "telephone";
    if (largeur < 1180 && tactile) return "tablette";
    if (largeur < 1180 && /ipad|tablet/.test(ua)) return "tablette";
    return largeur < 1024 && tactile ? "tablette" : "ordinateur";
  }

  if (/ipad|tablet/.test(ua)) return "tablette";
  if (/android|iphone|ipod|mobile/.test(ua)) return "telephone";
  return "ordinateur";
}

export function classerNavigateur(userAgent: string): string {
  const ua = String(userAgent || "");
  // L'ordre est tout : Edge et Opera contiennent « Chrome », Chrome contient
  // « Safari ». Tester du plus spécifique au plus général.
  if (/Edg\//.test(ua)) return "Edge";
  if (/OPR\/|Opera/.test(ua)) return "Opera";
  if (/SamsungBrowser/.test(ua)) return "Samsung Internet";
  if (/Firefox\//.test(ua)) return "Firefox";
  if (/Chrome\//.test(ua)) return "Chrome";
  if (/Safari\//.test(ua)) return "Safari";
  return "autre";
}

export function classerSysteme(userAgent: string): string {
  const ua = String(userAgent || "");
  if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
  if (/Android/.test(ua)) return "Android";
  if (/Mac OS X/.test(ua)) return "macOS";
  if (/Windows/.test(ua)) return "Windows";
  if (/Linux/.test(ua)) return "Linux";
  return "autre";
}
