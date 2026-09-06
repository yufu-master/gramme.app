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
  /**
   * Les liens de fin d'article, en plus du lien latéral `relatedSlug`.
   *
   * Le bloc « Continuer » était codé en dur — fonctionnalités, tarifs,
   * sécurité — et `relatedSlug` se résout dans le MÊME dossier : un guide ne
   * pouvait lier qu'un guide, un article qu'un article, et aucun ne remontait
   * vers sa page pilier. Les pages métier descendaient vers les guides, jamais
   * l'inverse : le maillage était à sens unique.
   *
   * Facultatif. Quand il est absent, les liens en dur d'avant s'affichent
   * toujours : aucun des contenus publiés ne change tant qu'on ne l'a pas
   * rempli.
   */
  liens?: { href: string; label: string }[];
  relatedSlug: string;
  relatedLabel: string;
};

export const GUIDE_AUTHOR = {
  name: "Jeremy",
  jobTitle: "Chef pâtissier, responsable R&D, co-fondateur de Gramme",
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

/**
 * Le tiret cadratin ne passe pas en contenu publié.
 *
 * Ce n'est pas une faute de français : c'est de la typographie correcte, et
 * aucun moteur ne la pénalise. C'est un choix de voix de marque, posé par
 * Clermont le 31/08/2026 — le tiret cadratin est devenu un marqueur
 * reconnaissable de texte de machine, et une page de vente n'a rien à gagner à
 * en porter la trace.
 *
 * DEUX EXCEPTIONS, et elles ne sont pas négociables :
 *
 * 1. **Les citations.** `comparatif.ts` cite les éditeurs concurrents mot pour
 *    mot (« 0 installation requise — 100 % cloud »). Réécrire une citation dans
 *    un comparatif, c'est déformer les propos d'un tiers : la publicité
 *    comparative l'interdit, et c'est de toute façon malhonnête. Le contrôle
 *    saute donc tout ce qui est entre guillemets français.
 * 2. **Les valeurs vides.** Dans un tableau de coûts, « — » veut dire « rien »,
 *    exactement comme dans un tableur. Une virgule n'y aurait aucun sens.
 *
 * Le site n'a pas de tests : ce contrôle s'exécute à l'import et fait échouer
 * le BUILD, ce qui l'attrape plus tôt qu'une suite de tests ne le ferait.
 */
const CITATION = /«[^»]*»/g;

export function contientTiretCadratin(texte: string): boolean {
  // Une cellule de tableau qui vaut « — » est une VALEUR VIDE, pas de la prose :
  // dans un tableau de coûts, c'est la façon d'écrire « rien », exactement comme
  // dans un tableur. Le contrôle reçoit les cellules déjà analysées, sans leurs
  // guillemets : il faut donc comparer la valeur entière, pas chercher `"—"`.
  const nu = texte.trim().replace(/^\*\*|\*\*$/g, "").trim();
  if (nu === "—") return false;
  return texte.replace(CITATION, "").includes("—");
}

/** Échoue à l'import si un article publié contient un tiret cadratin de prose. */
export function assertPublishedGuidesHaveNoEmDash(guides: Guide[]): void {
  for (const guide of guides) {
    if (guide.draft) continue;
    const morceaux: (string | undefined)[] = [guide.title, guide.description, guide.summary, guide.intro];
    for (const block of guide.blocks) {
      if ("text" in block && typeof block.text === "string") morceaux.push(block.text);
      if (block.type === "table") {
        morceaux.push(block.caption, ...block.headers, ...block.rows.flat());
      }
      if (block.type === "howto-steps") {
        for (const step of block.steps) morceaux.push(step.name, step.text);
      }
    }
    for (const faq of guide.faqs) morceaux.push(faq.q, faq.a);

    const fautif = morceaux.find((m): m is string => typeof m === "string" && contientTiretCadratin(m));
    if (fautif) {
      throw new Error(
        `[guides] L'article publié « ${guide.slug} » contient un tiret cadratin de prose : ` +
          `« …${fautif.slice(Math.max(0, fautif.indexOf("—") - 40), fautif.indexOf("—") + 40)}… ». ` +
          `Remplacez-le par « : », « , », une parenthèse ou un point.`,
      );
    }
  }
}
