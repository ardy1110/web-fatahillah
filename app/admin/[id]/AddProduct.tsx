"use client";

import { useState, useEffect } from "react";
import { X, PlusCircle } from "lucide-react";
import AddCategoryModal from "./AddCategory";

interface Category {
  id: number;
  name: string;
}

export default function AddProductModal({
  open,
  onClose,
  storeId,
}: {
  open: boolean;
  onClose: () => void;
  storeId: number; // toko aktif
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState<number | "">("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  // ambil kategori dari toko
  useEffect(() => {
    if (!open || !storeId) return;

    const fetchCategories = async () => {
      const res = await fetch(`/api/category?storeId=${storeId}`);
      if (res.ok) {
        const data = await res.json();

        setCategories(data);
      }
    };

    fetchCategories();
  }, [open, storeId]);

  // submit produk
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price: Number(price),
        categoryId,
        storeId,
      }),
    });

    if (res.ok) {
      alert("Produk berhasil ditambahkan!");
      onClose();
    } else {
      alert("Gagal menambah produk");
    }
  };

  // handler ketika kategori baru ditambah
  const handleAddCategory = (newCategory: Category) => {
    setCategories((prev) => [...prev, newCategory]);
    setCategoryId(newCategory.id);
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl w-96 p-6 shadow-xl relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            <X size={20} />
          </button>

          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Tambah Produk
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                  onClick={() => setOpenCategoryModal(true)}
                  className="p-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
                  title="Tambah kategori baru"
                >
                  <PlusCircle size={18} />
                </button>
              </div>
            </div>

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

      {/* Modal Tambah Kategori */}
      <AddCategoryModal
        open={openCategoryModal}
        onClose={() => setOpenCategoryModal(false)}
        onAdd={handleAddCategory}
        storeId={storeId}
      />
    </>
  );
}
