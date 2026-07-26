export default function Sidebar() {
  const items = [
    "Dashboard",
    "Products",
    "AI Assistant",
    "Reports",
    "Settings",
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">NexusAI</h1>
        <p className="text-sm text-slate-400 mt-1">
          Enterprise Platform
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {items.map((item) => (
          <button
            key={item}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}

