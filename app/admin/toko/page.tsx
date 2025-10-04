"use client";
import Link from "next/link";
import { LayoutDashboard, Store, Package, LogOut } from "lucide-react";

export default function TokoPage() {
  const dataToko = [
    {
      id: 1,
      name: "Warkop Fatahillah",
      kategori: "Minuman & Makanan",
    },
    {
      id: 2,
      name: "Fatahillah Snack",
      kategori: "Snack Ringan",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
        </div>

        <nav className="flex-1 px-4 py-4">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 p-3 rounded-md mb-2 text-gray-700 hover:bg-gray-100"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link
            href="/admin/toko"
            className="flex items-center gap-3 p-3 rounded-md mb-2 bg-blue-600 text-white"
          >
            <Store size={20} />
            Toko
          </Link>
        </nav>

        <div className="p-4 border-t">
          <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Daftar Toko</h1>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-3 font-medium text-gray-600">Nama Toko</th>
                <th className="text-left p-3 font-medium text-gray-600">Kategori</th>
              </tr>
            </thead>
            <tbody>
              {dataToko.map((toko) => (
                <tr key={toko.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{toko.name}</td>
                  <td className="p-3 text-gray-600">{toko.kategori}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
