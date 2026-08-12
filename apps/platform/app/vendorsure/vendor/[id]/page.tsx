import Link from "next/link";

import { vendors } from "@/lib/mock-data/vendors";
import VendorWorkspace from "@/components/vendorsure/VendorWorkspace";



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
    <div className="mx-auto max-w-7xl space-y-8 p-8">
      <Link
       href="/vendorsure"
       className="text-blue-600 hover:underline"
>
  ← Back to Vendor Management
</Link>


      <VendorWorkspace vendor={vendor} />

    </div>
  );
}