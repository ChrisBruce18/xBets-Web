import Section from "@/components/layout/Section";

interface FeatureCard {
  title: string;
  description: string;
  // optional: icon or visual placeholder
}

const featureCards: FeatureCard[] = [
  {
    title: "Real-Time Market Predictions",
    description: "AI forecasts line movements as they happen, keeping you 
ahead of the market.",
  },
  {
    title: "Confidence Scores",
    description: "Each prediction is weighted with an AI-generated 
confidence score, highlighting high-probability opportunities.",
  },
  {
    title: "Historical Trend Analysis",
    description: "Visualize years of historical data and see how the AI 
model would have performed.",
  },
  {
    title: "Custom Alerts & Notifications",
    description: "Receive instant AI-driven alerts for games and markets 
you follow.",
  },
];

export default function FeatureGrid() {
  return (
    <Section>
      <h2 className="text-5xl font-bold text-white text-center mb-16">
        Key AI Features of XBets
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="bg-neutral-800 p-6 rounded-2xl shadow-md 
hover:shadow-lg transition-shadow duration-300 flex flex-col 
justify-between"
          >
            {/* Optional: add an icon or chart placeholder */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold 
text-white">{card.title}</h3>
              <p className="mt-2 text-neutral-400">{card.description}</p>
            </div>
            <div className="mt-4 h-24 bg-neutral-900 rounded-lg flex 
items-center justify-center text-neutral-500 text-sm">
              [AI Chart / Visual Placeholder]
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

