"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Un bandeau qui défile sans fin, ralenti au survol.
 * D'après `infinite-slider` de motion-primitives, réécrit en CSS : la piste est
 * dupliquée et glisse de sa moitié (`gr-defile` dans `app/globals.css`), sans
 * état React ni mesure. Ni le survol ni un changement de largeur ne relancent
 * l'animation : le survol ne fait que changer la vitesse de lecture de
 * l'animation en cours (Web Animations), elle repart d'où elle est.
 *
 * `duree` : secondes pour un tour complet (une copie de la liste).
 * `vitesseSurvol` : part de la vitesse gardée au survol (0,3 = 30 %).
 *
 * La seconde copie, qui ne sert qu'à boucher le raccord, est `aria-hidden` et
 * `inert` : un lecteur d'écran ne lit la liste qu'une fois. Sans mouvement
 * (réglage du système), la copie disparaît et la liste s'affiche à plat, sur
 * plusieurs lignes.
 */
export function InfiniteSlider({
  children,
  gap = 16,
  duree = 40,
  vitesseSurvol = 0.3,
  className,
}: {
  children: ReactNode;
  gap?: number;
  duree?: number;
  vitesseSurvol?: number;
  className?: string;
}) {
  const piste = useRef<HTMLDivElement>(null);

  const regler = (vitesse: number) => {
    piste.current?.getAnimations().forEach((a) => {
      a.playbackRate = vitesse;
    });
  };

  return (
    <div
      className={`gr-defile overflow-hidden ${className ?? ""}`}
      onMouseEnter={() => regler(vitesseSurvol)}
      onMouseLeave={() => regler(1)}
    >
      <div
        ref={piste}
        className="gr-defile-piste flex w-max motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center"
        style={{ gap, "--gr-defile-duree": `${duree}s` } as CSSProperties}
      >
        <div className="flex motion-reduce:flex-wrap motion-reduce:justify-center" style={{ gap }}>
          {children}
        </div>
        <div aria-hidden inert className="flex motion-reduce:hidden" style={{ gap }}>
          {children}
        </div>
      </div>
    </div>
  );
}
