import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureIcon } from "@/components/features/FeatureIcon";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { features, featurePath, getFeature } from "@/content/features";
import { SITE_URL, webPageSchema } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return features.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) return {};

  const url = `${SITE_URL}${featurePath(feature.slug)}`;

  return {
    title: feature.metaTitle,
    description: feature.metaDescription,
    keywords: feature.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${feature.name} | Gramme`,
      description: feature.metaDescription,
      url,
      images: [{ url: feature.image.src, alt: feature.image.alt }],
    },
  };
}

export default async function FeaturePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();

  const siblings = features.filter((item) => item.slug !== feature.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: `${feature.metaTitle} | Gramme`,
            description: feature.metaDescription,
            path: featurePath(feature.slug),
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: feature.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs
          currentLabel={feature.name}
          items={[
            { name: "Accueil", path: "/" },
            { name: "Fonctionnalités", path: "/fonctionnalites" },
            { name: feature.name, path: featurePath(feature.slug) },
          ]}
        />

        <section className="mt-6 rounded-3xl border border-[#dcead2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(58,92,39,0.08)] sm:p-8 md:p-12">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#a8cf8c]/60 bg-[#a8cf8c]/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#3e6134]">
            <FeatureIcon name={feature.icon} className="size-3.5" />
            Fonctionnalité
          </p>
          <h1 className="text-3xl font-black leading-tight text-[#27421f] md:text-5xl">{feature.h1}</h1>
          <p className="mt-5 max-w-2xl text-base text-[#4d6952] md:text-lg">{feature.intro}</p>
          <ul className="mt-7 grid gap-2 sm:grid-cols-2">
            {feature.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm text-[#4d6952]">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-[#6e9f55]" />
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        <figure className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#dcead2] bg-[#f6fbf2] shadow-[0_20px_60px_rgba(34,60,23,0.16)] sm:aspect-[16/9]">
          <Image
            src={feature.image.src}
            alt={feature.image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 94vw, 960px"
            className="object-cover object-top"
          />
        </figure>

        <div className="mt-10 space-y-5 md:mt-14">
          {feature.sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-[#dcead2] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-[#2f4f26] md:text-2xl">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-[#4d6952] md:text-lg">{section.text}</p>
            </section>
          ))}
        </div>

        <section className="mt-12 md:mt-14" aria-labelledby="feature-faq-title">
          <h2 id="feature-faq-title" className="text-2xl font-bold text-[#27421f] md:text-3xl">
            Questions fréquentes
          </h2>
          <dl className="mt-6 space-y-4">
            {feature.faq.map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#dcead2] bg-white p-5">
                <dt className="font-bold text-[#355329]">{item.q}</dt>
                <dd className="mt-2 leading-relaxed text-[#4d6952]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 rounded-3xl bg-[#264021] p-6 text-white sm:p-8 md:mt-16 md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">Voir {feature.name.toLowerCase()} sur votre activité</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            On échange sur votre laboratoire, vos recettes et vos priorités — sans engagement.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-[#a8cf8c] px-5 py-3 font-semibold text-[#264021]">
              Demander une démonstration
            </Link>
            <Link href="/tarifs" className="rounded-xl border border-white/30 px-5 py-3 font-semibold text-white">
              Voir les tarifs
            </Link>
          </div>
        </section>

        <RelatedLinks
          title="Les autres modules"
          links={[
            ...siblings.map((item) => ({ href: featurePath(item.slug), label: item.name })),
          ]}
        />
        <p className="mt-6 text-sm text-[var(--muted-foreground)]">
          <Link href="/fonctionnalites" className="font-semibold text-[#355329] underline-offset-2 hover:underline">
            Revenir à toutes les fonctionnalités
          </Link>
        </p>
      </main>
    </>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M4 10.5 8 14l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
