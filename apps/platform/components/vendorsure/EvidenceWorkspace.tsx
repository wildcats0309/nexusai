import type { UploadedFile } from "@/lib/types/uploadedFile";
import EvidenceCard from "./EvidenceCard";
import EvidenceProgress from "./EvidenceProgress";
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { EvidenceItem } from "@/lib/assessment/requiredEvidence";

type Props = {
  evidence: EvidenceItem[];
};


export default function EvidenceWorkspace({
  evidence,
}: Props) {
  const [uploadedFiles, setUploadedFiles] = useState<
    Record<string, UploadedFile>
  >({});

  const uploadedCount = Object.keys(uploadedFiles).length;
  const totalEvidence = evidence.length;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Evidence Management
        </h1>

        <p className="mt-2 text-gray-600">
          Manage all required vendor qualification documents.
        </p>
      </div>

      {/* Progress Dashboard */}
      <EvidenceProgress
  uploadedCount={uploadedCount}
  totalEvidence={totalEvidence}
/>

<div className="space-y-4">
  {evidence.map((item) => (
    <EvidenceCard
      key={item.id}
      item={item}
      uploadedFile={uploadedFiles[item.id]}
      setUploadedFiles={setUploadedFiles}
    />
  ))}
</div>
    </div>
  );
}