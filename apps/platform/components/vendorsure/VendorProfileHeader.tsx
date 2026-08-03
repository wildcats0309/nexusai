import { Vendor } from "@/lib/types/vendor";

type Props = {
  vendor: Vendor;
};

export default function VendorProfileHeader({
  vendor,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold">
        {vendor.name}
      </h1>

      <p className="mt-2 text-lg text-gray-500">
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

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">
            Customer
          </p>

          <p className="font-semibold">
            {vendor.customer}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Last Review
          </p>

          <p className="font-semibold">
            {vendor.lastReview}
          </p>
        </div>
      </div>
    </div>
  );
}