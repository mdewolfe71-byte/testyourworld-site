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
    "Your HVAC filter captures what's floating in your air. Mail it to us and we test the whole thing. Mold testing made simple — from $99, no strangers in your home.",
  metadataBase: new URL("https://www.testyourworld.com"),
  openGraph: {
    title: "Test Your World — Know What You're Breathing",
    description:
      "Your filter knows what's in your air. We test it. Mold species identification, AI-powered analysis, results in 48 hours. From $99 USD or CAD.",
    url: "https://www.testyourworld.com",
    siteName: "Test Your World",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Your World — Know What You're Breathing",
    description:
      "Your filter knows what's in your air. We test it. From $99. No appointments. No strangers.",
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
        <Analytics />
      </body>
    </html>
  );
}
