"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Jean-Michel B.",
    role: "Boulangerie Tradition (45 ans)",
    text: "Je passais mes dimanches sur mes factures. Avec Gramme, je prends une photo à la livraison et mes prix de revient se mettent à jour tout seuls. C'est un gain de temps phénoménal.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Pâtisserie Fine (32 ans)",
    text: "J'ai réalisé que je perdais de l'argent sur mon éclair pistache à cause de la hausse du beurre. L'appli m'a alertée tout de suite. J'ai ajusté mon prix et sauvé ma marge.",
    rating: 5,
  },
  {
    name: "Marc D.",
    role: "Maître Artisan (58 ans)",
    text: "Je ne suis pas informaticien, je suis boulanger. Ce que j'aime, c'est que c'est simple. Pas de boutons partout. On va à l'essentiel : combien ça me coûte, combien je gagne.",
    rating: 5,
  },
  {
    name: "Julie & Thomas",
    role: "Repreneurs (28 & 30 ans)",
    text: "Pour notre business plan et la banque, ça a été un atout majeur. Tout est carré, on sait exactement où on va. L'offre à 39€ est imbattable pour démarrer.",
    rating: 4,
  },
  {
    name: "Elodie P.",
    role: "Boulangerie de Quartier (50 ans)",
    text: "La gestion des allergènes me faisait peur avec les nouvelles normes. Là, ça sort tout seul sur les étiquettes. Plus de stress en cas de contrôle.",
    rating: 5,
  },
  {
    name: "Karim Z.",
    role: "Snacking & Traiteur (35 ans)",
    text: "J'utilise la version Pilotage pour mes 3 employés. Ils ont les fiches techniques sur tablette, ils ne se trompent plus dans les pesées. Moins de gaspillage.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="mx-auto w-full max-w-7xl px-6 py-24 bg-[#a8cf8c]/5">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <Badge className="mb-4 border border-[var(--primary)] text-[var(--primary)]">Ils nous font confiance</Badge>
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Approuvé par plus de 500 artisans
        </h2>
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="flex text-[#a8cf8c]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" className={i === 4 ? "opacity-90" : ""} />
            ))}
          </div>
          <span className="font-bold text-[var(--foreground)]">4.9/5</span>
          <span className="text-[var(--muted-foreground)]">(Note moyenne)</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1, duration: 0.5 }}>
            <Card className="h-full p-6 border-[var(--border)] bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex text-[#a8cf8c] mb-3"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill={t.rating === 5 ? "currentColor" : "none"} /></div>
              <p className="text-[var(--foreground)] mb-4 leading-relaxed">&quot;{t.text}&quot;</p>
              <div className="mt-auto pt-4 border-t border-[var(--border)]/50"><p className="font-semibold text-sm">{t.name}</p><p className="text-xs text-[var(--muted-foreground)]">{t.role}</p></div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}