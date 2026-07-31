import ExecutiveHeader from "./ExecutiveHeader";
import ExecutiveKpis from "./ExecutiveKpis";
import RiskOverview from "./RiskOverview";

export default function ExecutiveDashboard() {
  return (
    <div className="space-y-8">
      <ExecutiveHeader />

      <ExecutiveKpis />

      <RiskOverview />
    </div>
  );
}