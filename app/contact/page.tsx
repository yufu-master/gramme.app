import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPageContent from "@/components/pages/Contact";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema, imageSociale } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact · Démo logiciel boulangerie",
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
    images: imageSociale("/images/app/recette-fiche.png", "Une fiche technique dans Gramme"),
    title: "Contact | Gramme · Logiciel boulangerie",
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
        {/* Le titre est ICI, dans la page serveur, et pas dans le formulaire :
            celui-ci lit `useSearchParams`, donc Next sert son repli Suspense
            dans le HTML et tout ce qu'il contient, h1 compris, n'existait que
            pour un navigateur. Mesuré le 03/09/2026 : la page était la seule du
            site sans h1 pour un robot. */}
        <header className="mt-6">
          <h1 className="text-2xl font-black tracking-tight text-[#264021] sm:text-3xl">
            Contact : demandez une démonstration
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-[var(--muted-foreground)] sm:text-base">
            Une heure en visio, avec vos propres fiches et une de vos factures. Réponse sous quatre
            heures ouvrées.
          </p>
        </header>
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
