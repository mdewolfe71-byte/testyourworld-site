import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Test Your World — Know What You're Breathing",
  description:
    "Your HVAC filter captures what's floating in your air. We test it for mold, allergens, and mystery particles. $69 USD or CAD. Results in 5–7 days.",
};

const tests = [
  {
    icon: "🩹",
    badge: "MOST VERSATILE",
    badgeColor: "bg-[var(--coral)]",
    name: "AirPatch",
    tagline: "Stick it. Wait. Mail it. Done.",
    quote: '"I want answers, not a craft project."',
    features: [
      '4"×4" patch works anywhere air moves',
      "Test whole home via HVAC filter",
      "Test a single room (basement, bedroom, nursery)",
      "Test your air purifier — is it actually working?",
      "Test DIY setups (box fans, Corsi-Rosenthal boxes)",
      "7-day sampling period",
      "Results in 5–7 days",
    ],
  },
  {
    icon: "✂️",
    badge: "HANDS-ON",
    badgeColor: "bg-purple-500",
    name: "FilterCut",
    tagline: "For the hands-on homeowner.",
    quote: '"That dusty filter is about to become useful."',
    features: [
      "Uses your existing used filter (30+ days old)",
      "Heavy-duty filter shears included (cuts wire mesh)",
      "Nitrile gloves included",
      "Months of accumulated data in one sample",
      "Whole home analysis from one cut",
      "Results in 5–7 days",
    ],
  },
  {
    icon: "🧫",
    badge: null,
    badgeColor: "",
    name: "Surface Swab",
    tagline: "Swab it. Send it. Stop guessing.",
    quote: '"Is that mold or a committed dust bunny?"',
    features: [
      "Swab any suspicious surface",
      "Walls, ceilings, basements, bathrooms",
      "Window sills, under sinks, behind furniture",
      "Identifies exact mold species",
      "Results in 3–5 days",
    ],
  },
];

const whyCards = [
  { icon: "🏠", title: "No Appointments", text: "Test on your schedule. In your pajamas. We don't judge.", accent: "Your house, your rules" },
  { icon: "🚫", title: "No Strangers", text: "Nobody comes to your house. Nobody sees your dishes in the sink.", accent: "Your secret's safe" },
  { icon: "🌀", title: "Test Your Purifier", text: "Spent $400 on an air purifier? Find out if it's actually working.", accent: "Trust but verify" },
  { icon: "🤖", title: "AI-Powered Analysis", text: "AI-assisted microscopy. Lab-grade accuracy. Fancy robots.", accent: "Science, but cool" },
  { icon: "💰", title: "Same Price US or Canada", text: "$69 USD or CAD. No exchange rate games. No surprises.", accent: "Fair is fair" },
  { icon: "📊", title: "Reports You Can Read", text: "Written in English. Not scientist. Share with doctors or contractors.", accent: "Finally, proof" },
];

const faqs = [
  {
    q: "What's the difference between AirPatch and FilterCut?",
    a: "AirPatch uses a fresh 4\"×4\" sampling patch placed on your filter or in a room for 7 days, giving precise data about current air quality. FilterCut uses your existing used filter (30+ days old) — you cut a sample and send it back, giving months of accumulated data. Same lab, same science, different starting points.",
  },
  {
    q: "Can I test if my air purifier is actually working?",
    a: "Yes! Stick an AirPatch on the output side of your purifier. If the air coming out is clean, money well spent. If not... well, now you know.",
  },
  {
    q: "What will the test show me?",
    a: "Your report identifies 36+ mold species, allergens, and particulates found in your sample. Results are delivered in spores per cubic meter — the same standard used by the EPA — with plain-English explanations of what was found and what it means.",
  },
  {
    q: "How long does it take to get results?",
    a: "5–7 business days after we receive your sample. You'll get an email when your report is ready in the Client Portal.",
  },
  {
    q: "Why is it the same price in US and Canada?",
    a: "Because we operate labs on both sides of the border. No middlemen, no currency markups. $69 is $69 wherever you are.",
  },
  {
    q: "What if my results show a problem?",
    a: "Your report includes actionable next steps written in plain language. We're not remediation contractors, so we have no incentive to scare you. Just honest data and honest guidance.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[var(--navy)] pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--cyan)] rounded-full opacity-[0.04] blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--cyan)]/20 bg-[var(--cyan)]/5">
            <span className="text-[var(--cyan)] text-sm font-medium font-[Outfit] tracking-wide">AIR QUALITY TESTING MADE SIMPLE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[Outfit] font-800 text-white mb-6 animate-fade-in-up">
            What&apos;s In <span className="text-gradient">Your</span> Air?
            <br />
            Your Filter Knows.
          </h1>
          <p className="text-lg text-gray-400 mb-2 animate-fade-in-up delay-1">
            No appointments. No strangers in your home. No pants required.
          </p>
          <p className="text-[var(--cyan)] font-semibold mb-10 animate-fade-in-up delay-2">
            Serious science. Delivered without the serious attitude.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-3">
            <a
              href="https://testyourworld.myshopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--cyan)] text-[var(--navy)] px-8 py-4 rounded-lg font-[Outfit] font-bold text-lg hover:bg-[#00D4ED] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]"
            >
              Get Your Kit — $69
            </a>
            <Link
              href="/sample-report"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-[Outfit] font-semibold text-lg hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-all"
            >
              See a Sample Report
            </Link>
          </div>
        </div>
      </section>

      {/* YOU'RE BREATHING SOMETHING */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-[Outfit] mb-6">
            You&apos;re Breathing <span className="text-[var(--coral)]">Something.</span>
          </h2>
          <p className="text-lg text-[var(--gray-500)] leading-relaxed mb-4">
            Mold spores. Allergens. Mystery particles. They&apos;re floating around your house right now having a great time. Meanwhile, you&apos;re over here sneezing and blaming the cat.
          </p>
          <p className="font-semibold text-[var(--navy)]">
            Maybe it&apos;s time to find out what&apos;s actually going on.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-[var(--gray-100)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-[Outfit] mb-4">How It Works</h2>
            <p className="text-[var(--gray-500)] text-lg">Easier than assembling IKEA furniture. Actually easier than everything.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Get Your Kit", desc: "Pick your test. We ship it to your door.", sub: "A few days and it's there." },
              { step: "2", title: "Collect Sample", desc: "Attach a patch, cut your filter, or swab a spot.", sub: "Pick your adventure." },
              { step: "3", title: "Mail It Back", desc: "Drop in any mailbox. Prepaid shipping included.", sub: "We even handle the stamps." },
              { step: "4", title: "Get Results", desc: "Report hits your inbox in 5–7 days.", sub: "In English. Not scientist." },
            ].map(({ step, title, desc, sub }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--navy)] text-[var(--cyan)] flex items-center justify-center text-2xl font-[Outfit] font-bold mx-auto mb-5 shadow-lg">
                  {step}
                </div>
                <h3 className="text-xl font-[Outfit] font-semibold mb-2">{title}</h3>
                <p className="text-[var(--gray-500)] mb-1">{desc}</p>
                <p className="text-sm text-[var(--gray-400)] italic">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PICK YOUR TEST */}
      <section className="py-20 lg:py-28 bg-[var(--navy)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-[Outfit] text-white mb-4">Pick Your Test</h2>
            <p className="text-gray-400 text-lg">Three ways to test. All easy. None require talking to strangers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tests.map((test) => (
              <div
                key={test.name}
                className="bg-[var(--navy-light)] border border-white/5 rounded-2xl p-7 hover:border-[var(--cyan)]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.05)] flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{test.icon}</span>
                  {test.badge && (
                    <span className={`${test.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full font-[Outfit] tracking-wide`}>
                      {test.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-[Outfit] text-white font-bold mb-1">{test.name}</h3>
                <p className="text-[var(--cyan)] font-semibold text-sm mb-3">{test.tagline}</p>
                <p className="text-gray-500 text-sm italic mb-5">{test.quote}</p>
                <div className="border-t border-white/5 pt-5 mt-auto">
                  <ul className="space-y-2.5">
                    {test.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-[var(--cyan)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL LAB / REAL SIMPLE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl lg:text-4xl font-[Outfit] mb-2">
              Real Lab. <span className="text-[var(--cyan)]">Real Scientists.</span>
            </h2>
            <p className="text-[var(--cyan)] font-semibold text-sm mb-4">Analysis performed to the highest standards</p>
            <p className="text-[var(--gray-500)] leading-relaxed mb-6">
              Your samples go to an actual laboratory. Actual scientists look at them. Not just a guy named Steve with a magnifying glass. We use AI-assisted microscopy for lab-grade accuracy and identify 36+ mold species.
            </p>
            <div className="flex gap-6">
              {["Lab Tested", "AI-Powered", "Accredited"].map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm text-[var(--gray-500)]">
                  <div className="w-8 h-8 rounded-full bg-[var(--navy)] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-[Outfit] mb-2">
              Real <span className="text-[var(--coral)]">Simple.</span>
            </h2>
            <p className="text-[var(--coral)] font-semibold text-sm mb-4">Reports you can actually understand</p>
            <p className="text-[var(--gray-500)] leading-relaxed mb-6">
              Written in English. Not scientist. Your report includes what was found, what it means, and what to do next. Results in spores per cubic meter — the same standard used by the EPA. Share with doctors, contractors, or that know-it-all neighbor.
            </p>
            <div className="flex gap-6">
              {["Clear Reports", "Human Support"].map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm text-[var(--gray-500)]">
                  <div className="w-8 h-8 rounded-full bg-[var(--navy)] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[var(--navy)] py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "36+", label: "Mold Species Identified", sub: "The fuzzy. The musty. The scary." },
            { stat: "$69", label: "USD or CAD", sub: "Same price both sides of the border." },
            { stat: "5–7", label: "Days to Results", sub: "Faster than your last Temu order." },
            { stat: "0", label: "Strangers in Your Home", sub: "Introverts, rejoice." },
          ].map(({ stat, label, sub }) => (
            <div key={label}>
              <div className="text-4xl lg:text-5xl font-[Outfit] font-bold text-[var(--cyan)] mb-2">{stat}</div>
              <div className="text-white text-sm font-medium">{label}</div>
              <div className="text-gray-500 text-xs mt-1 italic">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY TEST WITH US */}
      <section className="py-20 lg:py-28 bg-[var(--gray-100)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-[Outfit] mb-4">Why Test With Us?</h2>
            <p className="text-[var(--gray-500)] text-lg">Because guessing is exhausting and WebMD already has you worried.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-7 border border-[var(--gray-200)] hover:border-[var(--cyan)]/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h3 className="text-xl font-[Outfit] font-semibold mb-2">{card.title}</h3>
                <p className="text-[var(--gray-500)] text-sm leading-relaxed mb-3">{card.text}</p>
                <span className="text-[var(--cyan)] text-sm font-semibold">{card.accent}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-[Outfit] mb-4">Common Questions</h2>
            <p className="text-[var(--gray-500)]">Everything you wanted to know but were afraid to ask.</p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-[var(--gray-200)] rounded-xl overflow-hidden hover:border-[var(--cyan)]/30 transition-colors">
                <summary className="flex items-center justify-between p-5 cursor-pointer">
                  <span className="font-[Outfit] font-semibold text-[var(--navy)] pr-4">{q}</span>
                  <span className="faq-icon text-[var(--cyan)] text-2xl font-light transition-transform duration-200 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-[var(--gray-500)] leading-relaxed text-sm">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[var(--navy)] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--cyan)] rounded-full opacity-[0.03] blur-[100px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-[Outfit] text-white mb-4">
            Stop Guessing. <span className="text-[var(--cyan)]">Start Knowing.</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Your air. Your answers. Your call. (But seriously, find out what you&apos;re breathing.)
          </p>
          <a
            href="https://testyourworld.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--cyan)] text-[var(--navy)] px-10 py-4 rounded-lg font-[Outfit] font-bold text-lg hover:bg-[#00D4ED] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]"
          >
            Shop Now — $69
          </a>
        </div>
      </section>
    </>
  );
}
