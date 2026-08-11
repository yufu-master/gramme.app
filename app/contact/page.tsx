import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Démo logiciel boulangerie",
  description:
    "Contactez Gramme pour une démonstration du logiciel de gestion boulangerie et pâtisserie, une question tarifaire ou un accompagnement au déploiement.",
  keywords: [
    "démonstration logiciel boulangerie",
    "contact Gramme",
    "essai logiciel pâtisserie",
    "devis ERP boulangerie",
  ],
  alternates: {
    canonical: "https://gramme.app/contact",
  },
  openGraph: {
    title: "Contact | Gramme — Logiciel boulangerie",
    description:
      "Échangez avec l'équipe Gramme pour piloter recettes, coûts et marges dans votre laboratoire.",
    url: "https://gramme.app/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Contact Gramme",
            description: "Demande de démonstration et contact pour le logiciel de gestion boulangerie Gramme.",
            path: "/contact",
            type: "ContactPage",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactPageContent />
    </>
  );
}
