"use client";

import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import { useState } from "react";
import { Store } from "@/lib/types";
import EditStore from "./EditStore";

const EditButtonStore = ({ store }: { store: Store }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpenModal(true)} variant="ghost" size="icon">
        <Edit2Icon size={16} />
      </Button>
      <EditStore
        store={store}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default EditButtonStore;
