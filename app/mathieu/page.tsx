import { PageCarte, metadonneesCarte } from "@/components/arrivee/PageCarte";

export const metadata = metadonneesCarte("mathieu");

export default function Page() {
  return <PageCarte identifiant="mathieu" />;
}
