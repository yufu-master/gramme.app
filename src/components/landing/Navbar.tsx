"use client";

import { BrandIcon, BrandWordmark } from "@/components/landing/Brand";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)]/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4" aria-label="Navigation principale">
        <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="flex items-center gap-2" aria-label="Aller au début de la page">
          <BrandIcon className="h-7 w-7 rounded-md text-[11px]" />
          <BrandWordmark className="text-[11px] tracking-[0.12em]" />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-[var(--muted-foreground)] md:flex">
          <a href="#fonctionnalites" onClick={(e) => scrollToSection(e, "fonctionnalites")} className="hover:text-[var(--foreground)]" aria-label="Voir les fonctionnalités">Fonctionnalités</a>
          <a href="#temoignages" onClick={(e) => scrollToSection(e, "temoignages")} className="hover:text-[var(--foreground)]" aria-label="Voir les avis clients">Avis Clients</a>
          <a href="#tarifs" onClick={(e) => scrollToSection(e, "tarifs")} className="hover:text-[var(--foreground)]" aria-label="Voir les tarifs">Tarifs</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" aria-label="Se connecter à Gramme">Connexion</Button>
          <Button className="bg-[#a8cf8c] text-white hover:bg-[#96be7d] shadow-sm" aria-label="Essayer Gramme gratuitement">CTA · Essayer Gratuitement</Button>
        </div>
      </nav>
    </header>
  );
}
