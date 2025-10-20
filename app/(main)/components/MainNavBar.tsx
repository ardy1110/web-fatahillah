"use client";

import React, { useEffect, useState } from "react";
import ButtonMenu from "./ButtonMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const MainNavBar = () => {
  const pathname = usePathname();
  const [isSolid, setIsSolid] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return; // efek scroll hanya untuk homepage

    const handleScroll = () => {
      const halfScreen = window.innerHeight * 0.8;
      setIsSolid(window.scrollY > halfScreen);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`
        ${isHome ? "fixed top-0 left-0 z-50" : "relative"}
        w-full py-5 px-10 transition-all duration-500
        ${
          isHome
            ? isSolid
              ? "bg-white/90 shadow-md backdrop-blur-sm"
              : "bg-transparent"
            : "bg-white shadow-md"
        }
      `}
    >
      <div className="flex items-start justify-between">
        {/* === LOGO === */}
        <Link href="/" className="flex items-center space-x-4">
          <div className="relative w-[168px] h-[52px]">
            <Image
              src="/wf.png"
              alt="Logo Fatahillah"
              fill
              className={`transition-all duration-300 ${
                !isSolid && isHome
                  ? "invert brightness-0"
                  : "invert brightness-200"
              }`}
            />
          </div>
        </Link>

        {/* === BUTTON MENU (hanya di halaman utama) === */}
        {isHome && <ButtonMenu />}
      </div>
    </nav>
  );
};

export default MainNavBar;
