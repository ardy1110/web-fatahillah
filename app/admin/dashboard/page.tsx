"use client";

import { useState } from "react";
import { Button } from "../../../components/button";
import { Card, CardContent } from "../../../components/card";
import { Plus, Store, Package } from "lucide-react";

export default function AdminPage() {
  const [section, setSection] = useState<"dashboard" | "toko" | "produk">(
    "dashboard"
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-600">Admin Panel</h1>
          <p className="text-sm text-gray-500">Warkop Fatihillah</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            className={`flex items-center gap-2 w-full px-3 py-2 rounded-md text-left ${
              section === "dashboard"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setSection("dashboard")}
          >
            📊 Dashboard
          </button>
          <button
            className={`flex items-center gap-2 w-full px-3 py-2 rounded-md text-left ${
              section === "toko"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setSection("toko")}
          >
            <Store size={18} /> Toko
          </button>
          <button
            className={`flex items-center gap-2 w-full px-3 py-2 rounded-md text-left ${
              section === "produk"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setSection("produk")}
          >
            <Package size={18} /> Produk
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {section === "dashboard" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">📊 Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <p className="text-gray-500">Total Produk</p>
                  <h3 className="text-2xl font-bold">120</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-gray-500">Total Toko</p>
                  <h3 className="text-2xl font-bold">3</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-gray-500">User Login</p>
                  <h3 className="text-2xl font-bold">Admin</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {section === "toko" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">🏪 Kelola Toko</h2>
              <Button className="flex items-center gap-2">
                <Plus size={16} /> Tambah Toko
              </Button>
            </div>
            {/* List toko nanti dari API */}
            <Card>
              <CardContent className="p-4">
                <p>Daftar toko akan tampil di sini...</p>
              </CardContent>
            </Card>
          </div>
        )}

        {section === "produk" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">📦 Kelola Produk</h2>
              <Button className="flex items-center gap-2">
                <Plus size={16} /> Tambah Produk
              </Button>
            </div>
            {/* List produk nanti dari API */}
            <Card>
              <CardContent className="p-4">
                <p>Daftar produk akan tampil di sini...</p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
