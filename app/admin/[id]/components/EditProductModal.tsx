"use client";

import { Button } from "@/components/ui/button";
import { Categories, Product, Store } from "@/lib/types";
import { PlusCircle, Upload, X } from "lucide-react";
import React, { useState } from "react";
import SubmitButton from "../../components/SubmitButton";
import { editProduct } from "../../components/actions";
import { toast } from "sonner";
import AddCategoryModal from "./AddCategory";
import Image from "next/image";

const EditProductModal = ({
  open,
  onClose,
  store,
  categories,
  product,
}: {
  open: boolean;
  onClose: () => void;
  store: Store;
  categories: Categories[];
  product: Product;
}) => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [category, setCategories] = useState<Categories[]>(
    store.categories || []
  );
  const storeId = categories[0]?.storeId;
  const id = product.id;

  const handleAddCategory = (newCategory: Categories) => {
    setCategories((prev) => [...prev, newCategory]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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
              />
            </div>

            {/* Kategori */}
            <div>
              <label className="block text-sm mb-1">Kategori</label>
              <div className="flex items-center gap-2">
                <select
                  name="categoryId"
                  defaultValue={product.categoryId || 0}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
                >
                  <option value="">Pilih kategori</option>
                  {category.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>

                <Button
                  type="button"
                  onClick={() => setOpenCategoryModal(true)}
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
              />
            </div>

            {/* Image Upload */}
            <div>
              <label
                htmlFor="edit-category-image"
                className="block text-sm font-medium mb-2"
              >
                Gambar Menu
              </label>

              {/* Preview Image */}
              {previewImage && (
                <div className="mb-3 relative w-32 h-32 mx-auto">
                  <Image
                    src={previewImage}
                    width={200}
                    height={200}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg border-2 border-gray-200"
                  />
                </div>
              )}

              {/* Upload Button */}
              <div className="relative">
                <input
                  id="edit-category-image"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="edit-category-image"
                  className="flex items-center justify-center gap-2 w-full border-2 border-dashed rounded-md p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <Upload size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {previewImage ? "Ganti Gambar" : "Upload Gambar"}
                  </span>
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Format: JPG, PNG, GIF (Maks. 5MB)
              </p>
            </div>

            <SubmitButton />
          </form>
        </div>
      </div>
      <AddCategoryModal
        open={openCategoryModal}
        onClose={() => setOpenCategoryModal(false)}
        onAdd={handleAddCategory}
        storeId={store.id}
      />
    </>
  );
};

export default EditProductModal;
