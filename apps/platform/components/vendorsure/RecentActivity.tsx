const activities = [
  {
    title: "ABC Electronics approved",
    time: "15 minutes ago",
    type: "Approval",
  },
  {
    title: "ISO 9001 certificate uploaded",
    time: "1 hour ago",
    type: "Document",
  },
  {
    title: "CAPA #184 closed",
    time: "Yesterday",
    type: "CAPA",
  },
  {
    title: "Supplier audit completed",
    time: "2 days ago",
    type: "Audit",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Recent Activity
        </h2>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="mt-6 space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex items-start justify-between border-b pb-4 last:border-0"
          >
            <div>
              <p className="font-medium">
                {activity.title}
              </p>

              <div className="mt-1 flex gap-2 text-sm text-gray-500">
                <span>{activity.time}</span>

                <span>•</span>

                <span>{activity.type}</span>
              </div>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
              ✓
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}