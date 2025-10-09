import React from "react";
import NavButton from "./NavButton";
import { LogOut } from "lucide-react";

const SidebarAdmin = () => {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
      </div>

      <NavButton />

      <div className="p-4 border-t">
        <button className="flex items-center gap-2 text-red-500 hover:text-red-800 cursor-pointer">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
