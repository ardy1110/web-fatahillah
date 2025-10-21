import React from "react";
import { LogOut } from "lucide-react";
import ListStores from "./NavButton";
import AddButtonStore from "./AddButtonStore";
import { getStore } from "./actions";
import Link from "next/link";

const SidebarAdmin = async () => {
  const res = await getStore();

  const stores = res.data;

  return (
    <aside className="fixed top-0 left-0 w-64 h-dvh bg-white shadow-md flex flex-col">
      <div className="text-xl px-6 py-4 border-b flex justify-between items-center">
        <h2 className="font-bold text-amber-600">Admin Panel</h2>
        <AddButtonStore />
      </div>

      <ListStores stores={stores || []} />

      <div className="p-4 border-t">
        <Link
          href="/"
          className="flex items-center gap-2 text-red-500 hover:text-red-800 cursor-pointer"
        >
          <LogOut size={20} />
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
