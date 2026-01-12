import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="px-8 py-32 max-w-7xl mx-auto">
      {children}
    </section>
  );
}

