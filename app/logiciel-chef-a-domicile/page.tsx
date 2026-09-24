import type { Metadata } from "next";
import { PageLogicielVue, metadonneesLogiciel } from "@/components/pages/PageLogiciel";
import { pageLogicielParChemin } from "@/content/logiciels";

// Route mince : tout le contenu vit dans `src/content/logiciels.ts` et tout le
// rendu dans `PageLogiciel`.
const PAGE = pageLogicielParChemin("/logiciel-chef-a-domicile")!;

export const metadata: Metadata = metadonneesLogiciel(PAGE);

export default function LogicielChefADomicilePage() {
  return <PageLogicielVue page={PAGE} />;
}
