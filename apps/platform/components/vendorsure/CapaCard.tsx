import { Vendor } from "@/lib/types/vendor";

type Props = {
  vendor: Vendor;
};

export default function CapaCard({
  vendor,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Corrective & Preventive Actions (CAPAs)
      </h2>

      <div className="mt-6">
        {vendor.capas?.length ? (
          <div className="space-y-4">
            {vendor.capas.map((capa) => (
              <div
                key={capa.id}
                className="rounded-lg border p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold">
                    {capa.id}
                  </p>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    {capa.status}
                  </span>
                </div>

                <p className="mt-3 text-gray-600">
                  Priority: {capa.priority}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No CAPAs available.
          </p>
        )}
      </div>
    </div>
  );
}