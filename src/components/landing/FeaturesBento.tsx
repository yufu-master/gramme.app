"use client";

import { motion } from "framer-motion";
import { Network, ScanLine, ChefHat, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FeaturesBento() {
  return (
    <section id="fonctionnalites" className="mx-auto w-full max-w-7xl px-6 py-24">
      <div className="mb-16 max-w-3xl">
        <Badge variant="outline" className="mb-4 border-[#a8cf8c] text-[#a8cf8c]">Pensé par un Chef</Badge>
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Des outils de précision,<br className="hidden lg:block" /> conçus pour le fournil.
        </h2>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
        <FeatureCard 
            className="md:col-span-2 md:row-span-2" 
            title="Import Magique par Photo" 
            text="Une recette griffonnée sur un carnet ? Une facture fournisseur ? Prenez une photo. Notre IA identifie les ingrédients, les quantités et les prix pour créer votre fiche technique propre et chiffrée en quelques secondes." 
            icon={<Camera className="h-6 w-6 text-white" />} 
            iconBg="bg-[#a8cf8c]"
            visual={<div className="mt-8 flex h-64 w-full items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 shadow-inner"><span className="text-sm font-medium text-gray-400">Visualisation de l'IA en action</span></div>}
        />
        
        <FeatureCard 
            title="Mise à jour en cascade" 
            text="Changez le prix de la farine une seule fois. Il se met à jour instantanément dans vos 40 recettes de pains et viennoiseries." 
            icon={<Network className="h-6 w-6 text-[#a8cf8c]" />} 
        />
        
        <FeatureCard 
            title="Fiches Production" 
            text="Imprimez des fiches claires pour vos équipes : poids pesés, allergènes, et progression. Plus d'erreurs au labo." 
            icon={<ChefHat className="h-6 w-6 text-[#a8cf8c]" />} 
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, text, icon, className, visual, iconBg = "bg-gray-100" }: { title: string; text: string; icon: React.ReactNode; className?: string, visual?: React.ReactNode, iconBg?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
      <Card className="flex h-full flex-col justify-between overflow-hidden border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md">
        <div>
            <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full ${iconBg === "bg-gray-100" ? "bg-[#a8cf8c]/10" : iconBg}`}>
                {icon}
            </div>
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
        <p className="text-base leading-relaxed text-gray-500">{text}</p>
        </div>
        {visual}
      </Card>
    </motion.div>
  );
}
