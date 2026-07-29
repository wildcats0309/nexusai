export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          VendorSure
        </h1>

        <p className="text-gray-500 mt-1">
          Supplier Risk & Qualification
        </p>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors">
        + Add Vendor
      </button>
    </div>
  );
}