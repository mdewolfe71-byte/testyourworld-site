"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const audiences = [
  {
    icon: "🏠",
    title: "Home Inspectors",
    badge: "AIR CASSETTE",
    badgeColor: "bg-cyan text-navy",
    who: "Licensed home inspectors and real estate professionals",
    how: "Run an air pump cassette near the HVAC return during the inspection. Mail it in. Client gets a full QFF-calculated spores/m³ report as fast as next business day.",
    highlight: "Add lab-grade air quality to every inspection — no lab visits, no couriers.",
    features: [
      "Bio-Pump compatible cassette kits",
      "QFF-calculated spores/m³ results",
      "As fast as next business day",
      "Branded client reports via TYW portal",
    ],
  },
  {
    icon: "🔧",
    title: "HVAC Contractors",
    badge: "FILTER CUT",
    badgeColor: "bg-purple-500 text-white",
    who: "HVAC technicians and service companies",
    how: "You're already at the client's home changing the filter. Cut a sample, drop it in the prepaid envelope. Client gets their air quality report without any extra hassle.",
    highlight: "Turn every service call into a value-add — zero extra equipment needed.",
    features: [
      "Uses the filter you're already removing",
      "No extra equipment or training required",
      "182+ particle types analyzed",
      "Upsell opportunity on every visit",
    ],
  },
  {
    icon: "📦",
    title: "Suppliers & Distributors",
    badge: "WHOLESALE",
    badgeColor: "bg-emerald-600 text-white",
    who: "Distributors and wholesalers supplying HVAC and inspection professionals",
    how: "Stock TYW kits alongside your filter and equipment products. Your HVAC and inspector customers add air quality testing to their service offering — you add a revenue line with zero overhead.",
    highlight: "Stock it. Sell it. We handle the lab and the reports.",
    features: [
      "Wholesale kit pricing",
      "Full product line available",
      "Co-marketing support",
      "Dedicated supplier account manager",
    ],
  },
];

const sharedBenefits = [
  { icon: "🔬", title: "Same Accredited Lab", text: "Every sample — cassette or filter cut — goes through the same AI-enhanced microscopy. 182+ particle types. No shortcuts." },
  { icon: "📊", title: "Partner Dashboard", text: "Track every order, view all client reports, and manage your account from one place." },
  { icon: "📋", title: "Branded Reports", text: "Client reports carry your company name. Professional, clean, and shareable with doctors or contractors." },
  { icon: "⚡", title: "Fast Turnaround", text: "Results as fast as next business day after we receive the sample. Faster than any culture-based competitor." },
  { icon: "💰", title: "Commission & Wholesale", text: "Volume pricing and commission structures available. Add a revenue stream with zero lab overhead." },
  { icon: "🤝", title: "Dedicated Support", text: "A real person to onboard you, answer questions, and help you grow your air quality offering." },
];

export default function ProfessionalsPage() {
  const [role, setRole] = useState("home_inspector");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const company = data.get("company");
    const email = data.get("email");
    const phone = data.get("phone");
    const notes = data.get("notes");
    const roleLabel = audiences.find((a) => a.title.toLowerCase().replace(/ /g, "_") === role)?.title || role;

    const subject = encodeURIComponent(`Partner Application — ${roleLabel}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nRole: ${roleLabel}\n\nNotes:\n${notes}`
    );
    window.location.href = `mailto:partners@testyourworld.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan rounded-full opacity-[0.04] blur-[140px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-5 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5">
            <span className="text-cyan text-sm font-medium font-outfit tracking-wide">PARTNER PROGRAM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-outfit font-extrabold text-white mb-6">
            Built for <span className="text-gradient">Professionals</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Whether you&apos;re a home inspector running cassette samples, an HVAC tech cutting filters on-site, or a supplier stocking kits for your customers — Test Your World has a partner program for you.
          </p>
          <p className="text-cyan font-semibold mb-10">
            Same accredited lab. Same AI-powered results. One partner program.
          </p>
          <a
            href="#apply"
            className="inline-block bg-cyan text-navy px-10 py-4 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]"
          >
            Apply to Partner Program
          </a>
        </div>
      </section>

      {/* THREE AUDIENCE CARDS */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-navy mb-3">Who We Work With</h2>
            <p className="text-gray-500 text-lg">Three types of professionals. One program. Zero lab visits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl mb-4 block">{a.icon}</span>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full font-outfit tracking-wide mb-4 ${a.badgeColor}`}>
                  {a.badge}
                </span>
                <h3 className="text-2xl font-outfit font-bold text-navy mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm mb-4 italic">{a.who}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{a.how}</p>
                <p className="text-cyan font-semibold text-sm mb-6">{a.highlight}</p>
                <ul className="space-y-2.5 border-t border-gray-100 pt-5">
                  {a.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit text-white mb-3">How It Works</h2>
            <p className="text-gray-400">Simple from your end. Serious from ours.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Join the Program", desc: "Fill out the application below. We&apos;ll set up your partner account and dashboard.", sub: "Usually same business day." },
              { step: "2", title: "Order Your Kits", desc: "Order cassettes or filter-cut kits through your partner account at wholesale pricing.", sub: "Pre-labeled. Pre-paid return." },
              { step: "3", title: "Collect On-Site", desc: "Run the cassette, cut the filter, or hand a kit to your customer. Drop it in any mailbox.", sub: "No lab visits. No couriers." },
              { step: "4", title: "Client Gets Results", desc: "Full lab report delivered to the client portal. Branded with your company name.", sub: "As fast as next business day." },
            ].map(({ step, title, desc, sub }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-cyan/20 text-cyan flex items-center justify-center text-2xl font-outfit font-bold mx-auto mb-5">
                  {step}
                </div>
                <h3 className="text-lg font-outfit font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-1" dangerouslySetInnerHTML={{ __html: desc }} />
                <p className="text-xs text-cyan italic">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHARED BENEFITS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-navy mb-3">What Every Partner Gets</h2>
            <p className="text-gray-500">Regardless of your role, the program includes everything you need.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sharedBenefits.map((b) => (
              <div key={b.title} className="bg-[#F7FAFC] rounded-2xl p-7 border border-gray-200 hover:border-cyan/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <span className="text-3xl mb-4 block">{b.icon}</span>
                <h3 className="text-lg font-outfit font-semibold text-navy mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAB CREDIBILITY */}
      <section className="py-16 bg-[#F7FAFC] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4">
              <Image src="/images/Scanner.JPG" alt="Lab microscopy scanner" width={280} height={200} className="rounded-2xl object-cover w-full h-44 shadow-lg" />
              <Image src="/images/Image 5.jpg" alt="AI spore analysis" width={280} height={200} className="rounded-2xl object-cover w-full h-44 shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-outfit font-bold text-navy mb-3">Real Lab. Real Scientists.</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Every sample goes to our accredited lab. AI-assisted microscopy identifies 182+ particle types — mold species, allergens, pollen, dander, and particulates. Results your clients can hand to a doctor, contractor, or attorney.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Lab Accredited", "AI-Powered", "182+ Types", "EPA-Standard Units"].map((label) => (
                  <span key={label} className="flex items-center gap-1.5 text-xs text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER APPLICATION FORM */}
      <section id="apply" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan rounded-full opacity-[0.03] blur-[120px]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5">
              <span className="text-cyan text-sm font-medium font-outfit tracking-wide">PARTNER APPLICATION</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-outfit text-white mb-3">Apply to Partner</h2>
            <p className="text-gray-400">Fill this out and we&apos;ll be in touch same business day to get you set up.</p>
          </div>

          {submitted ? (
            <div className="bg-navy-light border border-cyan/20 rounded-2xl p-10 text-center">
              <span className="text-5xl mb-4 block">✅</span>
              <h3 className="text-2xl font-outfit text-white font-bold mb-2">Application Sent!</h3>
              <p className="text-gray-400">We&apos;ll reach out to <span className="text-cyan">partners@testyourworld.com</span> same business day to get you set up.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-navy-light border border-white/10 rounded-2xl p-8 space-y-5">

              {/* Role selector */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">I am a…</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: "home_inspector", label: "Home Inspector" },
                    { value: "hvac_contractor", label: "HVAC Contractor" },
                    { value: "supplier", label: "Supplier / Distributor" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setRole(opt.value)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                        role === opt.value
                          ? "bg-cyan text-navy border-cyan font-bold"
                          : "bg-white/5 text-gray-400 border-white/10 hover:border-cyan/30 hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name *</label>
                  <input name="name" type="text" required placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Company Name</label>
                  <input name="company" type="text" placeholder="Smith Home Inspections"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Email *</label>
                  <input name="email" type="email" required placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone</label>
                  <input name="phone" type="tel" placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Anything we should know? <span className="text-gray-500 font-normal">(optional)</span></label>
                <textarea name="notes" rows={3} placeholder="Volume estimates, service area, questions..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-sm resize-none" />
              </div>

              <input type="hidden" name="role" value={role} />

              <button type="submit"
                className="w-full bg-cyan text-navy py-4 rounded-xl font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,229,255,0.3)]">
                Submit Application
              </button>

              <p className="text-center text-gray-500 text-xs">
                We&apos;ll reach out within one business day. Questions? Email{" "}
                <a href="mailto:partners@testyourworld.com" className="text-cyan hover:underline">partners@testyourworld.com</a>
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
