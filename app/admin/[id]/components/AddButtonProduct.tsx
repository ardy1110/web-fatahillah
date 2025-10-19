"use client";
import { useState } from "react";
import { Categories, Store } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ClipboardPlus } from "lucide-react";
import AddProductModal from "./AddProduct";



interface AddButtonProductProps {
  stores: Store;
  categories: Categories[]; 
}

function AddButtonProduct({ stores, categories }: AddButtonProductProps) {
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
        <ClipboardPlus className="mr-2" />
        Tambah
      </Button>
      <AddProductModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        store={stores}
        categories={categories}
      />
    </div>
  );
}

export default AddButtonProduct;