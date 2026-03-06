import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Gramme | Démo",
  description: "Page en cours de création.",
};

export default function Page() {
  return <ComingSoonPage title="Démo" />;
}
