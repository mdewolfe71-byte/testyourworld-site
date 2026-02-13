import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sample Report",
  description: "See what your Test Your World air quality report looks like. Clear results, plain-English explanations, actionable next steps.",
};

const findings = [
  { category: "Outdoor Molds", status: "Present", statusColor: "bg-yellow-100 text-yellow-800", meaning: "38 spores (Cladosporium, Alternaria) — normal outdoor infiltration." },
  { category: "Water-Damage Molds", status: "Present", statusColor: "bg-yellow-100 text-yellow-800", meaning: "Moisture indicators detected. Monitor humidity levels." },
  { category: "Indoor Molds (Asp/Pen)", status: "Present", statusColor: "bg-orange-100 text-orange-800", meaning: "794 spores. Slightly elevated." },
  { category: "Growth Indicators", status: "Present", statusColor: "bg-orange-100 text-orange-800", meaning: "78 hyphae — monitor humidity." },
  { category: "Total Spore Level", status: "Low", statusColor: "bg-green-100 text-green-800", meaning: "Complete registration for detailed calculations." },
];

export default function SampleReportPage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-outfit text-white mb-4">Simple to Read</h1>
          <p className="text-gray-400">Here&apos;s what your report looks like. Clear. Honest. Actionable.</p>
        </div>
      </section>

      <section className="py-16 bg-[#F7FAFC]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            {/* Report header */}
            <div className="p-8 border-b border-gray-200 text-center">
              <Image
                src="/images/CDlogo.png"
                alt="Test Your World"
                width={64}
                height={64}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-outfit font-bold tracking-wide">AIR FILTER REPORT</h2>
            </div>

            {/* Client info */}
            <div className="p-8 border-b border-gray-200">
              <div className="space-y-1.5 text-sm">
                <p><strong>Name:</strong> Test Thetest</p>
                <p><strong>Address:</strong> <span className="bg-gray-200 px-2 py-0.5 rounded text-xs">███████████████</span></p>
                <p><strong>Email:</strong> <span className="bg-gray-200 px-2 py-0.5 rounded text-xs">███████████████</span></p>
                <p><strong>Order #:</strong> TYW-TYWP00001-00001</p>
                <p><strong>Sample ID:</strong> TYW-20251229-0K7J</p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="p-8 border-b border-gray-200">
              <h3 className="text-lg font-outfit font-bold mb-3">1. Your Home&apos;s Air Snapshot</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We analyzed the particles trapped in your HVAC after 3–6 months in your 3,000–4,000 sq ft (ZIP 48187). Your results show some moisture indicators and common outdoor mold spores along with pollen and dust.
              </p>
            </div>

            {/* Section 2 - Findings Table */}
            <div className="p-8 border-b border-gray-200">
              <h3 className="text-lg font-outfit font-bold mb-4">2. What We Found &amp; What It Means</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 pr-4 font-outfit font-semibold text-gray-500">Category</th>
                      <th className="text-left py-3 pr-4 font-outfit font-semibold text-gray-500">Status</th>
                      <th className="text-left py-3 font-outfit font-semibold text-gray-500">What This Means</th>
                    </tr>
                  </thead>
                  <tbody>
                    {findings.map((f) => (
                      <tr key={f.category} className="border-b border-gray-100">
                        <td className="py-3 pr-4 font-medium">{f.category}</td>
                        <td className="py-3 pr-4">
                          <span className={`${f.statusColor} text-xs font-bold px-2.5 py-1 rounded-full`}>{f.status}</span>
                        </td>
                        <td className="py-3 text-gray-500">{f.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3 - Local Context */}
            <div className="p-8">
              <h3 className="text-lg font-outfit font-bold mb-4">3. Your Local Context</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#F7FAFC] rounded-xl p-5">
                  <p className="text-xs text-gray-400 mb-2 font-semibold uppercase">☁️ Current Outdoor Air Quality</p>
                  <p className="text-sm"><strong>AQI:</strong> <span className="text-green-600 font-semibold">83 (Excellent air quality)</span></p>
                  <p className="text-sm text-gray-500">PM2.5: 4.54 micrograms/m³</p>
                </div>
                <div className="bg-[#F7FAFC] rounded-xl p-5">
                  <p className="text-xs text-gray-400 mb-2 font-semibold uppercase">🌸 Current Pollen Levels</p>
                  <p className="text-sm text-gray-500">Seasonal data — varies by region and time of year.</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-sm text-gray-600">
                <strong>Your Home:</strong> 3,000–4,000 sq ft single family house · 4 occupants · HVAC
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            This is a sample report for demonstration purposes. Actual reports include personalized data based on your specific sample and location.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-outfit text-white mb-4">Want Your Own Report?</h2>
          <p className="text-gray-400 mb-8">$69. Results in 5–7 days. In English.</p>
          <a href="https://testyourworld.myshopify.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan text-navy px-10 py-4 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]">
            Get Your Kit
          </a>
        </div>
      </section>
    </>
  );
}
