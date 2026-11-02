import { carteContact, cartesContact } from "@/content/cartes-contact";
import { construireVcard } from "@/lib/vcard";

export const dynamicParams = false;

export function generateStaticParams() {
  return cartesContact.map((c) => ({ identifiant: c.identifiant }));
}

export async function GET(_requete: Request, { params }: { params: Promise<{ identifiant: string }> }) {
  const { identifiant } = await params;
  const carte = carteContact(identifiant);
  if (!carte) return new Response("Contact inconnu", { status: 404 });
  return new Response(construireVcard(carte), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${carte.prenom}-${carte.nom}-Gramme.vcf"`,
    },
  });
}
