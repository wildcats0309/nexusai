import Link from "next/link";

import VendorProfileHeader from "@/components/vendorsure/VendorProfileHeader";
import { vendors } from "@/lib/mock-data/vendors";
import PrimaryContactCard from "@/components/vendorsure/PrimaryContactCard";
import QualificationStatusCard from "@/components/vendorsure/QualificationStatusCard";
import DocumentsCard from "@/components/vendorsure/DocumentsCard";
import RequirementsMatrixCard from "@/components/vendorsure/RequirementsMatrixCard";
import CapaCard from "@/components/vendorsure/CapaCard";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function VendorDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const vendor = vendors.find(
    (vendor) => vendor.id === Number(id)
  );

  if (!vendor) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">
          Vendor not found
        </h1>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8">
      <Link
        href="/vendorsure"
        className="text-blue-600 hover:underline"
      >
        ← Back to Vendor Management
      </Link>

      <VendorProfileHeader vendor={vendor} />

<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
  <PrimaryContactCard vendor={vendor} />

  <QualificationStatusCard vendor={vendor} />
</div>

<DocumentsCard vendor={vendor} />
<RequirementsMatrixCard />
<CapaCard vendor={vendor} />
    </div>
  );
}