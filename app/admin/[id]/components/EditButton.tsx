"use client";

import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import React, { useState } from "react";
import EditProductModal from "./EditProductModal";
import { Categories, Product } from "@/lib/types";

const EditButton = ({
  categories,
  product,
}: {
  categories: Categories[];
  product: Product;
}) => {
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
        categories={categories}
        product={product}
      />
    </>
  );
};

export default EditButton;
