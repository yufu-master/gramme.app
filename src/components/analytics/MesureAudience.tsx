"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { demarrerVue, terminerVue } from "@/lib/mesure/collecteur";

/**
 * Monte la mesure d'audience et suit les navigations internes.
 *
 * `usePathname` SEUL, jamais `useSearchParams`. Le second oblige Next à
 * basculer l'arbre en rendu client : les dix-huit pages statiques du site
 * sortiraient du pré-rendu, et il faudrait en plus envelopper ce composant dans
 * un `<Suspense>`. Les paramètres UTM se lisent très bien dans l'effet, par
 * `window.location.search`, qui donne exactement la même chose sans rien coûter.
 */
export function MesureAudience() {
  const chemin = usePathname();

  useEffect(() => {
    demarrerVue(chemin ?? "/", document.title);
    return () => terminerVue("navigation");
  }, [chemin]);

  return null;
}
