"use client";
import { X } from "lucide-react";
import { Categories, Store } from "@/lib/types";
import { addProduct } from "../../components/actions";
import SubmitButton from "../../components/SubmitButton";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";


export default function AddProductModal({
  open,
  onClose,
  store,
  categories = [], // Tambahkan categories ke props dengan default empty array
}: {
  open: boolean;
  onClose: () => void;
  store: Store;
  categories?: Categories[]; // Tambahkan type untuk categories
}) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-200"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className="bg-white rounded-2xl w-96 p-6 shadow-xl relative text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            variant="ghost"
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
            aria-label="Tutup modal"
          >
            <X size={20} />
          </Button>
          <h2
            id="modal-title"
            className="text-lg text-center font-semibold mb-4 text-gray-800"
          >
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
              <label htmlFor="product-name" className="block text-sm mb-1">
                Nama Produk
              </label>
              <input
                id="product-name"
                type="text"
                name="name"
                required
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
                placeholder="Masukkan nama produk"
              />
            </div>
            
            {/* Kategori */}
            <div>
              <label htmlFor="product-category" className="block text-sm mb-1">
                Kategori
              </label>
              <select
                id="product-category"
                name="categoryId"
                required
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
              >
                <option value="">Pilih kategori</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Harga */}
            <div>
              <label htmlFor="product-price" className="block text-sm mb-1">
                Harga
              </label>
              <input
                id="product-price"
                type="number"
                name="price"
                required
                min="0"
                step="1"
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
                placeholder="Masukkan harga"
              />
            </div>
            
            <SubmitButton />
          </form>
        </div>
      </div>
    </>
  );
}