"use client";

import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";
import type { BoucleVideoSource } from "@/content/features";

const REQUETE_SANS_MOUVEMENT = "(prefers-reduced-motion: reduce)";

function abonnerSansMouvement(notifier: () => void) {
  const requete = window.matchMedia(REQUETE_SANS_MOUVEMENT);
  requete.addEventListener("change", notifier);
  return () => requete.removeEventListener("change", notifier);
}

function lireSansMouvement() {
  return window.matchMedia(REQUETE_SANS_MOUVEMENT).matches;
}

/**
 * Une boucle de sept secondes qui montre un module en train de servir.
 *
 * Elle remplace la capture fixe, qui disait à quoi ressemble l'écran sans dire
 * ce qu'on y fait. Les fichiers sont muets, sans raccord, et pèsent de 200 à
 * 400 Ko : c'est un GIF, sans le poids du GIF.
 *
 * Trois règles, parce que ce composant se pose à des endroits où le site vient
 * de passer une semaine à supprimer ce qui bouge sans raison :
 *  - elle ne joue que VISIBLE. Un `IntersectionObserver` lance et suspend la
 *    lecture, donc au plus une ou deux boucles tournent en même temps, et
 *    aucune sous l'en-tête une fois la page défilée ;
 *  - `preload="none"` : le navigateur ne charge que l'affiche (le premier
 *    cadre) tant que la boucle n'a pas été demandée ;
 *  - avec « réduire les animations » réglé sur le système, on ne charge pas
 *    la vidéo du tout, on montre l'affiche.
 *
 * Pas de `autoPlay` dans le HTML : rendu côté serveur, l'attribut `muted` de
 * React n'est pas fiable, et une vidéo qui démarre avant l'hydratation est
 * exactement celle qu'un lecteur « sans mouvement » ne voulait pas. C'est
 * l'observateur qui appelle `play()`, une fois la page hydratée.
 *
 * Le cadre est celui de la vidéo elle-même : elle dessine déjà sa fenêtre de
 * navigateur sur son fond sauge. Le conteneur n'ajoute qu'un liseré et un arrondi.
 */
export function BoucleVideo({
  video,
  label,
  className = "rounded-2xl",
  sizes = "(max-width: 1024px) 94vw, 960px",
  priority = false,
  boucler = true,
  suspendu = false,
  onFin,
  onTemps,
}: {
  video: BoucleVideoSource;
  /** Description courte de ce que la boucle montre (lue par les lecteurs d'écran). */
  label: string;
  /** Remplace l'arrondi par défaut (`rounded-2xl`) : passer aussi le sien. */
  className?: string;
  /** Pour l'affiche seule, quand on ne montre pas la vidéo. */
  sizes?: string;
  priority?: boolean;
  /**
   * `false` : la vidéo joue UNE fois et `onFin` prévient à la dernière image.
   * C'est ce qu'utilise la vitrine de l'accueil pour passer au module suivant.
   */
  boucler?: boolean;
  /** `true` : mise en pause (survol d'une liste, par exemple), sans démonter. */
  suspendu?: boolean;
  onFin?: () => void;
  /** Avancement de 0 à 1, à chaque `timeupdate` (environ 4 fois par seconde). */
  onTemps?: (ratio: number) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Le serveur (et le premier rendu) suppose « avec mouvement » ; le client
  // relit le réglage système et ne re-rend que s'il dit le contraire.
  const sansMouvement = useSyncExternalStore(abonnerSansMouvement, lireSansMouvement, () => false);

  const visible = useRef(false);
  const suspenduRef = useRef(suspendu);

  useEffect(() => {
    suspenduRef.current = suspendu;
    const element = videoRef.current;
    if (!element) return;
    if (suspendu) element.pause();
    else if (visible.current) element.play().catch(() => {});
  }, [suspendu]);

  useEffect(() => {
    const element = videoRef.current;
    if (sansMouvement || !element) return;
    element.muted = true;

    const observateur = new IntersectionObserver(
      ([entree]) => {
        visible.current = entree.isIntersecting;
        if (entree.isIntersecting) {
          if (suspenduRef.current) return;
          // Un refus (économie d'énergie, onglet masqué) n'est pas une erreur :
          // l'affiche reste, et on réessaiera au prochain passage.
          element.play().catch(() => {});
        } else {
          element.pause();
        }
      },
      { threshold: 0.25 },
    );
    observateur.observe(element);
    return () => observateur.disconnect();
  }, [sansMouvement]);

  return (
    <div
      className={`relative w-full overflow-hidden border border-[#dcead2] bg-[#c9d9b8] shadow-[0_20px_60px_rgba(34,60,23,0.16)] ${className}`}
      style={{ aspectRatio: "16 / 10" }}
    >
      {sansMouvement ? (
        <Image src={video.poster} alt={label} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop={boucler}
          onEnded={onFin}
          onTimeUpdate={
            onTemps
              ? (e) => {
                  const { currentTime, duration } = e.currentTarget;
                  if (duration > 0) onTemps(currentTime / duration);
                }
              : undefined
          }
          playsInline
          preload="none"
          poster={video.poster}
          role="img"
          aria-label={label}
        >
          <source src={`${video.src}.webm`} type="video/webm" />
          <source src={`${video.src}.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
