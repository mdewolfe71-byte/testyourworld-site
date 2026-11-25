// Direct checkout (Stripe) — talks to the Test Your World backend, which holds
// every price and the Stripe key. Nothing here can set what a customer pays:
// only a product key and a currency are ever sent.

export const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/+$/, "");

export type ProductKey = "whole-filter-basic" | "whole-filter-advanced" | "surface-swab" | "just-for-fun-swab";
export type Currency = "usd" | "cad";

// Display copy only. The amount charged ALWAYS comes from the backend's catalog;
// `price` here is just a fallback/standard figure for first paint. The Just For
// Fun Test's live price can be lower during its launch window (see the backend's
// cap logic), so always prefer fetchCatalogPrices() for what's actually shown.
export const PRODUCTS: { key: ProductKey; name: string; price: number; blurb: string }[] = [
  { key: "whole-filter-basic", name: "Whole Filter Testing — Basic", price: 99, blurb: "Overall air quality score and risk level by category, in plain English." },
  { key: "whole-filter-advanced", name: "Whole Filter Testing — Advanced", price: 149, blurb: "Every organism identified by name, with exact counts against normal thresholds." },
  { key: "surface-swab", name: "Surface Swab Mold Test", price: 49, blurb: "Swab any suspicious surface; we identify the exact mold species. Kit and prepaid return label included." },
  { key: "just-for-fun-swab", name: "Just For Fun Test", price: 29, blurb: "You supply the swab and the postage, we skip the shipping — a real lab result, for curiosity (not certification)." },
];

export function isProductKey(value: string | null): value is ProductKey {
  return PRODUCTS.some((p) => p.key === value);
}

// Live, display-only prices in DOLLARS, keyed by product and currency. Comes from
// the same backend catalog Stripe is charged against, so the figure a customer
// sees can never drift from what they pay — which matters for the Just For Fun
// Test, whose price changes with the live launch-order count.
export type CatalogPrices = Partial<Record<ProductKey, Record<Currency, number>>>;

export async function fetchCatalogPrices(): Promise<CatalogPrices> {
  if (!API_BASE) return {};
  try {
    const res = await fetch(`${API_BASE}/api/checkout/catalog`);
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !Array.isArray(data.products)) return {};
    const out: CatalogPrices = {};
    for (const p of data.products as Array<{ key?: string; prices?: { usd?: number; cad?: number } }>) {
      const key = p.key ?? null;
      if (isProductKey(key) && p.prices) {
        out[key] = {
          usd: Math.round(p.prices.usd ?? 0) / 100,
          cad: Math.round(p.prices.cad ?? 0) / 100,
        };
      }
    }
    return out;
  } catch {
    return {};
  }
}

/** "$29" for whole dollars, "$19.99" when there are cents. */
export function formatPrice(dollars: number): string {
  return Number.isInteger(dollars) ? `$${dollars}` : `$${dollars.toFixed(2)}`;
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
