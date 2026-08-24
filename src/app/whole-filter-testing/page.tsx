import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Whole Filter Testing",
  description:
    "Send us your used HVAC filter. We analyze the whole thing — 182+ organisms, mold, allergens and particulates. Basic $99, Advanced $149. Results in 48 hours.",
};

// NOTE: the Advanced tier does not yet exist as a separate Shopify product.
// Point ADVANCED_URL at its product page once it's created; until then it
// sends the customer to the shop.
const BASIC_URL =
  "https://testyourworld.myshopify.com/products/direct-filter-test-no-kit-needed-20-off";
const ADVANCED_URL = "https://testyourworld.myshopify.com";

const steps = [
  {
    step: "1",
    title: "Pull Your Filter",
    desc: "The one that's been in your system 30+ days. The dusty one you keep meaning to change.",
    sub: "That's not dirt. That's data.",
  },
  {
    step: "2",
    title: "Box It Up",
    desc: "The whole filter goes in the box — no cutting, no tools, no craft project. Prepaid label included.",
    sub: "Two minutes, start to finish.",
  },
  {
    step: "3",
    title: "We Analyze All Of It",
    desc: "Not a swatch. Not a corner. The entire filter surface gets processed under microscopy.",
    sub: "More surface, more signal.",
  },
  {
    step: "4",
    title: "Read Your Report",
    desc: "Results in spores per cubic meter — the same standard the EPA uses — in plain English.",
    sub: "Results in 48 hours.",
  },
];

const whyWholeFilter = [
  {
    emoji: "📊",
    title: "Months of Data, Not Minutes",
    text: "Your filter has been sampling your air continuously since the day you installed it. A 10-minute pump test captures 10 minutes. This captures your actual life.",
    accent: "Time is the sample.",
  },
  {
    emoji: "🏠",
    title: "Genuinely Whole-Home",
    text: "Every cubic foot of conditioned air in your house passes through that filter. It's the only place in your home where all of your air goes.",
    accent: "One sample. Every room.",
  },
  {
    emoji: "🔬",
    title: "The Entire Surface",
    text: "Cutting a square out of a filter means testing a square. Sending the whole filter means we see loading patterns across the full media — including the hot spots a cut sample would miss.",
    accent: "No sampling luck required.",
  },
  {
    emoji: "🧰",
    title: "Nothing to Assemble",
    text: "No shears. No gloves. No patch to place and remember to collect seven days later. You already own the sample — you just have to mail it.",
    accent: "The hard part is already done.",
  },
];

export default function WholeFilterTestingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan rounded-full opacity-[0.04] blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="text-cyan text-sm font-outfit font-medium tracking-widest uppercase mb-4 block">
              Test Your World
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-white mb-6">
              Whole <span className="text-gradient">Filter</span> Testing
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mb-8">
              Your HVAC filter has spent the last month catching everything floating
              through your house. Mail it to us. We&apos;ll tell you exactly what it
              caught.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={BASIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan text-navy px-8 py-4 rounded-xl font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,229,255,0.3)] text-center"
              >
                Get Started — $99
              </a>
              <Link
                href="/sample-report"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-outfit font-bold text-lg hover:bg-white hover:text-navy transition-all hover:-translate-y-1 text-center"
              >
                View Sample Report
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/patchonfilter.jpeg"
              alt="Removing a used HVAC filter from a furnace for whole-filter lab testing"
              width={560}
              height={420}
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit text-navy mb-3">
              How It Works
            </h2>
            <p className="text-gray-500">
              You already did most of the work. You just didn&apos;t know it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, title, desc, sub }) => (
              <div
                key={step}
                className="bg-[#F7FAFC] border border-gray-200 rounded-2xl p-7"
              >
                <div className="w-10 h-10 rounded-full bg-cyan text-navy font-outfit font-bold flex items-center justify-center mb-5">
                  {step}
                </div>
                <h3 className="font-outfit font-bold text-navy text-lg mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{desc}</p>
                <p className="text-cyan-dim text-xs font-semibold italic">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PICK YOUR DEPTH */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit text-navy mb-4">
              Same Sample. Two Depths.
            </h2>
            <p className="text-gray-500">
              Identical filter, identical lab work. The difference is how much of the
              detail we hand back to you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* BASIC */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
              <span className="inline-block bg-navy text-white text-xs font-bold px-3 py-1 rounded-full font-outfit tracking-wide mb-4">
                BASIC — $99
              </span>
              <h3 className="text-xl font-outfit font-bold text-navy mb-2">
                The Overview
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                A clear read on whether your air is fine or whether something needs
                attention — without a biology degree.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  "Overall air quality score",
                  "Risk level broken out by category",
                  "Plain-English summary of what we found",
                  "Actionable next steps",
                  "Results in 48 hours",
                  "Prepaid return shipping included",
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-gray-700"
                  >
                    <svg
                      className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={BASIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-navy text-white text-center py-3.5 rounded-lg font-outfit font-bold hover:bg-navy-light transition-all"
              >
                Get Basic — $99
              </a>
            </div>

            {/* ADVANCED */}
            <div className="bg-white border-2 border-cyan rounded-2xl p-8 shadow-lg relative">
              <span className="absolute -top-3 right-6 bg-coral text-white text-[10px] font-bold px-3 py-1 rounded-full font-outfit tracking-widest">
                MOST DETAIL
              </span>
              <span className="inline-block bg-cyan text-navy text-xs font-bold px-3 py-1 rounded-full font-outfit tracking-wide mb-4">
                ADVANCED — $149
              </span>
              <h3 className="text-xl font-outfit font-bold text-navy mb-2">
                Every Organism, By Name
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                The full forensic picture — the species-level detail shown on our
                sample report, with counts measured against thresholds.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  "Everything in Basic, plus:",
                  "Every organism identified by name",
                  "Exact counts against normal thresholds",
                  "182+ organisms and particulates analyzed",
                  "Results in spores per cubic meter (EPA standard)",
                  "Shareable with doctors and contractors",
                ].map((f, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2.5 text-sm ${
                      i === 0
                        ? "text-navy font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={ADVANCED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cyan text-navy text-center py-3.5 rounded-lg font-outfit font-bold hover:bg-cyan-dim transition-all"
              >
                Get Advanced — $149
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Start with Basic and want the detail later? You can upgrade the same
            sample to Advanced after your report is delivered.
          </p>
        </div>
      </section>

      {/* WHY THE WHOLE FILTER */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit text-white mb-3">
              Why the Whole Filter?
            </h2>
            <p className="text-gray-400">
              Because it&apos;s the best air sample in your house, and you already own
              it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyWholeFilter.map(({ emoji, title, text, accent }) => (
              <div
                key={title}
                className="bg-navy-light border border-white/10 rounded-2xl p-7"
              >
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="font-outfit font-bold text-white text-lg mb-2">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{text}</p>
                <p className="text-cyan text-xs font-semibold italic">{accent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#F7FAFC] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            {
              stat: "182+",
              label: "Organisms Analyzed",
              sub: "Mold, allergens, pollen, dander, particulates.",
            },
            {
              stat: "48",
              label: "Hours to Results",
              sub: "From the moment your filter reaches the lab.",
            },
            {
              stat: "30+",
              label: "Days of Sampling",
              sub: "However long your filter has been in place.",
            },
            {
              stat: "0",
              label: "Strangers in Your Home",
              sub: "No appointments. No inspection visit.",
            },
          ].map(({ stat, label, sub }) => (
            <div key={label}>
              <div className="text-4xl lg:text-5xl font-outfit font-bold text-cyan-dim mb-2">
                {stat}
              </div>
              <div className="text-navy text-sm font-medium">{label}</div>
              <div className="text-gray-500 text-xs mt-1 italic">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-outfit text-navy mb-4">
            Stop Guessing. <span className="text-coral">Start Knowing.</span>
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Pull the filter. Put it in the box. Mail it back. Get a complete analysis
            of what your home has been circulating. Results in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BASIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan text-navy px-8 py-4 rounded-xl font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,229,255,0.3)]"
            >
              Get Basic — $99
            </a>
            <a
              href={ADVANCED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-navy text-navy px-8 py-4 rounded-xl font-outfit font-bold text-lg hover:bg-navy hover:text-white transition-all hover:-translate-y-1 text-center"
            >
              Get Advanced — $149
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
