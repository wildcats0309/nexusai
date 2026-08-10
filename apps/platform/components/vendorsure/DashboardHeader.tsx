type Props = {
  onAddVendor: () => void;
};

export default function DashboardHeader({
  onAddVendor,
}: Props) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          VendorSure
        </h1>

        <p className="mt-1 text-gray-500">
          Supplier Risk & Qualification
        </p>
      </div>

      <button
        onClick={onAddVendor}
        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition-colors hover:bg-blue-700"
      >
        + Add Vendor
      </button>
    </div>
  );
}