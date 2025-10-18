"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, PencilIcon, PlusCircle } from "lucide-react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
import { Categories } from "@/lib/types";
import AddCategoryModal from "./AddCategory";

export function CategoryActions({
  storeId,
  onAddCategory,
}: {
  storeId: number;
  onAddCategory: (newCategory: Categories) => void;
}) {
  const [openAdd, setOpenAdd] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>Kategori</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setOpenAdd(true)}>
              Tambah Kategori
              <DropdownMenuShortcut>
                <PlusCircle />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Edit Kategori
              <DropdownMenuShortcut>
                <PencilIcon />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Hapus Kategori
              <DropdownMenuShortcut>
                <RiDeleteBin5Line />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <AddCategoryModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onAdd={onAddCategory}
        storeId={storeId}
      />
    </>
  );
}
