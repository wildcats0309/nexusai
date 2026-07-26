export default function Header() {
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-8">
      <div>
        <h2 className="text-2xl font-semibold">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <input
          className="border rounded-lg px-4 py-2 w-72"
          placeholder="Search..."
        />

        <div className="h-10 w-10 rounded-full bg-slate-800 text-white flex items-center justify-center">
          S
        </div>
      </div>
    </header>
  );
}
