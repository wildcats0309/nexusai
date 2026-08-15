
type Tab =
  | "overview"
  | "documents"
  | "requirements"
  | "capas"
  | "activity"
  | "evidence";

type Props = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
};

export default function VendorTabs({
  activeTab,
  onTabChange,
}: Props) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "documents", label: "Documents" },
    { id: "requirements", label: "Requirements" },
    { id: "capas", label: "CAPAs" },
    { id: "activity", label: "Activity" },
    { id: "evidence", label: "Evidence" },
  ] as const;

  return (
  <div className="border-b">
    <nav className="flex gap-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`border-b-2 px-1 py-3 text-sm font-medium transition ${
            activeTab === tab.id
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  </div>
);
}