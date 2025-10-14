'use client'
import { Button } from "@/components/ui/button";
import { Store } from "@/lib/types";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import AddStore from "./AddStore";

const AddButton = ({ stores }: { stores: Store }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpenModal(true)}
        title="Tambah Toko Baru"
        className="p-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 cursor-pointer"
      >
        <PlusCircle size={18} />
      </Button>
      <AddStore
        open={openModal}
        onClose={() => setOpenModal(false)}
        stores={stores}
      />
    </div>
  );
};

export default AddButton;
