import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Test Your World — Know What You're Breathing",
    template: "%s | Test Your World",
  },
  description:
    "Your HVAC filter captures what's floating in your air. We test it and tell you exactly what you're breathing. Mold testing made simple — $69, no strangers in your home.",
  metadataBase: new URL("https://www.testyourworld.com"),
  openGraph: {
    title: "Test Your World — Know What You're Breathing",
    description:
      "Your filter knows what's in your air. We test it. Mold species identification, AI-powered analysis, results in 5–7 days. $69 USD or CAD.",
    url: "https://www.testyourworld.com",
    siteName: "Test Your World",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Your World — Know What You're Breathing",
    description:
      "Your filter knows what's in your air. We test it. $69. No appointments. No strangers.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-dm-sans text-navy bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
