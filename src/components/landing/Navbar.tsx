import { Button } from "@/components/ui/button";
import { BrandIcon, BrandWordmark } from "@/components/landing/Brand";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)]/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4" aria-label="Navigation principale">
        <a href="#hero" className="flex items-center gap-3" aria-label="Aller au début de la page">
          <BrandIcon />
          <BrandWordmark />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-[var(--muted-foreground)] md:flex">
          <a href="#fonctionnalites" className="hover:text-[var(--foreground)]" aria-label="Voir les fonctionnalités">Fonctionnalités</a>
          <a href="#temoignages" className="hover:text-[var(--foreground)]" aria-label="Voir les témoignages">Témoignages</a>
          <a href="#tarifs" className="hover:text-[var(--foreground)]" aria-label="Voir les tarifs">Tarifs</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" aria-label="Se connecter à Gramme">Connexion</Button>
          <Button aria-label="Essayer Gramme gratuitement">Essayer Gratuitement</Button>
        </div>
      </nav>
    </header>
  );
}
