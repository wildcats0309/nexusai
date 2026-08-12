import { AssessmentResult } from "@/lib/assessment/calculateRisk";
import { EvidenceItem } from "@/lib/assessment/requiredEvidence";
import { QualificationDecision } from "@/lib/assessment/getQualificationDecision";

type Props = {
  result: AssessmentResult;
  evidence: EvidenceItem[];
  decision: QualificationDecision;
  onClose: () => void;
};

export default function AssessmentResults({
  result,
  evidence,
  decision,
  onClose,
}: Props) {
  const badgeColor =
    result.riskLevel === "Low"
      ? "bg-green-100 text-green-700"
      : result.riskLevel === "Medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  const decisionColor =
    decision.status === "Ready"
      ? "bg-green-100 text-green-700"
      : decision.status === "Needs Review"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl">

        <h2 className="text-3xl font-bold">
          Vendor Assessment Results
        </h2>

        {/* Overall Risk */}

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
            className={`rounded-full px-4 py-2 text-base font-semibold ${badgeColor}`}
          >
            {result.riskLevel} Risk
          </div>

        </div>

        {/* Risk Breakdown */}

        <div className="mt-6">

          <h3 className="text-xl font-semibold">
            Risk Breakdown
          </h3>

          <div className="mt-4 space-y-3">

            {Object.entries(result.categoryScores).map(
              ([category, score]) => (
                <div
                  key={category}
                  className="flex justify-between rounded-lg border p-4"
                >
                  <span>{category}</span>

                  <span className="font-semibold">
                    {score}
                  </span>
                </div>
              )
            )}

          </div>

        </div>

        {/* Required Evidence */}

        <div className="mt-6">

          <h3 className="text-xl font-semibold">
            Required Evidence
          </h3>

          {evidence.length ? (
            <div className="mt-4 space-y-3">

              {evidence.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <span>{item.name}</span>

                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                    Missing
                  </span>
                </div>
              ))}

            </div>
          ) : (
            <p className="mt-4 text-gray-500">
              No additional evidence required.
            </p>
          )}

        </div>

        {/* Qualification Decision */}

        <div className="mt-6">

          <h3 className="text-xl font-semibold">
            Qualification Decision
          </h3>

          <div
            className={`mt-4 rounded-xl p-5 ${decisionColor}`}
          >
            <p className="text-2xl font-bold">
              {decision.status}
            </p>

            <ul className="mt-4 space-y-2">

              {decision.reasons.map((reason) => (
                <li key={reason}>
                  • {reason}
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Next Steps */}

        <div className="mt-6">

          <h3 className="text-xl font-semibold">
            Recommended Next Steps
          </h3>

          <ul className="mt-4 space-y-3">

            {decision.nextSteps.map((step) => (
              <li
                key={step}
                className="rounded-lg border p-3"
              >
                ✓ {step}
              </li>
            ))}

          </ul>

        </div>

        <div className="mt-6 flex justify-end">

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