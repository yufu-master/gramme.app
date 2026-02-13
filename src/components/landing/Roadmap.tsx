import { Card } from "@/components/ui/card";

export function Roadmap() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <Card className="bg-gradient-to-br from-white to-[var(--secondary)] p-8">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">Roadmap produit</h2>
        <p className="mt-2 text-[var(--muted-foreground)]">Ce qui arrive pour aller encore plus loin dans la maîtrise de votre production.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3 text-sm text-[var(--muted-foreground)]">
          <p>• Export PDF haute définition</p>
          <p>• Scan codes-barres (Open Food Facts)</p>
          <p>• Allergènes & valeurs nutritionnelles</p>
        </div>
      </Card>
    </section>
  );
}
