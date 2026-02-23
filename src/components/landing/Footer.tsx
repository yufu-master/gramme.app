import { BrandIcon, BrandWordmark } from "@/components/landing/Brand";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-8 rounded-2xl bg-[#a8cf8c] p-8 text-white shadow-xl shadow-green-900/5 md:grid-cols-2 md:p-10">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <BrandIcon className="rounded-md bg-white text-[#a8cf8c]" />
            <BrandWordmark className="text-white" />
          </div>
          <h2 className="text-3xl font-bold">Vos marges ne s&apos;optimiseront pas toutes seules.</h2>
          <p className="mt-3 max-w-xl text-white/90">
            Passez de l&apos;approximation à la décision pilotée par les données en moins d&apos;une semaine.
          </p>
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

        <form className="rounded-xl bg-white/10 p-4 backdrop-blur-sm md:p-6" aria-label="Formulaire de contact">
          <h3 className="text-xl font-semibold">Contactez-nous</h3>
          <p className="mt-2 text-sm text-white/90">Nous revenons vers vous rapidement pour échanger sur votre activité.</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm">
              <span>Nom</span>
              <input type="text" name="nom" className="h-11 rounded-lg border border-white/30 bg-white/90 px-3 text-[#203220] outline-none ring-[#7fae62] placeholder:text-[#5b7152] focus:ring-2" placeholder="Dupont" />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              <span>Prénom</span>
              <input type="text" name="prenom" className="h-11 rounded-lg border border-white/30 bg-white/90 px-3 text-[#203220] outline-none ring-[#7fae62] placeholder:text-[#5b7152] focus:ring-2" placeholder="Marie" />
            </label>
            <label className="flex flex-col gap-1 text-sm sm:col-span-2">
              <span>Adresse e-mail</span>
              <input type="email" name="email" className="h-11 rounded-lg border border-white/30 bg-white/90 px-3 text-[#203220] outline-none ring-[#7fae62] placeholder:text-[#5b7152] focus:ring-2" placeholder="marie@entreprise.fr" />
            </label>
            <label className="flex flex-col gap-1 text-sm sm:col-span-2">
              <span>Numéro de téléphone</span>
              <input type="tel" name="telephone" className="h-11 rounded-lg border border-white/30 bg-white/90 px-3 text-[#203220] outline-none ring-[#7fae62] placeholder:text-[#5b7152] focus:ring-2" placeholder="06 12 34 56 78" />
            </label>
            <label className="flex flex-col gap-1 text-sm sm:col-span-2">
              <span>Message</span>
              <textarea name="message" rows={4} className="rounded-lg border border-white/30 bg-white/90 px-3 py-2 text-[#203220] outline-none ring-[#7fae62] placeholder:text-[#5b7152] focus:ring-2" placeholder="Décrivez votre besoin..." />
            </label>
          </div>

          <Button type="submit" className="mt-5 w-full bg-[#203220] text-white hover:bg-[#162516]" aria-label="Envoyer le formulaire de contact">
            Envoyer le message
          </Button>
        </form>
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
