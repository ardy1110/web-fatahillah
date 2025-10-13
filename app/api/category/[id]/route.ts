import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ✅ PUT - update kategori
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const categoryId = parseInt(id);
    const { name, storeId } = await req.json();

    if (!name) {
      return NextResponse.json(
        { error: "Nama kategori wajib diisi" },
        { status: 400 }
      );
    }

    const updatedCategory = await prisma.category.update({
      where: { id: categoryId },
      data: { name, storeId },
    });

    return NextResponse.json({
      message: "Kategori berhasil diperbarui",
      category: updatedCategory,
    });
  } catch (error) {
    console.error("❌ Error update category:", error);
    return NextResponse.json(
      { error: "Gagal memperbarui kategori" },
      { status: 500 }
    );
  }
}

// ✅ DELETE - hapus kategori
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const categoryId = parseInt(id);

    await prisma.category.delete({
      where: { id: categoryId },
    });

    return NextResponse.json({ message: "Kategori berhasil dihapus" });
  } catch (error) {
    console.error("❌ Error delete category:", error);
    return NextResponse.json(
      { error: "Gagal menghapus kategori" },
      { status: 500 }
    );
  }
}
