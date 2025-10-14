"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import React, { useState, useTransition } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteProductAction } from "./actions";
import { Loader2 } from "lucide-react";

const DeleteButton = ({ product }: { product: Product }) => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      await deleteProductAction(product.storeId, product.id);
      setOpen(false);
    });
  };

  // const handelDelete = async () => {
  //   const confirmed = window.confirm(
  //     `Yakin mau hapus produk "${product.name}"?`
  //   );
  //   if (!confirmed) return;
  //   const res = await fetch(`/api/product/${product.id}`, {
  //     method: "DELETE",
  //   });
  //   if (res.ok) {
  //     alert("product berhasil dihapus");
  //   }
  // };

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="hover:bg-red-100 text-red-600 cursor-pointer"
      >
        <RiDeleteBin5Line size={18} />
      </Button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-80 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
              Hapus Produk?
            </h2>
            <p className="text-sm text-gray-600 text-center mb-6">
              Data yang dihapus tidak bisa dikembalikan.
            </p>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="w-[48%]"
              >
                Batal
              </Button>
              <Button
                variant="destructive"
                onClick={handleDelete}
                className="w-[48%]"
                disabled={isPending}
              >
                {isPending ? <Loader2 className="animate-spin" /> : "Hapus"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteButton;
