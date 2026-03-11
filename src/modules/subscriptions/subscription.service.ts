export function calculateExtendedEndDate(currentEndsAt: Date | null, paidAt: Date, billingPeriodDays: number) {
  const start = currentEndsAt && currentEndsAt > paidAt ? currentEndsAt : paidAt;
  const endsAt = new Date(start);
  endsAt.setUTCDate(endsAt.getUTCDate() + billingPeriodDays);
  return endsAt;
}
