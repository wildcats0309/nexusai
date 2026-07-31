export default function RiskOverview() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Risk Overview
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-green-600 font-medium">
            ● Low Risk
          </span>

          <span className="font-bold">
            82
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-yellow-500 font-medium">
            ● Medium Risk
          </span>

          <span className="font-bold">
            32
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-red-600 font-medium">
            ● High Risk
          </span>

          <span className="font-bold">
            12
          </span>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-slate-100 p-4">
        <p className="text-sm text-gray-500">
          Overall Risk Score
        </p>

        <p className="mt-2 text-3xl font-bold">
          72 / 100
        </p>
      </div>
    </div>
  );
}