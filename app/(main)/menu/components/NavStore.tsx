import { Store } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const NavStore = ({
  stores,
  activeStoreId,
  onStoreSelect,
}: {
  stores: Store[];
  activeStoreId: number;
  onStoreSelect: (id: number) => void;
}) => {
  return (
    <footer className="absolute bottom-0 left-0 w-full flex justify-center">
      <div className="relative p-3 m-4 rounded-2xl shadow-lg inline-flex items-center justify-center gap-4 px-10 overflow-hidden backdrop-blur-md bg-amber-500/30 border border-white/20">
        <div className="flex gap-4 overflow-x-auto sm:overflow-visible max-w-full scrollbar-none">
          {stores.map((store) => (
            <div
              key={store.id}
              onClick={() => onStoreSelect(store.id)}
              className={clsx(
                "relative bg-white w-16 h-16 rounded-xl text-sm shadow-md shrink-0 hover:scale-110 transition-all duration-500 ease-out cursor-pointer",
                {
                  "ring-4 ring-amber-400 ring-offset-2 ring-offset-black":
                    store.id === activeStoreId,
                }
              )}
            >
              <Image
                src={store.imageUrl || "/IconBlack.jpeg"}
                alt={`Logo ${store.name}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default NavStore;
