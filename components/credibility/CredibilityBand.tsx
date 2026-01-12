import Section from "@/components/layout/Section";

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "10M+", label: "AI-Analyzed Market Data Points" },
  { value: "Real-Time", label: "Live Line Movement Detection" },
  { value: "99.9%+", label: "Historical Model Accuracy" },
];

export default function CredibilityBand() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-2">
            <p className="text-4xl font-bold 
text-white">{metric.value}</p>
            <p className="text-neutral-400">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Optional: AI framework or data partner logos */}
      <div className="mt-16 flex flex-wrap justify-center items-center 
gap-12 opacity-70">
        <img src="/logos/logo1.png" alt="Partner 1" className="h-12" />
        <img src="/logos/logo2.png" alt="Partner 2" className="h-12" />
        <img src="/logos/logo3.png" alt="Partner 3" className="h-12" />
      </div>
    </Section>
  );
}

