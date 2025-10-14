"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
          Memproses...
        </>
      ) : (
        "Login"
      )}
    </Button>
  );
};

export default SubmitButton;
