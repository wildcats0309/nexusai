"use client";

import { useState } from "react";

import DashboardHeader from "@/components/vendorsure/DashboardHeader";
import StatCard from "@/components/vendorsure/StatCard";
import VendorTable from "@/components/vendorsure/VendorTable";

import { dashboardStats } from "@/lib/mock-data/dashboard";
import { vendors } from "@/lib/mock-data/vendors";

  type SortColumn =
  | "name"
  | "customer"
  | "category"
  | "risk"
  | "status"
  | "lastReview";

export default function VendorSurePage() {
  // State
  const [search, setSearch] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const handleSort = (column: SortColumn) => {
  if (column === sortColumn) {
    setSortDirection(
      sortDirection === "asc" ? "desc" : "asc"
    );
  } else {
    setSortColumn(column);
    setSortDirection("asc");
  }
};
const [sortColumn, setSortColumn] = useState<SortColumn>("name");
const [sortDirection, setSortDirection] =
  useState<"asc" | "desc">("asc");


  // Configuration
  const vendorsPerPage = 10;

  // Filter vendors
  const filteredVendors = vendors.filter((vendor) => {
    const term = search.trim().toLowerCase();

    return (
      vendor.name.toLowerCase().includes(term) ||
      vendor.customer.toLowerCase().includes(term) ||
      vendor.category.toLowerCase().includes(term)
    );
  });

  const sortedVendors = [...filteredVendors].sort((a, b) => {
  const comparison = a[sortColumn].localeCompare(b[sortColumn]);

  return sortDirection === "asc"
    ? comparison
    : -comparison;
});

  // Pagination
  const startIndex = (currentPage - 1) * vendorsPerPage;
  const endIndex = startIndex + vendorsPerPage;

  const paginatedVendors = sortedVendors.slice(startIndex, endIndex);

  const totalPages = Math.ceil(
    filteredVendors.length / vendorsPerPage
  );

  // Navigation
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
console.log("sortColumn:", sortColumn);
console.log("sortDirection:", sortDirection);

  return (
    <div className="p-8">
      <DashboardHeader />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      <div className="mt-8">
        <input
          type="text"
          placeholder="Search vendors..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <VendorTable
  vendors={paginatedVendors}
  onSort={handleSort}
  sortColumn={sortColumn}
  sortDirection={sortDirection}
/>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}