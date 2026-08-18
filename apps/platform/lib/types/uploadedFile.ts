export type UploadedFile = {
  fileName: string;
  fileType: string;
  fileSize: number;
  uploadedAt: string; // ISO 8601 date

  expirationDate?: string;

  status: "Uploaded" | "Approved" | "Rejected";
};