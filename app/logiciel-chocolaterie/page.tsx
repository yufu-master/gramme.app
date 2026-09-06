import type { Metadata } from "next";
import { PageLogicielVue, metadonneesLogiciel } from "@/components/pages/PageLogiciel";
import { pageLogicielParChemin } from "@/content/logiciels";

// Route mince : tout le contenu vit dans `src/content/logiciels.ts` et tout le
// rendu dans `PageLogiciel`. Sept pages écrites à la main auraient divergé.
const PAGE = pageLogicielParChemin("/logiciel-chocolaterie")!;

export const metadata: Metadata = metadonneesLogiciel(PAGE);

export default function LogicielChocolateriePage() {
  return <PageLogicielVue page={PAGE} />;
}
