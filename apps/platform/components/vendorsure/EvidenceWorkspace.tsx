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
  Record<string, string>
>({});

  return (
  <div className="space-y-8">

    <div>
      <h1 className="text-4xl font-bold">
        Evidence Management
      </h1>

      <p className="mt-2 text-gray-600">
        Manage all required vendor qualification documents.
      </p>
    </div>

    <div className="space-y-4">

      {evidence.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border bg-white p-6 shadow-sm"
        >

          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-xl font-semibold">
                {item.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Required for vendor qualification
              </p>

            </div>

            <StatusBadge
  status={
    uploadedFiles[item.id]
      ? "Uploaded"
      : "Missing"
  }
/>
{uploadedFiles[item.id] && (
  <p className="mt-2 text-sm text-gray-500">
    {uploadedFiles[item.id]}
  </p>
)}
          </div>

          <div className="mt-6 flex justify-end">

            <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
  Upload Document

  <input
    type="file"
    accept=".pdf,.doc,.docx"
    className="hidden"
    onChange={(event) => {
      const file = event.target.files?.[0];

      if (!file) return;

      setUploadedFiles((previous) => ({
        ...previous,
        [item.id]: file.name,
      }));
    }}
  />
</label>

          </div>

        </div>
      ))}

    </div>

  </div>
);
}