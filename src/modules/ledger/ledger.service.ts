export type Currency = "RUB" | "STARS";

export function buildLedgerEntries(input: {
  creatorProfileId: string;
  purchaseId: string;
  amountMinor: number;
  currency: Currency;
  feePercent: number;
}) {
  const fee = Math.floor((input.amountMinor * input.feePercent) / 100);
  const creator = input.amountMinor - fee;

  return [
    { creatorProfileId: input.creatorProfileId, purchaseId: input.purchaseId, entryType: "gross_payment" as const, amountMinor: input.amountMinor, currency: input.currency, direction: "credit" as const },
    { creatorProfileId: input.creatorProfileId, purchaseId: input.purchaseId, entryType: "platform_fee" as const, amountMinor: fee, currency: input.currency, direction: "credit" as const },
    { creatorProfileId: input.creatorProfileId, purchaseId: input.purchaseId, entryType: "creator_earnings" as const, amountMinor: creator, currency: input.currency, direction: "credit" as const }
  ];
}
