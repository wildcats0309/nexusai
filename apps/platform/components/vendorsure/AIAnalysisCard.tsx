import { CheckCircle2 } from "lucide-react";

export default function AIAnalysisCard() {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <h2 className="text-2xl font-semibold">
          Evidence Intelligence
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Decision support for vendor qualification.
        </p>
      </div>

      <div className="space-y-6 p-6">

        {/* Recommendation */}
        <div className="rounded-xl border border-green-200 bg-green-50 p-4">

          <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
            Recommendation
          </p>

          <div className="mt-3 flex items-center gap-3">
            <CheckCircle2
              size={36}
              className="text-green-600"
            />

            <div>
              <h3 className="text-4xl font-bold text-green-700">
                Approve Vendor
              </h3>

              <p className="mt-1 text-lg text-green-600">
                Evidence Requirement Satisfied
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex w-full max-w-lg justify-between text-sm">
              <span className="font-medium text-gray-700">
                Confidence
              </span>

              <span className="font-semibold text-green-700">
                97%
              </span>
            </div>

            <div className="mt-2 w-full max-w-lg">
  <div className="h-3 overflow-hidden rounded-full bg-gray-200">
    <div className="h-full w-[97%] rounded-full bg-green-600" />
  </div>
</div>
          </div>

        </div>

        {/* Decision Rationale */}
        <div className="rounded-xl border p-6">

          <h3 className="text-lg font-semibold">
            Why we recommend approval
          </h3>

          <ul className="mt-5 space-y-4">

            <li className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="mt-0.5 text-green-600"
              />

              <span className="text-gray-700">
                Current SOC 2 Type II report detected.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="mt-0.5 text-green-600"
              />

              <span className="text-gray-700">
                Required security controls are present.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="mt-0.5 text-green-600"
              />

              <span className="text-gray-700">
                Document remains valid through May 14, 2027.
              </span>
            </li>

          </ul>

        </div>

      </div>
    </div>
  );
}