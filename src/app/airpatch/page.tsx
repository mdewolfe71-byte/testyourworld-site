import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AirPatch — Whole Home Air Quality Test",
  description:
    "Stick it anywhere air moves. Test your whole home, a single room, your basement, or your air purifier. 7-day sampling. 182+ particles analyzed. Results in 5–7 days. $69 USD or CAD.",
};

const useCases = [
  {
    emoji: "🌀",
    title: "Whole Home via HVAC",
    text: "Stick the patch on your return air filter. Your HVAC system becomes your air sampler — capturing particles from every room in the house over 7 days.",
    accent: "The most complete whole-home picture.",
  },
  {
    emoji: "🛏️",
    title: "Single Room Testing",
    text: "Worried about the basement? The baby's room? That one bedroom that always smells a bit... off? Stick the patch near a vent or air source and test just that space.",
    accent: "Pinpoint the problem room.",
  },
  {
    emoji: "✅",
    title: "Air Purifier Verification",
    text: "Paid $300–$800 for an air purifier? Stick an AirPatch on the output side. If the air coming out is measurably cleaner, money well spent. If not — now you know.",
    accent: "Trust but verify.",
  },
  {
    emoji: "🏠",
    title: "New Home / Moving In",
    text: "Before you unpack a single box, know what you're moving into. Previous owners, pets, moisture — your filter won't lie.",
    accent: "Know before you unpack.",
  },
  {
    emoji: "🔧",
    title: "DIY Air Setups",
    text: "Running a Corsi-Rosenthal box fan filter? A DIY air purifier? Curious if it actually does anything? Patch the output and find out.",
    accent: "Validate your build.",
  },
  {
    emoji: "📊",
    title: "Before & After Testing",
    text: "Test before remediation or filter replacement. Test again after. See whether the work made a measurable difference.",
    accent: "Proof that the fix worked.",
  },
];

const features = [
  '4"×4" adhesive sampling patch',
  "Works anywhere air moves — vents, filters, purifiers",
  "7-day sampling period captures a full week of air",
  "182+ particle types analyzed",
  "36+ mold species, allergens, pollen, dander, PM2.5",
  "Prepaid return shipping included",
  "Results in 5–7 business days",
  "Report in plain English — not scientist",
  "Digital report via TYW Client Portal",
];

export default function AirPatchPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral rounded-full opacity-[0.04] blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="text-coral text-sm font-outfit font-medium tracking-widest uppercase mb-4 block">Most Versatile Test</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-white mb-6">
              AirPatch<br />
              <span className="text-gradient">Stick. Wait. Know.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mb-4">
              A 4&quot;×4&quot; sampling patch that works anywhere air moves. Leave it for 7 days, mail it back, and get a full lab analysis of what&apos;s floating in your air.
            </p>
            <p className="text-coral font-semibold mb-10">
              Whole home. Single room. Air purifier. You pick the target.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://testyourworld.myshopify.com/products/airpatch-kit-whole-home-air-quality-test"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan text-navy px-8 py-4 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]"
              >
                Get AirPatch — $69
              </a>
              <Link
                href="/sample-report"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-outfit font-semibold text-lg hover:border-cyan hover:text-cyan transition-all text-center"
              >
                See a Sample Report
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/patchonfilter.jpeg"
              alt="AirPatch sampling patch on an HVAC filter"
              width={560}
              height={420}
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* WHAT'S IN THE KIT */}
      <section className="py-20 bg-[#F7FAFC]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image src="/images/patchonfilter.jpeg" alt="AirPatch Kit" fill className="object-cover" />
              <span className="absolute top-4 left-4 bg-coral text-white text-xs font-bold px-3 py-1 rounded-full font-outfit tracking-wide">MOST VERSATILE</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-outfit font-bold mb-1">AirPatch Kit</h3>
              <p className="text-cyan font-semibold text-sm mb-2">Stick it. Wait. Mail it. Done.</p>
              <p className="text-gray-500 text-sm italic mb-5">&quot;I want answers, not a craft project.&quot;</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                The most versatile air quality test we offer. The patch adheres to any surface where air moves — your HVAC filter, a vent, a room corner, or the output of your air purifier. Leave it for 7 days and mail it back. We analyze 182+ particle types and send you a plain-English report.
              </p>
              <ul className="space-y-3 mb-6">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://testyourworld.myshopify.com/products/airpatch-kit-whole-home-air-quality-test"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cyan text-navy text-center py-3.5 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all"
              >
                Get AirPatch — $69
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WOULD YOU PATCH */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit text-white mb-3">Where Would You Patch?</h2>
            <p className="text-gray-400">Anywhere air moves. The options are wide open.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {useCases.map((uc) => (
                <div key={uc.title} className="bg-navy-light border border-white/5 rounded-2xl p-7 hover:border-cyan/20 transition-all hover:-translate-y-1 duration-300">
                  <span className="text-3xl mb-4 block">{uc.emoji}</span>
                  <h3 className="text-lg font-outfit text-white font-semibold mb-2">{uc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{uc.text}</p>
                  <span className="text-coral text-sm font-semibold">{uc.accent}</span>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/vent-attachment-.png"
                alt="AirPatch on a vent"
                width={400}
                height={600}
                className="rounded-2xl shadow-2xl object-cover w-full sticky top-24"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit mb-3">How It Works</h2>
            <p className="text-gray-500">Four steps. No PhD required.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Order", desc: "Pick your kit. Ships to your door.", sub: "30 seconds to order." },
              { step: "2", title: "Attach", desc: "Peel backing. Stick to filter, vent, or purifier.", sub: "Anywhere air moves." },
              { step: "3", title: "Wait 7 Days", desc: "Leave it for a full week. Your air does the work.", sub: "Then peel it off." },
              { step: "4", title: "Mail & Wait", desc: "Drop in any mailbox. Results in 5–7 days.", sub: "In English. Not scientist." },
            ].map(({ step, title, desc, sub }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-navy text-cyan flex items-center justify-center text-2xl font-outfit font-bold mx-auto mb-5 shadow-lg">
                  {step}
                </div>
                <h3 className="text-xl font-outfit font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 mb-1">{desc}</p>
                <p className="text-sm text-gray-400 italic">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AIRPATCH VS FILTERCUT */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit mb-4">AirPatch vs. FilterCut</h2>
            <p className="text-gray-500">Same lab, same science. Different starting points. Here&apos;s how to pick.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-coral/5 border-2 border-coral/30 rounded-2xl p-8">
              <span className="inline-block bg-coral text-white text-xs font-bold px-3 py-1 rounded-full font-outfit tracking-wide mb-4">AIRPATCH — $69</span>
              <h3 className="text-xl font-outfit font-bold text-navy mb-4">Choose AirPatch if…</h3>
              <ul className="space-y-3">
                {[
                  "You want to test a specific room, not the whole house",
                  "Your filter is new or less than 30 days old",
                  "You want to test your air purifier's output",
                  "You want the freshest possible snapshot of current air",
                  "You're testing a DIY setup (box fan, Corsi-Rosenthal)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-coral mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-8">
              <span className="inline-block bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full font-outfit tracking-wide mb-4">FILTERCUT — $69</span>
              <h3 className="text-xl font-outfit font-bold text-navy mb-4">Choose FilterCut if…</h3>
              <ul className="space-y-3">
                {[
                  "Your filter is 30+ days old and you want months of data",
                  "You want the richest whole-home historical picture",
                  "You already have a used filter sitting around",
                  "You're doing a baseline test of a home you've lived in",
                  "You want accumulated data, not a 7-day snapshot",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">Not sure? Both test the same 182+ particle types. You can&apos;t go wrong with either.</p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "182+", label: "Particle Types", sub: "Mold, allergens, pollen, dander, PM2.5" },
            { stat: "$69", label: "USD or CAD", sub: "Same price, both sides of the border." },
            { stat: "5–7", label: "Days to Results", sub: "Faster than your last Amazon order." },
            { stat: "7", label: "Days Sampling", sub: "A full week of your home's air captured." },
          ].map(({ stat, label, sub }) => (
            <div key={label}>
              <div className="text-4xl lg:text-5xl font-outfit font-bold text-cyan mb-2">{stat}</div>
              <div className="text-white text-sm font-medium">{label}</div>
              <div className="text-gray-500 text-xs mt-1 italic">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7FAFC] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-outfit text-navy mb-4">
            Stop Guessing. <span className="text-coral">Start Knowing.</span>
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Stick it. Wait seven days. Mail it back. Get a complete analysis of what&apos;s floating in your air. $69. No appointments. No strangers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://testyourworld.myshopify.com/products/airpatch-kit-whole-home-air-quality-test"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan text-navy px-8 py-4 rounded-xl font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,229,255,0.3)]"
            >
              Get AirPatch — $69
            </a>
            <Link
              href="/sample-report"
              className="border-2 border-navy text-navy px-8 py-4 rounded-xl font-outfit font-bold text-lg hover:bg-navy hover:text-white transition-all hover:-translate-y-1 text-center"
            >
              View Sample Report
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
