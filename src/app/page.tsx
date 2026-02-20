import { FeaturesBento } from "@/components/landing/FeaturesBento";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { PainPoints } from "@/components/landing/PainPoints";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { TrustBand } from "@/components/landing/TrustBand";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#a8cf8c]/30">
      <Navbar />
      <main className="flex flex-col gap-12 md:gap-20">
        <Hero />
        <TrustBand />
        <PainPoints />
        <FeaturesBento />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
