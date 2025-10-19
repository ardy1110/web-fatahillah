import React from "react";
import { TableMenu } from "./components/Table";

async function DetailStore({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/store/${id}`, {
    // cache: 'no-store'
  });

  if (!res.ok) {
    return <div>Store not found</div>;
  }

  const stores = await res.json();

  return (
    <main className="flex-1 ml-64">
      <TableMenu stores={stores} />
    </main>
  );
}

export default DetailStore;
