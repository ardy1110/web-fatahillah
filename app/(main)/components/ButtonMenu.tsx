import { BookOpen } from "lucide-react";
import Link from "next/link";

const ButtonMenu = () => {
  return (
    <Link
      href={"/menu"}
      className="flex items-center gap-2 px-6 py-2 rounded-sm bg-amber-500 hover:bg-amber-600 text-white text-xl cursor-pointer"
    >
      <BookOpen />
      Menu
    </Link>
  );
};

export default ButtonMenu;
