import { BookOpen } from "lucide-react";
import React from "react";

const ButtonMenu = () => {
  return (
    <button className="flex items-center gap-2 px-6 py-2 rounded-xl bg-[tomato] text-white text-xl cursor-pointer">
      <BookOpen />
      Menu
    </button>
  );
};

export default ButtonMenu;
