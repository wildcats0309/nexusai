export default function ExecutiveHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          VendorSure Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Executive overview of vendor risk, compliance,
          and supplier performance.
        </p>
      </div>

      <div className="rounded-xl border bg-white px-5 py-4 shadow-sm">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          Last Updated
        </p>

        <p className="mt-1 font-semibold">
          July 31, 2026
        </p>
      </div>
    </div>
  );
}