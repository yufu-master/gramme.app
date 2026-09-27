"use client";

import { useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Le film de Gramme (48 s, 27/09/2026), fait en code dans DEV/gramme-video
 * (src/manifeste). Deux fichiers : 16:9 sur ordinateur, 9:16 sur téléphone,
 * où la version verticale remplit l'écran au lieu d'un bandeau minuscule.
 * Rien ne se télécharge avant le clic (preload="none") : la page reste légère.
 */
const FILMS = {
  large: { src: "/videos/gramme-48s-16x9.mp4", affiche: "/videos/gramme-48s-16x9.jpg" },
  haut: { src: "/videos/gramme-48s-9x16.mp4", affiche: "/videos/gramme-48s-9x16.jpg" },
} as const;

function Lecteur({ format, className }: { format: keyof typeof FILMS; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [lance, setLance] = useState(false);
  const film = FILMS[format];

  const lancer = () => {
    setLance(true);
    void ref.current?.play();
    trackEvent("video_play", { source: "accueil", format });
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#1a2e14] shadow-[0_24px_70px_rgba(34,60,23,0.35)] ${className}`}>
      <video
        ref={ref}
        className="block h-full w-full object-cover"
        poster={film.affiche}
        preload="none"
        playsInline
        controls={lance}
      >
        <source src={film.src} type="video/mp4" />
      </video>
      {!lance ? (
        <button
          type="button"
          onClick={lancer}
          className="group absolute inset-0 flex items-center justify-center bg-[#1a2e14]/10 transition hover:bg-[#1a2e14]/20"
          aria-label="Lancer le film de Gramme, 48 secondes, avec le son"
        >
          <span className="flex size-20 items-center justify-center rounded-full bg-[#a8cf8c] text-[#264021] shadow-lg transition group-hover:scale-105 sm:size-24">
            <svg viewBox="0 0 24 24" aria-hidden className="ml-1 size-8 sm:size-10" fill="currentColor">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
            </svg>
          </span>
        </button>
      ) : null}
    </div>
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
