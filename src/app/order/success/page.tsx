import type { Metadata } from "next";
import { Suspense } from "react";
import OrderSuccess from "@/components/OrderSuccess";

export const metadata: Metadata = {
  title: "Order Confirmed",
  robots: { index: false },
};

export default function OrderSuccessPage() {
  return (
    <section className="bg-navy min-h-screen pt-32 pb-20">
      <div className="max-w-xl mx-auto px-6">
        <Suspense fallback={<div className="bg-white rounded-2xl p-8 text-navy text-center">Loading…</div>}>
          <OrderSuccess />
        </Suspense>
      </div>
    </section>
  );
}
