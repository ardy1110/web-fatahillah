"use client";

import React, { useEffect, useState } from "react";
import ButtonMenu from "./ButtonMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const MainNavBar = () => {
  const pathname = usePathname();
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfScreen = window.innerHeight * 0.2;
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
      <div className="flex items-start justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <div className="relative w-[168] h-[52]">
            <Image
              src="/wf.png"
              alt="Logo Fatahillah"
              fill
              className={`transition-all duration-200 ${
                !isSolid && pathname !== "/menu"
                  ? "invert brightness-0"
                  : "invert brightness-200"
              }`}
            />
          </div>
          <div
            className={`flex flex-col items-center text-xl font-bold transition-all duration-200 ${
              !isSolid && pathname !== "/menu" ? "text-white" : "text-black"
            }`}
          ></div>
        </Link>
        {pathname === "/" && <ButtonMenu />}
      </div>
    </nav>
  );
};

export default MainNavBar;
