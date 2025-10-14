"use client";

import { useState } from "react";
import { X, PlusCircle } from "lucide-react";
import { Categories, Store } from "@/lib/types";
import AddCategoryModal from "./AddCategory";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function AddProductModal({
  open,
  onClose,
  store,
}: {
  open: boolean;
  onClose: () => void;
  store: Store;
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState<number | "">("");
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [categories, setCategories] = useState<Categories[]>(
    store.categories || []
  );
  const router = useRouter()

  // submit produk
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryId) {
      alert("Pilih kategori terlebih dahulu");
      return;
    }

    const res = await fetch("/api/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price: Number(price),
        categoryId,
        storeId: store.id,
      }),
    });

    if (res.ok) {
      alert("Produk berhasil ditambahkan!");
      onClose();
      router.refresh()
    } else {
      alert("Gagal menambah produk");
    }
  };

  // handler ketika kategori baru ditambah
  const handleAddCategory = (newCategory: Categories) => {
    setCategories((prev) => [...prev, newCategory]);
    setCategoryId(newCategory.id);
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-200"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl w-96 p-6 shadow-xl relative text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            <X size={20} />
          </button>

          <h2 className="text-lg text-center font-semibold mb-4 text-gray-800">
            Tambah Produk
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
                  onClick={() => setOpenCategoryModal(true)}
                  title="Tambah kategori baru"
                  className="p-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 cursor-pointer"
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

            <Button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 cursor-pointer"
            >
              Simpan
            </Button>
          </form>
        </div>
      </div>

      {/* Modal Tambah Kategori */}
      <AddCategoryModal
        open={openCategoryModal}
        onClose={() => setOpenCategoryModal(false)}
        onAdd={handleAddCategory}
        storeId={store.id}
      />
    </>
  );
}
