import { Store } from "@/lib/types";
import Image from "next/image";
import React from "react";

const NavStore = ({ stores }: { stores: Store[] }) => {
  return (
    <footer className="absolute bottom-0 left-0 w-full flex justify-center">
      <div className="relative p-3 m-4 rounded-2xl shadow-lg inline-flex items-center justify-center gap-4 px-10 overflow-hidden backdrop-blur-md bg-amber-500/30 border border-white/20">
        <div className="flex gap-4 overflow-x-auto sm:overflow-visible max-w-full scrollbar-none">
          {stores.map((store) => (
            <div
              key={store.id}
              className="relative bg-white w-16 h-16 rounded-xl text-sm shadow-md shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={store.imageUrl || "/IconBlack.jpeg"}
                alt="Logo Toko"
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
