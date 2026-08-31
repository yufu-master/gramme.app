import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_EMAIL, SUPPORT_EMAIL, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de gramme.app : données collectées via le site vitrine, finalités, bases légales, hébergement en Europe et vos droits RGPD.",
  alternates: { canonical: "https://gramme.app/politique-de-confidentialite" },
};

const sections: { title: string; body: ReactNode }[] = [
  {
    title: "1. Responsable du traitement",
    body: (
      <>
        <p>
          Le responsable du traitement des données collectées via le site <strong>gramme.app</strong> est l&apos;éditeur
          du service Gramme (ci-après « Gramme »). Contact :{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#355329] underline-offset-2 hover:underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
        <p className="mt-3">
          Les mentions d&apos;identité (raison sociale, numéro d&apos;immatriculation, adresse) figurent sur la page{" "}
          <Link href="/mentions-legales" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
            Mentions légales
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    title: "2. Deux traitements distincts",
    body: (
      <>
        <p>
          <strong>Visiteurs du site vitrine (gramme.app)</strong> : cette politique s&apos;applique à la navigation sur
          le site public et aux demandes envoyées via le formulaire de contact.
        </p>
        <p className="mt-3">
          <strong>Utilisateurs de l&apos;application Gramme</strong> : les données des établissements clients
          (recettes, stocks, factures, comptes, marges) sont traitées dans le cadre du contrat signé avec chaque
          structure. Elles restent la propriété du client : Gramme ne les revend pas, ne les partage pas avec d&apos;autres
          établissements et ne les monétise pas auprès de tiers. Elles relèvent de conditions et d&apos;une politique
          propres à l&apos;application, distinctes du présent document. Voir aussi la page{" "}
          <Link href="/securite" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
            Sécurité
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    title: "3. Données collectées et origine",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Formulaire de contact</strong> : nom, adresse e-mail, sujet, nom de structure, état de la structure,
          message éventuel, saisis par vous.
        </li>
        <li>
          <strong>Mesure d&apos;audience</strong> : statistiques agrégées de fréquentation (pages vues, pays
          approximatif, source de trafic), sans cookie et sans identifiant persistant, lorsque l&apos;outil est activé.
        </li>
        <li>
          <strong>Journaux techniques</strong> : données minimales nécessaires au fonctionnement et à la sécurité du
          site (ex. adresse IP traitée par l&apos;hébergeur), pour une durée limitée.
        </li>
      </ul>
    ),
  },
  {
    title: "4. Finalités et bases légales",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Répondre à votre demande de contact ou de démonstration : <em>intérêt légitime</em> / mesures précontractuelles
          (art. 6.1.b et 6.1.f RGPD).
        </li>
        <li>
          Créer un dossier prospect dans notre outil interne pour assurer le suivi commercial : <em>intérêt légitime</em>.
        </li>
        <li>
          Mesurer l&apos;audience du site de façon anonymisée pour améliorer le contenu : <em>intérêt légitime</em>,
          sans cookie.
        </li>
        <li>
          Sécurité, prévention des abus et des envois automatisés : <em>intérêt légitime</em>.
        </li>
      </ul>
    ),
  },
  {
    title: "5. Destinataires et sous-traitants",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Équipe Gramme (accès limité au besoin).</li>
        <li>Hébergeur du site (infrastructure européenne ou équivalente selon le prestataire).</li>
        <li>Supabase (backend CRM / application) : données de prospect issues du formulaire.</li>
        <li>Resend (envoi d&apos;e-mails transactionnels de notification).</li>
        <li>Plausible Analytics (mesure d&apos;audience sans cookie), lorsque configuré.</li>
      </ul>
    ),
  },
  {
    title: "6. Hébergement et localisation",
    body: (
      <p>
        Nous privilégions des prestataires situés dans l&apos;Union européenne ou offrant des garanties adaptées pour
        les transferts. Pour le détail de l&apos;hébergement applicatif, voir la page{" "}
        <Link href="/securite" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
          Sécurité
        </Link>
        .
      </p>
    ),
  },
  {
    title: "7. Durées de conservation",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Demandes de contact / prospects : jusqu&apos;à 3 ans après le dernier échange, sauf opposition.</li>
        <li>Journaux techniques : durée courte nécessaire à la sécurité (en général quelques semaines à quelques mois).</li>
        <li>Statistiques d&apos;audience : données agrégées, sans profil individu.</li>
      </ul>
    ),
  },
  {
    title: "8. Vos droits",
    body: (
      <>
        <p>
          Vous disposez des droits d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et
          de portabilité lorsque applicable. Pour les exercer :{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#355329] underline-offset-2 hover:underline">
            {SITE_EMAIL}
          </a>{" "}
          ou{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-[#355329] underline-offset-2 hover:underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
        <p className="mt-3">
          Vous pouvez aussi introduire une réclamation auprès de la CNIL (
          <a href="https://www.cnil.fr" className="underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
            www.cnil.fr
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    title: "9. Cookies et mesure d'audience",
    body: (
      <p>
        Le site vitrine n&apos;utilise <strong>pas de cookies publicitaires</strong> ni de traceurs nécessitant un
        consentement. La mesure d&apos;audience éventuelle (Plausible) fonctionne sans cookie et sans identifiant
        personnel : <strong>aucun bandeau de consentement n&apos;est affiché</strong>, conformément à cette approche.
        Si un outil de suivi comportemental ou publicitaire était ajouté un jour, un bandeau conforme serait alors mis
        en place avant tout dépôt.
      </p>
    ),
  },
  {
    title: "10. Mise à jour",
    body: <p>Cette politique peut être mise à jour. La version publiée sur cette page fait foi. Dernière mise à jour : août 2026.</p>,
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Politique de confidentialité",
          description: "Politique de confidentialité du site gramme.app",
          path: "/politique-de-confidentialite",
        })}
      />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Politique de confidentialité" />
        <article className="mt-8 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-black text-[#27421f] md:text-4xl">Politique de confidentialité</h1>
          <p className="mt-4 max-w-3xl text-[#4d6952]">
            Document clair sur les données personnelles traitées via le site vitrine gramme.app, sans jargon inutile.
          </p>
          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-[#2f4f26]">{section.title}</h2>
                <div className="mt-3 leading-relaxed text-[#4d6952]">{section.body}</div>
              </section>
            ))}
          </div>
        </article>
        <RelatedLinks
          links={[
            { href: "/securite", label: "Sécurité et hébergement" },
            { href: "/mentions-legales", label: "Mentions légales" },
            { href: "/contact", label: "Nous contacter" },
          ]}
        />
      </main>
    </>
  );
}
