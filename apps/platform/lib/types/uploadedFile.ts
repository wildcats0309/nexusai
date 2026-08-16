export type UploadedFile = {
  fileName: string;
  fileType: string;
  fileSize: number;
  uploadedAt: string;

  expirationDate?: string;

  status: "Uploaded" | "Approved" | "Rejected";
};