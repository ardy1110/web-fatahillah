"use client";

import { Store } from "@/lib/types";
import { useState } from "react";
import { MenuWF } from "./MenuWF";
import { MenuOther } from "./MenuOther";
import NavStore from "./NavStore";

export default function MenuClient({ stores }: { stores: Store[] }) {
  const [activeStoreId, setActiveStoreId] = useState<number>(stores[0]?.id);
  const activeStore = stores.find((store) => store.id === activeStoreId);
  const handleStoreSelect = (id: number) => {
    setActiveStoreId(id);
  };

  if (!activeStore) {
    return (
      <main className="flex items-center justify-center h-dvh">
        <p>Gagal memuat data toko!</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1">
        <header className="text-center py-6 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
            {activeStore.name}
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </header>

        <div className="px-4 pb-48">
          {activeStore.name === "Warkop Fatahillah" ? (
            <MenuWF store={activeStore} />
          ) : (
            <MenuOther store={activeStore} />
          )}
        </div>
      </div>

      {/* Navbar Bawah */}
      <NavStore
        stores={stores}
        activeStoreId={activeStoreId}
        onStoreSelect={handleStoreSelect}
      />
    </main>
  );
}
