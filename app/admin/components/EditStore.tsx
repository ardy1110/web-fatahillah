import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";
import SubmitButton from "./SubmitButton";
import { editStore } from "./actions";
import { toast } from "sonner";
import { Store } from "@/lib/types";

const EditStore = ({
  store,
  open,
  onClose,
}: {
  store: Store;
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-gray-800 rounded-2xl w-80 p-6 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <X size={20} />
        </Button>

        <h2 className="text-lg text-center font-semibold mb-4 ">Edit Toko</h2>

        <form
          action={async (formData) => {
            const result = await editStore(store.id, formData);

            if (result.success) {
              toast.success(result.message);

              onClose();
            } else {
              toast.error(result.message);
            }
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Nama Toko</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Deskripsi</label>
            <input
              type="text"
              name="description"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default EditStore;
