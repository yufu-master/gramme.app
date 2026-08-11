import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Fonctionnalités logiciel boulangerie",
  description:
    "Découvrez bientôt les fonctionnalités Gramme : fiches techniques, scan de factures, mercuriale, stock, production et marges pour boulangers-pâtissiers.",
  alternates: { canonical: "https://gramme.app/fonctionnalites" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Fonctionnalités"
      description="La page dédiée aux fonctionnalités arrive bientôt. En attendant, parcourez le parcours produit ou demandez une démo."
      links={[
        { href: "/#fonctionnalites", label: "Aperçu des fonctionnalités Gramme" },
        { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
        { href: "/contact", label: "Demander une démonstration" },
      ]}
    />
  );
}
