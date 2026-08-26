export type GuideFaq = { q: string; a: string };

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "placeholder"; id: string; label: string; hint: string }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "howto-steps"; id: string; name: string; steps: { name: string; text: string }[] };

export type Guide = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  ogImage: string;
  summary: string;
  intro: string;
  blocks: GuideBlock[];
  faqs: GuideFaq[];
  /**
   * true tant qu'il reste des ⟨…⟩ à remplir avec des mesures réelles.
   * Les brouillons sont exclus du sitemap, de l'index /guides et de llms.txt.
   */
  draft: boolean;
  howTo?: {
    name: string;
    description: string;
    steps: { name: string; text: string }[];
  };
  relatedSlug: string;
  relatedLabel: string;
};

export const GUIDE_AUTHOR = {
  name: "Jeremy",
  jobTitle: "Chef pâtissier, responsable R&D — co-fondateur de Gramme",
  url: "/a-propos-de-gramme",
  image: "/images/jeremy-chef-rd.jpg",
} as const;

const PLACEHOLDER_RE = /⟨[^⟩]*⟩/;

export function guideContainsPlaceholder(guide: Guide): boolean {
  const chunks: string[] = [guide.title, guide.description, guide.intro, guide.summary];
  for (const block of guide.blocks) {
    if (block.type === "p" || block.type === "h2") chunks.push(block.text);
    if (block.type === "placeholder") return true;
    if (block.type === "table") {
      chunks.push(...block.headers, ...block.rows.flat());
    }
    if (block.type === "howto-steps") {
      for (const step of block.steps) {
        chunks.push(step.name, step.text);
      }
    }
  }
  for (const faq of guide.faqs) {
    chunks.push(faq.q, faq.a);
  }
  return chunks.some((c) => PLACEHOLDER_RE.test(c));
}

/** Échoue à l'import si un article publié contient encore ⟨…⟩. */
export function assertPublishedGuidesHaveNoPlaceholders(guides: Guide[]): void {
  for (const guide of guides) {
    if (guide.draft) continue;
    if (guideContainsPlaceholder(guide)) {
      throw new Error(
        `[guides] L'article publié « ${guide.slug} » contient encore un emplacement ⟨…⟩. Passez-le en draft: true ou remplacez les placeholders.`,
      );
    }
  }
}
