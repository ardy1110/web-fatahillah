// "use client";

import { Store } from "@/lib/types";
import NavStore from "./components/NavStore";
import StoreHeader from "./components/StoreHeader";

export default function MenuClient({ stores }: { stores: Store[] }) {
  return (
    // Tambah scroll
    <main className="flex flex-col h-dvh py-12">
      {/* Header */}
      <StoreHeader />

      {/* Navbar Bawah */}
      <NavStore stores={stores} />
    </main>
  );
}
