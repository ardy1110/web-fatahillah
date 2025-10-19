"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises";
import path from "path";

// CREATE STORE
export async function addStore(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    const file = formData.get("image") as File | null;
    let imageUrl: string | null = null;

    if (!name || !description) {
      return { success: false, message: "Data tidak Lengkap" };
    }
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(process.cwd(), "public/uploads", fileName);
      await writeFile(filePath, buffer);

      imageUrl = `/uploads/${fileName}`;
    }

    const newStore = await prisma.store.create({
      data: {
        name,
        description,
        imageUrl,
      },
    });

    revalidatePath("/admin");

    return {
      success: true,
      data: newStore,
      message: "Toko berhasil di tambah!",
    };
  } catch (error) {
    console.error("❌ Gagal menambah toko:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat menambah toko",
    };
  }
}

// UPDATE STORE
export async function editStore(id: number, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    const file = formData.get("image") as File | null;
    let imageUrl: string | null = null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(process.cwd(), "public/uploads", fileName);
      await writeFile(filePath, buffer);

      imageUrl = `/uploads/${fileName}`;
    }

    if (!name || !description) {
      return { success: false, message: "Data tidak Lengkap" };
    }

    await prisma.store.update({
      where: { id },
      data: {
        name,
        description,
        imageUrl,
      },
    });

    revalidatePath(`/admin`);

    return { success: true, message: "Toko berhasil di update!" };
  } catch (error) {
    console.error("❌ Gagal mengedit toko:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat mengedit toko",
    };
  }
}

//DELETE STORE
export async function deleteToko(id: number) {
  try {
    await prisma.store.delete({ where: { id } });
    revalidatePath("/admin");
  } catch (error) {
    console.error("❌ Gagal menghapus toko:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat menghapus toko",
    };
  }
}

// CREATE PRODUCT
export async function addProduct(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const categoryId = Number(formData.get("categoryId"));
    const storeId = Number(formData.get("storeId"));

    if (!name || !price || !categoryId) {
      return { success: false, message: "Data tidak Lengkap" };
    }

    await prisma.product.create({
      data: {
        name,
        price,
        categoryId,
        storeId,
      },
    });

    revalidatePath(`/admin/${storeId}`);

    return { success: true, message: "Produk berhasil ditambahkan!" };
  } catch (error) {
    console.error("❌ Gagal menambah produk:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat menambah produk",
    };
  }
}

// UPDATE PRODUCT
export async function editProduct(id: number, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const categoryId = Number(formData.get("categoryId"));
    const storeId = Number(formData.get("storeId"));

    if (!name || !price || !categoryId) {
      return { success: false, message: "Data tidak Lengkap" };
    }

    await prisma.product.update({
      where: { id },
      data: {
        name,
        price,
        categoryId,
        storeId,
      },
    });

    revalidatePath(`/admin/${storeId}`);

    return { success: true, message: "Produk berhasil di update!" };
  } catch (error) {
    console.error("❌ Gagal mengedit produk:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat mengedit produk",
    };
  }
}

// DELETE PRODUCT
export async function deleteProductAction(storeId: number, id: number) {
  try {
    await prisma.product.delete({ where: { id } });
    revalidatePath(`/admin/${storeId}`);
  } catch (error) {
    console.error("❌ Gagal menghapus produk:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat menghapus produk",
    };
  }
}

//CREATE CATEGORY
export async function addCategory(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const storeId = Number(formData.get("storeId"));
    const file = formData.get("image") as File | null;
    let imageUrl: string | null = null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(process.cwd(), "public/uploads", fileName);
      await writeFile(filePath, buffer);

      imageUrl = `/uploads/${fileName}`;
    }

    if (!name) {
      return {
        success: false,
        message: "Nama kategori tidak valid",
      };
    }

    const newCategory = await prisma.category.create({
      data: {
        name,
        storeId,
        imageUrl,
      },
    });

    revalidatePath(`/admin/${storeId}`);

    return {
      success: true,
      data: newCategory,
      message: "Kategori berhasil di tambah!",
    };
  } catch (error) {
    console.error("❌ Gagal menambah kategori:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat menambah kategori",
    };
  }
}

//UPDATE CATEGORY
export async function updateCategory(id: number, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const storeId = Number(formData.get("storeId"));
    const file = formData.get("image") as File | null;
    let imageUrl: string | null = null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(process.cwd(), "public/uploads", fileName);
      await writeFile(filePath, buffer);

      imageUrl = `/uploads/${fileName}`;
    }

    if (!name) {
      return {
        success: false,
        message: "Nama kategori tidak valid",
      };
    }

    const newCategory = await prisma.category.update({
      where: { id },
      data: {
        name,
        storeId,
        imageUrl,
      },
    });

    revalidatePath(`/admin/${storeId}`);

    return {
      success: true,
      data: newCategory,
      message: "Kategori berhasil di edit!",
    };
  } catch (error) {
    console.error("❌ Gagal edit kategori:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat edit kategori",
    };
  }
}

// DELETE CATEGORY
export async function deleteCategory(storeId: number, id: number) {
  try {
    await prisma.category.delete({ where: { id } });
    revalidatePath(`/admin/${storeId}`);
  } catch (error) {
    console.error("❌ Gagal menghapus kategori:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat menghapus kategori",
    };
  }
}
