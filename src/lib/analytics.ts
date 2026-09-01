import { enregistrerEvenement } from "./mesure/collecteur";

/**
 * Signature INCHANGÉE, corps remplacé. Les huit appels déjà en place dans le
 * site (`cta_demo_click`, `contact_submit`, `feature_detail_click`,
 * `integration_vote`) n'ont pas bougé d'une ligne : c'est ce qui rend le
 * passage de Plausible à la mesure maison sans risque pour le reste du site.
 *
 * Et ils ne coûtent plus rien en réseau : l'événement est mis de côté et part
 * avec la balise de fin de la page.
 */
export function trackEvent(name: string, props?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  enregistrerEvenement(name, props);
}
