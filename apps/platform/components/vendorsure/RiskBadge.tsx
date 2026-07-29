type RiskBadgeProps = {
  risk: string;
};

export default function RiskBadge({ risk }: RiskBadgeProps) {
  let color = "bg-green-100 text-green-800";

  if (risk === "High") {
    color = "bg-red-100 text-red-800";
  } else if (risk === "Medium") {
    color = "bg-yellow-100 text-yellow-800";
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${color}`}
    >
      {risk}
    </span>
  );
}