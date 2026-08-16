import { FileText, FileType2, CalendarDays } from "lucide-react";
import { getDocumentHealth } from "../../lib/utils/getDocumentHealth";
import { detectDocumentType } from "../../lib/utils/detectDocumentType";
import { formatFileType } from "@/lib/utils/formatFileType";
import { formatFileSize } from "@/lib/utils/formatFileSize";
import { formatDate } from "@/lib/utils/formatDate";
import type { UploadedFile } from "@/lib/types/uploadedFile";
import UploadActions from "./UploadActions";
import StatusBadge from "./StatusBadge";
import DocumentHealthBadge from "./DocumentHealthBadge";
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
  const documentType = uploadedFile
    ? detectDocumentType(uploadedFile.fileName)
    : "Unknown Document";

  const documentHealth = uploadedFile
    ? getDocumentHealth(uploadedFile.expirationDate)
    : "Unknown";

  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <div className="flex items-start justify-between p-6">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">
            {item.name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Required for vendor qualification
          </p>

          {uploadedFile && (
            <div className="mt-6 space-y-4">

              {documentType !== "Unknown Document" && (
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Document Type
                  </p>

                  <p className="font-medium text-blue-600">
                    {documentType}
                  </p>
                </div>
              )}

              {documentType !== "Unknown Document" && (
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Document Health
                  </p>

                  <DocumentHealthBadge
  health={documentHealth}
/>
                </div>
              )}

              <div>
                <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide text-gray-400">
  <FileText size={16} 
  className="text-gray-500" />
  <span>File</span>
</div>

                <p className="font-medium text-gray-900">
                  {uploadedFile.fileName}
                </p>
              </div>

              <div>
                <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide text-gray-400">
  <CalendarDays
    size={14}
    className="text-gray-500"
  />
  <span>Uploaded</span>
</div>

                <p>
                  {formatFileType(uploadedFile.fileType)} •{" "}
                  {formatFileSize(uploadedFile.fileSize)}
                </p>
              </div>

              <div>
               <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-wide text-gray-400">
  <CalendarDays
    size={14}
    className="text-gray-500"
  />
  <span>Uploaded</span>
</div>

                <p>{formatDate(uploadedFile.uploadedAt)}</p>
              </div>

            </div>
          )}
        </div>

        <div className="ml-8">
          <StatusBadge
            status={
              uploadedFile
                ? uploadedFile.status
                : "Missing"
            }
          />
        </div>
      </div>

      <div className="border-t bg-gray-50 px-6 py-4">
        <UploadActions
          itemId={item.id}
          uploadedFile={uploadedFile}
          setUploadedFiles={setUploadedFiles}
        />
      </div>
    </div>
  );
}