"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Store } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import { RiDeleteBin5Line } from "react-icons/ri";

const ListStores = ({ stores }: { stores: Store[] }) => {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-4 py-4 overflow-auto scrollbar-none">
      {stores.map((store) => {
        const isActive = pathname.startsWith(`/admin/${store.id}`);

        return (
          <Link
            key={store.id}
            href={`/admin/${store.id}`}
            className={`group flex items-center justify-between gap-2 p-3 rounded-md mb-2 transition-all duration-150 ${
              isActive
                ? "bg-amber-600 text-white"
                : "bg-white hover:bg-amber-100 text-black"
            }`}
          >
            <span className="flex-1 text-sm font-medium leading-tight break-words">
              {store.name}
            </span>

            <div className="flex items-center shrink-0">
              <Button
                variant="ghost"
                size="icon"
                className={`${
                  isActive
                    ? "text-white hover:bg-amber-700"
                    : "text-amber-600 hover:bg-amber-50"
                } cursor-pointer`}
              >
                <Edit2Icon size={16} />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className={`${
                  isActive
                    ? "text-white hover:bg-amber-700"
                    : "text-red-600 hover:bg-red-50"
                } cursor-pointer`}
              >
                <RiDeleteBin5Line size={16} />
              </Button>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default ListStores;
