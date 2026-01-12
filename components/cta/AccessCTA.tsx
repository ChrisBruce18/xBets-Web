import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function AccessCTA() {
  return (
    <Section>
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 
rounded-3xl p-12 text-center relative overflow-hidden shadow-lg">
        <h2 className="text-4xl lg:text-5xl font-bold text-white max-w-3xl 
mx-auto">
          Unlock AI-Driven Insights Today
        </h2>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
          Join XBets and gain access to advanced AI analytics that give 
you a competitive edge in the sports market. Disciplined, data-backed 
betting starts here.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button variant="primary">Request Access</Button>
          <Button variant="outline">Learn More About AI</Button>
        </div>

        {/* Subtle animated background element */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-700 
rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 
bg-indigo-700 rounded-full opacity-20 animate-pulse"></div>
      </div>
    </Section>
  );
}

