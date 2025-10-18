// "use client";

import { Store } from "@/lib/types";
import NavStore from "./components/NavStore";
import StoreHeader from "./components/StoreHeader";
import MenuList from "./components/MenuList";

export default function MenuClient({ stores }: { stores: Store[] }) {
  return (
    // Tambah scroll
    <main className="flex flex-col h-dvh pb-24">
      <div className="flex-1 p-12 overflow-y-auto scrollbar-none">
        {/* Header */}
        <StoreHeader />
        <MenuList />
      </div>

      {/* Navbar Bawah */}
      <NavStore stores={stores} />
    </main>
  );
}
