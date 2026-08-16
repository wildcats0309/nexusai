type Props = {
  health:
    | "Valid"
    | "Expiring Soon"
    | "Expired"
    | "Unknown";
};

export default function DocumentHealthBadge({
  health,
}: Props) {
  const styles = {
    Valid:
      "bg-green-100 text-green-800",

    "Expiring Soon":
      "bg-yellow-100 text-yellow-800",

    Expired:
      "bg-red-100 text-red-800",

    Unknown:
      "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${styles[health]}`}
    >
      {health}
    </span>
  );
}