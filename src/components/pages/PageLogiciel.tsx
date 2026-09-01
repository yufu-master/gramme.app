import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { FeatureIcon } from "@/components/features/FeatureIcon";
import { getFeature, featurePath } from "@/content/features";
import type { PageLogiciel } from "@/content/logiciels";
import { SITE_URL, imageSociale, webPageSchema } from "@/lib/seo";

/**
 * Le rendu commun des pages « quel logiciel pour… ».
 *
 * UNE SEULE IMPLÉMENTATION, parce que cinq pages écrites à la main auraient
 * divergé au premier ajustement de style, exactement comme les quatre copies du
 * coût de recette avant qu'on les réunisse. Chaque route ne fait que désigner
 * son entrée de `pagesLogiciel` ; tout ce qui se voit est ici.
 *
 * `/logiciel-patisserie` reste à part : elle porte un exemple chiffré propre au
 * laboratoire (l'entremets à quatre niveaux) qui n'a d'équivalent nulle part
 * ailleurs. La ramener dans ce gabarit lui ferait perdre ce qui la rend bonne.
 */

export function metadonneesLogiciel(p: PageLogiciel): Metadata {
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: [...p.keywords],
    alternates: { canonical: `${SITE_URL}${p.path}` },
    // Rempli EN ENTIER : dans l'App Router, un objet imbriqué de l'enfant
    // remplace celui du parent. Onze pages du site avaient perdu leur image
    // sociale exactement comme ça, et partaient sans vignette sur LinkedIn.
    openGraph: {
      title: `${p.nom} | Gramme`,
      description: p.metaDescription,
      url: `${SITE_URL}${p.path}`,
      type: "website",
      locale: "fr_FR",
      siteName: "Gramme",
      images: imageSociale(p.image.src, p.image.alt),
    },
  };
}

export function PageLogicielVue({ page }: { page: PageLogiciel }) {
  const modules = page.modules.map(getFeature).filter((f): f is NonNullable<typeof f> => Boolean(f));

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: `${page.metaTitle} | Gramme`,
            description: page.metaDescription,
            path: page.path,
          }),
          // Le FAQPage est le type de données structurées le plus repris par
          // les moteurs génératifs : c'est le format dans lequel ils puisent le
          // plus volontiers une réponse à citer.
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs
          currentLabel={page.nom}
          items={[
            { name: "Accueil", path: "/" },
            { name: page.nom, path: page.path },
          ]}
        />

        <section className="mt-6 rounded-3xl border border-[#dcead2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8 md:p-12">
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-5xl">{page.h1}</h1>
          {page.intro.map((paragraphe) => (
            <p key={paragraphe.slice(0, 40)} className="mt-5 max-w-2xl text-base text-[#4d6952] md:text-lg">
              {paragraphe}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-[#264021] px-5 py-3 font-semibold text-white transition hover:bg-[#355329]"
            >
              Demander une démonstration
            </Link>
            <Link
              href="/tarifs"
              className="rounded-xl border border-[#d8e6cf] bg-white px-5 py-3 font-semibold text-[#355329] transition hover:bg-[#f6fbf2]"
            >
              Voir les tarifs
            </Link>
          </div>
        </section>

        <figure className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#dcead2] bg-[#f6fbf2] shadow-[0_20px_60px_rgba(34,60,23,0.16)] sm:aspect-[16/9]">
          <Image
            src={page.image.src}
            alt={page.image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 94vw, 960px"
            className="object-cover object-top"
          />
        </figure>

        <section className="mt-12 md:mt-16" aria-labelledby="problemes-title">
          <h2 id="problemes-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
            Ce qui coince, avant même de chercher un outil
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {page.problemes.map((item) => (
              <article key={item.titre} className="rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-lg font-bold text-[#355329]">{item.titre}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4d6952]">{item.texte}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 md:mt-16" aria-labelledby="reponses-title">
          <h2 id="reponses-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
            Ce que Gramme fait, précisément
          </h2>
          <ol className="mt-6 space-y-4">
            {page.reponses.map((item, index) => (
              <li
                key={item.titre}
                className="rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-black tabular-nums text-[#6e9f55]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-[#355329]">{item.titre}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#4d6952]">{item.texte}</p>
              </li>
            ))}
          </ol>
        </section>

        {modules.length ? (
          <section className="mt-12 md:mt-16" aria-labelledby="modules-title">
            <h2 id="modules-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
              Les modules concernés
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {modules.map((feature) => (
                <Link
                  key={feature.slug}
                  href={featurePath(feature.slug)}
                  className="group rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm transition hover:bg-[#f6fbf2] sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <FeatureIcon name={feature.icon} />
                    <h3 className="text-lg font-bold text-[#355329] group-hover:underline">{feature.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#4d6952]">{feature.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12 md:mt-16" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
            Questions fréquentes
          </h2>
          <dl className="mt-6 space-y-4">
            {page.faq.map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#dcead2] bg-white p-5 shadow-sm sm:p-6">
                <dt className="text-base font-bold text-[#355329]">{item.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-[#4d6952]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 rounded-3xl border border-[#dcead2] bg-[#f6fbf2] p-6 sm:p-8 md:mt-16">
          <h2 className="text-2xl font-bold text-[#27421f]">Le voir sur vos propres fiches</h2>
          <p className="mt-3 max-w-2xl text-[#4d6952]">
            Une démonstration dure une heure, et on y importe vos recettes en direct plutôt que de
            vous montrer les nôtres.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-[#264021] px-5 py-3 font-semibold text-white transition hover:bg-[#355329]"
          >
            Demander une démonstration
          </Link>
        </section>

        <RelatedLinks links={page.liens} />
      </main>
    </>
  );
}
