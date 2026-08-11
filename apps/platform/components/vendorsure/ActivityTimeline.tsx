type Activity = {
  date: string;
  title: string;
  description: string;
};

type Props = {
  activities: Activity[];
};

export default function ActivityTimeline({
  activities,
}: Props) {
  return (
    <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Activity Timeline
      </h2>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex gap-4"
          >
            <div className="mt-1 h-3 w-3 rounded-full bg-blue-600" />

            <div>
              <p className="text-sm text-gray-500">
                {activity.date}
              </p>

              <h3 className="font-medium">
                {activity.title}
              </h3>

              <p className="text-gray-600">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}