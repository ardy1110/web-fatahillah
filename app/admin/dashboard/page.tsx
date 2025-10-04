"use client";
import Link from "next/link";
import { LayoutDashboard, Store, Package, LogOut } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
        </div>

        <nav className="flex-1 px-4 py-4">
          <Link
            href="/admin"
            className="flex items-center gap-3 p-3 rounded-md mb-2 bg-blue-600 text-white"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/admin/toko"
            className="flex items-center gap-3 p-3 rounded-md mb-2 text-gray-700 hover:bg-gray-100"
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
        <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500 text-sm">Total Toko</h2>
            <p className="text-3xl font-bold mt-2">6</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500 text-sm">Total Produk</h2>
            <p className="text-3xl font-bold mt-2">24</p>
          </div>
        </div>
      </main>
    </div>
  );
}
