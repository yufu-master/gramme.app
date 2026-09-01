/**
 * Les Core Web Vitals, à la main.
 *
 * POURQUOI PAS `web-vitals`. Le dépôt du site n'a que trois dépendances
 * d'exécution (`next`, `react`, `react-dom`) et `src/vendor/` contient des
 * ré-implémentations écrites ici plutôt que des copies de paquets. Ajouter une
 * bibliothèque pour cinq mesures que les API du navigateur donnent déjà
 * romprait ce parti sans rien apporter.
 *
 * DEUX FRANCHISES À PORTER JUSQU'À L'ÉCRAN, sinon les chiffres mentent par
 * omission :
 *
 *  1. L'INP calculé ici est le MAXIMUM des interactions, pas le 98ᵉ centile de
 *     la spécification. Sur une page qui reçoit trois clics, les deux valeurs
 *     se confondent ; sur une page très interactive, le maximum est plus
 *     sévère. La console écrit donc « INP (approximation) ».
 *  2. LCP, FCP et TTFB appartiennent au DOCUMENT, pas à la route. Après une
 *     navigation interne (le routeur de Next ne recharge rien), il n'y a pas de
 *     nouveau LCP : les vues suivantes les rendent à `null`. Un zéro y serait
 *     un mensonge, et une recopie de la valeur précédente en serait un autre.
 */

export type Vitals = {
  lcp_ms: number | null;
  fcp_ms: number | null;
  ttfb_ms: number | null;
  inp_ms: number | null;
  cls_millieme: number | null;
};

let lcp: number | null = null;
let fcp: number | null = null;
let ttfb: number | null = null;
let cls = 0;
let inp = 0;
let demarre = false;
/** Les mesures de chargement n'appartiennent qu'à la première vue du document. */
let dejaRendues = false;

function observer(type: string, rappel: (entrees: PerformanceEntryList) => void) {
  try {
    const po = new PerformanceObserver((liste) => rappel(liste.getEntries()));
    po.observe({ type, buffered: true } as PerformanceObserverInit);
    return po;
  } catch {
    // Un type d'entrée non pris en charge jette. Une mesure absente vaut
    // toujours mieux qu'une page qui casse pour une statistique.
    return null;
  }
}

export function demarrerVitals() {
  if (demarre || typeof window === "undefined") return;
  demarre = true;

  try {
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav) ttfb = Math.round(nav.responseStart);
  } catch {
    /* rien */
  }

  observer("paint", (entrees) => {
    for (const e of entrees) {
      if (e.name === "first-contentful-paint") fcp = Math.round(e.startTime);
    }
  });

  // Le LCP continue de bouger tant que rien n'a été touché. On garde la
  // dernière valeur et on la fige à la première interaction : c'est la règle de
  // la spécification, et sans elle une page lue longtemps finit par afficher un
  // LCP de plusieurs secondes qui ne correspond à rien de vécu.
  const poLcp = observer("largest-contentful-paint", (entrees) => {
    const derniere = entrees[entrees.length - 1];
    if (derniere) lcp = Math.round(derniere.startTime);
  });
  const figerLcp = () => poLcp?.disconnect();
  addEventListener("pointerdown", figerLcp, { once: true, capture: true });
  addEventListener("keydown", figerLcp, { once: true, capture: true });

  // CLS par FENÊTRES DE SESSION : cinq secondes au plus, une seconde d'écart
  // au plus entre deux décalages, et on garde la pire fenêtre. La somme brute
  // de tous les décalages, elle, punirait une page longue simplement parce
  // qu'elle est longue.
  let fenetre = 0;
  let debutFenetre = 0;
  let finFenetre = 0;
  observer("layout-shift", (entrees) => {
    for (const e of entrees as unknown as Array<PerformanceEntry & { value: number; hadRecentInput: boolean }>) {
      if (e.hadRecentInput) continue;
      if (fenetre && e.startTime - finFenetre < 1000 && e.startTime - debutFenetre < 5000) {
        fenetre += e.value;
        finFenetre = e.startTime;
      } else {
        fenetre = e.value;
        debutFenetre = e.startTime;
        finFenetre = e.startTime;
      }
      if (fenetre > cls) cls = fenetre;
    }
  });

  const interactions = new Map<number, number>();
  const noterInteraction = (entrees: PerformanceEntryList) => {
    for (const e of entrees as unknown as Array<PerformanceEntry & { interactionId?: number; duration: number }>) {
      const id = e.interactionId ?? 0;
      if (!id) continue;
      const pire = Math.max(interactions.get(id) ?? 0, e.duration);
      interactions.set(id, pire);
      if (pire > inp) inp = pire;
    }
  };
  observer("event", noterInteraction);
  observer("first-input", noterInteraction);
}

export function lireVitals(): Vitals {
  if (dejaRendues) {
    // Après une navigation interne : seules les mesures d'interaction ont
    // encore un sens, les mesures de chargement appartiennent au document.
    return {
      lcp_ms: null,
      fcp_ms: null,
      ttfb_ms: null,
      inp_ms: inp ? Math.round(inp) : null,
      cls_millieme: cls ? Math.round(cls * 1000) : null,
    };
  }
  dejaRendues = true;
  return {
    lcp_ms: lcp,
    fcp_ms: fcp,
    ttfb_ms: ttfb,
    inp_ms: inp ? Math.round(inp) : null,
    cls_millieme: cls ? Math.round(cls * 1000) : null,
  };
}
