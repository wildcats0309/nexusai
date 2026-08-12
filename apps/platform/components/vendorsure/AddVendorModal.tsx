"use client";

import { useState } from "react";
import VendorForm from "./VendorForm";

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
  const [vendor, setVendor] = useState({
  name: "",
  customer: "",
  category: "",
  risk: "Low",
  status: "Approved",
});

  const resetForm = () => {
  setVendor({
    name: "",
    customer: "",
    category: "",
    risk: "Low",
    status: "Approved",
  });
};

  const handleSave = () => {
    if (!vendor.name.trim()) {
      alert("Company Name is required.");
      return;
    }

    const today = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const newVendor = {
  id: Date.now(),
  name: vendor.name,
  customer: vendor.customer,
  category: vendor.category,
  risk: vendor.risk,
  status: vendor.status,
  lastReview: today,
};

    onSave(newVendor);

    resetForm();

    alert("Vendor added successfully!");

    onClose();
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-xl">
        <h2 className="text-2xl font-bold">Add Vendor</h2>

        <p className="mt-2 text-gray-500">
          Register a new supplier.
        </p>

        <VendorForm
  vendor={vendor}
  setVendor={setVendor}
/>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={handleCancel}
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