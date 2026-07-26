import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <main className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        
        <Header />

        <section className="p-10">
          <h1 className="text-4xl font-bold">
            Welcome to NexusAI
          </h1>

          <p className="text-slate-500 mt-2">
            Enterprise AI Platform
          </p>
        </section>
      </div>
    </main>
  );
}
