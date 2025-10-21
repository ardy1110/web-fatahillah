import React from "react";
import { TableMenu } from "./components/Table";
import { getStoreById } from "../components/actions";

async function DetailStore({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const res = await getStoreById(Number(id));

  if (!res.success || !res.data) {
    return <div>{res.message ?? "Toko tidak ditemukan"}</div>;
  }

  const stores = res.data;

  return (
    <main className="flex-1 ml-64">
      <TableMenu stores={stores} />
    </main>
  );
}

export default DetailStore;
