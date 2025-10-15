"use client";

import { Button } from "@/components/ui/button";
import { Categories, Product } from "@/lib/types";
import { PlusCircle, X } from "lucide-react";
import React from "react";
import SubmitButton from "./SubmitButton";
import { editProduct } from "./actions";
import { toast } from "sonner";

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
  const storeId = categories[0]?.storeId;
  const id = product.id;

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-96 p-6 shadow-xl relative text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol close */}
        <Button
          variant="ghost"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <X size={20} />
        </Button>

        <h2 className="text-lg text-center font-semibold mb-4 text-gray-800">
          Edit Produk
        </h2>

        <form
          action={async (formData) => {
            const result = await editProduct(id, formData);

            if (result.success) {
              toast.success(result.message);
              onClose();
            } else {
              toast.error(result.message);
            }
          }}
          className="space-y-4"
        >
          <input type="hidden" name="storeId" value={storeId} />

          {/* Nama Produk */}
          <div>
            <label className="block text-sm mb-1">Nama Produk</label>
            <input
              type="text"
              name="name"
              defaultValue={product.name}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
              required
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-sm mb-1">Kategori</label>
            <div className="flex items-center gap-2">
              <select
                name="categoryId"
                defaultValue={product.categoryId}
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
              <Button
                type="button"
                // onClick={() => setOpenCategoryModal(true)}
                title="Tambah kategori baru"
                className="bg-amber-600 text-white rounded-md hover:bg-amber-700 cursor-pointer"
              >
                <PlusCircle size={18} />
              </Button>
            </div>
          </div>

          {/* Harga */}
          <div>
            <label className="block text-sm mb-1">Harga</label>
            <input
              type="number"
              name="price"
              defaultValue={product.price}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
              required
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
