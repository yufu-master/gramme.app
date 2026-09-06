import type { ReactNode } from "react";
import Link from "next/link";

/**
 * Le peu de mise en forme qu'un guide a le droit d'écrire : le gras et le lien.
 *
 * POURQUOI LE LIEN. Relevé du 06/09/2026 : il n'y avait **aucun `href` dans
 * tout `src/content/guides/` ni `src/content/articles/`**, et pour cause, le
 * rendu ne savait pas en faire. Les pages métier descendaient vers les guides,
 * les guides ne remontaient jamais, et il était impossible de poser un lien
 * dans une phrase, là où il sert vraiment.
 *
 * POURQUOI SEULEMENT L'INTERNE. Une adresse doit commencer par `/`. Un lien
 * sortant depuis un guide se décide, il ne s'écrit pas au fil de la plume : on
 * n'envoie pas un lecteur ailleurs sans y avoir réfléchi, et un domaine tiers
 * qui change de main emmène avec lui la crédibilité de la page. Une syntaxe
 * qui ne correspond pas est rendue TELLE QUELLE, en texte : mieux vaut voir
 * des crochets à l'écran qu'un lien mort.
 */
export function renderInline(text: string): ReactNode {
  // Le gras d'abord, puis le lien à l'intérieur de chaque morceau : un gras
  // peut contenir un lien, l'inverse ne se rencontre pas dans nos guides.
  const morceaux = text.split(/(\*\*[^*]+\*\*)/g);
  return morceaux.map((morceau, i) => {
    if (morceau.startsWith("**") && morceau.endsWith("**")) {
      return <strong key={i}>{avecLiens(morceau.slice(2, -2), `g${i}`)}</strong>;
    }
    return <span key={i}>{avecLiens(morceau, `t${i}`)}</span>;
  });
}

/** `[texte](/adresse)` → un lien interne. Tout le reste passe en clair. */
function avecLiens(texte: string, cle: string): ReactNode {
  const morceaux = texte.split(/(\[[^\]]+\]\(\/[^)\s]*\))/g);
  if (morceaux.length === 1) return texte;
  return morceaux.map((morceau, i) => {
    const trouve = /^\[([^\]]+)\]\((\/[^)\s]*)\)$/.exec(morceau);
    if (!trouve) return <span key={`${cle}-${i}`}>{morceau}</span>;
    return (
      <Link
        key={`${cle}-${i}`}
        href={trouve[2]}
        className="font-medium text-[#355329] underline underline-offset-2 hover:text-[#27421f]"
      >
        {trouve[1]}
      </Link>
    );
  });
}
