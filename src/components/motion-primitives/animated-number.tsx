"use client";

import { motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

/**
 * Un nombre qui glisse vers sa nouvelle valeur au lieu de sauter.
 * D'après `animated-number` de motion-primitives, qui arrondissait à l'unité :
 * ici c'est `format` qui écrit le nombre (euros, décimales), à chaque image
 * comme à l'arrivée. Le HTML servi contient déjà la valeur finale.
 */
export function AnimatedNumber({
  value,
  format,
  className,
}: {
  value: number;
  format: (n: number) => string;
  className?: string;
}) {
  const ressort = useSpring(value, { stiffness: 140, damping: 22, mass: 0.6 });
  const texte = useTransform(ressort, (n) => format(n));

  useEffect(() => {
    ressort.set(value);
  }, [ressort, value]);

  return <motion.span className={`tabular-nums ${className ?? ""}`}>{texte}</motion.span>;
}
