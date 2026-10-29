// Direct checkout (Stripe) — talks to the Test Your World backend, which holds
// every price and the Stripe key. Nothing here can set what a customer pays:
// only a product key and a currency are ever sent.

export const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/+$/, "");

export type ProductKey = "whole-filter-basic" | "whole-filter-advanced" | "surface-swab";
export type Currency = "usd" | "cad";

// Display copy only. The amount charged always comes from the backend's catalog.
export const PRODUCTS: { key: ProductKey; name: string; price: number; blurb: string }[] = [
  { key: "whole-filter-basic", name: "Whole Filter Testing — Basic", price: 99, blurb: "Overall air quality score and risk level by category, in plain English." },
  { key: "whole-filter-advanced", name: "Whole Filter Testing — Advanced", price: 149, blurb: "Every organism identified by name, with exact counts against normal thresholds." },
  { key: "surface-swab", name: "Surface Swab Mold Test", price: 49, blurb: "Swab any suspicious surface; we identify the exact mold species." },
];

export function isProductKey(value: string | null): value is ProductKey {
  return PRODUCTS.some((p) => p.key === value);
}

export async function startCheckout(input: { productKey: ProductKey; currency: Currency; email?: string }): Promise<string> {
  if (!API_BASE) throw new Error("Online ordering is not set up yet. Please contact us to place your order.");
  const res = await fetch(`${API_BASE}/api/checkout/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...input, email: input.email || undefined }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.url) throw new Error(data.error || "We could not start your checkout. Please try again.");
  return data.url as string;
}

export type OrderLookup = { paid: boolean; orderId?: string | null; productName?: string | null; email?: string | null };

export async function lookupOrder(sessionId: string): Promise<OrderLookup> {
  const res = await fetch(`${API_BASE}/api/checkout/session/${encodeURIComponent(sessionId)}`);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "We could not look up your order.");
  return data as OrderLookup;
}
