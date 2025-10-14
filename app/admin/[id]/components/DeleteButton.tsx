'use client'
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const DeleteButton = async ({ product}: { product: Product}) => {
    const handelDelete = async ()=>{
        const confirmed = window.confirm(`Yakin mau hapus produk "${product.name}"?`);
    if (!confirmed) return;
        const res = await fetch(`/api/product/${product.id}`, {
        method: "DELETE",
    })
    if(res.ok){
        alert('product berhasil dihapus')
    }

    }
    
  return (
    <div>
      <Button
      onClick={handelDelete}
        variant="ghost"
        size="icon"
        className="hover:bg-red-100 text-red-600 cursor-pointer"
      >     
        <RiDeleteBin5Line size={18} />
      </Button>
    </div>
  );
};

export default DeleteButton;
