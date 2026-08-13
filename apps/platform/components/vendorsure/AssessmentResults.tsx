import StatusBadge from "./StatusBadge";
import { AssessmentResult } from "@/lib/assessment/calculateRisk";
import { EvidenceItem } from "@/lib/assessment/requiredEvidence";
import { QualificationDecision } from "@/lib/assessment/getQualificationDecision";

type Props = {
  result: AssessmentResult;
  evidence: EvidenceItem[];
  decision: QualificationDecision;
  summary: string;
  onClose: () => void;
};

export default function AssessmentResults({
  result,
  evidence,
  decision,
  summary,
  onClose,
}: Props) {
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl">

        <h2 className="text-3xl font-bold">
  Vendor Assessment Results
</h2>

<div className="mt-6 rounded-xl border bg-blue-50 p-5">
  <h3 className="text-lg font-semibold text-blue-900">
    AI Assessment Summary
  </h3>

  <p className="mt-3 whitespace-pre-line text-gray-700">
    {summary}
  </p>
</div>

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

          <StatusBadge
  status={`${result.riskLevel} Risk`}
/>

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

                  <StatusBadge status="Missing" />
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

          <div className="mt-4 rounded-xl border p-5">

          <StatusBadge
          status={decision.status}
           />
            <p className="mt-4text-2xl font-bold">
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

        <div className="mt-6 flex justify-between">
  <button
    className="rounded-lg border px-6 py-3 hover:bg-gray-50"
  >
    View Qualification Report
  </button>

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