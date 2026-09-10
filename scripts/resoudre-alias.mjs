/**
 * Résoudre `@/…` pour Node, le temps d'un import.
 *
 * `src/lib/routes.ts` importe `@/content`. C'est l'alias de `tsconfig.json`,
 * que Next et TypeScript comprennent et que Node ignore : sans ce crochet,
 * l'import échoue sur « Cannot find package '@/content' ».
 *
 * Le piège est qu'il échouait EN SILENCE. `prevenir-les-moteurs.mjs` attrapait
 * l'erreur et se rabattait sur le sitemap du site déjà en ligne, qui contient
 * bien cinquante-cinq adresses : la sortie avait l'air parfaitement normale, et
 * la seule chose qui manquait était précisément celle qui compte, la page
 * qu'on vient de publier.
 */
import { statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SRC = join(dirname(fileURLToPath(import.meta.url)), "..", "src");

/** Les extensions à essayer, dans l'ordre où TypeScript les essaie. */
const SUFFIXES = ["", ".ts", ".tsx", ".mjs", ".js", "/index.ts", "/index.tsx", "/index.js"];

function estFichier(chemin) {
  try {
    return statSync(chemin).isFile();
  } catch {
    return false;
  }
}

/** Le premier candidat qui est un vrai fichier, sinon rien. */
function premierFichier(base) {
  for (const suffixe of SUFFIXES) {
    const candidat = base + suffixe;
    // `estFichier`, et non `existsSync` : `@/content` désigne un RÉPERTOIRE qui
    // existe, et le retourner tel quel donne « EISDIR » au moment de le lire.
    // C'est le suffixe `/index.ts` qui est la bonne réponse.
    if (estFichier(candidat)) return pathToFileURL(candidat).href;
  }
  return null;
}

export function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("@/")) {
    const url = premierFichier(join(SRC, specifier.slice(2)));
    if (url) return { url, shortCircuit: true };
  }

  // Les imports relatifs SANS extension, que TypeScript accepte et que l'ESM de
  // Node refuse. `src/content/articles/index.ts` en est plein : ils échouaient
  // juste après l'alias, et le repli silencieux reprenait la main.
  if (specifier.startsWith("./") || specifier.startsWith("../")) {
    const parent = context.parentURL;
    if (parent?.startsWith("file:")) {
      const base = join(dirname(fileURLToPath(parent)), specifier);
      const url = premierFichier(base);
      if (url) return { url, shortCircuit: true };
    }
  }

  return nextResolve(specifier, context);
}
