export function resolveFeePercent(overridePercent: number | null | undefined, platformDefault = 10) {
  return overridePercent ?? platformDefault;
}
