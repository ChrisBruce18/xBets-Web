import { motion } from "framer-motion";
import Hero from "../components/hero/Hero";
import CredibilityBand from "../components/credibility/CredibilityBand";
import ProductOverview from "../components/product/ProductOverview";
import FeatureGrid from "../components/product/FeatureGrid";
import AccessCTA from "../components/cta/AccessCTA";

export default function HomePage() {
  return (
    <main>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
transition={{ duration: 1 }}>
        <Hero />
        <CredibilityBand />
        <ProductOverview />
        <FeatureGrid />
        <AccessCTA />
      </motion.div>
    </main>
  );
}

