"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavButton = ({ stores }: any) => {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-4 py-4">
      {stores.map((store: any) => {
        const isActive = pathname === `/admin/${store.id}`;

        return (
          <Link
            key={store.id}
            href={`/admin/${store.id}`}
            className={`flex items-center gap-3 p-3 rounded-md mb-2 hover:bg-amber-200 ${
              isActive
                ? "bg-amber-600 text-white hover:bg-amber-600"
                : "bg-white text-black"
            }`}
          >
            {store.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavButton;
