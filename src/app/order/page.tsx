import type { Metadata } from "next";
import { Suspense } from "react";
import OrderForm from "@/components/OrderForm";

export const metadata: Metadata = {
  title: "Order a Test",
  description: "Order your Test Your World mold test. Whole Filter Basic $99, Advanced $149, Surface Swab $49 — USD or CAD. Secure checkout by Stripe.",
};

export default function OrderPage() {
  return (
    <section className="bg-navy min-h-screen pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <span className="text-cyan text-sm font-outfit font-medium tracking-widest uppercase mb-4 block text-center">Test Your World</span>
        <h1 className="text-4xl sm:text-5xl font-outfit font-extrabold text-white text-center mb-3">Order your test</h1>
        <p className="text-gray-300 text-center mb-10">Pick your test, pay securely, and we&apos;ll get it on its way.</p>
        <Suspense fallback={<div className="bg-white rounded-2xl p-8 text-navy">Loading…</div>}>
          <OrderForm />
        </Suspense>
      </div>
    </section>
  );
}
