'use client'
import React from "react";
import { useState } from "react";
import AddProductModal from "./AddProduct";

function AddButton() {
  const [openModal, setOpenModal] = useState(false);
    const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="inline-block m-4 p-2 px-4 bg-amber-600 rounded"
      >
        Tambah
      </button>
      <AddProductModal open={openModal} onClose={() => setOpenModal(false)} storeId={selectedStoreId || 0} />
    </div>
  );
}

export default AddButton;
