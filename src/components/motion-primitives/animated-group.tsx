"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Une liste dont les éléments arrivent l'un après l'autre, à l'entrée dans
 * l'écran. D'après `animated-group` de motion-primitives, qui enveloppait
 * chaque enfant d'un `div` : ici la liste reste un `ul` et chaque élément un
 * `li` (`AnimatedItem`).
 */
const CONTENEUR: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const ELEMENT: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedGroup({
  children,
  className,
  as = "ul",
}: {
  children: ReactNode;
  className?: string;
  as?: "ul" | "ol";
}) {
  const Liste = as === "ol" ? motion.ol : motion.ul;
  return (
    <Liste
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={CONTENEUR}
    >
      {children}
    </Liste>
  );
}

export function AnimatedItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.li className={className} variants={ELEMENT}>
      {children}
    </motion.li>
  );
}
