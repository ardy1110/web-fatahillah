"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Categories } from "@/lib/types";

export default function AddCategoryModal({
  open,
  onClose,
  onAdd,
  storeId,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (newCategory: Categories) => void;
  storeId: number;
}) {
  const [newCategory, setNewCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newCategory,
        storeId,
      }),
    });

    setLoading(false);

    if (res.ok) {
      const data = await res.json();
      onAdd(data); // kirim balik kategori baru ke parent modal
      setNewCategory("");
      onClose();
    } else {
      alert("Gagal menambah kategori");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-80 p-6 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Tambah Kategori
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nama Kategori</label>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 cursor-pointer"
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </form>
      </div>
    </div>
  );
}
