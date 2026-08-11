import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPageContent from "@/components/pages/Contact";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Démo logiciel boulangerie",
  description:
    "Contactez Gramme pour une démonstration du logiciel de gestion boulangerie et pâtisserie. Réponse sous 4 heures ouvrées.",
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
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 pt-6 sm:px-5 sm:pt-8 lg:pb-16">
        <Breadcrumbs currentLabel="Contact" />
        <div className="mt-6">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-[#f6fbf2]" aria-hidden />}>
            <ContactPageContent />
          </Suspense>
        </div>
        <RelatedLinks
          links={[
            { href: "/comment-ca-marche", label: "Comment marche le logiciel" },
            { href: "/integrations", label: "Intégrations à venir" },
            { href: "/securite", label: "Sécurité des données" },
          ]}
        />
      </main>
    </>
  );
}
