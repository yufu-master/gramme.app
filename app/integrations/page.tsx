import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { IntegrationCard } from "@/components/integrations/IntegrationCard";
import { INTEGRATIONS, INTEGRATION_CATEGORIES } from "@/lib/integrations";
import { webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Intégrations à venir — caisse & compta",
  description:
    "Gramme prépare des connexions avec les caisses et outils comptables des boulangers-pâtissiers. Votez pour prioriser Popina, Pennylane, Zettle et d'autres.",
  alternates: { canonical: "https://gramme.app/integrations" },
  openGraph: {
    title: "Intégrations Gramme | À venir",
    description: "Votez pour les prochaines connexions caisse, comptabilité et facturation.",
    url: "https://gramme.app/integrations",
  },
};

export default function IntegrationsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Intégrations Gramme",
          description: "Intégrations à venir avec caisses, comptabilité et facturation.",
          path: "/integrations",
        })}
      />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs currentLabel="Intégrations" />

        <section className="mt-8 rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-black text-[#27421f] md:text-4xl">
            Intégrations compatibles
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[#4d6952]">
            Gramme se concentre d&apos;abord sur recettes, coûts et marges. Ensuite : brancher les outils que vous
            utilisez déjà — caisse, comptabilité, facturation. Votez pour nous aider à prioriser la roadmap.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">
              Demander une démo
            </Link>
            <Link
              href="/contact?sujet=Autre&integration=Suggestion"
              className="rounded-xl border border-[#d8e6cf] px-5 py-3 font-semibold text-[#355329]"
            >
              Suggérer une intégration
            </Link>
          </div>
        </section>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {INTEGRATION_CATEGORIES.map((cat) => (
            <article key={cat.id} className="rounded-2xl border border-[#dcead2] bg-[#f6fbf2] p-5">
              <h2 className="text-lg font-bold text-[#355329]">{cat.label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4d6952]">{cat.description}</p>
            </article>
          ))}
        </div>

        {INTEGRATION_CATEGORIES.map((cat) => {
          const items = INTEGRATIONS.filter((i) => i.category === cat.id);
          if (!items.length) return null;
          return (
            <section key={cat.id} className="mt-12" aria-labelledby={`cat-${cat.id}`}>
              <h2 id={`cat-${cat.id}`} className="text-2xl font-bold text-[#27421f]">
                {cat.label}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((integration) => (
                  <IntegrationCard key={integration.id} integration={integration} />
                ))}
              </div>
            </section>
          );
        })}

        <section className="mt-14 rounded-3xl bg-[#264021] p-6 text-white sm:p-8">
          <h2 className="text-2xl font-bold md:text-3xl">Votre outil n&apos;est pas dans la liste ?</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            Dites-nous ce que vous utilisez au quotidien. On priorise les connexions qui aident vraiment les ateliers.
          </p>
          <Link
            href="/contact?sujet=Autre&integration=Suggestion"
            className="mt-6 inline-flex rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]"
          >
            Demander une intégration
          </Link>
        </section>

        <RelatedLinks
          links={[
            { href: "/comment-ca-marche", label: "Comment marche Gramme" },
            { href: "/tarifs", label: "Tarifs" },
            { href: "/contact", label: "Demander une démonstration" },
          ]}
        />
      </main>
    </>
  );
}
