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

export default function QualificationStatusCard({
  vendor,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Qualification Status</CardTitle>
      </CardHeader>

      <CardContent>
        <div>
          <p className="text-sm text-muted-foreground">
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
            {vendor.certifications?.length ? (
              vendor.certifications.map((cert) => (
                <li key={cert}>✓ {cert}</li>
              ))
            ) : (
              <li className="text-muted-foreground">
                No certifications
              </li>
            )}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold">
            Latest Assessment
          </h3>

          {vendor.assessments?.length ? (
            <div className="mt-3 rounded-lg bg-muted p-3">
              <p className="font-medium">
                {vendor.assessments[0].name}
              </p>

              <p className="text-sm text-muted-foreground">
                {vendor.assessments[0].status}
              </p>
            </div>
          ) : (
            <p className="mt-3 text-muted-foreground">
              No assessments available.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}