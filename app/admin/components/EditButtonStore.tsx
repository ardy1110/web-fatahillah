"use client";

import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import { useState } from "react";
import { Store } from "@/lib/types";
import EditStore from "./EditStore";

const EditButtonStore = ({
  store,
  isActive,
}: {
  store: Store;
  isActive: boolean;
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpenModal(true)}
        className={`${
          isActive
            ? "text-white hover:bg-amber-700"
            : "text-amber-600 hover:bg-amber-50"
        } cursor-pointer`}
      >
        <Edit2Icon size={16} />
      </Button>
      <EditStore
        store={store}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default EditButtonStore;
