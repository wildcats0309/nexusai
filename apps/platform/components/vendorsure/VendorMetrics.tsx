type Props = {
  riskScore: number;
  documents: number;
  openCapas: number;
  nextReview: string;
};

export default function VendorMetrics({
  riskScore,
  documents,
  openCapas,
  nextReview,
}: Props) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Overall Risk</p>
        <h2 className="mt-2 text-3xl font-bold">{riskScore}</h2>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Documents</p>
        <h2 className="mt-2 text-3xl font-bold">{documents}</h2>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Open CAPAs</p>
        <h2 className="mt-2 text-3xl font-bold">{openCapas}</h2>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Next Review</p>
        <h2 className="mt-2 text-xl font-bold">{nextReview}</h2>
      </div>
    </div>
  );
}