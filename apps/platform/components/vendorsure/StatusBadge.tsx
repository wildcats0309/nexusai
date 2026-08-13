type Props = {
  status: string;
};

export default function StatusBadge({
  status,
}: Props) {
  let classes =
    "rounded-full px-3 py-1 text-sm font-medium";

  switch (status) {
    case "Approved":
    case "Ready":
    case "Uploaded":
    case "Low":
      classes +=
        " bg-green-100 text-green-700";
      break;

    case "Needs Review":
    case "Medium":
    case "Pending":
      classes +=
        " bg-yellow-100 text-yellow-700";
      break;

    case "High":
    case "High Risk":
    case "Missing":
    case "Not Ready":
    case "Expired":
      classes +=
        " bg-red-100 text-red-700";
      break;

    default:
      classes +=
        " bg-gray-100 text-gray-700";
  }

  return (
    <span className={classes}>
      {status}
    </span>
  );
}