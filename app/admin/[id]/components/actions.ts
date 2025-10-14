"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// CREATE
export async function createProductAction(
  paramsId: number,
  data: { name: string; price: number; categoryId: number; storeId: number }
) {
  await prisma.product.create({ data });
  revalidatePath(`/admin/${paramsId}`);
}

// UPDATE
export async function updateProductAction(
  paramsId: number,
  data: { id: number; name: string; price: number; categoryId: number }
) {
  await prisma.product.update({
    where: { id: data.id },
    data,
  });
  revalidatePath(`/admin/${paramsId}`);
}

// DELETE
export async function deleteProductAction(paramsId: number, id: number) {
  await prisma.product.delete({ where: { id } });
  revalidatePath(`/admin/${paramsId}`);
}
