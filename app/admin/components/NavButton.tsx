"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Store } from "@/lib/types";
import EditButtonStore from "./EditButtonStore";
import DeleteButtonStore from "./DeleteButtonStore";

const ListStores = ({ stores }: { stores: Store[] }) => {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-4 py-4 overflow-auto scrollbar-none">
      {stores && stores.length ? (
        stores.map((store) => {
          const isActive = pathname.startsWith(`/admin/${store.id}`);

          return (
            <div
              key={store.id}
              className={`group flex items-center justify-between gap-2 p-3 rounded-md mb-2 transition-all duration-150 ${
                isActive
                  ? "bg-amber-600 text-white"
                  : "bg-white hover:bg-amber-100 text-black"
              }`}
            >
              <Link href={`/admin/${store.id}`}>
                <span className="flex-1 text-sm font-medium leading-tight break-words">
                  {store.name}
                </span>
              </Link>
              <div className="flex items-center shrink-0">
                <EditButtonStore store={store} isActive={isActive} />
                <DeleteButtonStore store={store} isActive={isActive} />
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="text-center p-6 text-muted-foreground italic">
          Belum ada toko
        </h1>
      )}
    </nav>
  );
};

export default ListStores;
