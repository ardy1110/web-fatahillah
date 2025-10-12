"use client"

import { LayoutDashboard, Store } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavButton = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: <LayoutDashboard /> },
    { name: "Toko", href: "/admin/toko", icon: <Store /> },
  ];

  return (
    <nav className="flex-1 px-4 py-4">
      {menuItems.map((menu) => {
        const isActive = pathname === menu.href;

        return (
          <Link
            key={menu.href}
            href={menu.href}
            className={`flex items-center gap-3 p-3 rounded-md mb-2 hover:bg-amber-200 ${
              isActive
                ? "bg-amber-600 text-white hover:bg-amber-600"
                : "bg-white text-black"
            }`}
          >
            {menu.icon}
            {menu.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavButton;
