"use client"

import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 cursor-pointer"
    >
      {pending ? "Menyimpan..." : "Simpan"}
    </Button>
  );
};

export default SubmitButton;
