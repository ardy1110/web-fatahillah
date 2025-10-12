import { NextResponse } from "next/server";
import {prisma} from '@/app/lib/prisma'

// ✅ PUT - update kategori
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const categoryId = parseInt(params.id);
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "Nama kategori wajib diisi" }, { status: 400 });
    }

    const updatedCategory = await prisma.category.update({
      where: { id: categoryId },
      data: { name },
    });

    return NextResponse.json({
      message: "Kategori berhasil diperbarui",
      category: updatedCategory,
    });
  } catch (error) {
    console.error("❌ Error update category:", error);
    return NextResponse.json({ error: "Gagal memperbarui kategori" }, { status: 500 });
  }
}

// ✅ DELETE - hapus kategori
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const categoryId = parseInt(params.id);

    await prisma.category.delete({
      where: { id: categoryId },
    });

    return NextResponse.json({ message: "Kategori berhasil dihapus" });
  } catch (error) {
    console.error("❌ Error delete category:", error);
    return NextResponse.json({ error: "Gagal menghapus kategori" }, { status: 500 });
  }
}
