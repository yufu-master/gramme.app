import { BrandIcon, BrandWordmark } from "@/components/landing/Brand";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 py-20">
      <div className="rounded-3xl bg-[var(--brand)] p-10 text-white shadow-xl shadow-green-900/10 lg:p-14">
        <div className="mb-6 flex items-center gap-3">
          <BrandIcon className="rounded-md bg-white p-0.5" />
          <BrandWordmark className="text-white" />
        </div>
        <h2 className="text-3xl font-bold lg:text-4xl">
          Pilotez votre marge. Sublimez vos créations.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          Application de gestion dédiée aux artisans boulangers, pâtissiers et chocolatiers d&apos;exception.
          Passez de l&apos;approximation à la décision pilotée par les données.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button className="h-12 bg-white px-8 text-base text-[var(--brand-dark)] hover:bg-white/90" size="lg" aria-label="Lancer mon essai gratuit">
            Essayer gratuitement
          </Button>
          <a
            href="https://gramme-ia.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center rounded-xl border border-white/30 px-8 text-sm font-medium transition-colors hover:bg-white/10"
            aria-label="Ouvrir l'application Gramme"
          >
            gramme.app
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-5">
          <Link href="/mentions-legales" className="hover:text-[var(--foreground)]">Mentions légales</Link>
          <Link href="/confidentialite" className="hover:text-[var(--foreground)]">Confidentialité</Link>
          <Link href="/cgv" className="hover:text-[var(--foreground)]">CGV</Link>
          <Link href="/contact" className="hover:text-[var(--foreground)]">Contact</Link>
        </div>
        <p>© 2026 Gramme — Tous droits réservés</p>
      </div>
    </footer>
  );
}
