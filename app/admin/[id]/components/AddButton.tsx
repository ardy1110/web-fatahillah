"use client";
import React from "react";
import { useState } from "react";
import { Store } from "@/lib/types";
import { Button } from "@/components/ui/button";
import AddProductModal from "./AddProduct";
import { ClipboardPlus } from "lucide-react";

function AddButton({ stores }: { stores: Store }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Button
        title="Tambah Menu"
        onClick={() => {
          setOpenModal(true);
        }}
        className="inline-flex m-4 p-2 px-4 bg-amber-600 hover:bg-amber-700 text-white text-md rounded cursor-pointer"
      >
        <ClipboardPlus />
        Tambah
      </Button>
      <AddProductModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        store={stores}
      />
    </div>
  );
}

export default AddButton;
