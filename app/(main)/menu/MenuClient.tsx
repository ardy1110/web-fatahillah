"use client";

import { Store } from "@/lib/types";
import NavStore from "./components/NavStore";
import { useState } from "react";
import { MenuOther } from "./components/MenuOther";
import { MenuWF } from "./components/MenuWF";

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
    <main className="flex flex-col h-dvh pb-24">
      <div className="flex-1 p-12 overflow-y-auto scrollbar-none">
        <header className="text-center py-6">
          <h1 className="text-3xl font-bold text-black">{activeStore.name}</h1>
        </header>

        {activeStore.name === "Warkop Fatahillah" ? (
          <MenuWF store={activeStore} />
        ) : (
          <MenuOther store={activeStore} />
        )}
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
