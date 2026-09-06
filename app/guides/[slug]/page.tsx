import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guides/GuideArticle";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllGuideSlugs, getGuideBySlug } from "@/content/guides";
import { articleSchema, guideFaqSchema, howToSchema } from "@/lib/guides";
import { breadcrumbSchema, imageSociale } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  const url = `https://gramme.app/guides/${guide.slug}`;
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: url },
    robots: guide.draft ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: ["Jeremy"],
      images: imageSociale(guide.ogImage, guide.title),
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [guide.ogImage],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const schemas: Record<string, unknown>[] = [];
  if (!guide.draft) {
    schemas.push(
      articleSchema(guide),
      guideFaqSchema(guide),
      breadcrumbSchema([
        { name: "Accueil", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: guide.title, path: `/guides/${guide.slug}` },
      ]),
    );
    const howto = howToSchema(guide);
    if (howto) schemas.push(howto);
  }

  return (
    <>
      {schemas.length > 0 ? <JsonLd data={schemas} /> : null}
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs
          currentLabel={guide.title}
          items={[
            { name: "Accueil", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: "#" },
          ]}
        />
        <GuideArticle guide={guide} />
      </main>
    </>
  );
}
