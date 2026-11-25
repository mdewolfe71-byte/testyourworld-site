import type { Metadata } from "next";
import Link from "next/link";
import LivePrice from "@/components/LivePrice";

export const metadata: Metadata = {
  title: "The Just For Fun Test",
  description:
    "Is it gross? Let's find out. A self-collected mold swab test from $19.99 — you supply the swab and postage, we run it in a real lab. Results in 48 hours. For curiosity, not certification.",
};

const steps = [
  { n: "1", text: "Grab a cotton swab — yes, from your own bathroom drawer" },
  { n: "2", text: "Rub it on the mystery spot" },
  { n: "3", text: "Bag it, write your order number on it. If you forget, don't panic — we'll look at the return address on the envelope, or just become detectives. (A private-eye fee may be recommended. Not really.)" },
  { n: "4", text: "Mail it to our actual real lab" },
];

export default function JustForFunPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-black pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-400 rounded-full opacity-[0.07] blur-[140px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-amber-400 text-black text-sm font-outfit font-bold tracking-widest uppercase">
            The Just For Fun Test 🤔
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-white mb-5 leading-tight">
            Is it <span className="text-amber-400">gross?</span> Let&apos;s find out.
          </h1>
          <p className="text-amber-300 font-semibold mb-8">Non-certified, extremely real science.</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            You know the spot. Shower corner. Under the sink. That patch in the basement you&apos;ve been side-eyeing since spring.
            We&apos;ll tell you what&apos;s actually growing there for{" "}
            <LivePrice fallback={19.99} className="text-amber-400 font-bold" /> — here&apos;s the trick: you supply the swab,
            we skip the shipping, and we pass the savings straight to you. Sorry, FedEx.
          </p>
          <Link
            href="/order?product=just-for-fun-swab"
            className="inline-block bg-amber-400 text-black px-10 py-4 rounded-lg font-outfit font-bold text-lg hover:bg-amber-300 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(251,191,36,0.4)]"
          >
            Start the Just For Fun Test — <LivePrice fallback={19.99} />
          </Link>
        </div>
      </section>

      {/* HERE'S THE WHOLE PROCESS */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-outfit font-bold text-white mb-10 text-center">Here&apos;s the whole process</h2>
          <ol className="space-y-5">
            {steps.map((s) => (
              <li key={s.n} className="flex items-start gap-4 bg-navy-light border border-white/5 rounded-2xl p-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 text-navy font-outfit font-bold flex items-center justify-center">{s.n}</span>
                <span className="text-gray-300 leading-relaxed pt-1.5">{s.text}</span>
              </li>
            ))}
          </ol>
          <p className="text-center text-white font-outfit font-semibold text-lg mt-10">
            48 hours later: real lab results on what it actually is.
          </p>
        </div>
      </section>

      {/* MAILING-LITERACY MINI-GUIDE — its own clearly-separated callout */}
      <section className="py-16 bg-[#F7FAFC]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border-2 border-amber-400/40 shadow-lg p-8">
            <h3 className="text-2xl font-outfit font-bold text-navy mb-3">
              Never mailed a letter in your life? 💌
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              Totally normal in 2026. Here&apos;s the whole skill, start to finish:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400 text-navy text-sm font-bold flex items-center justify-center mt-0.5">1</span>
                <span>Put the bagged swab in any envelope.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400 text-navy text-sm font-bold flex items-center justify-center mt-0.5">2</span>
                <span>Stick <strong>ONE stamp</strong> on it. Grocery store or drugstore checkout counters sell single stamps, or grab one at the post office.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400 text-navy text-sm font-bold flex items-center justify-center mt-0.5">3</span>
                <span>Drop it in any blue mailbox you walk past. That&apos;s it.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRICE / CAP */}
      <section className="py-14 bg-navy">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-7">
            <p className="text-amber-200 leading-relaxed">
              <span className="text-white font-bold text-xl"><LivePrice fallback={19.99} /></span> for the first 1,000 orders — then it settles in at its regular price, <strong>$29</strong>. No code needed, nothing to enter, no deadline to beat. Just the first 1,000.
            </p>
          </div>
        </div>
      </section>

      {/* FINE PRINT */}
      <section className="py-14 bg-[#F7FAFC]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gray-500 text-sm leading-relaxed">
            <strong className="text-gray-700">Fine print, said out loud:</strong> the Just For Fun Test is a separate, lower-cost product from our Surface Swab Mold Test — you supply your own swab and your own postage (a standard first-class stamp covers it), we don&apos;t mail you anything, and that&apos;s the whole discount. It&apos;s a self-collected screening sample, not a certified inspection. We test for mold and other fungi/bacteria — not viruses, germs, or cooties. Please label your sample with your order number; unlabeled samples are matched using the return address on the envelope where possible. A sample we can&apos;t match to an order will be held, not guessed. $19.99 for the first 1,000 orders, starting now; after that, $29, same test, no further discount, no end date on when that happens.
          </p>
        </div>
      </section>

      {/* CROSS-SELL: the professional product */}
      <section className="py-16 bg-navy border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-outfit font-bold text-white mb-3">Want something official?</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-7">
            Chain of custody, the full professional workup? That&apos;s our Surface Swab Mold Test, $49, kit and prepaid return label included.
          </p>
          <Link
            href="/swab-testing"
            className="inline-block border border-cyan text-cyan px-8 py-3.5 rounded-lg font-outfit font-semibold hover:bg-cyan hover:text-navy transition-all"
          >
            See the Surface Swab Mold Test — $49
          </Link>
        </div>
      </section>
    </>
  );
}
