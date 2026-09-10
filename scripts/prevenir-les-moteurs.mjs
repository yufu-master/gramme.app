#!/usr/bin/env node
/**
 * PRÉVENIR LES MOTEURS qu'une page vient de changer, sans attendre leur passage.
 *
 * Demande de Clermont, 07/09/2026 : « faut que ce soit une règle que l'on
 * mette toujours à jour les nouvelles fonctions pour que ce soit référencé le
 * plus vite possible ».
 *
 * Le sitemap dit CE QUI EXISTE, mais il ne dit rien À PERSONNE : il attend
 * qu'un robot vienne le lire, ce qui prend de quelques jours à quelques
 * semaines pour un site jeune. IndexNow renverse le sens : on annonce les
 * adresses qui ont changé, et Bing les prend en charge en quelques heures.
 * Yandex, Seznam et Naver partagent le même protocole ; Google ne le rejoint
 * pas, mais Bing alimente une partie des réponses de Copilot et de ChatGPT,
 * ce qui compte autant que le classement pour ce site.
 *
 * ## Comment ça marche
 *
 * Le protocole demande une preuve qu'on possède bien le domaine : une clé
 * publiée à la racine du site, dans un fichier qui porte son propre nom. Le
 * moteur va la lire avant d'accepter la liste.
 *
 * ## Mise en service, une seule fois
 *
 *   1. Choisir une clé : 32 caractères hexadécimaux, par exemple avec
 *      `node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"`.
 *   2. Créer `public/<clé>.txt` dont le CONTENU est exactement cette clé.
 *   3. Poser la même valeur dans la variable d'environnement `INDEXNOW_CLE`
 *      (en local, et dans les variables du projet Vercel).
 *
 * Sans clé, ce script ne fait RIEN et le dit : il ne doit jamais faire échouer
 * un déploiement pour une question de référencement.
 *
 *   node scripts/prevenir-les-moteurs.mjs            # toutes les adresses du sitemap
 *   node scripts/prevenir-les-moteurs.mjs --depuis 2026-09-01   # celles modifiées depuis
 *   node scripts/prevenir-les-moteurs.mjs --essai    # affiche sans envoyer
 */
import { existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const RACINE = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = process.env.SITE_URL || "https://gramme.app";
const HOTE = new URL(SITE).host;

const args = process.argv.slice(2);
const essai = args.includes("--essai");
const depuis = (() => {
  const i = args.indexOf("--depuis");
  if (i < 0) return null;
  const d = new Date(args[i + 1]);
  return Number.isNaN(d.getTime()) ? null : d;
})();

/** La clé, et la preuve qu'elle est bien publiée à la racine du site. */
function cle() {
  const valeur = process.env.INDEXNOW_CLE;
  if (!valeur) return { valeur: null, raison: "INDEXNOW_CLE n'est pas posée" };
  if (!/^[0-9a-zA-Z-]{8,128}$/.test(valeur)) {
    return { valeur: null, raison: "INDEXNOW_CLE n'a pas la forme attendue (8 à 128 caractères alphanumériques)" };
  }
  const fichier = join(RACINE, "public", `${valeur}.txt`);
  if (!existsSync(fichier)) {
    return { valeur: null, raison: `le fichier de preuve public/${valeur}.txt n'existe pas` };
  }
  return { valeur, raison: null };
}

/**
 * Les adresses à annoncer, lues dans le sitemap déjà construit.
 *
 * On lit le sitemap plutôt que de reconstruire une liste : c'est lui la source
 * de vérité, il est déjà tenu par `src/lib/routes.ts`, et une liste parallèle
 * finirait par diverger. C'est exactement la faute que ce dépôt a déjà payée
 * quatre fois.
 */
async function adresses() {
  const { sitemapEntries } = await import(join(RACINE, "src", "lib", "routes.ts")).catch(() => ({}));
  if (typeof sitemapEntries === "function") {
    return sitemapEntries(SITE)
      .filter((e) => !depuis || !e.lastModified || new Date(e.lastModified) >= depuis)
      .map((e) => e.url);
  }
  // Repli : le sitemap servi par le site DÉJÀ EN LIGNE.
  //
  // Il est annoncé bruyamment, parce qu'il a une conséquence : ce sitemap est
  // celui du déploiement PRÉCÉDENT. Une page toute neuve n'y figure pas encore,
  // et elle ne sera donc annoncée qu'au déploiement suivant. Le repli sauve
  // l'essentiel (les adresses existantes) mais il perd exactement ce à quoi
  // sert IndexNow. La cause habituelle est une version de Node trop ancienne
  // pour lire un fichier `.ts` : c'est réparable, et ça vaut la peine.
  console.log("Attention : `src/lib/routes.ts` n'a pas pu être lu, repli sur le sitemap en ligne.");
  console.log("Les pages créées par ce déploiement ne seront annoncées qu'au suivant.");
  const reponse = await fetch(`${SITE}/sitemap.xml`);
  if (!reponse.ok) throw new Error(`sitemap illisible (${reponse.status})`);
  const xml = await reponse.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function principal() {
  // Sur Vercel, une préversion ne doit RIEN annoncer : elle construit les mêmes
  // adresses de production, donc elle annoncerait des pages qu'elle ne sert
  // pas, et elle consommerait le quota du protocole à chaque branche poussée.
  if (process.env.VERCEL && process.env.VERCEL_ENV !== "production") {
    console.log(`Moteurs NON prévenus : déploiement de préversion (${process.env.VERCEL_ENV}).`);
    return;
  }

  const { valeur, raison } = cle();
  if (!valeur) {
    console.log(`Moteurs NON prévenus : ${raison}.`);
    console.log("Voir l'en-tête de ce fichier pour la mise en service. Le déploiement n'est pas affecté.");
    return;
  }

  const liste = await adresses();
  if (!liste.length) {
    console.log("Aucune adresse à annoncer.");
    return;
  }

  console.log(`${liste.length} adresse${liste.length > 1 ? "s" : ""} à annoncer pour ${HOTE}`);
  if (essai) {
    for (const a of liste) console.log(`   ${a}`);
    console.log("\n(--essai : rien n'a été envoyé)");
    return;
  }

  // Un seul point d'entrée : le protocole se charge de relayer aux autres
  // moteurs participants. Multiplier les appels ne ferait que multiplier les
  // occasions d'être limité.
  const reponse = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOTE,
      key: valeur,
      keyLocation: `${SITE}/${valeur}.txt`,
      urlList: liste.slice(0, 10000),
    }),
  });

  // 200 et 202 valent acceptation. 422 dit que la clé ou l'hôte ne correspond
  // pas, et c'est la seule erreur qui demande vraiment une action.
  if (reponse.ok) {
    console.log(`Moteurs prévenus (${reponse.status}).`);
    return;
  }
  console.log(`Moteurs NON prévenus : réponse ${reponse.status}.`);
  if (reponse.status === 422) {
    console.log("422 : la clé publiée et INDEXNOW_CLE ne concordent pas, ou l'hôte ne correspond pas au domaine.");
  }
  // On n'échoue pas : le référencement ne doit pas casser un déploiement.
}

principal().catch((err) => {
  console.log(`Moteurs NON prévenus : ${err.message}.`);
});
