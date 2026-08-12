import { AssessmentResult } from "@/lib/assessment/calculateRisk";
import { EvidenceItem } from "@/lib/assessment/requiredEvidence";

type Props = {
  result: AssessmentResult;
  evidence: EvidenceItem[];
  onClose: () => void;
};

export default function AssessmentResults({
  result,
  evidence,
  onClose,
}: Props) {
  const badgeColor =
    result.riskLevel === "Low"
      ? "bg-green-100 text-green-700"
      : result.riskLevel === "Medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-3xl rounded-xl bg-white p-8 shadow-xl">

        <h2 className="text-3xl font-bold">
          Vendor Assessment Results
        </h2>

        <div className="mt-8 flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Overall Risk Score
            </p>

            <p className="mt-2 text-5xl font-bold">
              {result.totalScore}
            </p>
          </div>

          <div
            className={`rounded-full px-5 py-2 text-lg font-semibold ${badgeColor}`}
          >
            {result.riskLevel} Risk
          </div>

        </div>

        <div className="mt-10">

          <h3 className="text-xl font-semibold">
            Recommendations
          </h3>

          {result.recommendations.length ? (
            <ul className="mt-4 space-y-3">
              {result.recommendations.map((recommendation) => (
                <li
                  key={recommendation}
                  className="rounded-lg border p-4"
                >
                  ✓ {recommendation}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-gray-500">
              No recommendations.
            </p>
          )}

        </div>

        <div className="mt-10">
  <h3 className="text-xl font-semibold">
    Required Evidence
  </h3>

  {evidence.length ? (
    <ul className="mt-4 space-y-3">
      {evidence.map((item) => (
        <li
          key={item.id}
          className="rounded-lg border p-4"
        >
          ☐ {item.name}
        </li>
      ))}
    </ul>
  ) : (
    <p className="mt-4 text-gray-500">
      No additional evidence required.
    </p>
  )}
</div>

        <div className="mt-10 flex justify-end">

          <button
            onClick={onClose}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}