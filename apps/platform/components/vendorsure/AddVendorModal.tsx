"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (newVendor: {
  id: number;
  name: string;
  customer: string;
  category: string;
  risk: string;
  status: string;
  lastReview: string;
}) => void;
};

export default function AddVendorModal({
  open,
  onClose,
  onSave,
}: Props) {
  const [name, setName] = useState("");
  const [customer, setCustomer] = useState("");
  const [category, setCategory] = useState("");
  const [risk, setRisk] = useState("Low");
  const [status, setStatus] = useState("Approved");


const handleSave = () => {
  const newVendor = {
    id: Date.now(),
    name,
    customer,
    category,
    risk,
    status,
    lastReview: "Today",
  };

  onSave(newVendor);
onClose();
};
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow-xl">
        <h2 className="text-2xl font-bold">
          Add Vendor
        </h2>

        <p className="mt-2 text-gray-500">
          Register a new supplier.
        </p>

        <div className="mt-8 space-y-4">
          <input
            placeholder="Company Name"
            className="w-full rounded-lg border p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Customer"
            className="w-full rounded-lg border p-3"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />

          <input
            placeholder="Category"
            className="w-full rounded-lg border p-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <select
            className="w-full rounded-lg border p-3"
            value={risk}
            onChange={(e) => setRisk(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select
            className="w-full rounded-lg border p-3"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Approved</option>
            <option>Pending</option>
            <option>Review</option>
          </select>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2"
          >
            Cancel
          </button>

          <button
  onClick={handleSave}
  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
            Save Vendor
          </button>
        </div>
      </div>
    </div>
  );
}