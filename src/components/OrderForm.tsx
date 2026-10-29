"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, isProductKey, startCheckout, type Currency, type ProductKey } from "@/lib/checkout";

export default function OrderForm() {
  const params = useSearchParams();
  const fromUrl = params.get("product");
  const [productKey, setProductKey] = useState<ProductKey>(isProductKey(fromUrl) ? fromUrl : "whole-filter-basic");
  const [currency, setCurrency] = useState<Currency>("usd");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cancelled = params.get("cancelled") === "1";

  const product = PRODUCTS.find((p) => p.key === productKey)!;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const url = await startCheckout({ productKey, currency, email: email.trim() });
      window.location.assign(url); // Stripe's hosted payment page
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-navy space-y-6">
      {cancelled && (
        <p className="rounded-lg bg-ice px-4 py-3 text-sm">Checkout was cancelled — nothing was charged. Pick up where you left off below.</p>
      )}

      <fieldset>
        <legend className="font-outfit font-semibold mb-3">Choose your test</legend>
        <div className="space-y-3">
          {PRODUCTS.map((p) => (
            <label
              key={p.key}
              className={`flex items-start gap-3 rounded-xl border-2 p-4 cursor-pointer transition-colors ${
                productKey === p.key ? "border-cyan bg-ice" : "border-gray-200 hover:border-cyan-dim"
              }`}
            >
              <input type="radio" name="product" value={p.key} checked={productKey === p.key} onChange={() => setProductKey(p.key)} className="mt-1" />
              <span className="flex-1">
                <span className="flex justify-between gap-4 font-outfit font-semibold">
                  <span>{p.name}</span>
                  <span>${p.price}</span>
                </span>
                <span className="block text-sm text-gray-600">{p.blurb}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-outfit font-semibold mb-2">Pay in</legend>
        <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden" role="radiogroup" aria-label="Currency">
          {(["usd", "cad"] as Currency[]).map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={currency === c}
              onClick={() => setCurrency(c)}
              className={`px-5 py-2 text-sm font-semibold ${currency === c ? "bg-navy text-white" : "bg-white text-navy hover:bg-ice"}`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">${product.price} is ${product.price} in either currency. Prepaid return shipping is included.</p>
      </fieldset>

      <div>
        <label htmlFor="order-email" className="font-outfit font-semibold block mb-2">
          Email <span className="font-normal text-gray-500">(optional — you can enter it on the next page)</span>
        </label>
        <input
          id="order-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-cyan focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      {error && <p role="alert" className="rounded-lg bg-red-50 text-red-700 px-4 py-3 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={busy}
        className="w-full bg-cyan text-navy py-4 rounded-lg font-outfit font-bold text-lg hover:bg-cyan-dim transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {busy ? "Taking you to secure payment…" : `Continue to secure payment — $${product.price} ${currency.toUpperCase()}`}
      </button>
      <p className="text-xs text-gray-500 text-center">
        Payment is handled by Stripe. We never see or store your card number. You&apos;ll enter your shipping address on the next page.
      </p>
    </form>
  );
}
