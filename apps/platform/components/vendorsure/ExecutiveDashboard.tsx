import ExecutiveHeader from "./ExecutiveHeader";
import ExecutiveKpis from "./ExecutiveKpis";

export default function ExecutiveDashboard() {
  return (
    <div className="space-y-8">
      <ExecutiveHeader />

      <ExecutiveKpis />
    </div>
  );
}