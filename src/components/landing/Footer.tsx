import { BrandIcon, BrandWordmark } from "@/components/landing/Brand";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="rounded-2xl bg-[#a8cf8c] p-10 text-white shadow-xl shadow-green-900/5">
        <div className="mb-4 flex items-center gap-3">
          <BrandIcon className="rounded-md bg-white text-[#a8cf8c]" />
          <BrandWordmark className="text-white" />
        </div>
        <h2 className="text-3xl font-bold">Vos marges ne s&apos;optimiseront pas toutes seules.</h2>
        <p className="mt-3 max-w-2xl text-white/90">Passez de l&apos;approximation à la décision pilotée par les données en moins d&apos;une semaine.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button className="bg-white text-[#a8cf8c] hover:bg-white/90" size="lg" aria-label="Lancer mon essai gratuit maintenant">
            Essayer Gratuitement dès maintenant
          </Button>
          <a
            href="https://gramme-ia.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center rounded-xl border border-white/30 px-6 text-sm font-medium"
            aria-label="Ouvrir l'application Gramme"
          >
            Accéder à l&apos;application
          </a>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-3 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-5">
          <Link href="/mentions-legales" aria-label="Consulter les mentions légales" className="hover:text-[var(--foreground)]">Mentions légales</Link>
          <Link href="/confidentialite" aria-label="Consulter la politique de confidentialité" className="hover:text-[var(--foreground)]">Confidentialité</Link>
          <Link href="/cgv" aria-label="Consulter les conditions générales" className="hover:text-[var(--foreground)]">CGV</Link>
        </div>
        <p>© Copyright 2026 Gramme</p>
      </div>
    </footer>
  );
}
