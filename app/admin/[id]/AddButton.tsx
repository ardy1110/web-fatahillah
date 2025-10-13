"use client";
import React from "react";
import { useState } from "react";
import AddProductModal from "./AddProduct";
import { Store } from "@/lib/types";
import { Button } from "@/components/ui/button";

function AddButton({ stores }: { stores: Store }) {
  const [openModal, setOpenModal] = useState(false);
  // const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);

  return (
    <div>
      <Button
        onClick={() => {
          // setSelectedStoreId(stores[0].id);
          setOpenModal(true);
        }}
        className="inline-block m-4 p-2 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded cursor-pointer"
      >
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
