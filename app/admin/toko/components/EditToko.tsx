"use client";

import { PencilIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Toko = {
  id: number;
  name: string;
  categories: string;
};

enum Categories {
  Minuman = "Minuman",
  Makanan = "Makanan",
  Snack = "Snack",
}

type Props = {
  toko: Toko; // toko yang akan diedit
};

const EditToko = ({ toko }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(toko.name);
  const [category, setCategory] = useState<Categories | "">(toko.categories as Categories);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // fungsi untuk simpan data
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/toko/${toko.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, categories: category }),
      });

      if (!res.ok) throw new Error("Gagal menyimpan data toko");

      alert("Toko berhasil diperbarui!");
      setIsOpen(false);
      router.refresh(); // refresh data halaman
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat menyimpan toko.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PencilIcon onClick={() => setIsOpen(true)} className="cursor-pointer" size={20} />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-800">Edit Toko</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-3xl font-light cursor-pointer"
                aria-label="Tutup"
              >
                &times;
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Toko
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="categories"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pilih Kategori
                </label>
                <select
                  id="categories"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Categories)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                >
                  <option value="">-- Pilih Kategori --</option>
                  {Object.values(Categories).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 block w-full bg-amber-600 rounded-md p-2 text-white hover:bg-amber-700 transition"
              >
                {loading ? "Menyimpan..." : "Simpan"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditToko;
