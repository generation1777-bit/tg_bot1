export function inviteExpiresAt(now = new Date()) {
  const result = new Date(now);
  result.setUTCDate(result.getUTCDate() + 30);
  return result;
}
