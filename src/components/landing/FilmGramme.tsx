"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Le film de Gramme (48 s, 27/09/2026), fait en code dans DEV/gramme-video
 * (src/manifeste). Deux fichiers : 16:9 sur ordinateur, 9:16 sur téléphone,
 * où la version verticale remplit l'écran au lieu d'un bandeau minuscule.
 * Rien ne se télécharge avant le clic (seule l'affiche est chargée) : la page
 * reste légère.
 */
const FILMS = {
  large: { src: "/videos/gramme-48s-16x9.mp4", affiche: "/videos/gramme-48s-16x9.jpg" },
  haut: { src: "/videos/gramme-48s-9x16.mp4", affiche: "/videos/gramme-48s-9x16.jpg" },
} as const;

/**
 * La vignette s'agrandit en plein écran au clic (29/09/2026, d'après
 * `morphing-dialog` de motion-primitives) : le film se regarde en grand, sur
 * fond sombre, et se referme par Échap, la croix ou un clic à côté.
 */
function Lecteur({ format, className }: { format: keyof typeof FILMS; className: string }) {
  const [ouvert, setOuvert] = useState(false);
  const fermerRef = useRef<HTMLButtonElement>(null);
  const declencheurRef = useRef<HTMLButtonElement>(null);
  const film = FILMS[format];
  const id = `film-${format}`;

  const ouvrir = () => {
    setOuvert(true);
    trackEvent("video_play", { source: "accueil", format });
  };

  const fermer = () => {
    setOuvert(false);
    declencheurRef.current?.focus();
  };

  useEffect(() => {
    if (!ouvert) return;
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === "Escape") fermer();
    };
    const defilement = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", surTouche);
    fermerRef.current?.focus();
    return () => {
      document.body.style.overflow = defilement;
      window.removeEventListener("keydown", surTouche);
    };
  }, [ouvert]);

  return (
    <>
      <motion.div
        layoutId={id}
        className={`relative overflow-hidden rounded-2xl bg-[#1a2e14] shadow-[0_24px_70px_rgba(34,60,23,0.35)] ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={film.affiche} alt="" className="block h-full w-full object-cover" loading="lazy" />
        <button
          ref={declencheurRef}
          type="button"
          onClick={ouvrir}
          className="group absolute inset-0 flex items-center justify-center bg-[#1a2e14]/10 transition hover:bg-[#1a2e14]/20"
          aria-label="Lancer le film de Gramme, 48 secondes, avec le son"
          aria-haspopup="dialog"
        >
          <span className="flex size-20 items-center justify-center rounded-full bg-[#a8cf8c] text-[#264021] shadow-lg transition group-hover:scale-105 sm:size-24">
            <svg viewBox="0 0 24 24" aria-hidden className="ml-1 size-8 sm:size-10" fill="currentColor">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
            </svg>
          </span>
        </button>
      </motion.div>

      <AnimatePresence>
        {ouvert ? (
          <motion.div
            key="fond"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0f1a0b]/90 p-4 backdrop-blur-sm sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={fermer}
            role="dialog"
            aria-modal="true"
            aria-label="Le film de Gramme, 48 secondes"
          >
            <motion.div
              layoutId={id}
              className={`relative overflow-hidden rounded-2xl bg-black shadow-2xl ${
                format === "large" ? "aspect-video w-full max-w-6xl" : "aspect-[9/16] h-full max-h-[88vh]"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="block h-full w-full object-contain"
                src={film.src}
                poster={film.affiche}
                autoPlay
                playsInline
                controls
              />
            </motion.div>
            <button
              ref={fermerRef}
              type="button"
              onClick={fermer}
              className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              aria-label="Fermer le film"
            >
              <svg viewBox="0 0 24 24" aria-hidden className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function FilmGramme() {
  return (
    <section id="film" className="bg-[#1a2e14] py-14 text-white sm:py-16" aria-labelledby="film-title">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-5 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#cfe8bf]">Le film</p>
          <h2 id="film-title" className="mt-3 text-3xl font-black leading-[1.1] md:text-4xl">
            Gramme, en 48&nbsp;secondes
          </h2>
          <p className="mt-4 text-base text-white/80">
            Conçu par un chef pâtissier et un entrepreneur de l&apos;optimisation : de la facture photographiée à
            l&apos;étiquette, du stock au prévisionnel, tout ce que fait Gramme, d&apos;un seul regard.
          </p>
        </div>
        <Lecteur format="large" className="hidden aspect-video w-full sm:block" />
        <Lecteur format="haut" className="mx-auto aspect-[9/16] w-full max-w-[22rem] sm:hidden" />
      </div>
    </section>
  );
}
