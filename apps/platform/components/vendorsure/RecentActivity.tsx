const activities = [
  {
    title: "ABC Electronics approved",
    time: "15 minutes ago",
  },
  {
    title: "ISO 9001 certificate uploaded",
    time: "1 hour ago",
  },
  {
    title: "CAPA #184 closed",
    time: "Yesterday",
  },
  {
    title: "Supplier audit completed",
    time: "2 days ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Recent Activity
      </h2>

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

              <p className="text-sm text-gray-500">
                {activity.time}
              </p>
            </div>

            <div className="text-green-600 font-bold">
              ✓
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}