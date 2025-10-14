"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// CREATE
export async function addProduct(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const categoryId = Number(formData.get("categoryId"));
    const storeId = Number(formData.get("storeId"));

    if (!name || !price || !categoryId || !storeId) {
      throw new Error("Data tidak lengkap");
    }

    await prisma.product.create({
      data: {
        name,
        price,
        categoryId,
        storeId,
      },
    });

    // Refresh data tanpa reload page
    revalidatePath(`/admin/${storeId}`);

    return { success: true, message: "Produk berhasil ditambahkan!" };
  } catch (error) {
    console.error("❌ Error addProduct:", error);
    return { success: false, message: "Gagal menambah produk" };
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
