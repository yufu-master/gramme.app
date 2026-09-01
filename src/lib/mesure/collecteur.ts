/**
 * Le collecteur. Deux balises par page vue : une au début, une à la fin.
 *
 * RIEN N'EST ÉCRIT SUR L'APPAREIL. Ni cookie, ni localStorage, ni
 * sessionStorage. L'identifiant de vue est une variable de module, il meurt
 * avec l'onglet. C'est ce qui met la mesure hors du champ de l'article 5(3)
 * ePrivacy — pas de lecture ni d'écriture sur l'équipement terminal, donc pas
 * de bandeau de consentement à afficher, quelle que soit la finalité. La
 * politique de confidentialité du site le promet déjà ; ce fichier est ce qui
 * rend la promesse vraie.
 *
 * LE TEMPS MESURÉ EST LE TEMPS LU, pas le temps écoulé. Un compteur qui tourne
 * du chargement à la fermeture compterait un onglet ouvert et oublié pendant
 * deux heures comme deux heures de lecture, et la durée moyenne du site
 * deviendrait un chiffre flatteur et inutile. On additionne donc des segments,
 * et un segment ne court que si la page est visible ET que la fenêtre a le
 * focus.
 *
 * LES ÉVÉNEMENTS VOYAGENT AVEC LA BALISE DE FIN. `trackEvent` n'ouvre aucune
 * connexion : les huit appels déjà en place dans le site deviennent gratuits.
 */

import { normaliserChemin } from "./chemin";
import { classerCanal, decouperReferent } from "./canal";
import { classerAppareil, classerNavigateur, classerSysteme } from "./appareil";
import { demarrerVitals, lireVitals } from "./vitals";
import { estAutomate } from "./robots";

const POINT_COLLECTE = "/api/e";
/** Filet pour les sessions longues : au-delà, une page lue reste crédible. */
const BATTEMENT_MS = 15_000;

type Evenement = { nom: string; proprietes: Record<string, unknown> };

let vueId: string | null = null;
let chemin = "/";
let debutVue = 0;
let debutSegment: number | null = null;
let engageMs = 0;
let profondeur = 0;
let evenements: Evenement[] = [];
/** Nombre d'événements déjà partis : on n'envoie que la queue non transmise. */
let evenementsEnvoyes = 0;
/** Durée engagée au moment du dernier envoi, pour ne pas répéter une balise identique. */
let engageEnvoyeMs = -1;
let ecouteursPoses = false;
let battement: ReturnType<typeof setInterval> | null = null;

function maintenant() {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}

function engage(): boolean {
  return document.visibilityState === "visible" && document.hasFocus();
}

function ouvrirSegment() {
  if (debutSegment === null && engage()) debutSegment = maintenant();
}

function fermerSegment() {
  if (debutSegment !== null) {
    engageMs += maintenant() - debutSegment;
    debutSegment = null;
  }
}

function mesurerProfondeur() {
  const hauteur = document.documentElement.scrollHeight;
  if (hauteur <= 0) return;
  const vu = Math.min(window.scrollY + window.innerHeight, hauteur);
  const pct = Math.round((vu / hauteur) * 100);
  if (pct > profondeur) profondeur = Math.min(pct, 100);
}

function envoyer(charge: Record<string, unknown>, avecBeacon: boolean): boolean {
  const corps = JSON.stringify(charge);
  try {
    if (avecBeacon && typeof navigator.sendBeacon === "function") {
      // Le type importe : sans lui, le navigateur envoie un Content-Type que la
      // route rejette, et la balise de fin se perd en silence, c'est-à-dire que
      // toutes les durées disparaîtraient sans une seule erreur visible.
      return navigator.sendBeacon(POINT_COLLECTE, new Blob([corps], { type: "application/json" }));
    }
    void fetch(POINT_COLLECTE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: corps,
      keepalive: true,
    }).catch(() => undefined);
    return true;
  } catch {
    // La mesure ne casse jamais la page.
    return false;
  }
}

function poserEcouteurs() {
  if (ecouteursPoses) return;
  ecouteursPoses = true;

  // On additionne des BORNES plutôt que de faire tourner un intervalle : c'est
  // plus juste, et ça ne réveille pas le téléphone toutes les secondes.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      fermerSegment();
      terminerVue("masquee");
    } else {
      ouvrirSegment();
    }
  });
  window.addEventListener("focus", ouvrirSegment);
  window.addEventListener("blur", fermerSegment);
  window.addEventListener("pagehide", () => terminerVue("pagehide"));
  window.addEventListener("scroll", () => requestAnimationFrame(mesurerProfondeur), { passive: true });
}

function contexte() {
  const ref = decouperReferent(document.referrer || null);
  // Un référent interne n'est pas une source : c'est une navigation dans le
  // site. Le laisser passer classerait la moitié du trafic en « interne » et
  // masquerait le vrai canal d'entrée.
  const externe = ref.hote && !ref.hote.replace(/^www\./, "").endsWith("gramme.app");

  const params = new URLSearchParams(window.location.search);
  const utm = {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campagne: params.get("utm_campaign") || undefined,
    utm_contenu: params.get("utm_content") || undefined,
    utm_terme: params.get("utm_term") || undefined,
  };

  const ua = navigator.userAgent;
  const largeur = window.innerWidth || 0;

  return {
    referent_hote: externe ? ref.hote : undefined,
    referent_chemin: externe ? ref.chemin || undefined : undefined,
    canal: classerCanal({
      referentHote: externe ? ref.hote : null,
      utmSource: utm.utm_source ?? null,
      utmMedium: utm.utm_medium ?? null,
    }),
    ...utm,
    appareil: classerAppareil(ua, largeur),
    navigateur: classerNavigateur(ua),
    systeme: classerSysteme(ua),
    largeur_ecran: largeur,
    // Marqué, jamais rejeté : c'est ce qui permet à la console d'écrire
    // combien de vues elle écarte. Un filtre muet finit toujours par écarter
    // autre chose que ce qu'on croyait.
    suspect: Boolean((navigator as Navigator & { webdriver?: boolean }).webdriver) || estAutomate(ua),
  };
}

export function demarrerVue(cheminBrut: string, titre?: string) {
  if (typeof window === "undefined") return;

  poserEcouteurs();
  demarrerVitals();

  vueId = crypto.randomUUID();
  chemin = normaliserChemin(cheminBrut);
  debutVue = maintenant();
  debutSegment = null;
  engageMs = 0;
  profondeur = 0;
  evenements = [];
  evenementsEnvoyes = 0;
  engageEnvoyeMs = -1;

  ouvrirSegment();
  mesurerProfondeur();

  if (battement) clearInterval(battement);
  battement = setInterval(() => {
    // Referme et rouvre le segment courant : sans ce filet, une page lue
    // quarante minutes d'affilée ne rendrait sa durée qu'à la fermeture, et un
    // onglet tué la perdrait en entier.
    if (engage()) {
      fermerSegment();
      ouvrirSegment();
    }
  }, BATTEMENT_MS);

  envoyer(
    {
      action: "vue",
      vue: { id: vueId, chemin, titre: titre || document.title, ...contexte() },
    },
    false,
  );
}

/**
 * Clôt la vue courante. RÉENTRANTE, et c'est indispensable : `visibilitychange`
 * puis `pagehide` tirent tous les deux, et surtout un onglet quitté puis rouvert
 * doit continuer de compter. Une fermeture définitive à la première balise
 * arrêterait la mesure au premier changement d'onglet, ce qui arrive sur la
 * majorité des lectures longues.
 *
 * Deux garde-fous rendent la répétition inoffensive :
 *  - côté serveur, `cloturer_vue` ne retient que la plus grande durée reçue ;
 *  - ici, seuls les événements PAS ENCORE PARTIS sont joints. Sans ce compteur,
 *    une seconde balise réémettrait tous les précédents et doublerait les
 *    conversions.
 */
export function terminerVue(raison: string) {
  if (!vueId) return;
  fermerSegment();
  mesurerProfondeur();

  const nouveaux = evenements.slice(evenementsEnvoyes);
  const engageArrondi = Math.round(engageMs);
  // Rien de neuf à dire : ni temps lu supplémentaire, ni événement en attente.
  if (engageArrondi <= engageEnvoyeMs && nouveaux.length === 0) {
    ouvrirSegment();
    return;
  }

  const parti = envoyer(
    {
      action: "fin",
      vue_id: vueId,
      fin: {
        raison,
        duree_visible_ms: engageArrondi,
        duree_totale_ms: Math.round(maintenant() - debutVue),
        profondeur_pct: profondeur,
        ...lireVitals(),
        evenements: nouveaux,
      },
    },
    true,
  );

  if (parti) {
    evenementsEnvoyes = evenements.length;
    engageEnvoyeMs = engageArrondi;
  }

  // Si la page revient (l'utilisateur rouvre l'onglet), le segment reprend.
  ouvrirSegment();
}

/** Identifiant de la vue en cours, pour rattacher une conversion à son parcours. */
export function vueCourante(): string | null {
  return vueId;
}

export function enregistrerEvenement(nom: string, proprietes?: Record<string, unknown>) {
  if (!vueId) return;
  // Vingt événements par page : au-delà, c'est une boucle, et une balise de fin
  // trop grosse est refusée par sendBeacon — donc toute la durée serait perdue
  // avec elle.
  if (evenements.length >= 20) return;
  evenements.push({ nom, proprietes: proprietes ?? {} });
}
