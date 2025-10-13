"use client";

import { Categories, Product } from "@/lib/types";
import { PlusCircle, X } from "lucide-react";
import React, { useState } from "react";

const EditProductModal = ({
  open,
  onClose,
  categories,
  product,
}: {
  open: boolean;
  onClose: () => void;
  categories: Categories[];
  product: Product;
}) => {
  // Ambil default category ID dari produk yang sedang diedit
  const [categoryId, setCategoryId] = useState<number>(product.categoryId);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(String(product.price));

  // Ambil storeId dari kategori pertama (anggap semua kategori dari store yang sama)
  const storeId = categories[0]?.storeId;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!categoryId) {
      alert("Pilih kategori terlebih dahulu");
      return;
    }

    const res = await fetch(`/api/product/${storeId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price: Number(price),
        categoryId,
        storeId,
      }),
    });

    if (res.ok) {
      alert("Produk berhasil diperbarui!");
      onClose();
    } else {
      alert("Gagal memperbarui produk");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-96 p-6 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <X size={20} />
        </button>

        <h2 className="text-lg text-center font-semibold mb-4 text-gray-800">
          Edit Produk
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nama Produk */}
          <div>
            <label className="block text-sm mb-1">Nama Produk</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
              required
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-sm mb-1">Kategori</label>
            <div className="flex items-center gap-2">
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(Number(e.target.value))}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
                required
              >
                <option value="">Pilih kategori</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="p-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
                title="Tambah kategori baru"
              >
                <PlusCircle size={18} />
              </button>
            </div>
          </div>

          {/* Harga */}
          <div>
            <label className="block text-sm mb-1">Harga</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
