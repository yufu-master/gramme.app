import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="rounded-2xl bg-[var(--dashboard-foreground)] p-10 text-white shadow-sm">
        <h2 className="text-3xl font-bold">Vos marges ne s&apos;optimiseront pas toutes seules.</h2>
        <p className="mt-3 max-w-2xl text-white/80">Passez de l&apos;approximation à la décision pilotée par les données en moins d&apos;une semaine.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button className="bg-[var(--dashboard)] text-[var(--dashboard-foreground)] hover:brightness-95" size="lg" aria-label="Lancer mon essai gratuit maintenant">
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
          <a href="#" aria-label="Consulter les mentions légales" className="hover:text-[var(--foreground)]">Mentions légales</a>
          <a href="#" aria-label="Consulter la politique de confidentialité" className="hover:text-[var(--foreground)]">Confidentialité</a>
          <a href="#" aria-label="Consulter les conditions générales" className="hover:text-[var(--foreground)]">CGV</a>
        </div>
        <p>© Copyright 2026 Gramme</p>
      </div>
    </footer>
  );
}
