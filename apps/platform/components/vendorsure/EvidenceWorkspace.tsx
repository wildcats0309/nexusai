import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { EvidenceItem } from "@/lib/assessment/requiredEvidence";

type Props = {
  evidence: EvidenceItem[];
};

type UploadedFile = {
  fileName: string;
  uploadedAt: string;
  status: "Uploaded" | "Approved" | "Rejected";
};

export default function EvidenceWorkspace({
  evidence,
}: Props) {
  const [uploadedFiles, setUploadedFiles] = useState<
    Record<string, UploadedFile>
  >({});

  const uploadedCount = Object.keys(uploadedFiles).length;
  const totalEvidence = evidence.length;

  const completionPercentage =
    totalEvidence === 0
      ? 0
      : Math.round((uploadedCount / totalEvidence) * 100);

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
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Overall Progress
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {uploadedCount} of {totalEvidence} documents uploaded
            </p>
          </div>

          <p className="text-3xl font-bold text-blue-600">
            {completionPercentage}%
          </p>
        </div>

        <div className="mt-6 h-3 rounded-full bg-gray-200">
          <div
            className="h-3 rounded-full bg-blue-600 transition-all duration-300"
            style={{
              width: `${completionPercentage}%`,
            }}
          />
        </div>

        <div className="mt-6 flex justify-between text-sm text-gray-600">
          <span>Uploaded: {uploadedCount}</span>

          <span>
            Missing: {totalEvidence - uploadedCount}
          </span>
        </div>
      </div>

      {/* Evidence Cards */}
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

              <div className="text-right">
                <StatusBadge
                  status={
                    uploadedFiles[item.id]
                      ? uploadedFiles[item.id].status
                      : "Missing"
                  }
                />

                {uploadedFiles[item.id] && (
                  <div className="mt-2 text-sm text-gray-500">
                    <p>
                      {uploadedFiles[item.id].fileName}
                    </p>

                    <p>
                      Uploaded{" "}
                      {uploadedFiles[item.id].uploadedAt}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              {uploadedFiles[item.id] ? (
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="rounded-lg border px-4 py-2 hover:bg-gray-50"
                  >
                    View
                  </button>

                  <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    Replace

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(event) => {
                        const file =
                          event.target.files?.[0];

                        if (!file) return;

                        setUploadedFiles((previous) => ({
                          ...previous,
                          [item.id]: {
                            fileName: file.name,
                            uploadedAt:
                              new Date().toLocaleDateString(),
                            status: "Uploaded",
                          },
                        }));
                      }}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setUploadedFiles((previous) => ({
                        ...previous,
                        [item.id]: {
                          ...previous[item.id],
                          status: "Approved",
                        },
                      }))
                    }
                    className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                  >
                    Review
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Upload Document

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(event) => {
                      const file =
                        event.target.files?.[0];

                      if (!file) return;

                      setUploadedFiles((previous) => ({
                        ...previous,
                        [item.id]: {
                          fileName: file.name,
                          uploadedAt:
                            new Date().toLocaleDateString(),
                          status: "Uploaded",
                        },
                      }));
                    }}
                  />
                </label>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}