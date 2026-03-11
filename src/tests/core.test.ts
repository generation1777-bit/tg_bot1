import { describe, expect, it } from "vitest";
import { TelegramAuthService } from "../modules/auth/telegram-auth.service";
import { resolveFeePercent } from "../modules/creators/creator.service";
import { validateProduct } from "../modules/products/product.validation";
import { calculateExtendedEndDate } from "../modules/subscriptions/subscription.service";
import { inviteExpiresAt } from "../modules/invites/invite.service";
import { buildLedgerEntries } from "../modules/ledger/ledger.service";

describe("telegram auth validation flow", () => {
  it("returns false on bad initData", () => {
    expect(TelegramAuthService.validateInitData("user=%7B%7D", "token")).toBe(false);
  });
});

describe("creator profile fee override logic", () => {
  it("uses default when override missing", () => expect(resolveFeePercent(null, 10)).toBe(10));
  it("uses override when present", () => expect(resolveFeePercent(7, 10)).toBe(7));
});

describe("product creation validation", () => {
  it("throws for invalid subscription", () => {
    expect(() => validateProduct({ type: "subscription", channelId: null, priceMinor: null, billingPeriodDays: null })).toThrow();
  });
});

describe("subscription activation and extension", () => {
  it("extends from current end when active", () => {
    const current = new Date("2030-01-01T00:00:00Z");
    const next = calculateExtendedEndDate(current, new Date("2029-01-01T00:00:00Z"), 30);
    expect(next.toISOString()).toBe("2030-01-31T00:00:00.000Z");
  });
});

describe("invite generation rules", () => {
  it("uses 30 days expiry", () => {
    const exp = inviteExpiresAt(new Date("2030-01-01T00:00:00Z"));
    expect(exp.toISOString()).toBe("2030-01-31T00:00:00.000Z");
  });
});

describe("ledger entry creation", () => {
  it("creates gross, fee, creator earnings", () => {
    const entries = buildLedgerEntries({ creatorProfileId: "c", purchaseId: "p", amountMinor: 1000, currency: "RUB", feePercent: 10 });
    expect(entries).toHaveLength(3);
    expect(entries[1].amountMinor).toBe(100);
    expect(entries[2].amountMinor).toBe(900);
  });
});
