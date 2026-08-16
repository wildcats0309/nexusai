export type DocumentHealth =
  | "Valid"
  | "Expiring Soon"
  | "Expired"
  | "Unknown";

export function getDocumentHealth(
  expirationDate?: string
): DocumentHealth {
  if (!expirationDate) {
    return "Unknown";
  }

  const today = new Date();
  const expiration = new Date(expirationDate);

  const millisecondsUntilExpiration =
    expiration.getTime() - today.getTime();

  const daysUntilExpiration = Math.ceil(
    millisecondsUntilExpiration /
      (1000 * 60 * 60 * 24)
  );

  if (daysUntilExpiration < 0) {
    return "Expired";
  }

  if (daysUntilExpiration <= 30) {
    return "Expiring Soon";
  }

  return "Valid";
}