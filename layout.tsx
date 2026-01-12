import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "XBets | AI-Driven Sports Analytics",
  description: "XBets provides AI-driven analytics to give disciplined 
bettors a real edge in sports markets.",
  openGraph: {
    title: "XBets | AI-Driven Sports Analytics",
    description: "AI-driven insights for disciplined bettors.",
    url: "https://x-bets-web-production.up.railway.app",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: 
"XBets AI" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "XBets | AI-Driven Sports Analytics",
    description: "AI-driven analytics for disciplined bettors.",
    images: ["/images/og-image.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) 
{
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

