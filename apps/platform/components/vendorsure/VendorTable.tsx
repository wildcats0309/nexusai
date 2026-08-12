import Link from "next/link";
import RiskBadge from "./RiskBadge";
type VendorTableProps = {
  vendors: {
    id: number;
    name: string;
    customer: string;
    category: string;
    risk: string;
    status: string;
    lastReview: string;
  }[];

  onSort: (
    column:
      | "name"
      | "customer"
      | "category"
      | "risk"
      | "status"
      | "lastReview"
  ) => void;

  onEdit: (vendor: {
  id: number;
  name: string;
  customer: string;
  category: string;
  risk: string;
  status: string;
  lastReview: string;
}) => void;

  sortColumn:
    | "name"
    | "customer"
    | "category"
    | "risk"
    | "status"
    | "lastReview";

  sortDirection: "asc" | "desc";
};



export default function VendorTable({
  vendors,
  onEdit,
  onSort,
  sortColumn,
  sortDirection,
}: VendorTableProps) {
  if (vendors.length === 0) {
  return (
    <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
      <h3 className="text-lg font-semibold">No vendors found</h3>
      <p className="mt-2 text-gray-500">
        Try searching for another vendor, customer, or category.
      </p>
    </div>
  );
}
  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 p-6">
        <h2 className="text-xl font-semibold">Vendor List</h2>
      </div>

      <table className="min-w-full">
       <thead className="bg-gray-50">
  <tr>
    <th
      onClick={() => onSort("name")}
      className="cursor-pointer px-6 py-3 text-left text-sm font-semibold"
    >
      Vendor {sortColumn === "name" && (sortDirection === "asc" ? "▲" : "▼")}
    </th>

    <th
      onClick={() => onSort("customer")}
      className="cursor-pointer px-6 py-3 text-left text-sm font-semibold"
    >
      Customer {sortColumn === "customer" && (sortDirection === "asc" ? "▲" : "▼")}
    </th>

    <th
      onClick={() => onSort("category")}
      className="cursor-pointer px-6 py-3 text-left text-sm font-semibold"
    >
      Category {sortColumn === "category" && (sortDirection === "asc" ? "▲" : "▼")}
    </th>

    <th
      onClick={() => onSort("risk")}
      className="cursor-pointer px-6 py-3 text-left text-sm font-semibold"
    >
      Risk {sortColumn === "risk" && (sortDirection === "asc" ? "▲" : "▼")}
    </th>

    <th
      onClick={() => onSort("status")}
      className="cursor-pointer px-6 py-3 text-left text-sm font-semibold"
    >
      Status {sortColumn === "status" && (sortDirection === "asc" ? "▲" : "▼")}
    </th>

    <th
      onClick={() => onSort("lastReview")}
      className="cursor-pointer px-6 py-3 text-left text-sm font-semibold"
    >
      Last Review {sortColumn === "lastReview" && (sortDirection === "asc" ? "▲" : "▼")}
    </th>

<th className="px-6 py-3 text-left text-sm font-semibold">
  Actions
</th>

  </tr>
</thead>

        <tbody>
          {vendors.map((vendor) => (
            <tr
              key={vendor.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-6 py-4">
  <Link
    href={`/vendorsure/vendor/${vendor.id}`}
    className="font-medium text-blue-600 hover:underline"
  >
    {vendor.name}
  </Link>
</td>
              <td className="px-6 py-4">{vendor.customer}</td>
              <td className="px-6 py-4">{vendor.category}</td>
              <td className="px-6 py-4">
                <RiskBadge risk={vendor.risk} />
              </td>
              <td className="px-6 py-4">{vendor.status}</td>
              <td className="px-6 py-4">
  {vendor.lastReview}
</td>

<td className="px-6 py-4">
  <button
    onClick={() => onEdit(vendor)}
    className="text-blue-600 hover:text-blue-800"
  >
    ✏️ Edit
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}