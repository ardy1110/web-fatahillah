"use client";

import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import React, { useState } from "react";
import EditProductModal from "./EditProductModal";
import { Store } from "@/lib/types";

const EditButton = ({ store }: { store: Store }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpenModal(true)}
        className="hover:bg-amber-100 text-amber-600 cursor-pointer"
      >
        <Edit2Icon size={18} />
      </Button>
      <EditProductModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        store={store}
      />
    </>
  );
};

export default EditButton;
