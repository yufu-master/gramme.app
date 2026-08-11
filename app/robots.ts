import type { MetadataRoute } from "next";

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
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
        allow: ["/", "/llms.txt", "/a-propos-de-gramme", "/contact"],
      })),
    ],
    sitemap: "https://gramme.app/sitemap.xml",
    host: "https://gramme.app",
  };
}
