import { BrandIcon, BrandWordmark } from "@/components/landing/Brand";
import { Button } from "@/components/ui/button";
--- /dev/null
+++ /Users/clermontfu/Documents/GRAMME APP/DEV/gramme-website/src/app/cgv/page.tsx
@@ -0,0 +1,87 @@
+import { Navbar } from "@/components/landing/Navbar";
+import { Footer } from "@/components/landing/Footer";
+
+export default function CGV() {
+  return (
+    <div className="min-h-screen bg-white font-sans selection:bg-[#a8cf8c]/30">
+      <Navbar />
+      <main className="mx-auto max-w-3xl px-6 py-24">
+        <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-gray-900">Conditions Générales de Vente et d&apos;Utilisation (CGV/CGU)</h1>
+        
+        <div className="prose prose-gray max-w-none space-y-8 text-gray-600">
+          <p className="text-sm text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
+
+          <section>
+            <h2 className="text-xl font-bold text-gray-900">1. Objet</h2>
+            <p>
+              Les présentes Conditions Générales ont pour objet de définir les modalités de mise à disposition des services de l&apos;application <strong>Gramme</strong>, 
+              logiciel SaaS de gestion de rentabilité et de fiches techniques pour les professionnels de la boulangerie-pâtisserie.
+            </p>
+          </section>
+
+          <section>
+            <h2 className="text-xl font-bold text-gray-900">2. Accès au service</h2>
+            <p>
+              Le Service est accessible à tout utilisateur disposant d&apos;un accès internet. Tous les coûts afférents à l&apos;accès au Service, que ce soient les frais matériels, 
+              logiciels ou d&apos;accès à internet sont exclusivement à la charge de l&apos;utilisateur.
+            </p>
+          </section>
+
+          <section>
+            <h2 className="text-xl font-bold text-gray-900">3. Tarifs et Paiement</h2>
+            <p>
+              Les services sont facturés selon les tarifs en vigueur affichés sur le site. Les prix sont indiqués en euros et hors taxes (HT).
+            </p>
+            <ul className="mt-2 list-disc pl-5 space-y-1">
+              <li><strong>Offre Essentiel :</strong> 39€ HT / mois</li>
+              <li><strong>Offre Pilotage :</strong> 89€ HT / mois</li>
+            </ul>
+            <p className="mt-2">
+              Le paiement s&apos;effectue par prélèvement automatique via notre partenaire de paiement sécurisé (Stripe). L&apos;abonnement est mensuel et renouvelé tacitement.
+            </p>
+          </section>
+
+          <section>
+            <h2 className="text-xl font-bold text-gray-900">4. Durée et Résiliation</h2>
+            <p>
+              L&apos;abonnement est sans engagement de durée. Le Client peut résilier son abonnement à tout moment depuis son espace client. 
+              Tout mois commencé est dû dans son intégralité. La résiliation prendra effet à la fin de la période de facturation en cours.
+            </p>
+          </section>
+
+          <section>
+            <h2 className="text-xl font-bold text-gray-900">5. Données et Confidentialité</h2>
+            <p>
+              Gramme s&apos;engage à assurer la confidentialité des données hébergées (recettes, prix fournisseurs, marges). 
+              Ces données restent la propriété exclusive du Client. Gramme s&apos;interdit toute revente de ces données à des tiers.
+            </p>
+          </section>
+
+          <section>
+            <h2 className="text-xl font-bold text-gray-900">6. Limitation de responsabilité</h2>
+            <p>
+              Gramme fournit un outil d&apos;aide à la décision. Bien que nous utilisions des technologies avancées (IA) pour l&apos;extraction des données, 
+              l&apos;utilisateur reste seul responsable de la vérification de l&apos;exactitude des données (prix, quantités, allergènes) et des décisions de gestion prises sur la base de ces informations.
+              Gramme ne saurait être tenu responsable des pertes financières ou erreurs de production.
+            </p>
+          </section>
+
+          <section>
+            <h2 className="text-xl font-bold text-gray-900">7. Droit applicable</h2>
+            <p>
+              Les présentes conditions sont soumises au droit français. En cas de litige, et à défaut d&apos;accord amiable, compétence exclusive est attribuée aux tribunaux compétents du ressort du siège social de la société éditrice.
+            </p>
+          </section>
+        </div>
+      </main>
+      <Footer />
+    </div>
+  );
+}
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
