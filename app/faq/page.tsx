import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, SITE_EMAIL, SITE_URL, webPageSchema, imageSociale } from "@/lib/seo";
import { faqSections, toutesLesQuestions } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ du logiciel de gestion boulangerie",
  description:
    "Toutes les questions sur Gramme : coût de revient, scan de factures, hygiène HACCP, allergènes, tarifs, données et mise en service.",
  keywords: [
    "FAQ logiciel boulangerie",
    "questions logiciel pâtisserie",
    "coût de revient boulangerie",
    "prix logiciel gestion boulangerie",
    "logiciel boulangerie HACCP",
    "mercuriale boulangerie",
  ],
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    images: imageSociale("/images/app/mercuriale.png", "La mercuriale de Gramme, prix de référence et tendance par matière"),
    title: "FAQ · logiciel de gestion boulangerie & pâtisserie",
    description:
      "Coûts, marges, sous-recettes, factures, stocks, tarifs, données, réglementation : les réponses en clair.",
    url: `${SITE_URL}/faq`,
  },
};

/**
 * Balisage `FAQPage` — une seule occurrence pour toutes les questions.
 *
 * Le nombre de questions n'est pas un défaut ici : c'est une page de
 * référence, et c'est exactement le format qu'un moteur génératif reprend.
 */
function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faq`,
    inLanguage: "fr-FR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#app` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntity: toutesLesQuestions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "FAQ Gramme",
            description:
              "Questions fréquentes sur le logiciel de gestion pour boulangeries et pâtisseries Gramme.",
            path: "/faq",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(),
        ]}
      />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="FAQ" />

        <section className="mt-6 rounded-3xl border border-[#dcead2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8 md:p-12">
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-5xl">
            Questions fréquentes
          </h1>
          <p className="mt-5 max-w-3xl text-base text-[#4d6952] md:text-lg">
            {toutesLesQuestions.length} réponses sur le coût de revient, les marges, les sous-recettes, le scan de
            factures, la mercuriale, les stocks, les tarifs, la reprise de vos données et la réglementation. Sans
            détour et sans promesse que le logiciel ne tient pas.
          </p>
          <p className="mt-4 text-sm text-[#6e9f55]">
            Votre question n&apos;y est pas ?{" "}
            <Link href="/contact" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
              Écrivez-nous
            </Link>{" "}
            : réponse sous 4 heures ouvrées.
          </p>
        </section>

        {/* Sommaire ancré : dix sections font une page longue, et une page longue
            sans point d'entrée se referme. Les ancres servent aussi aux moteurs,
            qui savent renvoyer directement sur la bonne section. */}
        <nav aria-label="Sommaire des questions" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {faqSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-flex rounded-full border border-[#a8cf8c]/60 bg-white px-4 py-1.5 text-sm font-semibold text-[#3e6134] transition-colors hover:bg-[#f3f9ee]"
                >
                  {section.titre}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 space-y-10 md:mt-14 md:space-y-14">
          {faqSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24" aria-labelledby={`${section.id}-titre`}>
              <h2 id={`${section.id}-titre`} className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
                {section.titre}
              </h2>
              <p className="mt-2 text-[#6e9f55]">{section.chapeau}</p>

              {/* `<details>` natif : chaque réponse reste dans le HTML servi, donc
                  lisible par un moteur, tout en gardant la page parcourable à
                  l'œil. Un accordéon en JavaScript qui masque le texte à la
                  source ferait perdre l'essentiel de l'intérêt de cette page. */}
              <dl className="mt-5 space-y-3">
                {section.entrees.map((entree) => (
                  <div
                    key={entree.q}
                    className="overflow-hidden rounded-2xl border border-[#dcead2] bg-white shadow-sm"
                  >
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-left">
                        <dt className="font-bold text-[#27421f]">{entree.q}</dt>
                        <span
                          aria-hidden
                          className="mt-0.5 shrink-0 text-xl font-black leading-none text-[#6e9f55] transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <dd className="border-t border-[#eef5e8] px-5 py-4 leading-relaxed text-[#4d6952]">
                        {entree.a}
                      </dd>
                    </details>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-[#dcead2] bg-[#f6fbf2] p-6 sm:p-8 md:mt-16 md:p-10">
          <h2 className="text-2xl font-bold text-[#2f4f26] md:text-3xl">
            Une question qui n&apos;est pas dans cette liste ?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#4d6952] md:text-lg">
            Posez-la. Si elle mérite d&apos;être ici, elle y sera : cette page est faite des questions que les
            artisans nous posent réellement. Écrivez à{" "}
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="font-semibold text-[#355329] underline-offset-2 hover:underline"
            >
              {SITE_EMAIL}
            </a>{" "}
            ou demandez une démonstration : une heure sur vos propres fiches répond souvent à tout d&apos;un coup.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021] transition-colors hover:bg-[#98c47a]"
            >
              Voir le déroulé d&apos;une démonstration
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-xl border border-[#a8cf8c] px-5 py-3 font-semibold text-[#355329] transition-colors hover:bg-white"
            >
              Nous écrire
            </Link>
          </div>
        </section>

        <RelatedLinks
          links={[
            { href: "/tarifs", label: "Consulter les tarifs" },
            { href: "/guides", label: "Les guides pour le laboratoire" },
            { href: "/securite", label: "Sécurité des données" },
          ]}
        />
      </main>
    </>
  );
}
