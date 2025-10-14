"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Store } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import { RiDeleteBin5Line } from "react-icons/ri";

const NavButton = ({ stores }: { stores: Store[] }) => {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-4 py-4">
      {stores.map((store) => {
        const isActive = pathname === `/admin/${store.id}`;

        return (
          <>
            <Link
              key={store.id}
              href={`/admin/${store.id}`}
              className={`flex items-center justify-between gap-3 p-3 rounded-md mb-2 hover:bg-amber-200 ${
                isActive
                  ? "bg-amber-600 text-white hover:bg-amber-600"
                  : "bg-white text-black"
              }`}
            >
              {store.name}
              <div className="">
                <Button
                  variant="ghost"
                  size="icon"
                  // onClick={() => setOpenModal(true)}
                  className="hover:bg-amber-100 text-amber-600 cursor-pointer"
                >
                  <Edit2Icon size={18} />
                </Button>
                <Button
                  // onClick={handelDelete}
                  variant="ghost"
                  size="icon"
                  // onClick={() => setOpen(true)}
                  className="hover:bg-red-100 text-red-600 cursor-pointer"
                >
                  <RiDeleteBin5Line size={18} />
                </Button>
              </div>
            </Link>
          </>
        );
      })}
    </nav>
  );
};

export default NavButton;
