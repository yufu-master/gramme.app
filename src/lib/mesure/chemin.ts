/**
 * Normalisation du chemin avant envoi.
 *
 * DEUX RAISONS, et la première est sérieuse.
 *
 * 1. `/mise-en-service/<token>` porte un jeton d'accès personnel. L'écrire tel
 *    quel dans une table d'audience mettrait une clé d'accès en clair dans un
 *    journal consulté par plusieurs personnes, et conservé quatre-vingt-dix
 *    jours. Le segment variable est remplacé par son nom de gabarit.
 * 2. Sans normalisation, `/tarifs`, `/tarifs/` et `/tarifs?ref=x` sont trois
 *    pages différentes dans le tableau. Le classement des pages les plus lues
 *    deviendrait faux avant d'être utile.
 */

/** Segments variables du site, remplacés par le nom du gabarit Next. */
const GABARITS: Array<{ prefixe: string; nom: string }> = [
  { prefixe: "/mise-en-service/", nom: "[token]" },
  { prefixe: "/fonctionnalites/", nom: "[slug]" },
  { prefixe: "/guides/", nom: "[slug]" },
  { prefixe: "/articles/", nom: "[slug]" },
  { prefixe: "/comparatif/", nom: "[concurrent]" },
];

/**
 * Les seuls gabarits dont on GARDE la valeur réelle : ce sont des pages
 * publiques, et savoir quel guide est lu est précisément l'objet de la mesure.
 * `/mise-en-service/` en est volontairement absent.
 */
const VALEUR_CONSERVEE = new Set(["/fonctionnalites/", "/guides/", "/articles/", "/comparatif/"]);

export function normaliserChemin(chemin: string): string {
  let c = String(chemin || "/");

  // La requête et le fragment sont retirés en entier. Les UTM voyagent dans
  // leurs propres colonnes ; tout le reste est du bruit, quand ce n'est pas un
  // identifiant de session recopié par un site tiers.
  c = c.split("#")[0].split("?")[0];

  if (!c.startsWith("/")) c = `/${c}`;
  if (c.length > 1 && c.endsWith("/")) c = c.slice(0, -1);
  if (c === "") c = "/";

  for (const { prefixe, nom } of GABARITS) {
    if (!c.startsWith(prefixe)) continue;
    if (VALEUR_CONSERVEE.has(prefixe)) break;
    return `${prefixe}${nom}`;
  }

  return c.slice(0, 512);
}
