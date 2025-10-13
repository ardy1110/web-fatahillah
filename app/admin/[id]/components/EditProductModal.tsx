"use client";

import { Store } from "@/lib/types";
import { PlusCircle, X } from "lucide-react";
import React from "react";

const EditProductModal = ({
  open,
  onClose,
  store, // 👈 hanya 1 store, bukan array
}: {
  open: boolean;
  onClose: () => void;
  store: Store;
}) => {
  console.log(store);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-200"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl w-96 p-6 shadow-xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            <X size={20} />
          </button>

          <h2 className="text-lg text-center font-semibold mb-4 text-gray-800">
            Edit Produk
          </h2>

          <form className="space-y-4">
            {/* Nama Produk */}
            <div>
              <label className="block text-sm mb-1">Nama Produk</label>
              <input
                type="text"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
                required
              />
            </div>

            {/* Kategori */}
            <div>
              <label className="block text-sm mb-1">Kategori</label>
              <div className="flex items-center gap-2">
                <select
                  //   value={categoryId}
                  //   onChange={(e) => setCategoryId(Number(e.target.value))}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
                  required
                >
                  <option>Pilih kategori</option>
                  {/* {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))} */}
                </select>
                <button
                  type="button"
                  //   onClick={() => setOpenCategoryModal(true)}
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
                // value={price}
                // onChange={(e) => setPrice(e.target.value)}
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
    </>
  );
};

export default EditProductModal;
