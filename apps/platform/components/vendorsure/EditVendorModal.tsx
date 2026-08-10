"use client";

import { useEffect, useState } from "react";

import VendorForm from "./VendorForm";
import type { Vendor } from "@/lib/types/vendor";

type Props = {
  open: boolean;
  selectedVendor: Vendor | null;
  onClose: () => void;
  onSave: (updatedVendor: {
    id: number;
    name: string;
    customer: string;
    category: string;
    risk: string;
    status: string;
    lastReview: string;
  }) => void;
};

export default function EditVendorModal({
  open,
  selectedVendor,
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

  useEffect(() => {
  if (selectedVendor) {
    setVendor({
      name: selectedVendor.name,
      customer: selectedVendor.customer,
      category: selectedVendor.category,
      risk: selectedVendor.risk,
      status: selectedVendor.status,
    });
  }
}, [selectedVendor]);

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

    const updatedVendor = {
      id: selectedVendor?.id ?? Date.now(),
      name: vendor.name,
      customer: vendor.customer,
      category: vendor.category,
      risk: vendor.risk,
      status: vendor.status,
      lastReview: today,
    };

    onSave(updatedVendor);

    resetForm();

    alert("Vendor updated successfully!");

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
        <h2 className="text-2xl font-bold">Edit Vendor</h2>

        <p className="mt-2 text-gray-500">
          Update supplier information.
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}