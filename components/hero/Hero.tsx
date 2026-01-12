import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 
items-center">
        {/* Left: Copy */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold leading-tight text-white 
max-w-xl">
            AI-Driven Sports Analytics for Disciplined Bettors
          </h1>
          <p className="text-xl text-neutral-400 max-w-lg">
            XBets leverages advanced AI models to track market movement, 
analyze efficiency, and evaluate historical performance — giving you an 
edge backed by real data, not hype.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Button variant="primary">Request Access</Button>
            <Button variant="outline">View AI Methodology</Button>
          </div>
        </div>

        {/* Right: Motion / AI Chart Placeholder */}
        <div className="relative w-full h-96 rounded-2xl bg-neutral-900 
overflow-hidden flex items-center justify-center shadow-lg">
          <div className="text-neutral-500 text-center">
            [AI Analytics / Market Prediction Visualization Here]
          </div>
        </div>
      </div>
    </Section>
  );
}

