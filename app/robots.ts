import type { MetadataRoute } from "next";

/** Bots génératifs / crawlers IA — accès explicite aux pages d'identité produit. */
/**
 * Deux familles, et la seconde compte davantage.
 *
 * Les robots d'ENTRAÎNEMENT (GPTBot, ClaudeBot, Google-Extended) moissonnent
 * pour des modèles futurs. Les robots de RÉPONSE (ChatGPT-User, Perplexity-User,
 * OAI-SearchBot, MistralAI-User, Meta-ExternalFetcher) viennent lire une page
 * parce que quelqu'un vient de poser une question : ce sont eux qui décident si
 * nous sommes cités dans la réponse, maintenant.
 *
 * Les cinq robots de réponse ajoutés ici manquaient à la liste. Les bloquer par
 * omission, c'était refuser d'être cité au moment précis où un boulanger
 * demande à une IA quel logiciel choisir.
 */
const AI_BOTS = [
  // Entraînement
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
  // Réponse à une question posée à l'instant
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-User",
  "Claude-SearchBot",
  "MistralAI-User",
  "Meta-ExternalFetcher",
  "DuckAssistBot",
  "Google-CloudVertexBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: [
          "/",
          "/llms.txt",
          "/a-propos-de-gramme",
          "/contact",
          "/comment-ca-marche",
          "/securite",
          "/guides",
          "/faq",
          "/comparatif",
          "/articles",
          "/fonctionnalites",
          // Les pages d'intention d'achat : ce sont elles qui décident de la
          // présence dans une réponse générative, et quatre sur cinq
          // manquaient à cette liste.
          "/metiers",
          "/logiciel-boulangerie",
          "/logiciel-patisserie",
          "/logiciel-chocolaterie",
          "/logiciel-glacerie",
          "/logiciel-cout-de-revient",
          "/logiciel-fiches-techniques",
          "/logiciel-releves-temperature",
          "/logiciel-scan-factures",
          "/tarifs",
          "/demo",
          "/cgv",
          "/mentions-legales",
          "/integrations",
        ],
        disallow: ["/api/"],
      })),
    ],
    sitemap: "https://gramme.app/sitemap.xml",
    host: "https://gramme.app",
  };
}
