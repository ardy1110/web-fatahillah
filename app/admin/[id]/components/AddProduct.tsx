"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Categories, Store } from "@/lib/types";
import { addProduct } from "../../components/actions";
import SubmitButton from "../../components/SubmitButton";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CategoryActions } from "./CategoryActions";

export default function AddProductModal({
  open,
  onClose,
  store,
}: {
  open: boolean;
  onClose: () => void;
  store: Store;
}) {
  const [categories, setCategories] = useState<Categories[]>(
    store.categories || []
  );

  // setelah kategori ditambah
  const handleAddCategory = (newCategory: Categories) => {
    setCategories((prev) => [...prev, newCategory]);
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
          <Button
            variant="ghost"
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            <X size={20} />
          </Button>

          <h2 className="text-lg text-center font-semibold mb-4 text-gray-800">
            Tambah Produk
          </h2>

          <form
            action={async (formData) => {
              const result = await addProduct(formData);

              if (result.success) {
                toast.success(result.message);
                onClose();
              } else {
                toast.error(result.message);
              }
            }}
            className="space-y-4"
          >
            <input type="hidden" name="storeId" value={store.id} />

            {/* Nama Produk */}
            <div>
              <label className="block text-sm mb-1">Nama Produk</label>
              <input
                type="text"
                name="name"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            {/* Kategori */}
            <div>
              <label className="block text-sm mb-1">Kategori</label>
              <div className="flex items-center gap-2">
                <select
                  name="categoryId"
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
                >
                  <option value="">Pilih kategori</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <CategoryActions onAddCategory={handleAddCategory}  storeId={store.id}/>
                
              </div>
            </div>

            {/* Harga */}
            <div>
              <label className="block text-sm mb-1">Harga</label>
              <input
                type="number"
                name="price"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <SubmitButton />
          </form>
        </div>
      </div>
    </>
  );
}
