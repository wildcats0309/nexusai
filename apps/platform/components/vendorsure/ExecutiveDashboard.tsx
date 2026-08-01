import ExecutiveHeader from "./ExecutiveHeader";
import ExecutiveKpis from "./ExecutiveKpis";
import RiskOverview from "./RiskOverview";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";

export default function ExecutiveDashboard() {
  return (
    <div className="space-y-8">
      <ExecutiveHeader />

      <ExecutiveKpis />

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <RiskOverview />

        <RecentActivity />
      </div>

      <QuickActions />
    </div>
  );
}