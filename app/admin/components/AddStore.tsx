"use client";

import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import SubmitButton from "./SubmitButton";
import { addStore } from "./actions";
import Image from "next/image";

const AddStore = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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

  const handleClose = () => {
    setPreviewImage(null);
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl w-80 p-6 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          onClick={handleClose}
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
              handleClose();
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
  );
};

export default AddStore;
