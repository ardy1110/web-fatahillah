import { NotebookPen } from "lucide-react";
import Link from "next/link";

const ButtonMenu = () => {
  return (
    <Link
      href={"/menu"}
      className="flex items-center gap-2 px-6 py-1 rounded-sm bg-amber-500 hover:bg-amber-600 text-white text-lg cursor-pointer"
    >
      <NotebookPen size={20} />
      Menu
    </Link>
  );
};

export default ButtonMenu;
