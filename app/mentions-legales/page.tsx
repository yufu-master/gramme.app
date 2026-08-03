import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Mentions légales",
  description: "Page en cours de création.",
};

export default function Page() {
  return <ComingSoonPage title="Mentions légales" />;
}
