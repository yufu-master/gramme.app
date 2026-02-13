import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="tarifs" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="rounded-2xl bg-slate-900 p-10 text-white shadow-sm">
        <h2 className="text-3xl font-bold">Vos marges ne s&apos;optimiseront pas toutes seules.</h2>
        <p className="mt-3 max-w-2xl text-slate-300">Passez de l&apos;approximation à la décision pilotée par les données en moins d&apos;une semaine.</p>
        <Button className="mt-8 bg-emerald-600 hover:bg-emerald-500" size="lg" aria-label="Lancer mon essai gratuit maintenant">
          Essayer Gratuitement dès maintenant
        </Button>
      </div>
      <div className="mt-8 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-5">
          <a href="#" aria-label="Consulter les mentions légales" className="hover:text-slate-700">Mentions légales</a>
          <a href="#" aria-label="Consulter la politique de confidentialité" className="hover:text-slate-700">Confidentialité</a>
          <a href="#" aria-label="Consulter les conditions générales" className="hover:text-slate-700">CGV</a>
        </div>
        <p>© Copyright 2026 Gramme</p>
      </div>
    </footer>
  );
}
