/**
 * Classement d'une visite en canal d'acquisition.
 *
 * LE CANAL « ia » EST LA RAISON D'ÊTRE DE CE FICHIER. Une visite venue de
 * ChatGPT ou de Perplexity arrive avec un référent ordinaire ; rangée dans
 * « référent » au milieu des annuaires, elle serait invisible. Or c'est le
 * canal dont on veut suivre la pente, parce que c'est le seul sur lequel le
 * travail de contenu se mesure en semaines et pas en mois.
 *
 * Deux pièges traités ici :
 *  - ChatGPT ajoute `utm_source=chatgpt.com` aux liens qu'il propose, et
 *    beaucoup de ces visites arrivent SANS `Referer` (politique de référent
 *    restrictive). Sans la règle sur l'UTM, elles tomberaient en « direct » ;
 *  - les moteurs génératifs de Google et Bing servent depuis des sous-domaines
 *    (`gemini.google.com`, `edgeservices.bing.com`) qui ressemblent à leurs
 *    moteurs classiques. Ils sont listés nommément, avant la règle « moteur ».
 */

export type Canal =
  | "direct"
  | "organique"
  | "ia"
  | "social"
  | "referent"
  | "email"
  | "payant"
  | "interne";

/** Moteurs génératifs et assistants. Vérifiés avant les moteurs classiques. */
const HOTES_IA = [
  "chatgpt.com",
  "chat.openai.com",
  "openai.com",
  "perplexity.ai",
  "gemini.google.com",
  "bard.google.com",
  "claude.ai",
  "copilot.microsoft.com",
  "edgeservices.bing.com",
  "you.com",
  "poe.com",
  "chat.mistral.ai",
  "lechat.mistral.ai",
  "phind.com",
  "felo.ai",
  "andisearch.com",
  "iask.ai",
  "komo.ai",
];

const HOTES_MOTEURS = [
  "google.",
  "bing.com",
  "duckduckgo.com",
  "qwant.com",
  "ecosia.org",
  "yahoo.",
  "yandex.",
  "lilo.org",
  "startpage.com",
  "brave.com",
  "search.marcia",
];

const HOTES_SOCIAUX = [
  "facebook.com",
  "instagram.com",
  "linkedin.com",
  "lnkd.in",
  "t.co",
  "x.com",
  "twitter.com",
  "youtube.com",
  "tiktok.com",
  "pinterest.",
  "reddit.com",
  "threads.net",
  "whatsapp.com",
  "snapchat.com",
];

const HOTES_INTERNES = ["gramme.app", "www.gramme.app", "get.gramme.app"];

const MEDIUMS_PAYANTS = new Set(["cpc", "ppc", "paid", "paidsearch", "paid_search", "display", "cpm"]);
const MEDIUMS_EMAIL = new Set(["email", "e-mail", "mail", "newsletter"]);

function nettoyerHote(hote: string): string {
  return String(hote || "").trim().toLowerCase().replace(/^www\./, "");
}

function correspond(hote: string, liste: string[]): boolean {
  const h = nettoyerHote(hote);
  return liste.some((motif) => {
    const m = motif.replace(/^www\./, "");
    // Un motif qui finit par un point (« google. ») couvre toutes les
    // extensions nationales : google.fr, google.be, google.co.uk.
    return m.endsWith(".") ? h.startsWith(m) || h.includes(`.${m}`) : h === m || h.endsWith(`.${m}`);
  });
}

export function estHoteIa(hote: string): boolean {
  return correspond(hote, HOTES_IA);
}

export function classerCanal(params: {
  referentHote?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
}): Canal {
  const hote = nettoyerHote(params.referentHote || "");
  const source = nettoyerHote(params.utmSource || "");
  const medium = String(params.utmMedium || "").trim().toLowerCase();

  // Une campagne déclarée prime sur le référent : c'est elle qu'on a payée ou
  // envoyée, et c'est elle qu'on veut voir dans le tableau.
  if (MEDIUMS_PAYANTS.has(medium)) return "payant";
  if (MEDIUMS_EMAIL.has(medium)) return "email";

  // L'UTM d'abord pour l'IA, justement parce que le référent manque souvent.
  if (source && estHoteIa(source)) return "ia";
  if (hote && estHoteIa(hote)) return "ia";

  if (!hote) return source ? "referent" : "direct";

  if (correspond(hote, HOTES_INTERNES)) return "interne";
  if (correspond(hote, HOTES_MOTEURS)) return "organique";
  if (correspond(hote, HOTES_SOCIAUX)) return "social";

  return "referent";
}

/** Découpe un référent en hôte et chemin. L'URL entière n'est jamais stockée. */
export function decouperReferent(referent: string | null | undefined): {
  hote: string | null;
  chemin: string | null;
} {
  if (!referent) return { hote: null, chemin: null };
  try {
    const u = new URL(referent);
    return { hote: u.hostname.toLowerCase(), chemin: u.pathname.slice(0, 512) || null };
  } catch {
    return { hote: null, chemin: null };
  }
}
