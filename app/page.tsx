import Hero from "@/components/hero/Hero";
import CredibilityBand from "@/components/credibility/CredibilityBand";
import ProductOverview from "@/components/product/ProductOverview";
import AccessCTA from "@/components/cta/AccessCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBand />
      <ProductOverview />
      <AccessCTA />
    </>
  );
}

