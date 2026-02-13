import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0B1426" />
      </head>
      <body className="font-dm-sans text-navy bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
