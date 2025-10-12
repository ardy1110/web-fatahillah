import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const storeId = parseInt(params.id);
    const deleteStore = await prisma.store.delete({
      where: { id: storeId },
    });
    return NextResponse.json({
      message: "toko berhasil di hapus",
      deleteStore,
    });
  } catch (error) {
    console.error("❌ Error deleting store:", error);
    return NextResponse.json(
      { error: "Gagal menghapus toko" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const storeId = parseInt(params.id);
    const body = await req.json();
    const { name, description } = body;

    if (isNaN(storeId)) {
      return NextResponse.json(
        { error: "ID toko tidak valid" },
        { status: 400 }
      );
    }

    const existingStore = await prisma.store.findUnique({
      where: { id: storeId },
    });

    if (!existingStore) {
      return NextResponse.json(
        { error: "Toko tidak ditemukan" },
        { status: 404 }
      );
    }

    // Update data toko
    const updatedStore = await prisma.store.update({
      where: { id: storeId },
      data: {
        name,
        description,
      },
    });

    return NextResponse.json({
      message: "Toko berhasil diperbarui",
      store: updatedStore,
    });
  } catch (error) {
    console.error("❌ Error updating store:", error);
  }

  return NextResponse.json(
    { error: "Gagal memperbarui toko" },
    { status: 500 }
  );
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const storeId = parseInt(params.id);

    if (isNaN(storeId)) {
      return NextResponse.json(
        { error: "ID toko tidak valid" },
        { status: 400 }
      );
    }

    const store = await prisma.store.findUnique({
      where: { id: storeId },
      include: {
        categories: {
          include: {
            products: true, // ambil juga produk di tiap kategori
          },
        },
        products: true, // produk yang langsung terhubung ke toko
      },
    });

    if (!store) {
      return NextResponse.json(
        { error: "Toko tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(store);
  } catch (error) {
    console.error("❌ Error fetching store detail:", error);
    return NextResponse.json(
      { error: "Gagal mengambil detail toko" },
      { status: 500 }
    );
  }
}

