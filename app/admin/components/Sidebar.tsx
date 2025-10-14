import React from "react";
import { LogOut } from "lucide-react";
import NavButton from "./NavButton";
import AddStore from "./AddStore";

const SidebarAdmin = async () => {
  const res = await fetch("http://localhost:3000/api/store");

  const stores = await res.json();

  return (
    <aside className="fixed top-0 left-0 w-64 h-dvh bg-white shadow-md flex flex-col">
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-bold text-amber-600">Admin Panel</h2>
        <AddStore/>
      </div>
      
      <NavButton stores={stores} />

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
