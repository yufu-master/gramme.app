/**
 * Reconnaissance des robots, par user-agent.
 *
 * LA DISTINCTION QUI PORTE TOUT LE VOLET IA. Les robots des IA ne se valent pas
 * du tout :
 *
 *  - `ia_entrainement` (GPTBot, ClaudeBot, Google-Extended) moissonne pour un
 *    entraînement futur. Signal mou, dont l'effet, s'il en a un, arrive dans
 *    plusieurs mois.
 *  - `ia_reponse` (ChatGPT-User, Perplexity-User, OAI-SearchBot) veut dire que
 *    QUELQU'UN VIENT DE POSER UNE QUESTION et que le moteur lit cette page pour
 *    lui répondre, maintenant. C'est l'indicateur avancé le plus précieux dont
 *    on dispose : il précède le trafic référé de plusieurs semaines, et il dit
 *    QUELLE page le moteur juge digne d'être citée.
 *
 * Les confondre reviendrait à additionner une intention de lecture future et
 * une réponse en cours, et à ne rien pouvoir décider avec le total.
 */

export type FamilleRobot =
  | "moteur"
  | "ia_entrainement"
  | "ia_reponse"
  | "seo"
  | "apercu"
  | "autre";

/**
 * L'ordre compte : `ChatGPT-User` doit être testé avant `GPTBot` ne le serait
 * par une correspondance trop large, et `Applebot-Extended` avant `Applebot`.
 * Chaque entrée est comparée en minuscules, par inclusion.
 */
const ROBOTS: Array<{ motif: string; nom: string; famille: FamilleRobot }> = [
  // Interrogés au moment où un humain pose une question
  { motif: "chatgpt-user", nom: "ChatGPT-User", famille: "ia_reponse" },
  { motif: "oai-searchbot", nom: "OAI-SearchBot", famille: "ia_reponse" },
  { motif: "perplexity-user", nom: "Perplexity-User", famille: "ia_reponse" },
  { motif: "perplexitybot", nom: "PerplexityBot", famille: "ia_reponse" },
  { motif: "claude-user", nom: "Claude-User", famille: "ia_reponse" },
  { motif: "claude-searchbot", nom: "Claude-SearchBot", famille: "ia_reponse" },
  { motif: "duckassistbot", nom: "DuckAssistBot", famille: "ia_reponse" },
  { motif: "mistralai-user", nom: "MistralAI-User", famille: "ia_reponse" },
  { motif: "meta-externalfetcher", nom: "Meta-ExternalFetcher", famille: "ia_reponse" },
  { motif: "google-cloudvertexbot", nom: "Google-CloudVertexBot", famille: "ia_reponse" },
  { motif: "youbot", nom: "YouBot", famille: "ia_reponse" },

  // Moissonnage pour entraînement
  { motif: "gptbot", nom: "GPTBot", famille: "ia_entrainement" },
  { motif: "claudebot", nom: "ClaudeBot", famille: "ia_entrainement" },
  { motif: "anthropic-ai", nom: "anthropic-ai", famille: "ia_entrainement" },
  { motif: "claude-web", nom: "claude-web", famille: "ia_entrainement" },
  { motif: "google-extended", nom: "Google-Extended", famille: "ia_entrainement" },
  { motif: "applebot-extended", nom: "Applebot-Extended", famille: "ia_entrainement" },
  { motif: "meta-externalagent", nom: "meta-externalagent", famille: "ia_entrainement" },
  { motif: "bytespider", nom: "Bytespider", famille: "ia_entrainement" },
  { motif: "ccbot", nom: "CCBot", famille: "ia_entrainement" },
  { motif: "amazonbot", nom: "Amazonbot", famille: "ia_entrainement" },
  { motif: "diffbot", nom: "Diffbot", famille: "ia_entrainement" },
  { motif: "cohere-ai", nom: "cohere-ai", famille: "ia_entrainement" },
  { motif: "ai2bot", nom: "AI2Bot", famille: "ia_entrainement" },
  { motif: "timpibot", nom: "Timpibot", famille: "ia_entrainement" },
  { motif: "imagesiftbot", nom: "ImagesiftBot", famille: "ia_entrainement" },
  { motif: "pangubot", nom: "PanguBot", famille: "ia_entrainement" },

  // Moteurs classiques
  { motif: "googlebot", nom: "Googlebot", famille: "moteur" },
  { motif: "google-inspectiontool", nom: "Google-InspectionTool", famille: "moteur" },
  { motif: "bingbot", nom: "Bingbot", famille: "moteur" },
  { motif: "duckduckbot", nom: "DuckDuckBot", famille: "moteur" },
  { motif: "applebot", nom: "Applebot", famille: "moteur" },
  { motif: "yandexbot", nom: "YandexBot", famille: "moteur" },
  { motif: "baiduspider", nom: "Baiduspider", famille: "moteur" },
  { motif: "qwantify", nom: "Qwantify", famille: "moteur" },
  { motif: "seznambot", nom: "SeznamBot", famille: "moteur" },

  // Outils SEO
  { motif: "ahrefsbot", nom: "AhrefsBot", famille: "seo" },
  { motif: "semrushbot", nom: "SemrushBot", famille: "seo" },
  { motif: "mj12bot", nom: "MJ12bot", famille: "seo" },
  { motif: "dotbot", nom: "DotBot", famille: "seo" },
  { motif: "blexbot", nom: "BLEXBot", famille: "seo" },
  { motif: "screaming frog", nom: "Screaming Frog", famille: "seo" },
  { motif: "petalbot", nom: "PetalBot", famille: "seo" },

  // Vignettes de partage
  { motif: "facebookexternalhit", nom: "facebookexternalhit", famille: "apercu" },
  { motif: "twitterbot", nom: "Twitterbot", famille: "apercu" },
  { motif: "linkedinbot", nom: "LinkedInBot", famille: "apercu" },
  { motif: "slackbot", nom: "Slackbot", famille: "apercu" },
  { motif: "discordbot", nom: "Discordbot", famille: "apercu" },
  { motif: "telegrambot", nom: "TelegramBot", famille: "apercu" },
  { motif: "whatsapp", nom: "WhatsApp", famille: "apercu" },
  { motif: "embedly", nom: "Embedly", famille: "apercu" },
];

/**
 * Repli : un user-agent qui se déclare robot sans figurer dans la liste. Le
 * ranger en « autre » plutôt que de l'ignorer est ce qui permet de repérer un
 * nouveau moteur le jour où il apparaît, plutôt que six mois après.
 */
const INDICES_GENERIQUES = ["bot", "crawler", "spider", "crawl", "slurp", "feedfetcher"];

export function reconnaitreRobot(
  userAgent: string | null | undefined,
): { nom: string; famille: FamilleRobot } | null {
  const ua = String(userAgent || "").toLowerCase();
  if (!ua) return null;

  for (const r of ROBOTS) {
    if (ua.includes(r.motif)) return { nom: r.nom, famille: r.famille };
  }

  if (INDICES_GENERIQUES.some((i) => ua.includes(i))) {
    // On garde un fragment lisible plutôt que l'user-agent entier : de quoi
    // reconnaître le robot dans un tableau sans en faire une colonne illisible.
    const fragment = ua.match(/([a-z0-9._-]*(?:bot|crawler|spider)[a-z0-9._-]*)/)?.[1];
    return { nom: fragment ? fragment.slice(0, 60) : "robot inconnu", famille: "autre" };
  }

  return null;
}

/**
 * Automates qui exécutent du JavaScript, donc invisibles du filtre ci-dessus et
 * comptés comme des humains si on ne les nomme pas. La campagne de captures du
 * dépôt (`scripts/captures-site.mjs`, Puppeteer) en fait partie : sans cette
 * liste, une session de captures ajouterait cent quarante pages vues.
 *
 * On MARQUE, on ne rejette pas : pouvoir dire combien on écarte vaut mieux que
 * de faire disparaître les lignes sans laisser de trace.
 */
const AUTOMATES = ["headless", "electron", "playwright", "puppeteer", "phantomjs", "lighthouse", "chrome-lighthouse"];

export function estAutomate(userAgent: string | null | undefined): boolean {
  const ua = String(userAgent || "").toLowerCase();
  return AUTOMATES.some((a) => ua.includes(a));
}
