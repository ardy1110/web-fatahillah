"use server";

import { prisma } from "@/lib/prisma";

// Fecth Data Store
export async function getStore() {
  try {
    const Store = await prisma.store.findMany({
      include: {
        categories: true,
        products: true,
      },
    });

    if (!Store) {
      return { success: false, data: [], message: "Data Toko Kosong!" };
    }

    return {
      success: true,
      data: Store,
      message: "Fecthing Successfully",
    };
  } catch (error) {
    console.error("❌ Gagal Memuat toko:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat memuat toko",
    };
  }
}
