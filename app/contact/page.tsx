import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/Contact";

export const metadata: Metadata = {
  title: "Contact | Gramme",
  description: "Contactez l'équipe Gramme.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
