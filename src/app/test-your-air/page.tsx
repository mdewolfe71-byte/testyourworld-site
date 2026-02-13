import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Your Air",
  description: "Two ways to test your home's air quality. AirPatch or FilterCut — same lab, same science, same answers. Know what you're breathing for $69.",
};

const personas = [
  { emoji: "🤧", title: "The Allergy Sufferer", text: "You've blamed the cat, the dog, the seasons, and your coworker's perfume. Maybe it's time to check the air.", accent: "Plot twist: it was the house." },
  { emoji: "🏡", title: "New Homeowners", text: "You just bought a house. Exciting! But what did the previous owners leave behind... in the air?", accent: "Trust but verify." },
  { emoji: "👶", title: "Parents", text: "You baby-proofed the outlets. You locked the cabinets. But did you check what they're breathing?", accent: "Next level parenting." },
  { emoji: "🌀", title: "Air Purifier Owners", text: "You bought the purifier. You replace the filters. But is it actually cleaning your air? Now you can prove it.", accent: "$59 beats wondering forever." },
  { emoji: "🔧", title: "The DIY Homeowner", text: "You've got tools. You've got skills. Now you've got a way to test your own air quality without calling anyone.", accent: "Self-reliance. We respect it." },
  { emoji: "🤔", title: "The Curious", text: "No symptoms. No concerns. Just want to know. That's valid. Knowledge is power.", accent: "Curiosity didn't hurt this cat." },
];

export default function TestYourAirPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[var(--navy)] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--cyan)] rounded-full opacity-[0.04] blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-[var(--cyan)] text-sm font-[Outfit] font-medium tracking-widest uppercase mb-4 block">Test Your World</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[Outfit] font-800 text-white mb-6">
            Know What You&apos;re <span className="text-gradient">Breathing</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Your HVAC system pulls air from every room in your house. We test what it captures and tell you exactly what&apos;s floating around your home.
          </p>
          <div className="inline-block px-6 py-2.5 rounded-full border border-white/10 bg-white/5 mt-2">
            <span className="text-gray-300 text-sm">Two ways to test. <strong className="text-[var(--cyan)]">Same lab. Same answers.</strong> Pick what works for you.</span>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR TEST */}
      <section className="py-20 lg:py-28 bg-[var(--gray-100)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-[Outfit] mb-3">Choose Your Test</h2>
            <p className="text-[var(--gray-500)]">Different starting points. Same powerful results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AirPatch */}
            <div className="bg-white rounded-2xl border border-[var(--gray-200)] overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 text-center">
                <span className="inline-block bg-[var(--coral)] text-white text-xs font-bold px-3 py-1 rounded-full font-[Outfit] tracking-wide mb-3">MOST VERSATILE</span>
                <div className="text-5xl mb-2">🩹</div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-[Outfit] font-bold mb-1">AirPatch</h3>
                <p className="text-[var(--cyan)] font-semibold text-sm mb-2">Stick it. Wait. Mail it. Done.</p>
                <p className="text-[var(--gray-500)] text-sm italic mb-4">&quot;I want answers, not a craft project.&quot;</p>
                <p className="text-[var(--gray-600)] text-sm leading-relaxed mb-5">
                  We send you a sampling patch. Attach it to your HVAC filter for whole-home testing, place it in a problem room, or stick it on your air purifier&apos;s output to see if it&apos;s actually working. Seven days later, peel it off and mail it back.
                </p>
                <ul className="space-y-2.5">
                  {[
                    '4"×4" sampling patch works anywhere air moves',
                    "Test whole home via HVAC filter",
                    "Test a single room (basement, bedroom, nursery)",
                    "Test your air purifier's output — is it actually working?",
                    "Test DIY setups (box fans, Corsi-Rosenthal boxes)",
                    "7-day sampling period",
                    "Results in 5–7 days after we receive it",
                    "Prepaid return shipping",
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--gray-600)]">
                      <svg className="w-4 h-4 text-[var(--cyan)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://testyourworld.myshopify.com" target="_blank" rel="noopener noreferrer" className="block mt-6 bg-[var(--cyan)] text-[var(--navy)] text-center py-3 rounded-lg font-[Outfit] font-bold hover:bg-[#00D4ED] transition-all">
                  Get AirPatch — $69
                </a>
              </div>
            </div>

            {/* FilterCut */}
            <div className="bg-white rounded-2xl border border-[var(--gray-200)] overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 text-center">
                <span className="inline-block bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full font-[Outfit] tracking-wide mb-3">HANDS-ON</span>
                <div className="text-5xl mb-2">✂️</div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-[Outfit] font-bold mb-1">FilterCut</h3>
                <p className="text-[var(--cyan)] font-semibold text-sm mb-2">For the hands-on homeowner.</p>
                <p className="text-[var(--gray-500)] text-sm italic mb-4">&quot;That dusty filter is about to become useful.&quot;</p>
                <p className="text-[var(--gray-600)] text-sm leading-relaxed mb-5">
                  Got a filter that&apos;s been collecting dust for a month or more? Perfect. We send you heavy-duty shears and gloves. You cut a 4&quot;×4&quot; sample, send it back, and we tell you what your home&apos;s been breathing the whole time.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Uses your existing used filter (30+ days old)",
                    "Heavy-duty filter shears included (cuts wire mesh)",
                    "Nitrile gloves included (handle safely)",
                    "Months of accumulated data in one sample",
                    "Results in 5–7 days after we receive it",
                    "Prepaid return shipping included",
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--gray-600)]">
                      <svg className="w-4 h-4 text-[var(--cyan)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://testyourworld.myshopify.com" target="_blank" rel="noopener noreferrer" className="block mt-6 bg-[var(--cyan)] text-[var(--navy)] text-center py-3 rounded-lg font-[Outfit] font-bold hover:bg-[#00D4ED] transition-all">
                  Get FilterCut — $69
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAME LAB CALLOUT */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--gray-100)] rounded-2xl p-8 text-center border border-[var(--gray-200)]">
            <h3 className="text-2xl font-[Outfit] font-bold mb-4">Same Lab. Same Science. Tailored Analysis.</h3>
            <p className="text-[var(--gray-500)] leading-relaxed text-sm">
              <strong>AirPatch</strong> and <strong>FilterCut</strong> samples go to the same accredited laboratory and receive the same detailed mold identification and spore count analysis. The difference is in how we calculate your results: AirPatch uses a controlled 7-day sampling window with continuous airflow, giving us precise data about your air quality during that period. FilterCut analyzes months of accumulated particles, giving us a longer-term picture — though with slightly more estimation since we&apos;re working backward from your filter&apos;s history. Either way, you get a clear, actionable report about what&apos;s in your air.
            </p>
          </div>
        </div>
      </section>

      {/* PRO TIP */}
      <section className="py-4 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--navy)] rounded-2xl p-8 border border-white/5">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💨</span>
              <div>
                <h3 className="text-[var(--cyan)] font-[Outfit] font-bold text-lg mb-2">Pro Tip: Set Your Fan to ON</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                  For the most accurate results, set your thermostat&apos;s fan setting to <strong className="text-white">ON</strong> (not AUTO) during your sampling period. This ensures continuous airflow through your filter 24/7.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Bonus: Running your fan continuously is actually what HVAC professionals have recommended for decades — better filtration, more even temperatures, and improved air quality throughout your home.
                </p>
                <span className="inline-block mt-3 text-xs text-[var(--cyan)] border border-[var(--cyan)]/20 px-3 py-1 rounded-full">ASHRAE 62.2 Recommended</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TEST YOUR AIR - feature cards */}
      <section className="py-20 lg:py-28 bg-[var(--navy)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-[Outfit] text-white mb-3">Why Test Your Air?</h2>
            <p className="text-gray-400">Because you can&apos;t see what you&apos;re breathing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🌀", title: "Test Your Purifier", text: "Spent $400 on an air purifier? Stick an AirPatch on the output side. If it comes back clean, money well spent. If not...", accent: "Trust but verify." },
              { icon: "🚫", title: "No Strangers", text: "Nobody comes to your house. Nobody judges your dishes. Nobody sees your laundry pile.", accent: "Your mess stays your business." },
              { icon: "📊", title: "Reports You Understand", text: "Written in English. Not scientist. Share it with your doctor or that one family member who didn't believe you.", accent: "Proof. Finally." },
            ].map((card) => (
              <div key={card.title} className="bg-[var(--navy-light)] border border-white/5 rounded-2xl p-7 hover:border-[var(--cyan)]/20 transition-all">
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h3 className="text-xl font-[Outfit] text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{card.text}</p>
                <span className="text-[var(--cyan)] text-sm font-semibold">{card.accent}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="py-20 lg:py-28 bg-[var(--gray-100)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-[Outfit] mb-3">Perfect For...</h2>
            <p className="text-[var(--gray-500)]">Basically anyone who breathes indoors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7 border border-[var(--gray-200)] hover:border-[var(--cyan)]/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <span className="text-3xl mb-3 block">{p.emoji}</span>
                <h3 className="text-lg font-[Outfit] font-semibold mb-2">{p.title}</h3>
                <p className="text-[var(--gray-500)] text-sm leading-relaxed mb-3">{p.text}</p>
                <span className="text-[var(--coral)] text-sm font-semibold">{p.accent}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--cyan)] rounded-full opacity-[0.03] blur-[100px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-[Outfit] text-white mb-4">
            Your Filter Knows. <span className="text-[var(--cyan)]">Now You Can Too.</span>
          </h2>
          <p className="text-gray-400 mb-8">AirPatch or FilterCut — pick the one that fits your style. Same lab. Same science. Same answers about what you&apos;ve been breathing.</p>
          <a href="https://testyourworld.myshopify.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-[var(--cyan)] text-[var(--navy)] px-10 py-4 rounded-lg font-[Outfit] font-bold text-lg hover:bg-[#00D4ED] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,255,0.3)]">
            Get Your Kit — $69
          </a>
        </div>
      </section>
    </>
  );
}
