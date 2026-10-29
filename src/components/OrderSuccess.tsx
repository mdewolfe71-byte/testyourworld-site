"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { lookupOrder, type OrderLookup } from "@/lib/checkout";

type State = { kind: "loading" } | { kind: "paid"; order: OrderLookup } | { kind: "unpaid" } | { kind: "error"; message: string };

const MAX_TRIES = 8;

export default function OrderSuccess() {
  const sessionId = useSearchParams().get("session_id");
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    if (!sessionId) { setState({ kind: "error", message: "We couldn't find your order details." }); return; }
    let cancelled = false;
    (async () => {
      for (let i = 0; i < MAX_TRIES && !cancelled; i++) {
        try {
          const order = await lookupOrder(sessionId);
          if (order.paid && order.orderId) { if (!cancelled) setState({ kind: "paid", order }); return; }
          if (!order.paid && i === MAX_TRIES - 1) { if (!cancelled) setState({ kind: "unpaid" }); return; }
        } catch (err) {
          if (i === MAX_TRIES - 1 && !cancelled) setState({ kind: "error", message: err instanceof Error ? err.message : "We could not look up your order." });
        }
        await new Promise((r) => setTimeout(r, 1500));
      }
    })();
    return () => { cancelled = true; };
  }, [sessionId]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-navy text-center space-y-4">
      {state.kind === "loading" && <p>Confirming your payment…</p>}
      {state.kind === "paid" && (
        <>
          <h2 className="text-2xl font-outfit font-bold">Thank you — your order is confirmed</h2>
          <p>{state.order.productName}</p>
          <p className="text-sm text-gray-600">Your order number</p>
          <p className="text-3xl font-outfit font-extrabold tracking-wider">{state.order.orderId}</p>
          <p className="text-sm text-gray-600">
            Keep this number — you&apos;ll use it with your email{state.order.email ? ` (${state.order.email})` : ""} to register your sample and view your report. A receipt is on its way to your inbox.
          </p>
        </>
      )}
      {state.kind === "unpaid" && <p>We haven&apos;t received your payment yet. If you were charged, don&apos;t worry — your order will appear shortly and we&apos;ll email you.</p>}
      {state.kind === "error" && <p>{state.message} If you were charged, your payment is safe — please contact us and we&apos;ll sort it out.</p>}
      <Link href="/" className="inline-block text-cyan-dim font-semibold hover:underline">Back to home</Link>
    </div>
  );
}
