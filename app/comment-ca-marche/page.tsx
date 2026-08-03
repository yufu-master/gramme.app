import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Comment ça marche",
  description: "Page en cours de création.",
};

export default function Page() {
  return <ComingSoonPage title="Comment ça marche" />;
}
