import { PageCarte, metadonneesCarte } from "@/components/arrivee/PageCarte";

export const metadata = metadonneesCarte("jeremy");

export default function Page() {
  return <PageCarte identifiant="jeremy" />;
}
