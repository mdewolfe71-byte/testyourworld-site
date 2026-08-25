import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WhyCards from "@/components/WhyCards";

export const metadata: Metadata = {
  title: "Test Your World — Know What You're Breathing",
  description:
    "Your HVAC filter captures what's floating in your air. Mail it to us and we test the whole thing for mold, allergens, and mystery particles. From $99. Results in 48 hours.",
};

const tests = [
  {
    badge: "MOST POPULAR",
    badgeColor: "bg-coral",
    name: "Whole Filter Testing — Basic",
    tagline: "Pull it. Box it. Mail it. Done.",
    quote: '"Just tell me if my air is okay."',
    image: "/images/types of filters.jpeg",
    price: "$99",
    shopUrl: "https://testyourworld.myshopify.com/products/filter-pad-test",
    linkHref: "/whole-filter-testing",
    features: [
      "Send us your used HVAC filter — 30+ days old",
      "No cutting, no tools, no assembly",
      "Whole-home analysis from the entire filter",
      "Overall air quality score",
      "Risk level by category, in plain English",
      "Results in 48 hours",
    ],
  },
  {
    badge: "MOST DETAIL",
    badgeColor: "bg-purple-500",
    name: "Whole Filter Testing — Advanced",
    tagline: "Every organism. By name.",
    quote: '"I want to know everything."',
    image: "/images/Wolehome.png.webp",
    price: "$149",
    shopUrl: "https://testyourworld.myshopify.com/products/direct-filter-test-no-kit-needed-20-off",
    linkHref: "/whole-filter-testing",
    features: [
      "Same filter, same lab — full forensic depth",
      "Every organism identified by name",
      "Exact counts against normal thresholds",
      "182+ organisms and particulates analyzed",
      "Results in spores/m³ — the EPA standard",
      "Results in 48 hours",
    ],
  },
  {
    badge: null,
    badgeColor: "",
    name: "Surface Swab",
    tagline: "Swab it. Send it. Stop guessing.",
    quote: '"Is that mold or a committed dust bunny?"',
    image: "/images/rs=h_175,m (1).webp",
    price: "$49",
    shopUrl: "https://testyourworld.myshopify.com/products/surface-swab-mold-test-report",
    linkHref: "/swab-testing",
    features: [
      "Swab any suspicious surface",
      "Walls, ceilings, basements, bathrooms",
      "Window sills, under sinks, behind furniture",
      "Identifies exact mold species",
      "Results in 48 hours",
    ],
  },
  {
    badge: "FOR INSPECTORS",
    badgeColor: "bg-emerald-600",
    name: "Home Inspector",
    tagline: "Air cassette testing. QFF-calculated results.",
    quote: '"Give your clients data that actually means something."',
    image: "/images/Scanner.JPG",
    price: "Partner Pricing",
    shopUrl: null,
    linkHref: "/professionals",
    features: [
      "Air pump cassette sampling — Bio-Pump compatible",
      "QFF-calculated spores/m³ results",
      "182+ particle types analyzed",
      "Next business day turnaround",
      "Branded client reports via TYW portal",
      "Partner dashboard for order tracking",
    ],
  },
];

const faqs = [
  {
    q: "What's the difference between Basic and Advanced?",
    a: "Same filter, same lab work — the difference is how much detail you get back. Basic gives you an overall air quality score, risk levels by category, and a plain-English summary. Advanced identifies every organism by name with exact counts measured against normal thresholds. You can start with Basic and upgrade the same sample later.",
  },
  {
    q: "Do I have to cut my filter?",
    a: "No. Send us the whole filter — that's the point. No shears, no gloves, no craft project. Pull the filter out, put it in the box, drop it in the mail.",
  },
  {
    q: "How old does my filter need to be?",
    a: "At least 30 days in your system. The longer it's been in place, the more of your home's air it has sampled. A brand-new filter hasn't collected enough to analyze yet.",
  },
  {
    q: "What will the test show me?",
    a: "Your report identifies 182+ mold species, allergens, and particulates found in your sample. Results are delivered in spores per cubic meter — the same standard used by the EPA — with plain-English explanations of what was found and what it means.",
  },
  {
    q: "How long does it take to get results?",
    a: "48 hours after we receive your sample. You'll get an email when your report is ready in the Client Portal.",
  },
  {
    q: "Why is it the same price in US and Canada?",
    a: "Because we operate accredited labs on both sides of the border. No middlemen, no currency markups. $99 is $99 wherever you are.",
  },
  {
    q: "What if my results show a problem?",
    a: "Your report includes actionable next steps written in plain language. We're not remediation contractors, so we have no incentive to scare you. Just honest data and honest guidance.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───── 1. HERO ───── */}
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan rounded-full opacity-[0.04] blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5">
              <span className="text-cyan text-sm font-medium font-outfit tracking-wide">AIR QUALITY TESTING MADE SIMPLE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-outfit font-extrabold text-white mb-6 animate-fade-in-up leading-tight">
              What&apos;s In <span className="text-gradient">Your</span> Air?{" "}
              <br className="hidden lg:block" />
              Your Filter Knows.
            </h1>
            <p className="text-lg text-gray-400 mb-2 animate-fade-in-up delay-1">
              No appointments. No strangers in your home. No pants required.
            </p>
            <p className="text-cyan font-semibold mb-10 animate-fade-in-up delay-2">
              Serious science. Delivered without the serious attitude.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-3">
              <a
                href="https://testyourworld.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan text-navy px-8 py-4 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]"
              >
                Get Your Kit — $99
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
              alt="What's really in your air? A man holds up a heavily soiled HVAC filter. The panel lists mold spores, dust and allergens, airborne particles, environmental debris, and fibers and pollutants — and a card reading: the Test Your World whole home checkup is fast, easy, lab analyzed, with results in 48 hours."
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-2xl shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ───── 2. HOOK ───── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-outfit mb-6">
            You&apos;re Breathing <span className="text-coral">Something.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-4">
            Mold spores. Allergens. Mystery particles. They&apos;re floating around your house right now having a great time. Meanwhile, you&apos;re over here sneezing and blaming the cat.
          </p>
          <p className="font-semibold text-navy">
            Maybe it&apos;s time to find out what&apos;s actually going on.
          </p>
        </div>
      </section>

      {/* ───── 3. HOW IT WORKS ───── */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-outfit mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg">Easier than assembling IKEA furniture. Actually easier than everything.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Get Your Kit", desc: "Pick your test. We ship it to your door.", sub: "A few days and it's there." },
              { step: "2", title: "Collect Sample", desc: "Box up your used filter, or swab a suspicious spot.", sub: "No tools required." },
              { step: "3", title: "Mail It Back", desc: "Drop in any mailbox. Prepaid shipping included.", sub: "We even handle the stamps." },
              { step: "4", title: "Get Results", desc: "Report hits your inbox in 48 hours.", sub: "In English. Not scientist." },
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

      {/* ───── 4. PICK YOUR TEST ───── */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-outfit text-white mb-4">Pick Your Test</h2>
            <p className="text-gray-400 text-lg">Four ways to test. All backed by the same accredited lab.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tests.map((test) => (
              <div
                key={test.name}
                className="bg-navy-light border border-white/5 rounded-2xl overflow-hidden hover:border-cyan/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] flex flex-col"
              >
                <div className="relative h-48 bg-navy-mid">
                  <Image src={test.image} alt={test.name} fill className="object-cover" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {test.badge && (
                      <span className={`${test.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full font-outfit tracking-wide`}>
                        {test.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-outfit text-white font-bold mb-1">{test.name}</h3>
                  <p className="text-cyan font-semibold text-sm mb-3">{test.tagline}</p>
                  <p className="text-gray-500 text-sm italic mb-5">{test.quote}</p>
                  <div className="border-t border-white/5 pt-5 mt-auto">
                    <ul className="space-y-2.5 mb-6">
                      {test.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <svg className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    {test.shopUrl ? (
                      <a
                        href={test.shopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-cyan text-navy text-center py-3 rounded-lg font-outfit font-bold hover:bg-cyan-dim transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(0,229,255,0.3)]"
                      >
                        Get {test.name} — {test.price}
                      </a>
                    ) : (
                      <Link
                        href={test.linkHref!}
                        className="block bg-emerald-600 text-white text-center py-3 rounded-lg font-outfit font-bold hover:bg-emerald-700 transition-all hover:-translate-y-0.5"
                      >
                        Learn More — Partner Program
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 5. REAL LAB / REAL SIMPLE ───── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-outfit mb-2">
              Real Lab. <span className="text-cyan">Real Scientists.</span>
            </h2>
            <p className="text-cyan font-semibold text-sm mb-4">Analysis performed to the highest standards</p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Your samples go to an actual accredited laboratory. Actual scientists look at them. Not a guy named Steve with a magnifying glass. We use AI-assisted microscopy for lab-grade accuracy and identify 182+ organism types.
            </p>
            <div className="flex gap-6 mb-8">
              {["Lab Tested", "AI-Assisted", "Accredited"].map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {label}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/images/Scanner.JPG" alt="Microscopy scanner in the lab" width={280} height={200} className="rounded-2xl object-cover w-full h-48 shadow-lg" />
              <Image src="/images/Image 5.jpg" alt="AI spore counting analysis" width={280} height={200} className="rounded-2xl object-cover w-full h-48 shadow-lg" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-outfit mb-2">
              Real <span className="text-coral">Simple.</span>
            </h2>
            <p className="text-coral font-semibold text-sm mb-4">Reports you can actually understand</p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Written in English. Not scientist. Your report includes what was found, what it means, and what to do next. Results in spores per cubic meter — the same standard used by the EPA. Share with doctors, contractors, or that know-it-all neighbor.
            </p>
            <Link
              href="/sample-report"
              className="inline-block border-2 border-navy text-navy px-6 py-3 rounded-xl font-outfit font-bold hover:bg-navy hover:text-white transition-all"
            >
              See a Sample Report
            </Link>
          </div>
        </div>
      </section>

      {/* ───── 6. STATS BAR ───── */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "182+", label: "Organism Types Identified", sub: "Mold. Allergens. Particles. All of it." },
            { stat: "$99", label: "USD or CAD", sub: "Same price both sides of the border." },
            { stat: "48", label: "Hours to Results", sub: "Faster than your last Temu order." },
            { stat: "0", label: "Strangers in Your Home", sub: "Introverts, rejoice." },
          ].map(({ stat, label, sub }) => (
            <div key={label}>
              <div className="text-4xl lg:text-5xl font-outfit font-bold text-cyan mb-2">{stat}</div>
              <div className="text-white text-sm font-medium">{label}</div>
              <div className="text-gray-500 text-xs mt-1 italic">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── 7. WHY TEST WITH US ───── */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-outfit mb-4">Why Test With Us?</h2>
            <p className="text-gray-500 text-lg">Because guessing is exhausting and WebMD already has you worried.</p>
          </div>
          <WhyCards />
        </div>
      </section>

      {/* ───── 8. WHAT WE TEST FOR CALLOUT ───── */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan text-sm font-outfit font-semibold uppercase tracking-widest mb-3">Complete panel transparency</p>
            <h2 className="text-3xl lg:text-4xl font-outfit font-extrabold text-white mb-4">
              182+ organisms.<br />Every one explained.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Most tests tell you what was found. We show you the full panel — including everything we looked for and didn&apos;t find. Because knowing something wasn&apos;t detected is just as valuable as knowing it was.
            </p>
            <Link
              href="/what-we-test-for"
              className="inline-block bg-cyan text-navy px-6 py-3 rounded-xl font-outfit font-bold hover:bg-cyan-dim transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,229,255,0.3)]"
            >
              See the Complete Panel
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Water Damage Indicators", count: "8 species" },
              { label: "Outdoor Mold Load", count: "12 species" },
              { label: "Allergens", count: "10 types" },
              { label: "Airborne Particles", count: "9 types" },
              { label: "Cleanliness Indicators", count: "8 types" },
              { label: "Specialty & Rare", count: "10+ types" },
            ].map(({ label, count }) => (
              <div key={label} className="bg-navy-light border border-white/5 rounded-xl px-4 py-4 hover:border-cyan/20 transition-colors">
                <p className="text-cyan text-xs font-outfit font-semibold mb-1">{count}</p>
                <p className="text-white text-sm font-outfit font-medium leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 9. FAQ ───── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-outfit mb-4">Common Questions</h2>
            <p className="text-gray-500">Everything you wanted to know but were afraid to ask.</p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-xl overflow-hidden hover:border-cyan/30 transition-colors">
                <summary className="flex items-center justify-between p-5 cursor-pointer">
                  <span className="font-outfit font-semibold text-navy pr-4">{q}</span>
                  <span className="faq-icon text-cyan text-2xl font-light transition-transform duration-200 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-500 leading-relaxed text-sm">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 10. COST CALCULATOR CTA ───── */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-coral/20 bg-coral/5">
            <span className="text-coral text-sm font-medium font-outfit tracking-wide">FREE INTERACTIVE TOOL</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-outfit text-white mb-4">
            What&apos;s Bad Air <span className="text-coral">Really</span> Costing You?
          </h2>
          <p className="text-gray-400 text-lg mb-4 max-w-2xl mx-auto">
            Most homeowners don&apos;t realize poor air quality silently drains thousands through energy waste, health costs, and reduced home value.
          </p>
          <p className="text-white font-semibold mb-10">
            Take our 2-minute quiz and find out your 5-year cost of not testing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cost-calculator" className="bg-coral text-white px-8 py-4 rounded-lg font-outfit font-bold text-lg hover:bg-coral/90 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,107,107,0.3)]">
              Calculate My Hidden Costs
            </Link>
            <a
              href="https://testyourworld.myshopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-outfit font-semibold text-lg hover:border-cyan hover:text-cyan transition-all text-center"
            >
              Skip to Kit — $99
            </a>
          </div>
        </div>
      </section>

      {/* ───── 11. FINAL CTA ───── */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan rounded-full opacity-[0.03] blur-[100px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-outfit text-white mb-4">
            Stop Guessing. <span className="text-cyan">Start Knowing.</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Your air. Your answers. Your call. (But seriously, find out what you&apos;re breathing.)
          </p>
          <a
            href="https://testyourworld.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan text-navy px-10 py-4 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]"
          >
            Shop Now — $99
          </a>
        </div>
      </section>

      {/* ───── 12. VIDEO ───── */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-outfit mb-8">See How It Works</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-navy">
            <video controls playsInline preload="metadata" className="w-full aspect-video" poster="/images/patchonfilter.jpeg">
              <source src="/images/Video.MOV" type="video/quicktime" />
              <source src="/images/Video.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
