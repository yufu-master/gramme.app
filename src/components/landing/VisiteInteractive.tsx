"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { trackEvent } from "@/lib/analytics";
import s from "./VisiteInteractive.module.css";

/**
 * La visite interactive : six écrans réels, dans l'ordre où ils servent à
 * l'atelier, sur l'appareil que choisit le visiteur.
 *
 * Validée par Clermont le 19/09/2026 sur un prototype à part. Elle remplace sur
 * l'accueil deux blocs qu'elle montre mieux qu'eux : l'accordéon des
 * fonctionnalités et « Sur ordinateur, tablette ou téléphone ».
 *
 * Ce qu'on s'interdit : ouvrir l'application elle-même au public. Un compte de
 * démonstration partagé se ferait vider la veille d'un rendez-vous, et chaque
 * scan lancé par un visiteur se paierait. Ce sont donc des captures, prises par
 * `scripts/captures-site.mjs` sur l'atelier Maison Duprat, jamais retouchées.
 *
 * Chaque texte ne dit que ce que l'écran montre. Quand un appareil n'affiche pas
 * un chiffre, il a son propre texte (`textes`), pour ne jamais citer un chiffre
 * invisible. Les positions sont en pourcentage de la capture : si une capture
 * est refaite, ses positions se relisent sur l'image.
 */

type Appareil = "ordinateur" | "tablette" | "telephone";
/** [x %, y %, zoom] du point sur la capture. */
type Position = [number, number, number];

type Etape = {
  court: string;
  ecran: string;
  titre: string;
  texte: string;
  textes?: Partial<Record<Appareil, string>>;
  pos: Record<Appareil, Position>;
};

const DIMENSIONS: Record<Appareil, { largeur: number; hauteur: number; sizes: string }> = {
  ordinateur: { largeur: 1600, hauteur: 1000, sizes: "(max-width: 1152px) 100vw, 1100px" },
  tablette: { largeur: 1400, hauteur: 1050, sizes: "(max-width: 932px) 100vw, 870px" },
  telephone: { largeur: 720, hauteur: 1558, sizes: "320px" },
};

const ETAPES: Etape[] = [
  {
    court: "La facture",
    ecran: "factures",
    titre: "Une facture, prise en photo à la livraison",
    texte:
      "Laiterie du Bassin, 356,27 € : Gramme a lu les 9 lignes, produit, conditionnement et prix. Personne n'a rien recopié.",
    pos: { ordinateur: [91.3, 40.6, 1.08], tablette: [88.7, 47.5, 1.08], telephone: [76.3, 62.0, 1] },
  },
  {
    court: "Les prix",
    ecran: "mercuriale",
    titre: "Les prix d'achat se mettent à jour seuls",
    texte:
      "Les amandes effilées passent à 12,20 € le kilo, soit +3,0 %. La mercuriale le signale sans qu'on ait ouvert un tableur.",
    pos: { ordinateur: [92.5, 45.6, 1.1], tablette: [90.8, 57.8, 1.08], telephone: [79.8, 74.6, 1] },
  },
  {
    court: "L'historique",
    ecran: "prix-historique",
    titre: "Chaque prix garde sa facture",
    texte:
      "Date, fournisseur et conditionnement lu sur la facture : le prix au kilo se recalcule à partir de là, et la courbe retrace douze mois.",
    pos: { ordinateur: [84.8, 88.6, 1.1], tablette: [83.8, 49.9, 1.08], telephone: [73.2, 63.7, 1] },
  },
  {
    court: "Le coût",
    ecran: "recette-couts-detail",
    titre: "Le coût de revient, au centime près",
    texte:
      "Galette des rois : 6,65 € de coût de revient pour 20,85 € HT de vente, 68 % de marge. Et le détail dit d'où vient chaque centime : le beurre de tourage pèse à lui seul 34 % du coût matière.",
    textes: {
      telephone:
        "Galette des rois : 6,65 € de coût de revient, emballage compris, pour 20,85 € HT de vente. Marge de 68 %, coefficient 3,14.",
    },
    pos: { ordinateur: [79.5, 56.6, 1.08], tablette: [90.6, 66.4, 1.06], telephone: [75.8, 36.0, 1] },
  },
  {
    court: "L'étiquette",
    ecran: "recette-etiquetage",
    titre: "L'étiquette s'écrit depuis la fiche",
    texte:
      "Gluten, œufs, lait, fruits à coque : les allergènes de la galette remontent seuls des matières premières jusqu'au produit fini. Il reste à imprimer l'étiquette.",
    pos: { ordinateur: [52.0, 53.4, 1.08], tablette: [52.9, 45.4, 1.06], telephone: [69.0, 46.8, 1] },
  },
  {
    court: "L'hygiène",
    ecran: "haccp-temperatures-releves",
    titre: "Un écart de température, et ce qu'on en a fait",
    texte:
      "Chambre froide pâtisserie à 9,9 °C : hors bornes. L'action corrective est notée avec le relevé, dégivrage lancé et denrées déplacées. Le registre s'imprime pour un contrôle.",
    pos: { ordinateur: [84.5, 50.6, 1.08], tablette: [86.1, 59.3, 1.06], telephone: [67.7, 77.6, 1] },
  },
];

const APPAREILS: Array<{ id: Appareil; libelle: string; icone: React.ReactNode }> = [
  {
    id: "ordinateur",
    libelle: "Ordinateur",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
  {
    id: "tablette",
    libelle: "Tablette",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2.5" />
        <path d="M19 12h.01" />
      </svg>
    ),
  },
  {
    id: "telephone",
    libelle: "Téléphone",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
];

const image = (appareil: Appareil, ecran: string) => `/images/visite/${appareil}/${ecran}.jpg`;

const REQUETE_ETROIT = "(max-width: 760px)";
function abonnerEtroit(rappel: () => void) {
  const mq = window.matchMedia(REQUETE_ETROIT);
  mq.addEventListener("change", rappel);
  return () => mq.removeEventListener("change", rappel);
}
const lireEtroit = () => window.matchMedia(REQUETE_ETROIT).matches;
// Côté serveur, on ne sait pas : on rend l'ordinateur, le client corrige.
const lireEtroitServeur = () => false;

export function VisiteInteractive() {
  // Tant que le visiteur n'a rien choisi, un écran étroit ouvre la visite sur
  // le téléphone : c'est l'appareil qu'il a dans la main.
  const etroit = useSyncExternalStore(abonnerEtroit, lireEtroit, lireEtroitServeur);
  const [choix, setChoix] = useState<Appareil | null>(null);
  const appareil: Appareil = choix ?? (etroit ? "telephone" : "ordinateur");
  const [n, setN] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const ecranRef = useRef<HTMLDivElement>(null);
  const bulleRef = useRef<HTMLDivElement>(null);

  const finie = n >= ETAPES.length;
  const etape = ETAPES[Math.min(n, ETAPES.length - 1)];
  const [x, y, zoom] = etape.pos[appareil];
  const dims = DIMENSIONS[appareil];

  /**
   * La bulle se pose du côté où il y a de la place, jamais sur le point.
   * Écrite directement sur l'élément : elle dépend de mesures du DOM, et la
   * faire passer par un état relancerait un rendu à chaque mesure.
   */
  const placerBulle = useCallback(() => {
    const scene = sceneRef.current;
    const ecran = ecranRef.current;
    const bulle = bulleRef.current;
    if (!scene || !ecran || !bulle) return;
    if (appareil === "telephone" || window.matchMedia(REQUETE_ETROIT).matches) {
      bulle.style.left = "";
      bulle.style.top = "";
      return;
    }
    const sc = scene.getBoundingClientRect();
    const ec = ecran.getBoundingClientRect();
    const px = ec.left - sc.left + (ec.width * x) / 100;
    const py = ec.top - sc.top + (ec.height * y) / 100;
    const larg = bulle.offsetWidth;
    const haut = bulle.offsetHeight;
    let left = x > 55 ? px - larg - 30 : px + 30;
    left = Math.max(8, Math.min(left, sc.width - larg - 8));
    let top = y > 58 ? py - haut + 20 : py - 40;
    top = Math.max(8, Math.min(top, sc.height - haut - 8));
    bulle.style.left = `${left}px`;
    bulle.style.top = `${top}px`;
  }, [appareil, x, y]);

  useLayoutEffect(() => {
    placerBulle();
  }, [placerBulle, n]);

  useEffect(() => {
    window.addEventListener("resize", placerBulle);
    return () => window.removeEventListener("resize", placerBulle);
  }, [placerBulle]);

  const aller = (k: number) => {
    const suivante = Math.max(0, Math.min(ETAPES.length, k));
    setN(suivante);
    if (suivante === ETAPES.length) trackEvent("visite_terminee", { appareil });
  };

  const telephone = appareil === "telephone";
  const classeAppareil = s[appareil];

  return (
    <div className={s.bloc}>
      <div className={s.entete}>
        <p className="max-w-xl text-[var(--muted-foreground)]">
          Six écrans, dans l&apos;ordre où ils servent à l&apos;atelier. Cliquez sur le point vert, ou sur
          « Suivant ».
        </p>
        <div className={s.appareils} role="group" aria-label="Voir sur">
          {APPAREILS.map((a) => (
            <button
              key={a.id}
              type="button"
              aria-pressed={appareil === a.id}
              onClick={() => {
                setChoix(a.id);
                trackEvent("visite_appareil", { appareil: a.id });
              }}
            >
              {a.icone}
              {a.libelle}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={sceneRef}
        className={`${s.scene} ${telephone ? s.sceneTelephone : ""}`}
        aria-live="polite"
      >
        <div className={`${s.appareil} ${classeAppareil}`}>
          <div className={s.vitre}>
            {telephone ? (
              <div className={s.barreEtat} aria-hidden="true">
                <span>9:41</span>
                <span className={s.icones}>
                  <i style={{ width: 15, height: 9 }} />
                  <i style={{ width: 13, height: 9 }} />
                  <i style={{ width: 22, height: 10, borderRadius: 3 }} />
                </span>
              </div>
            ) : null}
            <div className={s.ecran} ref={ecranRef}>
              <Image
                key={`${appareil}-${etape.ecran}`}
                src={image(appareil, etape.ecran)}
                alt={etape.titre}
                width={dims.largeur}
                height={dims.hauteur}
                sizes={dims.sizes}
                onLoad={placerBulle}
                style={
                  {
                    "--ox": `${x}%`,
                    "--oy": `${y}%`,
                    // Pas de zoom sur téléphone : l'écran est déjà petit, et le
                    // moindre agrandissement coupait le titre et la barre du bas.
                    "--zoom": finie || telephone ? 1 : zoom,
                  } as React.CSSProperties
                }
              />
              {!finie ? (
                <button
                  type="button"
                  className={s.point}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={n === ETAPES.length - 1 ? "Terminer la visite" : "Étape suivante"}
                  onClick={() => aller(n + 1)}
                />
              ) : null}
            </div>
            {telephone ? <div className={s.accueil} aria-hidden="true" /> : null}
            {finie ? (
              <div className={s.fin}>
                <div className={s.carte}>
                  <h3>Le voir en direct, sur un atelier complet</h3>
                  <p>
                    Une heure en visio : une facture scannée devant vous, et la marge d&apos;une recette qui se
                    recalcule sans que personne ne saisisse rien. Rien à préparer.
                  </p>
                  <div className={s.rangee}>
                    <Link
                      href="/demo"
                      className={`${s.bouton} ${s.plein}`}
                      onClick={() => trackEvent("cta_demo_click", { source: "visite_fin" })}
                    >
                      Réserver une démonstration
                    </Link>
                    <button type="button" className={`${s.bouton} ${s.contour}`} onClick={() => aller(0)}>
                      Revoir la visite
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {!finie ? (
          <div
            ref={bulleRef}
            className={`${s.bulle} ${telephone ? s.colonne : s.flottante}`}
          >
            <span className={s.num}>
              Étape {n + 1} sur {ETAPES.length}
            </span>
            <h3>{etape.titre}</h3>
            <p>{etape.textes?.[appareil] ?? etape.texte}</p>
            <div className={s.actions}>
              <button
                type="button"
                className={`${s.bouton} ${s.discret}`}
                disabled={n === 0}
                onClick={() => aller(n - 1)}
              >
                Précédent
              </button>
              <button type="button" className={`${s.bouton} ${s.plein}`} onClick={() => aller(n + 1)}>
                {n === ETAPES.length - 1 ? "Terminer" : "Suivant"}
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <nav aria-label="Étapes de la visite">
        <ol className={s.fil}>
          {ETAPES.map((e, k) => (
            <li key={e.ecran}>
              <button
                type="button"
                aria-current={k === n ? "step" : undefined}
                className={k < n ? s.vu : undefined}
                onClick={() => aller(k)}
              >
                <b>{k + 1}</b>
                {e.court}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <p className="text-center text-xs text-[var(--muted-foreground)]">
        Captures réelles de l&apos;atelier de démonstration Maison Duprat, prises dans l&apos;application le 18
        septembre 2026. Aucun écran n&apos;est retouché.
      </p>
    </div>
  );
}
