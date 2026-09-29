"use client";

import { animate, motion, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import useMeasure from "react-use-measure";

/**
 * Un bandeau qui défile sans fin, ralenti au survol.
 * D'après `infinite-slider` de motion-primitives. La seconde copie, qui ne sert
 * qu'à boucher le raccord, est `aria-hidden` et `inert` : un lecteur d'écran
 * ne lit la liste qu'une fois. Sans mouvement (réglage du système), la liste
 * s'affiche à plat, sur plusieurs lignes.
 */
export function InfiniteSlider({
  children,
  gap = 16,
  speed = 40,
  speedOnHover = 12,
  className,
}: {
  children: ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  className?: string;
}) {
  const reduit = useReducedMotion();
  const [survol, setSurvol] = useState(false);
  const [ref, { width }] = useMeasure();
  const x = useMotionValue(0);

  useEffect(() => {
    if (reduit || !width) return;
    const fin = -(width + gap) / 2;
    const vitesse = survol ? speedOnHover : speed;
    // Repart d'où l'on est : changer de vitesse ne fait pas sauter le bandeau.
    const depart = x.get() <= fin ? 0 : x.get();
    let controles = animate(x, [depart, fin], {
      ease: "linear",
      duration: Math.abs(fin - depart) / vitesse,
      onComplete: () => {
        x.set(0);
        controles = animate(x, [0, fin], {
          ease: "linear",
          duration: Math.abs(fin) / vitesse,
          repeat: Infinity,
          repeatType: "loop",
        });
      },
    });
    return () => controles.stop();
  }, [reduit, width, gap, survol, speed, speedOnHover, x]);

  if (reduit) {
    return (
      <div className={className}>
        <div className="flex flex-wrap justify-center" style={{ gap }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        ref={ref}
        className="flex w-max"
        style={{ x, gap }}
        onHoverStart={() => setSurvol(true)}
        onHoverEnd={() => setSurvol(false)}
      >
        {children}
        <div aria-hidden inert className="flex" style={{ gap }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
