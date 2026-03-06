import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Gramme | Comment ça marche",
  description: "Page en cours de création.",
};

export default function Page() {
  return <ComingSoonPage title="Comment ça marche" />;
}
