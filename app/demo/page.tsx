import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Démo logiciel boulangerie",
  description:
    "Réservez une démonstration Gramme : voyez recettes, mercuriale, stock et marges adaptés à votre laboratoire artisanal.",
  alternates: { canonical: "https://gramme.app/demo" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Démonstration"
      description="Pour une démonstration, utilisez le formulaire de contact : nous revenons vers vous sous 4 heures ouvrées."
      links={[
        { href: "/contact", label: "Demander une démonstration" },
        { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
        { href: "/tarifs", label: "Consulter les tarifs" },
      ]}
    />
  );
}
