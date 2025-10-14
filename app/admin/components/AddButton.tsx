"use client";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import AddStore from "./AddStore";

const AddButton = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpenModal(true)}
        title="Tambah Toko Baru"
        className="bg-amber-600 text-white rounded-md hover:bg-amber-700 cursor-pointer"
      >
        <PlusCircle />
      </Button>
      <AddStore open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default AddButton;
