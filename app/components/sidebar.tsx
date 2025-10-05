"use client";

import { LayoutDashboard, LogOut, Store } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard /> },
    { name: "Toko", href: "/admin/toko", icon: <Store /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
      </div>

      <nav className="flex-1 px-4 py-4">
        {menuItems.map((menu) => {
          const isActive = pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 p-3 rounded-md mb-2 ${
                isActive ? "bg-[tomato] text-white" : "bg-white text-black"
              }`}
            >
              {menu.icon}
              {menu.name}
            </Link>
          );
        })}

        {/* <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 p-3 rounded-md mb-2 bg-blue-600 text-white"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/admin/toko"
          className="flex items-center gap-3 p-3 rounded-md mb-2 text-gray-700 hover:bg-gray-100"
        >
          <Store size={20} />
          Toko
        </Link> */}
      </nav>

      <div className="p-4 border-t">
        <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
