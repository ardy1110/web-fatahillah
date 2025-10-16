"use client";

import { Button } from "@/components/ui/button";
import { Store } from "@/lib/types";
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import DeleteStore from "./DeleteStore";

const DeleteButtonStore = ({
  store,
  isActive,
}: {
  store: Store;
  isActive: boolean;
}) => {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className={`${
          isActive
            ? "text-white hover:bg-amber-700"
            : "text-red-600 hover:bg-red-50"
        } cursor-pointer`}
      >
        <RiDeleteBin5Line size={16} />
      </Button>
      <DeleteStore store={store} />
    </>
  );
};

export default DeleteButtonStore;
