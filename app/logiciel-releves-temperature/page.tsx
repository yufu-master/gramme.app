import type { Metadata } from "next";
import { PageLogicielVue, metadonneesLogiciel } from "@/components/pages/PageLogiciel";
import { pageLogicielParChemin } from "@/content/logiciels";

// Route mince : tout le contenu vit dans `src/content/logiciels.ts` et tout le
// rendu dans `PageLogiciel`. Cinq pages écrites à la main auraient divergé.
const PAGE = pageLogicielParChemin("/logiciel-releves-temperature")!;

export const metadata: Metadata = metadonneesLogiciel(PAGE);

export default function LogicielRelevesTemperaturePage() {
  return <PageLogicielVue page={PAGE} />;
}
