import type { CarteContact } from "@/content/cartes-contact";

/** Une virgule ou un point-virgule non échappés découpent le champ à la lecture. */
function echapper(texte: string): string {
  return texte.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\;");
}

/** vCard 3.0 : c'est la version que l'app Contacts d'iOS et d'Android relit sans détour. */
export function construireVcard(c: CarteContact): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${echapper(c.nom)};${echapper(c.prenom)};;;`,
    `FN:${echapper(`${c.prenom} ${c.nom}`)}`,
    "ORG:Gramme",
    `TITLE:${echapper(c.fonction)}`,
    `TEL;TYPE=CELL:${c.telephoneInternational}`,
    `EMAIL;TYPE=WORK:${c.email}`,
    "URL:https://gramme.app",
    "END:VCARD",
    "",
  ].join("\r\n");
}
