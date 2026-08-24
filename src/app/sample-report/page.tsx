"use client";

import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const reportMeta = {
  name: "Jane Sample",
  orderId: "TYW-20260602-DEMO",
  sampleId: "TYW-20260602-0X4R",
  date: "June 2, 2026",
  home: "3,000–4,000 sq ft · Single Family · 4 Occupants · Pets · HVAC",
  zip: "48187",
  score: 82,
  scoreLabel: "Good",
  scoreSub: "Better than 68% of homes tested",
  confidence: "91%",
  nextTest: "6 months",
  methodology: "Quantitative Filter Forensics (QFF)",
  aqi: { value: 74, label: "Good air quality" },
  pollen: [
    { type: "Grasses", level: "Moderate" },
    { type: "Trees", level: "Very Low" },
    { type: "Weeds", level: "Unknown" },
  ],
};

const categories = [
  {
    id: "water-damage",
    label: "Water Damage Indicators",
    desc: "Mold species linked to moisture intrusion or water damage",
    grade: "Excellent",
    risk: "low",
    count: 12,
    unit: "spores",
    summary: "No evidence of moisture-related mold growth.",
    species: [
      { name: "Chaetomium", count: 4, max: 500, threshold: 15 },
      { name: "Fusarium", count: 3, max: 500, threshold: 20 },
      { name: "Ulocladium", count: 5, max: 500, threshold: 20 },
      { name: "Stachybotrys", count: 0, max: 500, threshold: 10 },
      { name: "Trichoderma", count: 0, max: 500, threshold: 15 },
    ],
  },
  {
    id: "outdoor-mold",
    label: "Outdoor Mold Load",
    desc: "Common outdoor mold spores entering through ventilation",
    grade: "Good",
    risk: "moderate",
    count: 182,
    unit: "spores",
    summary: "Typical seasonal outdoor mold levels. Normal for this time of year.",
    species: [
      { name: "Cladosporium", count: 112, max: 500, threshold: 500 },
      { name: "Alternaria", count: 41, max: 500, threshold: 200 },
      { name: "Basidiospores", count: 29, max: 500, threshold: 1000 },
      { name: "Ascospores", count: 0, max: 500, threshold: 2000 },
      { name: "Epicoccum", count: 0, max: 500, threshold: 200 },
    ],
  },
  {
    id: "allergens",
    label: "Allergens",
    desc: "Pollen, dander, dust mites and other allergen particles",
    grade: "Excellent",
    risk: "low",
    count: 31,
    unit: "particles",
    summary: "Low allergen burden. Great news for allergy sufferers.",
    species: [
      { name: "Pine Pollen", count: 18, max: 500, threshold: 200 },
      { name: "Grass Pollen", count: 9, max: 500, threshold: 200 },
      { name: "Animal Dander", count: 4, max: 500, threshold: 100 },
      { name: "Dust Mites", count: 0, max: 500, threshold: 50 },
      { name: "Bird Dander", count: 0, max: 500, threshold: 50 },
    ],
  },
  {
    id: "airborne-particles",
    label: "Airborne Particles",
    desc: "Dust, smoke, PM2.5 and other fine particulate matter",
    grade: "Good",
    risk: "moderate",
    count: 215,
    unit: "particles",
    summary: "Slightly elevated dust and particulate levels. Consider MERV upgrade.",
    species: [
      { name: "PM2.5", count: 98, max: 500, threshold: 100 },
      { name: "Dust / Soil", count: 67, max: 500, threshold: 200 },
      { name: "Fibers", count: 32, max: 500, threshold: 150 },
      { name: "Carbon Dust", count: 18, max: 500, threshold: 100 },
      { name: "Insulation", count: 0, max: 500, threshold: 50 },
    ],
  },
  {
    id: "home-cleanliness",
    label: "Home Cleanliness Indicators",
    desc: "Skin cells, textile fibers and general debris",
    grade: "Excellent",
    risk: "low",
    count: 48,
    unit: "particles",
    summary: "Your home is cleaner than average. Filter maintenance is working.",
    species: [
      { name: "Skin Cells", count: 22, max: 500, threshold: 100 },
      { name: "Textile Fibers", count: 16, max: 500, threshold: 100 },
      { name: "Dust / Debris", count: 10, max: 500, threshold: 100 },
      { name: "Insect Parts", count: 0, max: 500, threshold: 20 },
      { name: "Talcum", count: 0, max: 500, threshold: 30 },
    ],
  },
];

const recommendations = [
  {
    priority: "Maintain",
    title: "Keep your current filter schedule",
    body: "Your filter is doing its job. Replace every 60–90 days to maintain these results.",
  },
  {
    priority: "Monitor",
    title: "Watch airborne particle levels",
    body: "PM2.5 and dust are slightly elevated. Consider a MERV 11 or higher filter on your next replacement.",
  },
  {
    priority: "Consider",
    title: "Allergy-friendly practices during high pollen season",
    body: "Keep windows closed on high pollen days. Run HVAC fan continuously during peak season.",
  },
  {
    priority: "Retest",
    title: "Retest in 6 months",
    body: "Monitor seasonal changes with a follow-up test in late fall or early winter.",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const riskConfig = {
  low: { dot: "bg-emerald-500", text: "text-emerald-600", badge: "bg-emerald-50 text-emerald-700 border-emerald-200", label: "Low Risk", sub: "No action needed" },
  moderate: { dot: "bg-amber-400", text: "text-amber-600", badge: "bg-amber-50 text-amber-700 border-amber-200", label: "Moderate Risk", sub: "Monitor or take action soon" },
  high: { dot: "bg-red-500", text: "text-red-600", badge: "bg-red-50 text-red-700 border-red-200", label: "High Risk", sub: "Action recommended" },
};

const gradeConfig: Record<string, string> = {
  Excellent: "bg-emerald-500 text-white",
  Good: "bg-blue-500 text-white",
  Fair: "bg-amber-400 text-white",
  Poor: "bg-red-500 text-white",
};

function ScoreArc({ score }: { score: number }) {
  const r = 80;
  const cx = 100;
  const cy = 100;
  const startAngle = -220;
  const endAngle = 40;
  const totalArc = endAngle - startAngle;
  const scoreAngle = startAngle + (score / 100) * totalArc;

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const arcPath = (a1: number, a2: number, radius: number) => {
    const x1 = cx + radius * Math.cos(toRad(a1));
    const y1 = cy + radius * Math.sin(toRad(a1));
    const x2 = cx + radius * Math.cos(toRad(a2));
    const y2 = cy + radius * Math.sin(toRad(a2));
    const large = a2 - a1 > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`;
  };

  const needleX = cx + r * Math.cos(toRad(scoreAngle));
  const needleY = cy + r * Math.sin(toRad(scoreAngle));

  return (
    <svg viewBox="0 0 200 160" className="w-full max-w-[240px]">
      {/* Track */}
      <path d={arcPath(startAngle, endAngle, r)} fill="none" stroke="#e5e7eb" strokeWidth="14" strokeLinecap="round" />
      {/* Score fill — gradient from red to green */}
      <defs>
        <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="70%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path d={arcPath(startAngle, scoreAngle, r)} fill="none" stroke="url(#scoreGrad)" strokeWidth="14" strokeLinecap="round" />
      {/* Dot at score */}
      <circle cx={needleX} cy={needleY} r="8" fill="#0B1426" stroke="white" strokeWidth="3" />
      {/* Score number */}
      <text x="100" y="105" textAnchor="middle" fontSize="44" fontWeight="800" fontFamily="Outfit, sans-serif" fill="#0B1426">{score}</text>
      <text x="100" y="125" textAnchor="middle" fontSize="12" fill="#6b7280" fontFamily="DM Sans, sans-serif">out of 100</text>
    </svg>
  );
}

function BarMeter({ count, max, threshold }: { count: number; max: number; threshold: number }) {
  const pct = Math.min((count / max) * 100, 100);
  const thresholdPct = Math.min((threshold / max) * 100, 100);
  const isOver = count > threshold;
  const color = count === 0 ? "bg-gray-200" : isOver ? "bg-amber-400" : "bg-emerald-500";

  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex-1 h-2 bg-gray-100 rounded-full relative overflow-hidden">
        <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${pct}%` }} />
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-400/40" style={{ left: `${thresholdPct}%` }} />
      </div>
      <span className={`text-xs font-mono font-semibold w-16 text-right ${count === 0 ? "text-gray-400" : isOver ? "text-amber-600" : "text-emerald-600"}`}>
        {count} / {max}
      </span>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function SampleReportPage() {
  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      {/* ── PAGE HERO ── */}
      <section className="bg-navy pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-cyan text-sm font-outfit font-medium tracking-wide uppercase">Sample Report</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-outfit font-extrabold text-white mb-4">
            This is what you get.
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Clear results. Every organism we tested for. Plain English. No guesswork.
          </p>
        </div>
      </section>

      {/* ── REPORT CARD ── */}
      <div className="max-w-4xl mx-auto px-6 -mt-6 pb-20">

        {/* Report wrapper */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

          {/* ── REPORT HEADER ── */}
          <div className="bg-navy px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-cyan text-xs font-outfit font-semibold uppercase tracking-widest mb-1">Air Filter Report</p>
              <p className="text-white font-outfit font-bold text-xl">{reportMeta.name}</p>
              <p className="text-gray-400 text-sm mt-0.5">{reportMeta.home}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-xs">Report Date</p>
              <p className="text-white text-sm font-medium">{reportMeta.date}</p>
              <p className="text-gray-500 text-xs mt-1">Sample ID</p>
              <p className="text-gray-400 text-xs font-mono">{reportMeta.sampleId}</p>
            </div>
          </div>

          {/* ── SCORE BAND ── */}
          <div className="border-b border-gray-100 px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            {/* Score dial */}
            <div className="flex flex-col items-center">
              <ScoreArc score={reportMeta.score} />
              <div className="mt-1 text-center">
                <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-outfit font-bold px-4 py-1 rounded-full">
                  {reportMeta.scoreLabel}
                </span>
                <p className="text-gray-500 text-xs mt-2">{reportMeta.scoreSub}</p>
              </div>
            </div>

            {/* Score bar legend */}
            <div>
              <p className="text-xs font-outfit font-semibold text-gray-500 uppercase tracking-widest mb-3">Air Quality Score</p>
              <div className="relative mb-2">
                <div className="h-3 rounded-full overflow-hidden" style={{ background: "linear-gradient(to right, #ef4444, #f59e0b, #22c55e, #10b981)" }} />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-navy border-2 border-white rounded-full shadow-md"
                  style={{ left: `${reportMeta.score}%`, transform: "translate(-50%, -50%)" }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mb-4">
                <span>Poor</span><span>Moderate</span><span>Good</span><span>Excellent</span>
              </div>
            </div>

            {/* Confidence & next test */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-xl font-outfit font-bold text-emerald-600">{reportMeta.confidence}</p>
                <p className="text-xs text-gray-500 mt-0.5">Analysis confidence</p>
                <p className="text-xs font-semibold text-emerald-600">High</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xl font-outfit font-bold text-navy">{reportMeta.nextTest}</p>
                <p className="text-xs text-gray-500 mt-0.5">Next test recommended</p>
              </div>
            </div>
          </div>

          {/* ── DETAILED RESULTS ── */}
          <div className="px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-outfit font-bold text-navy">Detailed Results</h2>
              <div className="flex items-center gap-5 text-xs text-gray-500">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />Low Risk</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />Moderate Risk</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 inline-block" />High Risk</span>
              </div>
            </div>

            <div className="space-y-4">
              {categories.map((cat) => {
                const risk = riskConfig[cat.risk as keyof typeof riskConfig];
                return (
                  <div key={cat.id} className="border border-gray-100 rounded-xl overflow-hidden">
                    {/* Category header */}
                    <div className="px-5 py-4 bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className={`mt-1 w-2.5 h-2.5 rounded-full flex-shrink-0 ${risk.dot}`} />
                        <div>
                          <p className="font-outfit font-bold text-navy text-sm">{cat.label}</p>
                          <p className="text-gray-500 text-xs">{cat.desc}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="text-right">
                          <p className="text-navy font-outfit font-bold text-sm">{cat.count} {cat.unit}</p>
                          <p className="text-gray-500 text-xs">{cat.summary}</p>
                        </div>
                        <span className={`text-xs font-outfit font-bold px-3 py-1 rounded-full border ${risk.badge}`}>
                          {risk.label}
                        </span>
                        <span className={`text-xs font-outfit font-bold px-3 py-1 rounded-full ${gradeConfig[cat.grade]}`}>
                          {cat.grade}
                        </span>
                      </div>
                    </div>

                    {/* Species breakdown */}
                    <div className="px-5 py-4">
                      <p className="text-xs font-outfit font-semibold text-gray-400 uppercase tracking-widest mb-3">
                        Species Identified — showing {cat.species.length} of panel
                      </p>
                      <div className="space-y-3">
                        {cat.species.map((sp) => (
                          <div key={sp.name} className="flex items-center gap-4">
                            <div className="w-36 flex-shrink-0">
                              <div className="flex items-center gap-2">
                                {sp.count === 0 ? (
                                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                                ) : sp.count > sp.threshold ? (
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                                ) : (
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                )}
                                <span className={`text-sm font-medium ${sp.count === 0 ? "text-gray-400" : "text-navy"}`}>{sp.name}</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <BarMeter count={sp.count} max={sp.max} threshold={sp.threshold} />
                            </div>
                            <div className="w-24 text-right flex-shrink-0">
                              {sp.count === 0 ? (
                                <span className="text-xs text-gray-400 font-medium">Not detected</span>
                              ) : (
                                <span className="text-xs text-gray-500">&lt; {sp.threshold} threshold</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs text-gray-400">
                          Full panel includes 182+ organisms tested.{" "}
                          <Link href="/what-we-test-for" className="text-cyan hover:underline font-medium">
                            See the complete panel
                          </Link>
                          {" "}— understand what each species means.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── LOCAL CONTEXT ── */}
          <div className="border-t border-gray-100 px-8 py-8">
            <h2 className="text-xl font-outfit font-bold text-navy mb-5">Your Local Context</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="text-xs font-outfit font-semibold text-gray-400 uppercase tracking-widest mb-3">Outdoor Air Quality</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-outfit font-bold text-navy">{reportMeta.aqi.value}</p>
                    <p className="text-xs text-gray-500">AQI Index</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{reportMeta.aqi.label}</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="text-xs font-outfit font-semibold text-gray-400 uppercase tracking-widest mb-3">Current Pollen Levels</p>
                <div className="flex flex-col gap-2">
                  {reportMeta.pollen.map((p) => (
                    <div key={p.type} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{p.type}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        p.level === "Moderate" ? "bg-amber-100 text-amber-700" :
                        p.level === "Very Low" ? "bg-emerald-100 text-emerald-700" :
                        "bg-gray-100 text-gray-500"
                      }`}>{p.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-600">
              <strong className="text-navy">Your Home:</strong> {reportMeta.home}
            </div>
          </div>

          {/* ── RECOMMENDATIONS ── */}
          <div className="border-t border-gray-100 px-8 py-8">
            <h2 className="text-xl font-outfit font-bold text-navy mb-5">Recommended Next Steps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendations.map((r) => (
                <div key={r.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                    r.priority === "Maintain" ? "bg-emerald-100 text-emerald-700" :
                    r.priority === "Monitor" ? "bg-amber-100 text-amber-700" :
                    r.priority === "Retest" ? "bg-blue-100 text-blue-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-outfit font-semibold text-navy text-sm">{r.title}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── METHODOLOGY BOX ── */}
          <div className="border-t border-gray-100 px-8 py-6 bg-gray-50">
            <p className="text-xs font-outfit font-semibold text-cyan uppercase tracking-widest mb-2">Understanding Your Results — QFF Methodology</p>
            <p className="text-xs text-gray-500 leading-relaxed mb-2">
              Test Your World uses <strong className="text-navy">Quantitative Filter Forensics (QFF)</strong> — a method that analyzes HVAC filters that have been collecting particles for 30–90+ days. Unlike traditional air sampling, we do not take an outdoor control sample. Any filter in use will capture some outdoor spores that infiltrated the building.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed mb-2">
              <strong className="text-navy">Background thresholds applied:</strong> Low counts of even &ldquo;dangerous&rdquo; molds like Stachybotrys (&le;10), Chaetomium (&le;15), and Fusarium (&le;20) are expected and do NOT indicate an indoor mold problem. Common outdoor molds like Cladosporium (&le;500) and Basidiospores (&le;1,000) at these levels confirm normal ventilation is working.
            </p>
            <p className="text-xs text-gray-400">
              Vertical bars in the species breakdown show each organism&apos;s count against the 500-count analysis scale. The thin vertical line marks the threshold for that species.
            </p>
          </div>

          {/* ── DISCLAIMER ── */}
          <div className="border-t border-gray-100 px-8 py-5">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong>Disclaimer:</strong> This is a screening tool for informational purposes only and is not a medical test. Results are based on debris found in your filter sample and are not a substitute for professional advice. Spore calculations are estimates based on registration data. Always consult a certified mold professional for concerns about mold in your home.
            </p>
          </div>
        </div>

        {/* ── EDUCATION CALLOUT ── */}
        <div className="mt-6 bg-navy rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-cyan text-xs font-outfit font-semibold uppercase tracking-widest mb-1">Want to understand your results?</p>
            <p className="text-white font-outfit font-bold text-lg">See every organism we test for.</p>
            <p className="text-gray-400 text-sm mt-1">
              Organized by category. Every species explained. Searchable by name.
            </p>
          </div>
          <Link
            href="/what-we-test-for"
            className="flex-shrink-0 bg-cyan text-navy px-6 py-3 rounded-xl font-outfit font-bold hover:bg-cyan-dim transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,229,255,0.3)]"
          >
            Understand Your Test
          </Link>
        </div>

        {/* ── DEMO NOTICE ── */}
        <p className="text-center text-sm text-gray-400 mt-8">
          This is a sample report for demonstration. Actual reports are generated from your specific filter sample and home data.
        </p>

        {/* ── CTA ── */}
        <div className="mt-8 text-center">
          <a
            href="https://testyourworld.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan text-navy px-10 py-4 rounded-xl font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]"
          >
            Get Your Report — $99
          </a>
          <p className="text-gray-400 text-sm mt-3">Results in 48 hours. No strangers in your home.</p>
        </div>
      </div>
    </div>
  );
}
