import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe Gramme pour une démonstration, une question tarifaire ou un accompagnement au déploiement dans votre boulangerie ou pâtisserie.",
  alternates: {
    canonical: "https://gramme.app/contact",
  },
  openGraph: {
    title: "Contact | Gramme",
    description:
      "Échangez avec l'équipe Gramme pour piloter recettes, coûts et marges dans votre laboratoire.",
    url: "https://gramme.app/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
