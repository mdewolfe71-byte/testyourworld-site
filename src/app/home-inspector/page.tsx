import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Inspector Air Quality Testing",
  description:
    "Professional-grade air cassette testing for licensed home inspectors and real estate professionals. QFF-calculated spores/m³ results. Partner with Test Your World.",
};

const howItWorks = [
  {
    step: "1",
    title: "Order Cassettes",
    desc: "Order inspector cassette kits through your partner account.",
    sub: "Pre-labeled. Pre-paid return shipping.",
  },
  {
    step: "2",
    title: "Run the Sample",
    desc: "Attach cassette to your air pump. Run for the prescribed duration near the HVAC return.",
    sub: "Standard Bio-Pump compatible.",
  },
  {
    step: "3",
    title: "Mail It In",
    desc: "Drop in any mailbox. No couriers. No lab drops.",
    sub: "Prepaid return envelope included.",
  },
  {
    step: "4",
    title: "Client Gets Results",
    desc: "Full QFF-calculated report delivered to client portal in 5–7 days.",
    sub: "Spores/m³. 182+ particle types. Plain English.",
  },
];

const whyPartners = [
  {
    icon: "📊",
    title: "QFF-Calculated Results",
    text: "Not just a raw count. Our patented Quantitative Filter Forensics engine converts cassette data into spores per cubic meter — the same standard used by industrial hygienists.",
    accent: "EPA-standard reporting",
  },
  {
    icon: "🔬",
    title: "182+ Particle Types",
    text: "AI-assisted microscopy identifies 90+ mold species, ascospores, basidiospores, pollen, dander, particulates, and more — far beyond what competitors test for.",
    accent: "The most complete analysis available",
  },
  {
    icon: "📋",
    title: "Report Ready for Your Clients",
    text: "Your clients receive a branded, plain-English report through the TYW portal. No interpretation required on your end. Just results they can act on.",
    accent: "Share with doctors or remediation pros",
  },
  {
    icon: "⚡",
    title: "5–7 Day Turnaround",
    text: "Results back before your inspection report is even finalized. No waiting weeks for lab culture results.",
    accent: "Faster than culture-based methods",
  },
  {
    icon: "🤝",
    title: "Partner Dashboard",
    text: "Track your orders, view all client reports, and manage your account from your dedicated partner portal.",
    accent: "Everything in one place",
  },
  {
    icon: "💰",
    title: "Add Revenue to Every Inspection",
    text: "Offer air quality testing as an add-on service. White-label pricing options available. Commission structure for referrals.",
    accent: "New income stream, minimal overhead",
  },
];

const vsTable = [
  { feature: "Sampling method", tyw: "Air cassette (Bio-Pump)", competitor: "Petri dish / culture" },
  { feature: "Result type", tyw: "Spores/m³ (QFF calculated)", competitor: "Colony counts" },
  { feature: "Turnaround", tyw: "5–7 days", competitor: "7–14 days" },
  { feature: "Species identified", tyw: "182+ types", competitor: "Typically 20–36" },
  { feature: "Fragile spores (Stachybotrys)", tyw: "✓ Detected", competitor: "Often missed (culture bias)" },
  { feature: "Viable + non-viable", tyw: "✓ Both", competitor: "Viable only" },
  { feature: "Partner portal", tyw: "✓ Full dashboard", competitor: "Typically none" },
];

const faqs = [
  {
    q: "What air pump is compatible?",
    a: "Our cassettes are compatible with standard Bio-Pump style air sampling pumps (SKC, Zefon, and most major brands). Typical sampling runs 5–10 minutes at 15 L/min near the HVAC return or in the target area.",
  },
  {
    q: "How is spores/m³ calculated?",
    a: "We use our proprietary QFF (Quantitative Filter Forensics) engine. It takes the raw spore count from the cassette slide and applies the cassette's sampling volume, flow rate, duration, and MERV-equivalent efficiency to produce a validated spores/m³ result — the same metric used by industrial hygienists.",
  },
  {
    q: "Do clients need an account to get results?",
    a: "No. Clients receive an email with a link to their report in the TYW client portal. No account creation required unless they want to track multiple tests over time.",
  },
  {
    q: "Can I white-label the reports?",
    a: "Yes. Partner accounts include white-label branding options — your company name and logo on the report. Contact us to set up your partner profile.",
  },
  {
    q: "What's the pricing structure for partners?",
    a: "Partner pricing is available on volume and includes wholesale kit pricing plus optional commission on client referrals. Reach out via the partner contact form for a custom quote.",
  },
  {
    q: "Is this the same lab that does the filter tests?",
    a: "Yes — same accredited lab, same AI-enhanced microscopy, same 182+ particle identification. Air cassette samples go through the same analysis pipeline as our FilterCut and AirPatch products.",
  },
];

export default function HomeInspectorPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan rounded-full opacity-[0.04] blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-5 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5">
              <span className="text-cyan text-sm font-medium font-outfit tracking-wide">FOR LICENSED PROFESSIONALS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-white mb-6">
              Air Quality Testing<br />
              Built for <span className="text-gradient">Inspectors</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mb-4">
              Professional-grade air cassette sampling with QFF-calculated spores/m³ results. 182+ particle types. 5–7 day turnaround. A report your clients can actually use.
            </p>
            <p className="text-cyan font-semibold mb-10">
              Add air quality to every inspection. No lab drops. No couriers. No complications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="mailto:partners@testyourworld.com"
                className="bg-cyan text-navy px-8 py-4 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]"
              >
                Become a Partner
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
              src="/images/Scanner.JPG"
              alt="AI-enhanced microscopy lab analysis"
              width={560}
              height={420}
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-outfit mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg">From cassette to client report — the whole process.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map(({ step, title, desc, sub }) => (
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

      {/* WHY PARTNER */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-outfit text-white mb-4">Why Inspectors Partner With Us</h2>
            <p className="text-gray-400 text-lg">Serious lab results. No serious overhead.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPartners.map((card) => (
              <div key={card.title} className="bg-navy-light border border-white/5 rounded-2xl p-7 hover:border-cyan/30 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]">
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h3 className="text-xl font-outfit font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{card.text}</p>
                <span className="text-cyan text-sm font-semibold">{card.accent}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SCIENCE — QFF */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-navy/20 bg-navy/5">
                <span className="text-navy text-sm font-medium font-outfit tracking-wide">THE QFF ENGINE</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-outfit mb-4">
                Raw Count → <span className="text-cyan">Spores/m³</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most labs hand you a raw count from the cassette slide and leave interpretation to you. We don&apos;t.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our proprietary <strong>Quantitative Filter Forensics (QFF)</strong> engine processes every sample using the cassette&apos;s flow rate, sampling duration, and volume to produce a validated spores/m³ result — the same metric used in industrial hygiene and referenced by the EPA.
              </p>
              <p className="text-gray-600 leading-relaxed">
                That means your clients get a report they can hand directly to a remediation contractor, allergist, or real estate attorney — with numbers that mean something.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Raw spore count from cassette", value: "Input", color: "border-gray-300 text-gray-500" },
                { label: "Flow rate (L/min)", value: "×", color: "border-gray-200 text-gray-400" },
                { label: "Sampling duration (min)", value: "×", color: "border-gray-200 text-gray-400" },
                { label: "QFF calculation engine", value: "⚙️", color: "border-cyan/40 text-cyan" },
                { label: "Validated spores/m³ result", value: "Output", color: "border-cyan text-cyan bg-cyan/5" },
              ].map((row) => (
                <div key={row.label} className={`flex items-center gap-4 p-4 rounded-xl border ${row.color}`}>
                  <span className={`text-sm font-outfit font-bold w-16 text-center flex-shrink-0 ${row.color.includes('cyan') ? 'text-cyan' : 'text-gray-400'}`}>{row.value}</span>
                  <span className="text-gray-700 text-sm font-medium">{row.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VS TABLE */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit mb-4">TYW vs. Traditional Air Testing</h2>
            <p className="text-gray-500">How we stack up against petri dish and culture-based methods.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 bg-navy text-white text-sm font-outfit font-semibold">
              <div className="px-6 py-4">Feature</div>
              <div className="px-6 py-4 text-cyan">Test Your World</div>
              <div className="px-6 py-4 text-gray-400">Typical Competitor</div>
            </div>
            {vsTable.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="px-6 py-4 text-gray-600 font-medium">{row.feature}</div>
                <div className="px-6 py-4 text-gray-800 font-semibold">{row.tyw}</div>
                <div className="px-6 py-4 text-gray-400">{row.competitor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAB PHOTOS */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit text-white mb-4">Real Lab. Real Scientists.</h2>
            <p className="text-gray-400">AI-assisted microscopy. 182+ particle types. The same analysis your clients deserve.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Image
              src="/images/Scanner.JPG"
              alt="Microscopy scanner in the lab"
              width={560}
              height={400}
              className="rounded-2xl shadow-2xl object-cover w-full h-64"
            />
            <Image
              src="/images/Image 5.jpg"
              alt="AI spore counting and analysis"
              width={560}
              height={400}
              className="rounded-2xl shadow-2xl object-cover w-full h-64"
            />
          </div>
          <div className="flex justify-center gap-8 mt-10">
            {["Lab Tested", "AI-Powered", "182+ Types", "EPA-Standard Units"].map((label) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit mb-4">Inspector FAQ</h2>
            <p className="text-gray-500">The questions we get from inspectors before they partner with us.</p>
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

      {/* PARTNER CTA */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan rounded-full opacity-[0.03] blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5">
            <span className="text-cyan text-sm font-medium font-outfit tracking-wide">PARTNER PROGRAM</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-outfit text-white mb-4">
            Ready to Add Air Quality<br />
            to Every <span className="text-cyan">Inspection?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join licensed home inspectors and real estate professionals who deliver lab-grade air quality reports to their clients — with zero lab visits required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partners@testyourworld.com"
              className="bg-cyan text-navy px-8 py-4 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]"
            >
              Apply to Partner Program
            </a>
            <Link
              href="/contact"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-outfit font-semibold text-lg hover:border-cyan hover:text-cyan transition-all text-center"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
