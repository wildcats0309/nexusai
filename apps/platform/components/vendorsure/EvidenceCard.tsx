import { detectDocumentType } from "../../lib/utils/detectDocumentType";
import { formatFileType } from "@/lib/utils/formatFileType";
import { formatFileSize } from "@/lib/utils/formatFileSize";
import type { UploadedFile } from "@/lib/types/uploadedFile";
import UploadActions from "./UploadActions";
import StatusBadge from "./StatusBadge";
import { EvidenceItem } from "@/lib/assessment/requiredEvidence";


type Props = {
  item: EvidenceItem;
  uploadedFile?: UploadedFile;
  setUploadedFiles: React.Dispatch<
    React.SetStateAction<Record<string, UploadedFile>>
  >;
};

export default function EvidenceCard({
  item,
  uploadedFile,
  setUploadedFiles,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            {item.name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Required for vendor qualification
          </p>
        </div>

        <div className="text-right">
          <StatusBadge
            status={
              uploadedFile
                ? uploadedFile.status
                : "Missing"
            }
          />

          {uploadedFile && (
  <div className="mt-2 text-sm text-gray-500">
    <p className="text-sm font-semibold text-blue-600">
  {detectDocumentType(uploadedFile.fileName)}
</p>
    <p className="font-medium">
      {uploadedFile.fileName}
    </p>

    <p>
  {formatFileType(uploadedFile.fileType)} •{" "}
  {formatFileSize(uploadedFile.fileSize)}
</p>

    <p>
      Uploaded {uploadedFile.uploadedAt}
    </p>
  </div>
)}
        </div>
      </div>

  <UploadActions
  itemId={item.id}
  uploadedFile={uploadedFile}
  setUploadedFiles={setUploadedFiles}
/>
    </div>
  );
}