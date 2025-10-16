"use client";

import { Button } from "@/components/ui/button";
import { Store } from "@/lib/types";
import React, { useState, useTransition } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteToko } from "./actions";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const DeleteButtonStore = ({
  store,
  isActive,
}: {
  store: Store;
  isActive: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        const res = await deleteToko(store.id);

        if (res?.success === false) {
          toast.error(res.message || "Gagal menghapus toko");
        } else {
          toast.success(`Toko "${store.name}" berhasil dihapus`);
        }

        setOpen(false);
      } catch (error) {
        console.error(error);
        toast.error("Terjadi kesalahan tak terduga");
      }
    });
  };

  return (
    <>
      <Button
        title="Hapus Toko"
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className={`${
          isActive
            ? "text-white hover:bg-amber-700"
            : "text-red-600 hover:bg-red-50"
        } cursor-pointer`}
      >
        <RiDeleteBin5Line size={16} />
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
              Hapus Toko?
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
    </>
  );
};

export default DeleteButtonStore;
