"use client";

import { motion, type Transition, type Variant } from "motion/react";
import type { ReactNode } from "react";

/**
 * Fait monter un bloc quand il entre à l'écran, une seule fois.
 * D'après `in-view` de motion-primitives.
 */
const DEFAUT: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const TRANSITION: Transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

export function InView({
  children,
  className,
  delay = 0,
  variants = DEFAUT,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: { hidden: Variant; visible: Variant };
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={variants}
      transition={{ ...TRANSITION, delay }}
    >
      {children}
    </motion.div>
  );
}
