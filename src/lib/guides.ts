import type { Guide, GuideBlock } from "@/content/guides/types";
import { GUIDE_AUTHOR } from "@/content/guides/types";
import { SITE_URL } from "@/lib/seo";

export function slugifyHeading(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function guideToc(blocks: GuideBlock[]): { id: string; text: string }[] {
  return blocks.filter((b): b is Extract<GuideBlock, { type: "h2" }> => b.type === "h2").map((b) => ({
    id: b.id,
    text: b.text,
  }));
}

export function articleSchema(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: [`${SITE_URL}${guide.ogImage}`],
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    inLanguage: "fr-FR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/guides/${guide.slug}`,
    },
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#jeremy`,
      name: GUIDE_AUTHOR.name,
      jobTitle: GUIDE_AUTHOR.jobTitle,
      url: `${SITE_URL}${GUIDE_AUTHOR.url}`,
    },
    // Référence, pas recopie : le graphe du site décrit déjà l'éditeur avec son
    // SIREN et son adresse. Un second objet `Organization` planté ici crée une
    // deuxième entité concurrente, plus pauvre, sur chaque guide.
    publisher: { "@id": `${SITE_URL}/#organization` },
    keywords: guide.keywords.join(", "),
  };
}

export function guideFaqSchema(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function howToSchema(guide: Guide) {
  if (!guide.howTo) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.howTo.name,
    description: guide.howTo.description,
    step: guide.howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function formatGuideDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
