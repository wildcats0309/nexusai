import { Vendor } from "@/lib/types/vendor";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

type Props = {
  vendor: Vendor;
};

export default function CapaCard({
  vendor,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Corrective & Preventive Actions (CAPAs)
        </CardTitle>
      </CardHeader>

      <CardContent>
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

                <p className="mt-3 text-muted-foreground">
                  Priority: {capa.priority}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No CAPAs available.
          </p>
        )}
      </CardContent>
    </Card>
  );
}