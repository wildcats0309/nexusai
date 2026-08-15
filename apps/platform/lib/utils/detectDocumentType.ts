export function detectDocumentType(
  fileName: string
): string {
  const name = fileName.toLowerCase();

  if (name.includes("soc2"))
    return "SOC 2 Type II Report";

  if (name.includes("iso27001"))
    return "ISO 27001 Certificate";

  if (name.includes("iso13485"))
    return "ISO 13485 Certificate";

  if (
    name.includes("baa") ||
    name.includes("business associate")
  )
    return "Business Associate Agreement";

  if (
    name.includes("quality agreement")
  )
    return "Quality Agreement";

  if (name.includes("insurance"))
    return "Certificate of Insurance";

  if (name.includes("w9"))
    return "W-9";

  return "Unknown Document";
}