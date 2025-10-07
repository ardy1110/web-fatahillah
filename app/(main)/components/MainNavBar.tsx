"use client";

import React, { useEffect, useState } from "react";
import ButtonMenu from "./ButtonMenu";
import { usePathname } from "next/navigation";

const MainNavBar = () => {
  const pathname = usePathname();
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfScreen = window.innerHeight; // full dvh
      setIsSolid(window.scrollY > halfScreen);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed py-5 px-10 top-0 left-0 w-full z-50 duration-500 bg-transparent ${
        isSolid ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Bagian kiri */}
        <h1
          className={`text-2xl font-bold ${
            !isSolid && pathname !== "/menu" ? "text-white" : "text-black"
          }`}
        >
          ☕ LOGO
        </h1>
        {/* Bagian kanan */}

        <ButtonMenu />
      </div>
    </nav>
  );
};

export default MainNavBar;
