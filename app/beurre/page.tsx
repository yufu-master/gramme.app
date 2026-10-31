import { PageArrivee } from "@/components/arrivee/PageArrivee";
import { metadonneesArrivee } from "@/components/arrivee/metadonnees";

export const metadata = metadonneesArrivee("/beurre");

export default function Page() {
  return <PageArrivee chemin="/beurre" />;
}
