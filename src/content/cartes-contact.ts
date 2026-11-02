/**
 * Les pages où mène le QR code d'une carte de visite.
 *
 * Une carte n'a pas le rôle d'un flyer : celui qui la tient a déjà rencontré
 * la personne, et il la garde des mois. Elle sert donc à la retrouver, pas à
 * convaincre : aucune accroche de campagne ici, elle se périmerait dans le
 * portefeuille. La phrase appartient à chacun : l'histoire de Jeremy ne se
 * prête pas à Mathieu.
 */

export type CarteContact = {
  identifiant: string;
  chemin: string;
  prenom: string;
  nom: string;
  fonction: string;
  /** Tel qu'on le lit. */
  telephone: string;
  /** Tel qu'on le compose, pour `tel:` et la fiche contact. */
  telephoneInternational: string;
  email: string;
  phrase: string;
  /** Sans portrait disponible, la page montre le logo : jamais une image de substitution. */
  photo: { src: string; width: number; height: number } | null;
};

export const cartesContact: CarteContact[] = [
  {
    identifiant: "jeremy",
    chemin: "/jeremy",
    prenom: "Jeremy",
    nom: "Tuaz",
    fonction: "Chef pâtissier et fondateur",
    telephone: "06 95 42 51 96",
    telephoneInternational: "+33695425196",
    email: "jeremy@gramme.app",
    phrase: "J'ai construit Gramme pour mon propre laboratoire. Une question ? Appelez-moi.",
    photo: { src: "/images/jeremy-chef-rd.jpg", width: 852, height: 1280 },
  },
  {
    identifiant: "mathieu",
    chemin: "/mathieu",
    prenom: "Mathieu",
    nom: "Robine",
    fonction: "Partenaire Gramme",
    telephone: "06 45 53 86 06",
    telephoneInternational: "+33645538606",
    email: "mathieu@gramme.app",
    phrase: "Une question sur Gramme, ou envie de voir l'application tourner ? Appelez-moi, je vous la montre.",
    photo: null,
  },
];

export function carteContact(identifiant: string): CarteContact | undefined {
  return cartesContact.find((c) => c.identifiant === identifiant);
}
