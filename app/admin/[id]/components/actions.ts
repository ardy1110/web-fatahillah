"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// CREATE
export async function createProductAction(
  storeId: number,
  data: { name: string; price: number; categoryId: number; storeId: number }
) {
  try {
    await prisma.product.create({ data });
    revalidatePath(`/admin/${storeId}`);
  } catch (error) {
    console.error("❌ Gagal Menampahkan produk:", error);
    throw new Error("Gagal menambah produk");
  }
}

// UPDATE
export async function updateProductAction(
  storeId: number,
  data: { id: number; name: string; price: number; categoryId: number }
) {
  try {
    await prisma.product.update({
      where: { id: data.id },
      data,
    });
    revalidatePath(`/admin/${storeId}`);
  } catch (error) {
    console.error("❌ Gagal Mengupdate produk:", error);
    throw new Error("Gagal update produk");
  }
}

// DELETE
export async function deleteProductAction(storeId: number, id: number) {
  try {
    await prisma.product.delete({ where: { id } });
    revalidatePath(`/admin/${storeId}`);
  } catch (error) {
    console.error("❌ Gagal menghapus produk:", error);
    throw new Error("Gagal menghapus produk");
  }
}
