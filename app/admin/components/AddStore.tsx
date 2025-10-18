"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import SubmitButton from "./SubmitButton";
import { addStore } from "./actions";

const AddStore = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [fileName, setFileName] = useState("Belum ada file dipilih");

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
        <Button
          variant="ghost"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <X size={20} />
        </Button>

        <h2 className="text-lg text-center font-semibold mb-4 text-gray-800">
          Tambah Toko
        </h2>

        <form
          action={async (formData) => {
            const result = await addStore(formData);

            if (result.success) {
              toast.success(result.message);
              onClose();
            } else {
              toast.error(result.message);
            }
          }}
          className="space-y-4"
        >
          {/* Nama Toko */}
          <div>
            <label className="block text-sm mb-1">Nama Toko</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
              required
            />
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block text-sm mb-1">Deskripsi</label>
            <input
              type="text"
              name="description"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          {/* Gambar Toko - Custom Upload */}
          <div className="text-sm">
            <label className="block text-sm mb-1">Gambar Toko</label>

            {/* Tombol upload custom */}
            <label
              htmlFor="image"
              className="block text-center bg-amber-600 text-white py-2 rounded-md cursor-pointer hover:bg-amber-700 transition"
            >
              Pilih Gambar
            </label>

            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                setFileName(e.target.files?.[0]?.name || "Belum ada file dipilih")
              }
            />

            {/* Teks nama file */}
            <p className="mt-1 text-xs text-gray-600 italic truncate">
              {fileName}
            </p>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default AddStore;
