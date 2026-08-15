export function formatFileType(
  fileType: string
) {
  switch (fileType) {
    case "application/pdf":
      return "PDF";

    case "application/msword":
      return "Word Document";

    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "Word Document";

    default:
      return "Unknown";
  }
}