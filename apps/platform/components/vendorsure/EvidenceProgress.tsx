

type Props = {
  uploadedCount: number;
  totalEvidence: number;
};

export default function EvidenceProgress({
  uploadedCount,
  totalEvidence,
}: Props) {
  const completionPercentage =
    totalEvidence === 0
      ? 0
      : Math.round(
          (uploadedCount / totalEvidence) * 100
        );

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Overall Progress
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {uploadedCount} of {totalEvidence} documents
            uploaded
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
        <span>
          Uploaded: {uploadedCount}
        </span>

        <span>
          Missing: {totalEvidence - uploadedCount}
        </span>
      </div>
    </div>
  );
}