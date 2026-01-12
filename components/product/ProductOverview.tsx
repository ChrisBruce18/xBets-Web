import Section from "@/components/layout/Section";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Predictive Modeling",
    description: "AI models predict line movements and performance 
outcomes with high confidence."
  },
  {
    title: "Confidence-Weighted Signals",
    description: "Every recommendation is backed by confidence scores 
derived from historical patterns."
  },
  {
    title: "Real-Time Alerts",
    description: "Stay ahead of the market with instant AI-driven 
notifications."
  },
  {
    title: "Historical Performance Insights",
    description: "Analyze decades of historical data to refine your 
strategy."
  }
];

export default function ProductOverview() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-5xl font-bold text-white max-w-lg">
            How XBets AI Works
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-md">
            XBets leverages advanced AI to process millions of data 
points, providing predictive insights and actionable analytics to give 
disciplined bettors a real edge.
          </p>
        </div>

        {/* Right: Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-neutral-800 p-6 
rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold 
text-white">{feature.title}</h3>
              <p className="mt-2 
text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

