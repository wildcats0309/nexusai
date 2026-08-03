import { Vendor } from "@/lib/types/vendor";

type Props = {
  vendor: Vendor;
};

export default function QualificationStatusCard({
  vendor,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Qualification Status
      </h2>

      <div className="mt-6">
        <p className="text-sm text-gray-500">
          Overall Risk Score
        </p>

        <p className="mt-1 text-3xl font-bold">
          {vendor.overallRiskScore ?? "N/A"}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold">
          Certifications
        </h3>

        <ul className="mt-3 space-y-2">
          {vendor.certifications?.map((cert) => (
            <li key={cert}>
              ✓ {cert}
            </li>
          )) ?? (
            <li>No certifications</li>
          )}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold">
          Latest Assessment
        </h3>

        {vendor.assessments?.length ? (
          <div className="mt-3 rounded-lg bg-gray-50 p-3">
            <p className="font-medium">
              {vendor.assessments[0].name}
            </p>

            <p className="text-sm text-gray-500">
              {vendor.assessments[0].status}
            </p>
          </div>
        ) : (
          <p className="mt-3 text-gray-500">
            No assessments available.
          </p>
        )}
      </div>
    </div>
  );
}