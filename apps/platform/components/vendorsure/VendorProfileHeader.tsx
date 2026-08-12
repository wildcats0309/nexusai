import { Vendor } from "@/lib/types/vendor";
import { Button } from "@/components/ui/button";
import { Pencil, FileDown, Play } from "lucide-react";

type Props = {
  vendor: Vendor;
  onRunAssessment: () => void;
};

export default function VendorProfileHeader({
  vendor,
  onRunAssessment,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {vendor.name}
          </h1>

          <p className="mt-2 text-lg text-muted-foreground">
            {vendor.category}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
              {vendor.status}
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              {vendor.risk} Risk
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="outline">
            <Pencil className="mr-2 h-4 w-4" />
            Edit Vendor
          </Button>

          <Button variant="outline">
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>

          <Button onClick={onRunAssessment}>
  <Play className="mr-2 h-4 w-4" />
  Run Assessment
</Button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 border-t pt-6 md:grid-cols-3">
        <div>
          <p className="text-sm text-muted-foreground">
            Customer
          </p>

          <p className="font-semibold">
            {vendor.customer}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Last Review
          </p>

          <p className="font-semibold">
            {vendor.lastReview}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Next Review
          </p>

          <p className="font-semibold">
            Jan 1, 2027
          </p>
        </div>
      </div>
    </div>
  );
}