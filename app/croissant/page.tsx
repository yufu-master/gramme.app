import { PageArrivee } from "@/components/arrivee/PageArrivee";
import { metadonneesArrivee } from "@/components/arrivee/metadonnees";

export const metadata = metadonneesArrivee("/croissant");

export default function Page() {
  return <PageArrivee chemin="/croissant" />;
}
