"use client";

import StatusBadge from "./StatusBadge";

import { AssessmentResult } from "@/lib/assessment/calculateRisk";
import { EvidenceItem } from "@/lib/assessment/requiredEvidence";
import { QualificationDecision } from "@/lib/assessment/getQualificationDecision";

type Props = {
  vendorName: string;
  result: AssessmentResult;
  decision: QualificationDecision;
  evidence: EvidenceItem[];
  summary: string;
};

export default function QualificationReport({
  vendorName,
  result,
  decision,
  evidence,
  summary,
}: Props) {
  return (
    <div className="rounded-xl border bg-white shadow-sm">

      {/* Header */}
      <div className="border-b px-10 py-8">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              VendorSure
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Vendor Qualification Report
            </h1>

            <p className="mt-2 text-gray-500">
              Executive Vendor Assessment
            </p>
          </div>

          <div className="flex flex-col items-end gap-4">

  <button
    onClick={() => window.print()}
    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
  >
    🖨 Print Qualification Package
  </button>

  <div className="text-right">
    <p className="text-sm text-gray-500">
      Assessment Date
    </p>

    <p className="font-semibold">
      {new Date().toLocaleDateString()}
    </p>
  </div>

</div>

        </div>

      </div>

      {/* Summary Grid */}
      <div className="grid grid-cols-2 gap-8 border-b px-10 py-8 lg:grid-cols-4">

        <div>
          <p className="text-sm text-gray-500">Vendor</p>
          <p className="mt-1 text-lg font-semibold">
            {vendorName}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Overall Risk
          </p>

          <StatusBadge status={`${result.riskLevel} Risk`} />
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Qualification Status
          </p>

          <StatusBadge status={decision.status} />
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Risk Score
          </p>

          <p className="mt-1 text-3xl font-bold">
            {result.totalScore}
          </p>
        </div>

      </div>

      {/* Executive Summary */}
      <div className="px-10 py-8">

        <h2 className="text-2xl font-semibold">
          Executive Summary
        </h2>

        <p className="mt-4 whitespace-pre-line text-gray-700">
          {summary}
        </p>

      </div>

      

      {/* Risk Scorecard */}

<div className="border-t px-10 py-8">

  <h2 className="text-2xl font-semibold">
    Risk Scorecard
  </h2>

  <div className="mt-8 space-y-6">

    {Object.entries(result.categoryScores).map(
      ([category, score]) => (

        <div key={category}>

          <div className="mb-2 flex justify-between">

            <span className="font-medium">
              {category}
            </span>

            <span className="font-semibold">
              {score}
            </span>

          </div>

          <div className="h-3 rounded-full bg-gray-200">

            <div
              className="h-3 rounded-full bg-blue-600"
              style={{
                width: `${Math.min(score, 100)}%`,
              }}
            />

          </div>

        </div>

      )
    )}

  </div>

</div>


{/* Required Evidence */}

<div className="border-t px-10 py-8">

  <h2 className="text-2xl font-semibold">
    Required Evidence
  </h2>

  <div className="mt-6 overflow-hidden rounded-lg border">

    <table className="w-full">

      <thead className="bg-gray-50">

        <tr>

          <th className="px-6 py-3 text-left">
            Status
          </th>

          <th className="px-6 py-3 text-left">
            Document
          </th>

          <th className="px-6 py-3 text-left">
            Priority
          </th>

        </tr>

      </thead>

      <tbody>
  {evidence.map((item) => (
    <tr
      key={item.id}
      className="border-t hover:bg-gray-50"
    >
      <td className="px-6 py-4">
        <StatusBadge status="Missing" />
      </td>

      <td className="px-6 py-4 font-medium">
        {item.name}
      </td>

      <td className="px-6 py-4">
        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
          High
        </span>
      </td>
    </tr>
  ))}
</tbody>

    </table>

  </div>

</div>

{/* Required Evidence */}

<div className="border-t px-10 py-8">
   ...
</div>



{/* Recommendations */}

<div className="border-t px-10 py-8">

  <h2 className="text-2xl font-semibold">
    Recommendations
  </h2>

  <div className="mt-6 space-y-4">

    {result.recommendations.map((recommendation, index) => (

      <div
        key={index}
        className="rounded-xl border border-blue-200 bg-blue-50 p-5"
      >

        <div className="flex items-center justify-between">

          <h3 className="font-semibold">
            Recommendation {index + 1}
          </h3>

          <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
            High Priority
          </span>

        </div>

        <p className="mt-3 text-gray-700">
          {recommendation}
        </p>

      </div>

    ))}

  </div>

</div>

{/* Qualification Decision */}

<div className="border-t px-10 py-8">

  <h2 className="text-2xl font-semibold">
    Qualification Decision
  </h2>

  <div
    className={`mt-6 rounded-xl border-l-8 p-8 ${
      decision.status === "Ready"
        ? "border-green-600 bg-green-50"
        : decision.status === "Needs Review"
        ? "border-yellow-500 bg-yellow-50"
        : "border-red-600 bg-red-50"
    }`}
  >

    <StatusBadge status={decision.status} />

    <h3 className="mt-4 text-3xl font-bold">
      {decision.status}
    </h3>

    <p className="mt-4 text-gray-700">
      Based on the assessment results, this vendor is currently
      <strong> {decision.status}</strong>.
    </p>

    <div className="mt-6">

      <h4 className="font-semibold">
        Decision Rationale
      </h4>

      <ul className="mt-3 space-y-2">

        {decision.reasons.map((reason) => (
          <li key={reason}>
            • {reason}
          </li>
        ))}

      </ul>

    </div>

  </div>

</div>

{/* Reviewer Signoff */}

<div className="border-t px-10 py-8">

  <h2 className="text-2xl font-semibold">
    Reviewer Signoff
  </h2>

  <div className="mt-8 grid grid-cols-2 gap-8">

    <div>
      <p className="text-sm text-gray-500">
        Prepared By
      </p>

      <div className="mt-2 border-b pb-2">
        VendorSure
      </div>
    </div>

    <div>
      <p className="text-sm text-gray-500">
        Report Date
      </p>

      <div className="mt-2 border-b pb-2">
        {new Date().toLocaleDateString()}
      </div>
    </div>

    <div>
      <p className="text-sm text-gray-500">
        Reviewer
      </p>

      <div className="mt-8 border-b"></div>
    </div>

    <div>
      <p className="text-sm text-gray-500">
        Signature
      </p>

      <div className="mt-8 border-b"></div>
    </div>

  </div>

</div>

{/* Audit Trail */}

<div className="border-t px-10 py-8">

  <h2 className="text-2xl font-semibold">
    Audit Trail
  </h2>

  <div className="mt-8 space-y-6">

    <div className="flex items-start justify-between border-b pb-4">
      <div>
        <p className="font-semibold">
          Assessment Created
        </p>
        <p className="text-sm text-gray-500">
          VendorSure
        </p>
      </div>

      <p className="text-sm text-gray-500">
        {new Date().toLocaleDateString()}
      </p>
    </div>

    <div className="flex items-start justify-between border-b pb-4">
      <div>
        <p className="font-semibold">
          Assessment Completed
        </p>
        <p className="text-sm text-gray-500">
          VendorSure
        </p>
      </div>

      <p className="text-sm text-gray-500">
        {new Date().toLocaleDateString()}
      </p>
    </div>

    <div className="flex items-start justify-between">
      <div>
        <p className="font-semibold">
          Qualification Package Generated
        </p>
        <p className="text-sm text-gray-500">
          VendorSure
        </p>
      </div>

      <p className="text-sm text-gray-500">
        {new Date().toLocaleDateString()}
      </p>
    </div>

  </div>

</div>

</div>
);
}