import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export default function CGV() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#a8cf8c]/30">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-gray-900">Conditions Générales de Vente et d&apos;Utilisation (CGV/CGU)</h1>
        
        <div className="prose prose-gray max-w-none space-y-8 text-gray-600">
          <p className="text-sm text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

          <section>
            <h2 className="text-xl font-bold text-gray-900">1. Objet</h2>
            <p>
              Les présentes Conditions Générales ont pour objet de définir les modalités de mise à disposition des services de l&apos;application <strong>Gramme</strong>, 
              logiciel SaaS de gestion de rentabilité et de fiches techniques pour les professionnels de la boulangerie-pâtisserie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">2. Accès au service</h2>
            <p>
              Le Service est accessible à tout utilisateur disposant d&apos;un accès internet. Tous les coûts afférents à l&apos;accès au Service, que ce soient les frais matériels, 
              logiciels ou d&apos;accès à internet sont exclusivement à la charge de l&apos;utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">3. Tarifs et Paiement</h2>
            <p>
              Les services sont facturés selon les tarifs en vigueur affichés sur le site. Les prix sont indiqués en euros et hors taxes (HT).
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Offre Essentiel :</strong> 39€ HT / mois</li>
              <li><strong>Offre Pilotage :</strong> 89€ HT / mois</li>
            </ul>
            <p className="mt-2">
              Le paiement s&apos;effectue par prélèvement automatique via notre partenaire de paiement sécurisé (Stripe). L&apos;abonnement est mensuel et renouvelé tacitement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">4. Durée et Résiliation</h2>
            <p>
              L&apos;abonnement est sans engagement de durée. Le Client peut résilier son abonnement à tout moment depuis son espace client. 
              Tout mois commencé est dû dans son intégralité. La résiliation prendra effet à la fin de la période de facturation en cours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">5. Données et Confidentialité</h2>
            <p>
              Gramme s&apos;engage à assurer la confidentialité des données hébergées (recettes, prix fournisseurs, marges). 
              Ces données restent la propriété exclusive du Client. Gramme s&apos;interdit toute revente de ces données à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">6. Limitation de responsabilité</h2>
            <p>
              Gramme fournit un outil d&apos;aide à la décision. Bien que nous utilisions des technologies avancées (IA) pour l&apos;extraction des données, 
              l&apos;utilisateur reste seul responsable de la vérification de l&apos;exactitude des données (prix, quantités, allergènes) et des décisions de gestion prises sur la base de ces informations.
              Gramme ne saurait être tenu responsable des pertes financières ou erreurs de production.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">7. Droit applicable</h2>
            <p>
              Les présentes conditions sont soumises au droit français. En cas de litige, et à défaut d&apos;accord amiable, compétence exclusive est attribuée aux tribunaux compétents du ressort du siège social de la société éditrice.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}