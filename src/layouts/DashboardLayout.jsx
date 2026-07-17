import { Link } from "react-router-dom";
export default function DashboardLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h1 className="text-2xl font-bold">LoadFlow</h1>

        <nav className="mt-8 space-y-3">
  <Link
    to="/broker"
    className="block cursor-pointer hover:text-blue-300"
  >
    Dashboard
  </Link>

  <Link
    to="/broker"
    className="block cursor-pointer hover:text-blue-300"
  >
    Loads
  </Link>

  <Link
    to="/carrier"
    className="block cursor-pointer hover:text-blue-300"
  >
    Carriers
  </Link>

  <Link
    to="/compliance"
    className="block cursor-pointer hover:text-blue-300"
  >
    Compliance
  </Link>

  <Link
    to="/shipper"
    className="block cursor-pointer hover:text-blue-300"
  >
    Analytics
  </Link>
</nav>
      </aside>

      {/* Main */}
      <main className="flex-1">
        <header className="bg-white shadow px-8 py-5">
          <h2 className="text-3xl font-bold">{title}</h2>
        </header>

        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}