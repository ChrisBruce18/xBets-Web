import Hero from "@/components/hero/Hero";
import CredibilityBand from "@/components/credibility/CredibilityBand";
import ProductOverview from "@/components/product/ProductOverview";
import FeatureGrid from "@/components/product/FeatureGrid";
import AccessCTA from "@/components/cta/AccessCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBand />
      <ProductOverview />
      <FeatureGrid />
      <AccessCTA />
    </>
  );
}

