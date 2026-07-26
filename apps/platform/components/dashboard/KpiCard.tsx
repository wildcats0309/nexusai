import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function KpiCard({
  title,
  value,
  icon: Icon,
}: KpiCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-lg bg-slate-100 p-3">
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
