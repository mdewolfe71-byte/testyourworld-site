import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Surface Swab Testing",
  description: "See something suspicious? Swab it. Send it. Stop guessing. Identifies exact mold species from any surface. Results in 3–5 days. $32 USD or CAD.",
};

const swabSpots = [
  { emoji: "🚿", title: "Bathroom Corners", text: "Behind the toilet. Around the tub. That grout situation. Swab it.", accent: "2 minutes beats 2 years of wondering." },
  { emoji: "🏚️", title: "The Basement", text: "It's damp. It's dark. There's something on the wall. Get answers.", accent: "Basements lie. Lab results don't." },
  { emoji: "👀", title: "That Suspicious Spot", text: "On the wall. On the ceiling. Behind furniture. You've been staring at it for months.", accent: "Just swab it already." },
  { emoji: "🪟", title: "Window Sills", text: "Condensation + wood = questions. Black spots appearing? Don't guess.", accent: "Windows tell stories." },
  { emoji: "🏡", title: "New Home / Rental", text: "Moving in? Test before you unpack. Moving out? Test before you lose that deposit.", accent: "Proof beats opinions." },
  { emoji: "💧", title: "After a Leak", text: "Water happened. Now something's growing. Find out what it is before it spreads.", accent: "Catch it early." },
];

export default function SwabTestingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan rounded-full opacity-[0.04] blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="text-cyan text-sm font-outfit font-medium tracking-widest uppercase mb-4 block">Test Your World</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-white mb-6">
              Surface <span className="text-gradient">Swab</span> Testing
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              See something suspicious? Swab it. Send it. Stop guessing.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/swabcelling.webp"
              alt="Person swabbing a ceiling for mold testing"
              width={560}
              height={420}
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* PRODUCT DETAIL */}
      <section className="py-20 bg-[#F7FAFC]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image src="/images/rs=h_175,m (1).webp" alt="Surface Swab Kit" fill className="object-cover" />
              <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full font-outfit tracking-wide">QUICK &amp; EASY</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-outfit font-bold mb-1">Surface Swab Test</h3>
              <p className="text-cyan font-semibold text-sm mb-2">Swab it. Send it. Stop guessing.</p>
              <p className="text-gray-500 text-sm italic mb-5">&quot;Is that mold or a really committed dust bunny?&quot;</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                See something on a wall, ceiling, or surface that looks suspicious? Our swab kit lets you collect a sample from any surface in seconds. We identify the exact mold species — no guessing, no Googling images at 2am.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Swab any suspicious surface",
                  "Walls, ceilings, basements, bathrooms",
                  "Window sills, under sinks, behind furniture",
                  "Identifies exact mold species",
                  "Tests for mold and fungi — the fuzzy stuff, the musty stuff",
                  "Results in 3–5 days",
                  "Prepaid return shipping included",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://testyourworld.myshopify.com" target="_blank" rel="noopener noreferrer" className="block bg-cyan text-navy text-center py-3.5 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all">
                Get Swab Kit — $32
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WOULD YOU SWAB */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit text-white mb-3">Where Would You Swab?</h2>
            <p className="text-gray-400">Anywhere that looks, smells, or feels... off.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {swabSpots.map((spot) => (
                <div key={spot.title} className="bg-navy-light border border-white/5 rounded-2xl p-7 hover:border-cyan/20 transition-all hover:-translate-y-1 duration-300">
                  <span className="text-3xl mb-4 block">{spot.emoji}</span>
                  <h3 className="text-lg font-outfit text-white font-semibold mb-2">{spot.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{spot.text}</p>
                  <span className="text-green-400 text-sm font-semibold">{spot.accent}</span>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/swab_on_floor.jpeg"
                alt="Swab testing a floor surface"
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
              { step: "1", title: "Order", desc: "Pick your kit. Ships fast.", sub: "30 seconds to order. A few days to arrive." },
              { step: "2", title: "Swab", desc: "Rub the swab on the suspicious spot.", sub: "If it looks weird, swab it." },
              { step: "3", title: "Mail", desc: "Drop in any mailbox.", sub: "Prepaid — because who buys stamps anymore?" },
              { step: "4", title: "Results", desc: "Report hits your inbox.", sub: "In English. Not scientist." },
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

      {/* CTA */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan rounded-full opacity-[0.03] blur-[100px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-outfit text-white mb-4">
            Stop Guessing. <span className="text-cyan">Start Knowing.</span>
          </h2>
          <p className="text-gray-400 mb-8">Real lab. Real scientists. Real answers. For that one spot that&apos;s been bugging you.</p>
          <a href="https://testyourworld.myshopify.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan text-navy px-10 py-4 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]">
            Get Your Swab Kit — $32
          </a>
        </div>
      </section>
    </>
  );
}
