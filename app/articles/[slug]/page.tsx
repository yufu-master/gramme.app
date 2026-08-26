import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guides/GuideArticle";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllArticleSlugs, getArticleBySlug } from "@/content/articles";
import { articleSchema, guideFaqSchema, howToSchema } from "@/lib/guides";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `${SITE_URL}/articles/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    robots: article.draft ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ["Jeremy"],
      images: [{ url: article.ogImage, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.ogImage],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const schemas: Record<string, unknown>[] = [];
  if (!article.draft) {
    // `articleSchema` construit l'URL canonique à partir du slug ET de la base :
    // sans le second argument, les articles se déclareraient sous /guides/ et
    // deux URL revendiqueraient la même page.
    schemas.push(
      articleSchema(article, "/articles"),
      guideFaqSchema(article),
      breadcrumbSchema([
        { name: "Accueil", path: "/" },
        { name: "Articles", path: "/articles" },
        { name: article.title, path: `/articles/${article.slug}` },
      ]),
    );
    const howto = howToSchema(article);
    if (howto) schemas.push(howto);
  }

  return (
    <>
      {schemas.length > 0 ? <JsonLd data={schemas} /> : null}
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-6 sm:px-5 sm:pt-8">
        <Breadcrumbs
          currentLabel={article.title}
          items={[
            { name: "Accueil", path: "/" },
            { name: "Articles", path: "/articles" },
            { name: article.title, path: "#" },
          ]}
        />
        <GuideArticle guide={article} rubrique="Article" base="/articles" />
      </main>
    </>
  );
}
