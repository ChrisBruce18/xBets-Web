import "@/app/globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Professional Sports Analytics",
  description:
    "Data-driven sports analytics for disciplined, professional bettors.",
};

export default function RootLayout({ children }: { children: ReactNode }) 
{
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

