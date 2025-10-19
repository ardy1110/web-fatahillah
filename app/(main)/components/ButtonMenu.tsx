"use client";

import { NotebookPen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ButtonMenu = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link
      href="/menu"
      onClick={() => setIsLoading(true)}
      className={`flex items-center gap-2 px-6 py-1 rounded-sm bg-amber-600 hover:bg-amber-700 text-white text-lg transition cursor-pointer ${
        isLoading ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <NotebookPen size={20} className={isLoading ? "animate-pulse" : ""} />
      {isLoading ? "Loading..." : "Menu"}
    </Link>
  );
};

export default ButtonMenu;
