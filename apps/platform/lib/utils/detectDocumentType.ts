export function detectDocumentType(
  fileName: string
): string {
  const name = fileName
    .toLowerCase()
    .replace(/[_-]/g, " ");

  // SOC 2
  if (
    name.includes("soc2") ||
    name.includes("soc 2")
  ) {
    return "SOC 2 Type II Report";
  }

  // ISO 27001
  if (
    name.includes("iso27001") ||
    name.includes("iso 27001")
  ) {
    return "ISO 27001 Certificate";
  }

  // ISO 13485
  if (
    name.includes("iso13485") ||
    name.includes("iso 13485")
  ) {
    return "ISO 13485 Certificate";
  }

  // Business Associate Agreement
  if (
    name.includes("baa") ||
    name.includes("business associate")
  ) {
    return "Business Associate Agreement";
  }

  // Quality Agreement
  if (
    name.includes("quality agreement")
  ) {
    return "Quality Agreement";
  }

  // Certificate of Insurance
  if (
    name.includes("insurance") ||
    name.includes("certificate of insurance")
  ) {
    return "Certificate of Insurance";
  }

  // W-9
  if (
    name.includes("w9") ||
    name.includes("w 9")
  ) {
    return "W-9";
  }

  return "Unknown Document";
}