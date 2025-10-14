"use server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const productId = parseInt(id);
    const { name, price, description, imageUrl, categoryId, isAvailable } =
      await req.json();

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        name,
        price,
        description,
        imageUrl,
        categoryId,
        isAvailable,
      },
    });
    // revalidatePath(`/admin${id}`)
    return NextResponse.json({
      message: "Produk berhasil diperbarui",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("❌ Error update product:", error);
    return NextResponse.json(
      { error: "Gagal memperbarui produk" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productId = parseInt(id);

    await prisma.product.delete({
      where: { id: productId },
    });

    return NextResponse.json({ message: "Produk berhasil dihapus" });
  } catch (error) {
    console.error("❌ Error delete product:", error);
    return NextResponse.json(
      { error: "Gagal menghapus produk" },
      { status: 500 }
    );
  }
}
