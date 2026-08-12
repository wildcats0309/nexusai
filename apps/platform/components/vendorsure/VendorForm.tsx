type Props = {
  vendor: {
    name: string;
    customer: string;
    category: string;
    risk: string;
    status: string;
  };
  setVendor: React.Dispatch<
    React.SetStateAction<{
      name: string;
      customer: string;
      category: string;
      risk: string;
      status: string;
    }>
  >;
};

export default function VendorForm({
  vendor,
  setVendor,
}: Props) {
  return (
    <div className="mt-8 space-y-4">
      <input
        placeholder="Company Name"
        className="w-full rounded-lg border p-3"
        value={vendor.name}
        onChange={(e) =>
          setVendor({
            ...vendor,
            name: e.target.value,
          })
        }
      />

      <input
        placeholder="Customer"
        className="w-full rounded-lg border p-3"
        value={vendor.customer}
        onChange={(e) =>
          setVendor({
            ...vendor,
            customer: e.target.value,
          })
        }
      />

      <input
        placeholder="Category"
        className="w-full rounded-lg border p-3"
        value={vendor.category}
        onChange={(e) =>
          setVendor({
            ...vendor,
            category: e.target.value,
          })
        }
      />

      <select
        className="w-full rounded-lg border p-3"
        value={vendor.risk}
        onChange={(e) =>
          setVendor({
            ...vendor,
            risk: e.target.value,
          })
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select
        className="w-full rounded-lg border p-3"
        value={vendor.status}
        onChange={(e) =>
          setVendor({
            ...vendor,
            status: e.target.value,
          })
        }
      >
        <option>Approved</option>
        <option>Pending</option>
        <option>Review</option>
      </select>
    </div>
  );
}