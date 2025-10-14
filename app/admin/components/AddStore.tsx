import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddStore = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [name, setName] = useState("");
  const router = useRouter()

  const handleAddStore = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/store", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    });
    if (res.ok) {
      alert("Produk berhasil ditambahkan!");
      setName("");
      onClose();
      router.refresh()
    } else {
      alert("Gagal menambah produk");
    }
  };
  if (!open) return null;
  
  return (
      
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
  
  );
};

export default AddStore;
