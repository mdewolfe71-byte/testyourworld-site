import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost Calculator — What's Bad Air Really Costing You?",
  description:
    "Find out the true 5-year cost of not testing your indoor air quality. Mold, allergens, energy waste — our free calculator shows what you're really paying.",
};

export default function CostCalculatorPage() {
  return (
    <section className="bg-navy pt-24 pb-0 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center mb-8">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5">
          <span className="text-cyan text-sm font-medium font-outfit tracking-wide">
            FREE INTERACTIVE TOOL
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-extrabold text-white mb-4">
          What&apos;s Bad Air <span className="text-gradient">Really</span> Costing You?
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Answer a few quick questions and we&apos;ll estimate the true 5-year cost of not testing your indoor air quality.
        </p>
      </div>

      {/* Calculator Embed */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
          <iframe
            src="https://tyw-cost-calculator.vercel.app/?embed=true&theme=dark"
            title="Air Quality Cost Calculator"
            className="w-full border-0"
            style={{ height: "700px" }}
            allow="clipboard-write"
          />
        </div>
      </div>

      {/* Supporting content */}
      <div className="bg-navy-light border-t border-white/5 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-outfit font-bold text-white mb-4">
            Why Estimate the Cost?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Most homeowners don&apos;t realize that poor indoor air quality silently drains thousands from their wallet — through higher energy bills, avoidable health costs, and reduced home value. A $69 test kit can identify what&apos;s in your air before it costs you thousands.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                stat: "$3,500+",
                label: "Average Mold Remediation",
                sub: "Prevention is cheaper than the cure.",
              },
              {
                stat: "15%",
                label: "Energy Wasted on Dirty Systems",
                sub: "Your HVAC is working harder than it should.",
              },
              {
                stat: "3%",
                label: "Home Value at Risk",
                sub: "Buyers test. Sellers wish they had.",
              },
            ].map(({ stat, label, sub }) => (
              <div key={label} className="bg-navy border border-white/5 rounded-xl p-6">
                <div className="text-3xl font-outfit font-bold text-cyan mb-2">{stat}</div>
                <div className="text-white text-sm font-medium mb-1">{label}</div>
                <div className="text-gray-500 text-xs">{sub}</div>
              </div>
            ))}
          </div>
          <a
            href="https://testyourworld.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan text-navy px-8 py-4 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]"
          >
            Get Your Kit — $69
          </a>
        </div>
      </div>
    </section>
  );
}
