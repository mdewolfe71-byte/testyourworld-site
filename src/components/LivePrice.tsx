"use client";

import { useEffect, useState } from "react";
import { fetchCatalogPrices, formatPrice, type Currency, type ProductKey } from "@/lib/checkout";

// Shows a product's live price (dollars) from the backend catalog, so a
// count-driven launch price can never drift from what Stripe charges. Renders
// the fallback immediately, then swaps in the live figure once it loads.
export default function LivePrice({
  productKey = "just-for-fun-swab",
  currency = "usd",
  fallback,
  className,
}: {
  productKey?: ProductKey;
  currency?: Currency;
  fallback: number;
  className?: string;
}) {
  const [price, setPrice] = useState<number>(fallback);
  useEffect(() => {
    let active = true;
    fetchCatalogPrices().then((c) => {
      const p = c[productKey]?.[currency];
      if (active && typeof p === "number") setPrice(p);
    });
    return () => { active = false; };
  }, [productKey, currency]);
  return <span className={className}>{formatPrice(price)}</span>;
}
