import Image from "next/image";

/**
 * Une capture de l'application, posée dans un contour d'appareil.
 *
 * Pourquoi un composant et pas une image de cadre : les visuels multi-appareils
 * du site étaient des PNG de trois à cinq mégaoctets où le cadre, l'écran et le
 * contenu étaient cuits ensemble. Impossible de changer l'écran montré sans
 * repasser par un outil de maquette — et le texte d'interface de ces rendus
 * était du faux texte (« Scanner une fecture », « Foundeboves »), lisible à
 * l'œil sur l'accueil en pleine largeur.
 *
 * Ici le contour est en CSS et la capture est un vrai fichier : elle reste
 * nette, `next/image` la sert en AVIF au bon format, et changer d'écran est une
 * ligne. Le contour ne cherche pas à imiter un modèle de téléphone précis — un
 * dessin d'iPhone reconnaissable vieillit en deux ans et pose des questions de
 * marque. Il dit « appareil », c'est tout ce qu'on lui demande.
 */
type Appareil = "telephone" | "tablette" | "navigateur";

const RATIOS: Record<Appareil, string> = {
  // 390 × 844 et 1024 × 768 : les tailles réelles de capture.
  telephone: "390 / 844",
  tablette: "1024 / 768",
  navigateur: "1440 / 900",
};

export function CadreAppareil({
  appareil,
  src,
  alt,
  priority = false,
  sizes,
  className = "",
}: {
  appareil: Appareil;
  src: string;
  alt: string;
  priority?: boolean;
  /** Indispensable avec `fill` : sans lui, Next sert l'image en pleine largeur. */
  sizes: string;
  className?: string;
}) {
  if (appareil === "navigateur") {
    return (
      <figure className={`overflow-hidden rounded-xl border border-[#dcead2] bg-white shadow-[0_20px_70px_rgba(58,92,39,0.14)] ${className}`}>
        {/* La barre de fenêtre : trois pastilles, rien de plus. Elle suffit à
            dire « c'est un écran d'ordinateur » sans imiter un navigateur
            précis, qui daterait l'image. */}
        <div className="flex items-center gap-1.5 border-b border-[#eef5e8] bg-[#f6fbf2] px-3 py-2">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#d8e6cf]" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#d8e6cf]" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#d8e6cf]" />
        </div>
        <div className="relative w-full" style={{ aspectRatio: RATIOS.navigateur }}>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
        </div>
      </figure>
    );
  }

  const estTelephone = appareil === "telephone";

  return (
    <figure
      className={`relative mx-auto ${estTelephone ? "rounded-[2rem] p-2" : "rounded-[1.25rem] p-2.5"} bg-[#27421f] shadow-[0_20px_70px_rgba(58,92,39,0.22)] ${className}`}
    >
      <div
        className={`relative overflow-hidden bg-white ${estTelephone ? "rounded-[1.5rem]" : "rounded-[0.75rem]"}`}
        style={{ aspectRatio: RATIOS[appareil] }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
      {estTelephone ? (
        <span
          aria-hidden
          className="absolute left-1/2 top-3.5 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#27421f]"
        />
      ) : null}
    </figure>
  );
}
