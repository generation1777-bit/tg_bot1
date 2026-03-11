export type ProductType = "subscription" | "donation";

export function validateProduct(payload: {
  type: ProductType;
  channelId?: string | null;
  priceMinor?: number | null;
  billingPeriodDays?: number | null;
}) {
  if (payload.type === "subscription") {
    if (!payload.channelId || !payload.priceMinor || !payload.billingPeriodDays) {
      throw new Error("Subscription requires channelId, priceMinor, billingPeriodDays");
    }
  }
}
