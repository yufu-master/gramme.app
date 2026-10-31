import type { Metadata } from "next";
import { pageArrivee } from "@/content/arrivee";
import { SITE_URL, imageSociale, ogPage } from "@/lib/seo";

/**
 * Le `openGraph` est rempli en entier (règle du site : un objet imbriqué
 * REMPLACE celui du gabarit). La page porte `noindex`, mais un lien partagé
 * par WhatsApp doit quand même sortir avec sa vignette.
 */
export function metadonneesArrivee(chemin: string): Metadata {
  const page = pageArrivee(chemin);
  const url = `${SITE_URL}${chemin}`;
  return {
    title: page.titreOnglet,
    description: page.description,
    robots: { index: false, follow: false },
    alternates: { canonical: url },
    openGraph: ogPage({
      images: imageSociale(page.image.src, page.image.alt),
      title: page.titreOnglet,
      description: page.description,
      url,
    }),
  };
}
