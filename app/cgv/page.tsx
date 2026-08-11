import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente Gramme pour le logiciel de gestion boulangerie et pâtisserie. Page en cours de finalisation.",
  alternates: { canonical: "https://gramme.app/cgv" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <ComingSoonPage
      title="CGV"
      description="Les conditions générales de vente sont en cours de finalisation. Pour toute question contractuelle, contactez-nous."
      links={[
        { href: "/mentions-legales", label: "Mentions légales" },
        { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
        { href: "/contact", label: "Nous contacter" },
      ]}
    />
  );
}
