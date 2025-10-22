"use client";

import { Store } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NavStore = ({
  stores,
  activeStoreId,
  onStoreSelect,
}: {
  stores: Store[];
  activeStoreId: number;
  onStoreSelect: (id: number) => void;
}) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <footer
      className={clsx(
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full transition-all duration-500 ease-in-out",
        hidden ? "translate-y-24 opacity-0" : "translate-y-0 opacity-100"
      )}
    >
      <div className="flex justify-center">
        <div className="flex items-center justify-center px-3 sm:px-5 md:px-8 py-3 md:py-4 pb-4 md:pb-5 rounded-3xl shadow-lg backdrop-blur-md bg-amber-500/30 border border-white/20 max-w-[92vw] md:max-w-[75vw] overflow-hidden">
          <div
            className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-none scroll-smooth px-1 py-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {stores.map((store) => (
              <button
                key={store.id}
                onClick={() => onStoreSelect(store.id)}
                className="relative shrink-0 group scroll-snap-align-start"
              >
                <div
                  className={clsx(
                    "w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden transition-all duration-300",
                    store.id === activeStoreId
                      ? "scale-110 shadow-lg bg-transparent"
                      : "hover:scale-105 hover:shadow-md"
                  )}
                >
                  <Image
                    src={store.imageUrl || "/IconBlack.jpeg"}
                    alt={`Logo ${store.name}`}
                    fill
                    className="object-cover p-[6px] md:p-2 cursor-pointer"
                  />
                </div>

                {/* Bottom bar indicator */}
                <div
                  className={clsx(
                    "absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full transition-all duration-300",
                    store.id === activeStoreId
                      ? "w-8 bg-gradient-to-r from-amber-400 to-orange-500"
                      : "w-0 bg-amber-400"
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NavStore;
