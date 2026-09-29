"use client";

import { motion } from "motion/react";

/**
 * Une lueur qui fait le tour d'une carte. D'après `border-trail` de
 * motion-primitives. Le parent doit être `relative` et arrondi. `overflow-hidden`
 * ajouté : sans lui, la lueur dépassait de la carte et élargissait la page sur
 * téléphone (38 px de défilement horizontal, relevé le 29/09/2026).
 */
export function BorderTrail({
  className,
  size = 80,
  duration = 8,
}: {
  className?: string;
  size?: number;
  duration?: number;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
    >
      <motion.div
        className={`absolute aspect-square ${className ?? ""}`}
        style={{ width: size, offsetPath: `rect(0 auto auto 0 round ${size}px)` }}
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      />
    </div>
  );
}
