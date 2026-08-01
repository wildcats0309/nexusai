export default function QuickActions() {
  const actions = [
    {
      title: "Add Vendor",
      description: "Register a new supplier",
    },
    {
      title: "Start Assessment",
      description: "Launch a vendor qualification",
    },
    {
      title: "Generate Report",
      description: "Create executive reports",
    },
    {
      title: "View Open CAPAs",
      description: "Review corrective actions",
    },
  ];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {actions.map((action) => (
          <button
            key={action.title}
            className="rounded-lg border p-5 text-left transition hover:border-blue-500 hover:bg-blue-50"
          >
            <h3 className="font-semibold">
              {action.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {action.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}