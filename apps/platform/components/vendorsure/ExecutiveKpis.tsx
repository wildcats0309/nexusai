const stats = [
  {
    title: "Total Vendors",
    value: "126",
    trend: "+4 this month",
  },
  {
    title: "High Risk Vendors",
    value: "12",
    trend: "-2 this month",
  },
  {
    title: "Open CAPAs",
    value: "31",
    trend: "+6 this week",
  },
  {
    title: "Upcoming Reviews",
    value: "18",
    trend: "5 due today",
  },
];

export default function ExecutiveKpis() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl border bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-gray-500">
            {stat.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {stat.value}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {stat.trend}
          </p>
        </div>
      ))}
    </div>
  );
}