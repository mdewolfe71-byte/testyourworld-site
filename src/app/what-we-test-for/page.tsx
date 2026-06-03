"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "water-damage",
    label: "Water Damage Indicators",
    shortLabel: "Water Damage",
    summary: "Species that signal active or past moisture intrusion. Finding these at elevated levels is one of the most actionable results a filter test can produce.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6 9 4 13 4 16a8 8 0 0016 0c0-3-2-7-8-14z" />
      </svg>
    ),
    accentClass: "text-blue-600",
    borderClass: "border-l-blue-500",
    species: [
      { name: "Stachybotrys", aka: "Black Mold", threshold: "≤10 normal", note: "The most notorious water-damage mold. Requires sustained moisture (paper, drywall). Low counts are common; elevated counts signal an active source." },
      { name: "Chaetomium", aka: null, threshold: "≤15 normal", note: "A reliable indicator of cellulose degradation from water. Often found with Stachybotrys in chronically wet materials." },
      { name: "Chartarum", aka: null, threshold: "≤10 normal", note: "Closely related to Stachybotrys. Requires similar wet conditions to grow. Treated with the same urgency." },
      { name: "Fusarium", aka: null, threshold: "≤20 normal", note: "Water intrusion indicator. Can produce mycotoxins. Also found in building materials damaged by flooding." },
      { name: "Ulocladium", aka: null, threshold: "≤20 normal", note: "Found primarily on surfaces with persistent moisture. A strong indicator of humidity problems." },
      { name: "Trichoderma", aka: "Green Mold", threshold: "≤15 normal", note: "Found in wet wood and damp building materials. Green spores. Not commonly harmful but signals moisture." },
      { name: "Scopulariopsis", aka: null, threshold: "≤15 normal", note: "Grows in damp organic materials. Associated with bathroom mold and water-damaged paper." },
      { name: "Paecilomyces", aka: null, threshold: "≤15 normal", note: "Opportunistic mold growing in damp insulation and soil. Elevated counts may indicate HVAC moisture issues." },
    ],
  },
  {
    id: "outdoor-mold",
    label: "Outdoor Mold Load",
    shortLabel: "Outdoor Mold",
    summary: "Spores that originate outside and enter through ventilation, open windows, and on clothing. Some level of outdoor infiltration is completely normal. Thresholds reflect this.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    accentClass: "text-emerald-600",
    borderClass: "border-l-emerald-500",
    species: [
      { name: "Cladosporium", aka: null, threshold: "≤500 normal", note: "The most common outdoor mold worldwide. Found on dead plant material. Highly seasonal. Counts spike in fall. At normal outdoor infiltration levels, not a concern." },
      { name: "Alternaria", aka: null, threshold: "≤200 normal", note: "Common outdoor allergen associated with leaf debris and grains. A significant asthma and allergy trigger for sensitized individuals." },
      { name: "Basidiospores", aka: "Mushroom Spores", threshold: "≤1,000 normal", note: "Spores from mushrooms and wood-decay fungi. Extremely abundant outdoors. Expected in any home near trees or grass." },
      { name: "Ascospores", aka: null, threshold: "≤2,000 normal", note: "Broad category of sexual spores from sac fungi. Very common outdoors, especially after rain. High counts may indicate water-damaged materials indoors." },
      { name: "Epicoccum", aka: null, threshold: "≤200 normal", note: "Common on decaying plant matter. Yellow-orange colonies. Seasonal, follows plant growth cycles." },
      { name: "Botrytis", aka: "Gray Mold", threshold: "≤100 normal", note: "Common in gardens and on vegetation. Causes gray mold on plants. Largely harmless indoors at normal infiltration counts." },
      { name: "Nigrospora", aka: null, threshold: "≤100 normal", note: "Found on dead grass and plant debris. Seasonal spore release. Low concern at typical outdoor infiltration levels." },
      { name: "Curvularia", aka: null, threshold: "≤100 normal", note: "Soil and plant pathogen spores. Tropical origin but now distributed globally. Allergen for sensitized people." },
      { name: "Bipolaris", aka: null, threshold: "≤100 normal", note: "Plant pathogen on grasses and grains. Outdoor source. Rarely elevated indoors unless nearby grain storage exists." },
      { name: "Stemphylium", aka: null, threshold: "≤100 normal", note: "Found on dead herbaceous plants. Seasonal release. Allergen in agricultural regions." },
      { name: "Pithomyces", aka: null, threshold: "≤100 normal", note: "Commonly found on dead grass litter. Two types (I and II) analyzed. Outdoor allergen." },
      { name: "Torula", aka: null, threshold: "≤100 normal", note: "Found on dead plant material and decaying wood. Outdoor source. Small dark spores." },
    ],
  },
  {
    id: "allergens",
    label: "Allergens",
    shortLabel: "Allergens",
    summary: "Pollen, dander, and biological particles that trigger immune responses. These are often the explanation for unexplained sneezing, itchy eyes, and congestion inside the home.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
    accentClass: "text-amber-600",
    borderClass: "border-l-amber-400",
    species: [
      { name: "Pine Pollen", aka: null, threshold: "Varies seasonally", note: "Large, winged pollen visible to the naked eye. Extremely abundant in spring. Low allergenic compared to grass pollen but present in high volumes." },
      { name: "Grass Pollen", aka: null, threshold: "Varies seasonally", note: "One of the most common allergy triggers. Peak season May–July. Major contributor to hay fever symptoms." },
      { name: "General Pollen", aka: "Mixed Types", threshold: "Varies seasonally", note: "Mixed pollen not identified to specific type. Broad allergen category. Used when pollen type cannot be definitively classified." },
      { name: "Solid Brown Pollen", aka: null, threshold: "Varies seasonally", note: "Dense pollen type from various tree and weed species. Identified by morphology when specific species cannot be confirmed." },
      { name: "Translucent Pollen", aka: null, threshold: "Varies seasonally", note: "Clear or lightly pigmented pollen varieties. Includes some tree pollens. Allergenicity varies by source species." },
      { name: "Animal Dander", aka: "Pet Dander", threshold: "≤100 normal", note: "Microscopic skin flakes from cats, dogs, and other animals. Major indoor allergen. Persists in HVAC systems long after pet removal." },
      { name: "Bird Dander", aka: null, threshold: "≤50 normal", note: "From pet birds or wild bird entry. Highly allergenic protein particles. Persistent in air and filter material." },
      { name: "Dust Mites", aka: null, threshold: "≤50 normal", note: "Microscopic arachnids living in bedding, carpets, and soft furnishings. Their fecal particles are potent allergens. Thrive above 50% relative humidity." },
      { name: "Smut", aka: "Plant Disease Spores", threshold: "≤100 normal", note: "Spores from smut fungi affecting cereal crops and grasses. Fuzzy yellow variant detectable. Allergen in agricultural regions." },
      { name: "Rust", aka: "Urediniospores", threshold: "≤100 normal", note: "Spores from rust fungi that infect plants. Bright orange-brown spores. Seasonal, associated with infected host plants nearby." },
    ],
  },
  {
    id: "airborne-particles",
    label: "Airborne Particles",
    shortLabel: "Particles",
    summary: "Non-biological particulate matter that impacts lung health. Unlike biological particles, these don't reproduce — but they accumulate and the smaller they are, the deeper they penetrate your respiratory system.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    ),
    accentClass: "text-purple-600",
    borderClass: "border-l-purple-500",
    species: [
      { name: "PM2.5", aka: "Fine Particulate Matter", threshold: "≤100 per field", note: "Particles 2.5 microns or smaller. These penetrate deep into lung tissue and can enter the bloodstream. Linked to cardiovascular disease with long-term exposure." },
      { name: "PM2.5–10", aka: "Coarse Particles", threshold: "≤200 per field", note: "Inhalable particles between 2.5 and 10 microns. Lodge in the upper respiratory system. Many fungal spores fall in this range." },
      { name: "PM10+", aka: "Large Particles", threshold: "Filtered naturally", note: "Larger particles typically filtered by your nose and throat. Includes pollen, dander, and coarse dust. Less dangerous but contributes to surface contamination." },
      { name: "Dust / Soil", aka: null, threshold: "≤200 normal", note: "Mineral and organic particles tracked in from outdoors. High counts suggest filter bypass or inadequate filtration. Harmless in low quantities." },
      { name: "Fibers", aka: "Textile Fibers", threshold: "≤150 normal", note: "From clothing, carpets, and soft furnishings. Elevated counts can indicate heavy textile shedding or HVAC bypass. Respiratory irritant in high concentrations." },
      { name: "Carbon Dust", aka: null, threshold: "≤100 normal", note: "Combustion byproduct from candles, fireplaces, gas appliances, or outdoor traffic. Elevated levels indicate inadequate ventilation or nearby combustion sources." },
      { name: "Carbon Clusters", aka: null, threshold: "≤50 normal", note: "Aggregated carbon particles from incomplete combustion. More concerning than individual carbon particles — suggest chronic exposure to combustion products." },
      { name: "Insulation", aka: "Fiberglass Particles", threshold: "≤50 normal", note: "From disturbed HVAC insulation or building materials. Elevated counts may indicate damaged duct insulation or recent renovation activity." },
      { name: "Talcum", aka: null, threshold: "≤30 normal", note: "Mineral dust from personal care products. Usually cosmetic source. Tracked through HVAC. Not a concern at low counts." },
    ],
  },
  {
    id: "home-cleanliness",
    label: "Home Cleanliness Indicators",
    shortLabel: "Cleanliness",
    summary: "Particles that reflect human occupancy, housekeeping habits, and general indoor conditions. These help calibrate the rest of your results — a very clean home shows lower counts across all categories.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    accentClass: "text-rose-600",
    borderClass: "border-l-rose-400",
    species: [
      { name: "Skin Cells", aka: "Human Skin Fragment", threshold: "≤100 normal", note: "We shed millions of skin cells daily. These are the primary food source for dust mites. Elevated counts are expected in occupied homes — context matters." },
      { name: "Small Skin Fragment", aka: null, threshold: "≤100 normal", note: "Microscopic skin particles smaller than the main fragment category. Contribute to overall biological load and dust mite food source." },
      { name: "Textile Fibers", aka: "Fabric Fragments", threshold: "≤100 normal", note: "From clothing, bedding, and soft furnishings. Higher counts indicate more textile use or shedding. Normal in all occupied homes." },
      { name: "Dust / Debris", aka: "General Debris", threshold: "≤100 normal", note: "Mixed fine debris from normal household activity. A baseline cleanliness marker. Low counts indicate effective housekeeping and good filter performance." },
      { name: "Insect Scales", aka: "Moth and Butterfly Scales", threshold: "≤20 normal", note: "Wing scales from moths and butterflies entering the home. Usually seasonal. Not a health concern but indicates open-window infiltration." },
      { name: "Insect Parts", aka: "Appendages and Fragments", threshold: "≤20 normal", note: "General insect fragments including legs, antennae, and wing pieces. Elevated counts may indicate a pest presence. Significant allergen source." },
      { name: "Insect Appendage", aka: null, threshold: "≤20 normal", note: "Specific insect body parts — legs, antennae. More specific than general insect parts. Used to flag potential pest activity in the home." },
      { name: "Myxomycete", aka: "Slime Mold Spores", threshold: "≤50 normal", note: "Spores from slime molds common on decaying wood and plant litter. Not a true mold. Outdoor source. Low concern." },
    ],
  },
  {
    id: "specialty",
    label: "Specialty and Rare Types",
    shortLabel: "Specialty",
    summary: "Less common organisms and structural fragments that appear in specific circumstances. These are included in every analysis — finding them or not finding them is equally informative.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    accentClass: "text-gray-600",
    borderClass: "border-l-gray-400",
    species: [
      { name: "Aspergillus / Penicillium", aka: "Asp/Pen", threshold: "≤200 normal", note: "A combined category because these two molds are often indistinguishable under standard microscopy. Common indoor molds. Elevated counts may indicate indoor sources. Some species produce mycotoxins." },
      { name: "Wallemia", aka: null, threshold: "≤50 normal", note: "Xerophilic (dry-loving) mold. Unique because it can grow in low-moisture conditions. Found in stored foods and low-humidity materials." },
      { name: "Oidium", aka: "Powdery Mildew", threshold: "≤50 normal", note: "Plant pathogen producing white powdery growth on leaves. Spores are fragile and often undetected by culture tests. Our direct microscopy method captures them." },
      { name: "Rhizopus", aka: null, threshold: "≤50 normal", note: "Bread mold. Grows rapidly on food and damp organic material. Elevated counts may indicate food storage or compost near the HVAC intake." },
      { name: "Zygomycetes", aka: null, threshold: "≤50 normal", note: "Broad category of fast-growing molds including Rhizopus and Mucor. Found in soil and organic matter. Opportunistic in immunocompromised individuals." },
      { name: "Ganoderma", aka: "Shelf Fungus Spores", threshold: "≤100 normal", note: "Spores from polypore bracket fungi (tree shelf mushrooms). Common where there are diseased or dead trees nearby. Wood decay indicator." },
      { name: "Coprinus", aka: "Inky Cap Mushroom", threshold: "≤100 normal", note: "Spores from inky cap mushrooms. Common in composting organic matter. Outdoor source typically. Two types analyzed: regular and large dark." },
      { name: "Fungal Fragments", aka: "Hyphal Elements", threshold: "Varies", note: "Broken pieces of mold structures. Not identified to species. Indicate mold growth somewhere in the home or HVAC system. Elevated counts warrant investigation even without a species spike." },
      { name: "Mitospores", aka: "Asexual Spores", threshold: "Varies", note: "Non-specific spore category. Includes three-cell, four-cell, and eight-cell forms. Used when morphology doesn't allow species identification. Counted for total load assessment." },
      { name: "Unidentified Spores", aka: null, threshold: "Low confidence", note: "Particles that appear biological but cannot be classified with confidence. Reported separately to maintain transparency about the limits of identification." },
    ],
  },
];

// All species flattened for search
const allSpecies = categories.flatMap((cat) =>
  cat.species.map((sp) => ({ ...sp, categoryId: cat.id, categoryLabel: cat.shortLabel }))
);

// ─── SUBCOMPONENTS ────────────────────────────────────────────────────────────

function SpeciesRow({ name, aka, threshold, note }: { name: string; aka: string | null; threshold: string; note: string }) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 mb-1.5">
        <div className="sm:w-52 flex-shrink-0">
          <p className="font-outfit font-semibold text-navy text-sm">{name}</p>
          {aka && <p className="text-gray-400 text-xs">{aka}</p>}
        </div>
        <div className="flex-1">
          <p className="text-gray-600 text-sm leading-relaxed">{note}</p>
        </div>
        <div className="sm:w-36 flex-shrink-0 text-right">
          <span className="inline-block text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-200">{threshold}</span>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ cat, defaultOpen = false }: { cat: typeof categories[0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`bg-white rounded-2xl border border-gray-200 overflow-hidden border-l-4 ${cat.borderClass}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`${cat.accentClass} p-2 bg-gray-50 rounded-lg border border-gray-100`}>
            {cat.icon}
          </div>
          <div>
            <p className="font-outfit font-bold text-navy text-base">{cat.label}</p>
            <p className="text-gray-500 text-xs mt-0.5">{cat.species.length} organisms in this panel</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-xs text-gray-400 max-w-xs text-right leading-relaxed line-clamp-2">{cat.summary}</span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="border-t border-gray-100 px-7 pt-2 pb-4">
          <p className="text-gray-500 text-sm leading-relaxed pt-3 pb-4 border-b border-gray-100 mb-2">{cat.summary}</p>
          <div className="hidden sm:flex items-center gap-4 py-2 text-xs font-outfit font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1">
            <span className="w-52">Organism</span>
            <span className="flex-1">What it means</span>
            <span className="w-36 text-right">Normal threshold</span>
          </div>
          {cat.species.map((sp) => (
            <SpeciesRow key={sp.name} {...sp} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function WhatWeTestForPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allSpecies.filter(
      (sp) =>
        sp.name.toLowerCase().includes(q) ||
        (sp.aka && sp.aka.toLowerCase().includes(q)) ||
        sp.note.toLowerCase().includes(q)
    );
  }, [query]);

  const filteredCategories = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-navy pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/5">
            <span className="text-cyan text-sm font-outfit font-medium tracking-wide uppercase">Complete Panel</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-outfit font-extrabold text-white mb-5 leading-tight">
            182+ Things<br />We Test For
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Every organism in our panel. Every category explained. This is the reference library for your report — understand exactly what was found, what wasn&apos;t found, and what it all means.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {[
              { num: "182+", label: "Organisms analyzed" },
              { num: "6", label: "Categories" },
              { num: "36", label: "Typical competitor" },
              { num: "5x", label: "More comprehensive" },
            ].map(({ num, label }) => (
              <div key={label} className="bg-navy-light border border-white/10 rounded-xl px-4 py-4">
                <p className="text-2xl font-outfit font-black text-cyan">{num}</p>
                <p className="text-gray-400 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by organism name — e.g. Cladosporium, dust mites, PM2.5"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-navy placeholder-gray-400 font-dm-sans text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan/30 shadow-lg"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── SEARCH RESULTS ── */}
      {query && (
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="px-7 py-4 border-b border-gray-100 flex items-center justify-between">
              <p className="font-outfit font-semibold text-navy text-sm">
                {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
              </p>
              <button onClick={() => setQuery("")} className="text-gray-400 hover:text-cyan text-sm transition-colors">Clear</button>
            </div>
            {searchResults.length === 0 ? (
              <div className="px-7 py-10 text-center text-gray-400 text-sm">
                No organisms found matching &ldquo;{query}&rdquo;. Try a different spelling or search by category below.
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {searchResults.map((sp) => (
                  <div key={`${sp.categoryId}-${sp.name}`} className="px-7 py-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-outfit font-bold text-navy text-sm">{sp.name}</p>
                          {sp.aka && <span className="text-gray-400 text-xs">· {sp.aka}</span>}
                          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-outfit">{sp.categoryLabel}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{sp.note}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-200 whitespace-nowrap">{sp.threshold}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── CATEGORY FILTER TABS ── */}
      {!query && (
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-outfit font-semibold transition-all ${
                activeCategory === null ? "bg-navy text-white shadow-md" : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-navy"
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-outfit font-semibold transition-all ${
                  activeCategory === cat.id ? "bg-navy text-white shadow-md" : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-navy"
                }`}
              >
                {cat.shortLabel}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── CATEGORY ACCORDION ── */}
      {!query && (
        <div className="max-w-5xl mx-auto px-6 py-6 space-y-4">
          {filteredCategories.map((cat, i) => (
            <CategorySection key={cat.id} cat={cat} defaultOpen={i === 0} />
          ))}
        </div>
      )}

      {/* ── SCOPE CALLOUT ── */}
      {!query && (
        <div className="max-w-5xl mx-auto px-6 pb-8">
          <div className="bg-navy-light border border-white/10 rounded-2xl px-8 py-6">
            <p className="text-cyan text-xs font-outfit font-semibold uppercase tracking-widest mb-2">Why we show you everything</p>
            <p className="text-white font-outfit font-bold text-lg mb-2">
              The scope of a test is as important as the results.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our report shows you every organism in our panel — not just what was found. A confirmed negative is proof of thoroughness, not filler. When you see Stachybotrys at zero, you know it was looked for. That&apos;s the difference between knowing and guessing.
            </p>
          </div>
        </div>
      )}

      {/* ── METHODOLOGY NOTE ── */}
      <div className="max-w-5xl mx-auto px-6 pb-8">
        <div className="bg-white border border-gray-200 rounded-2xl px-8 py-6">
          <p className="text-xs font-outfit font-semibold text-gray-400 uppercase tracking-widest mb-3">About Normal Thresholds</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Thresholds shown reflect our QFF (Quantitative Filter Forensics) methodology. Because we analyze HVAC filters that collect particles over weeks or months — not a point-in-time air sample — our thresholds are calibrated to account for normal outdoor infiltration. Finding a small number of even toxic mold species is expected and does not indicate an indoor problem.
          </p>
          <p className="text-gray-500 text-sm">
            For questions about your specific results, email{" "}
            <a href="mailto:support@testyourworld.com" className="text-cyan hover:underline">support@testyourworld.com</a>.
          </p>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-navy rounded-2xl px-8 py-10 text-center">
          <p className="text-gray-400 text-sm font-outfit font-semibold uppercase tracking-widest mb-3">Ready to see your own results?</p>
          <h2 className="text-white font-outfit font-extrabold text-3xl mb-3">
            Find out what&apos;s actually in your air.
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            $69. No appointments. No strangers in your home. Results in 5–7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://testyourworld.myshopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan text-navy px-8 py-4 rounded-xl font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,229,255,0.3)]"
            >
              Get Your Test Kit — $69
            </a>
            <Link
              href="/sample-report"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-outfit font-bold text-lg hover:border-cyan hover:text-cyan transition-all"
            >
              See a Sample Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
