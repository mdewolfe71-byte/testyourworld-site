"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  {
    icon: "🍄",
    title: "Mold & Fungal Spores",
    count: "90+ types",
    items: [
      "Stachybotrys (Black Mold)",
      "Aspergillus species",
      "Penicillium species",
      "Cladosporium species",
      "Chaetomium (water damage)",
      "Alternaria",
      "Fusarium",
      "Botrytis",
      "Plus 80+ additional species",
    ],
  },
  {
    icon: "🌾",
    title: "Ascospores",
    count: "40+ variants",
    items: [
      "Water damage indicators",
      "Outdoor contamination markers",
      "Building material degradation",
      "Environmental condition indicators",
      "Multiple morphological types",
    ],
  },
  {
    icon: "🌰",
    title: "Basidiospores",
    count: "25+ types",
    items: [
      "Outdoor fungal spores",
      "Wood decay indicators",
      "Mushroom-related spores",
      "Environmental spores",
      "Allergy triggers",
    ],
  },
  {
    icon: "🌸",
    title: "Pollen Types",
    count: "5+ categories",
    items: [
      "General pollen",
      "Pine pollen",
      "Tree pollen variants",
      "Seasonal allergens",
      "Grass and weed pollen",
    ],
  },
  {
    icon: "🔬",
    title: "Particulate Matter",
    count: "3 size ranges",
    items: [
      "Fiber particles",
      "Insulation particles",
      "Carbon dust and clusters",
      "Soil particles",
      "PM2.5, PM2.5-10, PM10+",
    ],
  },
  {
    icon: "🐾",
    title: "Biological Fragments",
    count: "All sources",
    items: [
      "Pet dander (cats, dogs, birds)",
      "Insect parts and scales",
      "Human skin cells",
      "Animal skin fragments",
      "Allergen sources",
    ],
  },
];

const expandableSections = [
  {
    icon: "🍄",
    title: "Mold & Fungal Spores (90+ Types)",
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">Toxic & Water-Damage Molds</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Stachybotrys (Black Mold) — all variants including clumps and conidiophores",
              "Chaetomium — water damage indicator (regular and long variants)",
              "Chartarum — related to Stachybotrys, toxic mold species",
              "Mature Chartarum — advanced growth stage",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-cyan mt-1">✓</span>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">Common Indoor Molds</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Aspergillus — multiple species and variants",
              "Penicillium — multiple species and variants",
              "Aspergillus/Penicillium — combined identification",
              "Cladosporium — multiple types (cladosporioides, herbarum, sphaerospermum, two-cell, clumps)",
              "Alternaria-like — Alternaria and similar species",
              "Epicoccum — common indoor/outdoor mold",
              "Fusarium — water intrusion indicator",
              "Trichoderma clumps — green mold species",
              "Ulocladium — water damage indicator",
              "Wallemia — xerophilic (dry-loving) mold",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-cyan mt-1">✓</span>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">Specialty & Rare Mold Types</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Botrytis, Nigrospora, Curvularia, Bipolaris (Type 1 & 2)",
              "Stemphylium, Pithomyces (Type I & II), Torula",
              "Oidium (Powdery Mildew), Rhizopus, Zygomycetes",
              "Scopulariopsis, Paecilomyces, Gliomastix",
              "Pyricularia, Tetraploa, Spegazzinia (smooth and spiny)",
              "Plus 30+ additional rare and specialty types",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-cyan mt-1">✓</span>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">Mold Structures & Fragments</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Fungal fragments and hyphal elements",
              "Various clumps and aggregations",
              "Conidiophores (spore-producing structures)",
              "Mitospores (asexual spores)",
              "Unidentified and low-confidence spores",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-cyan mt-1">✓</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: "🌾",
    title: "Ascospores (40+ Variants)",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">These specialized spores indicate water damage, outdoor contamination, and environmental conditions. We identify and count over 40 different ascospore types:</p>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">General & Two-Cell Ascospores</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Ascospores — general, pigmented, and non-pigmented",
              "Two-cell types — pigmented, non-pigmented, dark, white, big blue",
              "Two-cell Hypocrea-like variants",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-cyan mt-1">✓</span>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">Multi-Cell & Specialized Types</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Three-cell, four-cell, eight-cell mitospores",
              "Leptosphaeria-like (pigmented and non-pigmented)",
              "Xylaria-like (long, medium, short, Type 2)",
              "Pleospora, Sporomiella, Daldinia, Diatrype",
              "Peziza, Ascocodinia, Cyclothyriella",
              "Paraphaeospheria michotii, Phaeospheria annulata",
              "Long, coiled, folded, and big blue multi-cell forms",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-cyan mt-1">✓</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: "🌰",
    title: "Basidiospores (25+ Types)",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">Basidiospores come from mushrooms and other fungi — many are outdoor allergens or wood-decay indicators that end up in your home&apos;s air.</p>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">Common Mushroom & Wood Decay Spores</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Coprinus — inky cap mushrooms (regular and big dark)",
              "Ganoderma — wood decay fungi, shelf mushrooms",
              "Bolete — pored mushrooms",
              "Russula/Lactarius — brittle gills and milk caps",
              "Meruliporia/Serpula — dry rot fungi",
              "Trametes/Trichaption biforme — turkey tail and relatives",
              "Tomentella-like — crust fungi",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-cyan mt-1">✓</span>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">Morphological Types</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Allantoid, big clear, big elongated, big orange",
              "Blue star types, lighter elongated, midsize ovals",
              "Outdoor elliptoid, round egg clear, small dark blue",
              "Teardrop shaped, unknown brown types",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-cyan mt-1">✓</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: "🌸",
    title: "Pollen & Allergens",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">We identify and quantify multiple pollen types that can trigger allergies — critical for understanding why you feel worse at certain times of year.</p>
        <ul className="space-y-2 text-gray-300">
          {[
            "General pollen — mixed types",
            "Pine pollen — large winged pollen",
            "Pomegranate pollen — specific tree type",
            "Solid brown pollen — dense pollen types",
            "Translucent pollen — clear pollen varieties",
            "Smut — plant disease spores (fuzzy yellow variant)",
            "Rust — plant pathogen spores (Urediniospores)",
            "Myxomycete — slime mold spores",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 list-none"><span className="text-cyan mt-1">✓</span>{item}</li>
          ))}
        </ul>
        <div className="bg-navy-light rounded-xl p-5 border border-white/10">
          <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">Seasonal Tracking:</strong> Your HVAC filter captures pollen over weeks or months — giving you a much more complete seasonal allergen picture than a 10-minute air pump sample.</p>
        </div>
      </div>
    ),
  },
  {
    icon: "🔬",
    title: "Particulate Matter & Non-Biological Particles",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">Not all air quality issues come from living organisms. We test for various particulates across three critical size ranges.</p>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">PM2.5 — 2.5 Microns and Smaller</h4>
          <p className="text-gray-400 text-sm mb-3">Ultra-fine particles that penetrate deep into your lungs and can enter the bloodstream. Most dangerous to long-term health.</p>
        </div>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">PM2.5–10 — 2.5 to 10 Microns</h4>
          <p className="text-gray-400 text-sm mb-3">Inhalable coarse particles that lodge in the upper respiratory system. Many fungal spores fall in this range.</p>
        </div>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">PM10+ — Larger Particles</h4>
          <p className="text-gray-400 text-sm mb-3">Typically filtered by nose and throat. Includes larger pollen, dander, fiber, and insulation particles.</p>
        </div>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">Additional Particle Types</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Fiber — from clothing, carpets, and fabrics",
              "Insulation — fiberglass and other insulation materials",
              "Carbon dust and carbon clusters — combustion products",
              "Soil particles — tracked in from outdoors",
              "Talcum — personal care product residue",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-cyan mt-1">✓</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: "🐾",
    title: "Animal & Biological Fragments",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">Common allergen sources from living creatures — often the hidden cause of unexplained symptoms.</p>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">Pet & Animal Allergens</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Animal skin fragment — pet dander (general)",
              "Bird dander — from pet or wild birds",
              "Skin fragment — human skin cells",
              "Small skin fragment — microscopic skin particles",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-cyan mt-1">✓</span>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-cyan font-outfit font-bold text-lg mb-3">Insect Debris</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              "Insect scales — from moths and butterflies",
              "Insect appendages — legs, antennae, wings",
              "Insect part — general insect fragments",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-cyan mt-1">✓</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-navy-light rounded-xl p-5 border border-white/10">
          <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">Why this matters:</strong> Animal dander and insect fragments are major allergen sources. Identifying these helps determine whether pets or pest activity are affecting your air quality — and guides the right next steps.</p>
        </div>
      </div>
    ),
  },
  {
    icon: "📏",
    title: "Particle Size Analysis (3 Critical Ranges)",
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">We measure particles across three size ranges because size determines exactly how deeply they penetrate your respiratory system — and how much damage they can cause.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "PM2.5", sub: "≤ 2.5 microns", desc: "Penetrates deep into lungs. Can enter bloodstream. Linked to cardiovascular disease.", color: "border-coral" },
            { label: "PM2.5–10", sub: "2.5–10 microns", desc: "Lodges in upper respiratory system. Causes throat and nose irritation. Many spores fall here.", color: "border-yellow-400" },
            { label: "PM10+", sub: "10+ microns", desc: "Filtered by nose and throat. Causes eye and nose irritation. Includes larger pollen and dander.", color: "border-cyan" },
          ].map((range) => (
            <div key={range.label} className={`bg-navy-light rounded-xl p-5 border-l-4 ${range.color}`}>
              <p className="text-white font-outfit font-bold text-xl mb-1">{range.label}</p>
              <p className="text-gray-400 text-sm mb-3">{range.sub}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{range.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-navy-light rounded-xl p-5 border border-white/10">
          <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-white">Most services don&apos;t measure particle size at all.</strong> We measure all three ranges so you understand not just what&apos;s in your air — but how dangerous each particle is to your health.</p>
        </div>
      </div>
    ),
  },
];

function ExpandableSection({ icon, title, content }: { icon: string; title: string; content: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-navy-light rounded-2xl overflow-hidden border transition-all duration-300 ${open ? "border-cyan/30" : "border-white/5 hover:border-white/10"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-7 py-5 text-left group"
      >
        <span className="font-outfit font-bold text-white text-lg">
          <span className="mr-3">{icon}</span>{title}
        </span>
        <span className={`text-cyan text-2xl font-light transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-7 pb-7 border-t border-white/10 pt-6">
          {content}
        </div>
      )}
    </div>
  );
}

export default function WhatWeTestForPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan rounded-full opacity-[0.04] blur-[120px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="text-cyan text-sm font-outfit font-medium tracking-widest uppercase mb-4 block">Test Your World</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-white mb-6">
            182+ Things We <span className="text-gradient">Test For</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
            Your HVAC filter captures everything floating through your home. We identify every particle — mold, allergens, pollen, dander, and particulates — across 182+ different categories using AI-enhanced microscopy.
          </p>

          {/* Comparison stat */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
            <div className="bg-navy-light border border-white/10 rounded-2xl px-10 py-6 min-w-[180px]">
              <span className="block text-5xl font-outfit font-black text-gray-400 mb-2">36</span>
              <span className="text-gray-500 text-sm font-medium">Types tested by typical competitors</span>
            </div>
            <span className="text-3xl font-outfit font-bold text-white opacity-40">VS</span>
            <div className="bg-navy-light border border-cyan/40 rounded-2xl px-10 py-6 min-w-[180px] shadow-[0_0_30px_rgba(0,229,255,0.08)]">
              <span className="block text-5xl font-outfit font-black text-cyan mb-2">182+</span>
              <span className="text-gray-300 text-sm font-medium">Types tested by Test Your World</span>
            </div>
          </div>

          <a
            href="https://testyourworld.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan text-navy px-8 py-4 rounded-xl font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,229,255,0.3)]"
          >
            Get Your Test Kit
          </a>
        </div>
      </section>

      {/* OVERVIEW GRID */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-navy mb-4">Complete Testing Categories</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">While other services stop at 36 mold types, we analyze the full spectrum — because your air quality is affected by far more than just mold.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h3 className="font-outfit font-bold text-navy text-lg leading-tight">{cat.title}</h3>
                    <span className="text-cyan text-sm font-semibold">{cat.count}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-cyan font-bold mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-white mb-4">Why Comprehensive Testing Matters</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Other services only test for basic mold. But your air quality is affected by much more than a handful of mold species.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🤧", title: "Allergies?", text: "You need to know about pollen, dander, skin fragments, and environmental spores — not just toxic molds." },
              { icon: "🫁", title: "Respiratory Issues?", text: "Particle size matters. We measure all three critical ranges that affect your lungs differently." },
              { icon: "🏠", title: "Water Damage?", text: "Specific indicator species like Chaetomium and Stachybotrys confirm moisture problems before they become expensive." },
              { icon: "📊", title: "Complete Picture?", text: "182+ types gives you the full story of your air — not just part of it." },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-navy-light rounded-2xl p-6 border border-white/10 text-center hover:border-cyan/20 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="font-outfit font-bold text-white text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPANDABLE FULL LIST */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-navy mb-4">Everything We Test For — Complete List</h2>
            <p className="text-gray-500">Click any category to expand the full list.</p>
          </div>
          <div className="space-y-3">
            {expandableSections.map((section) => (
              <ExpandableSection key={section.title} icon={section.icon} title={section.title} content={section.content} />
            ))}
          </div>
        </div>
      </section>

      {/* SCIENCE / METHOD */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-white mb-4">How We Identify All 182+ Types</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Advanced non-viable direct microscopy — the same method used by professional industrial hygienists, enhanced by AI-powered analysis.</p>
          </div>
          <div className="bg-navy-light rounded-2xl p-8 border border-white/10 mb-8">
            <h3 className="text-cyan font-outfit font-bold text-2xl mb-4">Non-Viable Testing Advantage</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our direct microscopy approach detects <strong className="text-white">all airborne spores</strong> — viable, dormant, fragile, and dead. Culture testing (used by most home kits) only shows what can grow on agar plates, missing critical organisms like powdery mildew and fragile spores like Stachybotrys that collapse before they can be cultured.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your HVAC filter passively collects particles over weeks or months — giving a far more complete picture of your home&apos;s air than any 10-minute air pump sample.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Enhanced Accuracy",
                items: ["182+ contaminant identification", "Species-level classification", "Automated counting accuracy", "Confidence scoring systems", "Advanced microscopy analysis"],
              },
              {
                title: "Standardized Reporting",
                items: ["Spores per cubic meter (spores/m³)", "Particle size distribution", "Comparison to IAQ standards", "Confidence levels provided", "Plain-English explanations"],
              },
              {
                title: "Real-World Exposure",
                items: ["Measures actual exposure risk", "Detects dormant spores", "Captures fragile organisms", "No culture bias", "Complete spore spectrum"],
              },
            ].map((card) => (
              <div key={card.title} className="bg-navy rounded-xl p-6 border border-white/10">
                <h4 className="text-cyan font-outfit font-bold text-lg mb-4">{card.title}</h4>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-cyan mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#F7FAFC]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-navy mb-4">Ready to Know What&apos;s in Your Air?</h2>
          <p className="text-gray-500 text-lg mb-10">
            $69. No appointments. No strangers in your home. Mail your filter cut or attach an AirPatch and get results in 5–7 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://testyourworld.myshopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan text-navy px-8 py-4 rounded-xl font-outfit font-bold text-lg hover:bg-cyan-dim transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,229,255,0.3)]"
            >
              Get Your Test Kit
            </a>
            <Link
              href="/sample-report"
              className="border-2 border-navy text-navy px-8 py-4 rounded-xl font-outfit font-bold text-lg hover:bg-navy hover:text-white transition-all hover:-translate-y-1"
            >
              View Sample Report
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
