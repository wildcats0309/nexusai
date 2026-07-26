"use client";

import KpiCard from "./KpiCard";
import ProductCard from "./ProductCard";
import {
  FolderKanban,
  Bell,
  Brain,
  CheckCircle2,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Welcome */}
      <div>
        <h1 className="text-4xl font-bold">
          Welcome back, Sevan
        </h1>

        <p className="mt-2 text-slate-500">
          Enterprise AI Platform
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Open Tasks"
          value="18"
          icon={CheckCircle2}
        />

        <KpiCard
          title="Projects"
          value="7"
          icon={FolderKanban}
        />

        <KpiCard
          title="AI Jobs"
          value="5"
          icon={Brain}
        />

        <KpiCard
          title="Notifications"
          value="3"
          icon={Bell}
        />
      </div>

      {/* Products */}
      <div>
        <h2 className="mb-6 text-2xl font-semibold">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ProductCard
            title="VendorSure"
            description="Supplier Qualification Platform"
            href="/vendorsure"
          />

          <ProductCard
            title="DiligenceOS"
            description="Investment Due Diligence Platform"
            href="/diligenceos"
          />

          <ProductCard
            title="OGC"
            description="Outside General Counsel"
            href="/ogc"
          />

          <ProductCard
            title="Validation Platform"
            description="Computer System Validation"
            href="/validation-platform"
          />
        </div>
      </div>
    </div>
  );
}