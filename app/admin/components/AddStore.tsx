import { Button } from "@/components/ui/button";
import { Store } from "@/lib/types";
import { X } from "lucide-react";
import React, { useState } from "react";

const AddStore = ({
  open,
  onClose,
  stores,
}: {
  open: boolean;
  onClose: () => void;
  stores: Store;
}) => {
  const [name, setName] = useState("");
  const handleAddStore = async () => {
    const res = await fetch("/api/store", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    });
  };
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
            Tambah Toko
          </h2>

          <form onSubmit={handleAddStore} className="space-y-4">
            {/* Nama Produk */}
            <div>
              <label className="block text-sm mb-1">Nama Toko</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
    </>
  );
};

export default AddStore;
