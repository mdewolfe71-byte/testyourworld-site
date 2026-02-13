import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn More",
  description: "Everything you need to know about how Test Your World compares to traditional air quality testing methods. Comparison table, audience info, and FAQ.",
};

const audiences = [
  { icon: "🏠", title: "Homeowners", text: "Unexplained allergies? Musty smell you can't find? Get answers about what's really in your air." },
  { icon: "👨‍👩‍👧", title: "Parents", text: "Know what your family is breathing — especially important for kids' rooms and nurseries." },
  { icon: "💚", title: "Home Buyers", text: "Test before you close. The filter tells the home's air quality story — before you sign." },
  { icon: "🏢", title: "Property Managers", text: "Document air quality between tenants. Protect your properties and your liability." },
];

const comparison = [
  { feature: "Sampling Duration", tyw: "30–90 days continuous", pump: "5–10 minutes", petri: "48–72 hours" },
  { feature: "Coverage Area", tyw: "Entire home (all HVAC air)", pump: "Single room/location", petri: "Single room" },
  { feature: "Equipment Needed", tyw: "Scissors only", pump: "Air pump + cassettes", petri: "Petri dishes" },
  { feature: "Detects Dead Spores", tyw: "✓ Yes", pump: "✓ Yes", petri: "✗ No (only viable)" },
  { feature: "Lab Analysis", tyw: "Accredited microscopy", pump: "Accredited microscopy", petri: "Visual ID only" },
  { feature: "Typical Price", tyw: "$49–79", pump: "$150–300+", petri: "$30–50" },
];

const faqs = [
  {
    q: "Is this as accurate as professional testing?",
    a: "Our samples are analyzed using the same accredited microscopy methods used by professional testing labs. The difference is how the sample is collected — we use your HVAC filter as a passive air sampler, which captures particles over weeks or months rather than a brief snapshot. This actually gives you a more comprehensive picture of your home's air quality over time.",
  },
  {
    q: "How is this different from a home mold test kit?",
    a: "Home test kits typically use petri dishes (settle plates) that only capture mold spores that settle by gravity in one spot for 48 hours. They can't detect dead spores and only identify mold that grows on the medium. Our analysis uses microscopy to identify all spore types — living or dead — across your entire home's airflow.",
  },
  {
    q: "What if I don't have HVAC?",
    a: "The AirPatch works anywhere air moves. Place it in a room near a window, fan, or natural airflow path. It works in any space — with or without HVAC. You can also use our Surface Swab if you're testing a specific spot.",
  },
  {
    q: "Can I test a specific room?",
    a: "Yes! With the AirPatch, place it in any room you want to test — a basement, bedroom, nursery, or any area of concern. For whole-home testing, attach it to your HVAC filter.",
  },
  {
    q: "Is the sampling patch safe?",
    a: "Completely. The sampling patch is a passive collector — it doesn't emit anything. It simply captures particles that are already floating through your air. It's safe for homes with kids, pets, and people with sensitivities.",
  },
  {
    q: "What do I do with the results?",
    a: "Your report includes plain-English explanations of every finding and actionable next steps. You can share it with your doctor, an HVAC contractor, or a remediation specialist. We're not in the remediation business, so our advice is always unbiased.",
  },
];

export default function LearnMorePage() {
  return (
    <>
      <section className="relative bg-[var(--navy)] pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-5xl font-[Outfit] text-white mb-4">Learn More About Our Testing</h1>
          <p className="text-gray-400 text-lg">Everything you need to know about how Test Your World compares to traditional methods.</p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[var(--cyan)] text-sm font-[Outfit] font-medium tracking-widest uppercase block mb-3">WHO IT&apos;S FOR</span>
            <h2 className="text-3xl lg:text-4xl font-[Outfit]">Know What You&apos;re Breathing</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <div key={a.title} className="bg-[var(--gray-100)] rounded-2xl p-7 border border-[var(--gray-200)] hover:border-[var(--cyan)]/30 transition-all">
                <span className="text-3xl mb-4 block">{a.icon}</span>
                <h3 className="text-lg font-[Outfit] font-semibold mb-2">{a.title}</h3>
                <p className="text-[var(--gray-500)] text-sm leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 bg-[var(--gray-100)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-[Outfit] mb-3">How We Compare</h2>
            <p className="text-[var(--gray-500)]">See how Test Your World stacks up against traditional testing methods.</p>
          </div>
          <div className="bg-white rounded-2xl border border-[var(--gray-200)] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--navy)]">
                    <th className="text-left py-4 px-6 text-gray-400 font-[Outfit] font-semibold">Feature</th>
                    <th className="text-left py-4 px-6 text-[var(--cyan)] font-[Outfit] font-bold">Test Your World</th>
                    <th className="text-left py-4 px-6 text-gray-400 font-[Outfit] font-semibold">Air Pump Kits</th>
                    <th className="text-left py-4 px-6 text-gray-400 font-[Outfit] font-semibold">Petri Dish Tests</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[var(--gray-100)]"}>
                      <td className="py-4 px-6 font-medium text-[var(--navy)]">{row.feature}</td>
                      <td className="py-4 px-6 text-[var(--cyan)] font-semibold">{row.tyw}</td>
                      <td className="py-4 px-6 text-[var(--gray-500)]">{row.pump}</td>
                      <td className="py-4 px-6 text-[var(--gray-500)]">{row.petri}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[var(--cyan)] text-sm font-[Outfit] font-medium tracking-widest uppercase block mb-3">QUESTIONS</span>
            <h2 className="text-3xl lg:text-4xl font-[Outfit]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-[var(--gray-200)] rounded-xl overflow-hidden hover:border-[var(--cyan)]/30 transition-colors">
                <summary className="flex items-center justify-between p-5 cursor-pointer">
                  <span className="font-[Outfit] font-semibold text-[var(--navy)] pr-4">{q}</span>
                  <span className="faq-icon text-[var(--cyan)] text-2xl font-light transition-transform duration-200 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-[var(--gray-500)] leading-relaxed text-sm">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-[Outfit] text-white mb-4">Ready to Find Out?</h2>
          <p className="text-gray-400 mb-8">$69. No appointments. No strangers. Just answers.</p>
          <a href="https://testyourworld.myshopify.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-[var(--cyan)] text-[var(--navy)] px-10 py-4 rounded-lg font-[Outfit] font-bold text-lg hover:bg-[#00D4ED] transition-all">
            Get Your Kit
          </a>
        </div>
      </section>
    </>
  );
}
