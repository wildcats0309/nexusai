export type UploadedFile = {
  fileName: string;
  fileType: string;
  fileSize: number;
  uploadedAt: string;
  status: "Uploaded" | "Approved" | "Rejected";
};