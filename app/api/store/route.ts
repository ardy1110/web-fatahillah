import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {prisma} from '../../../lib/prisma'




export async function GET() {
  try {
    const stores = await prisma.store.findMany({
      include: {
        categories: true,
        products: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(stores, { status: 200 });
  } catch (error) {
    console.error("Error fetching stores:", error);
    return NextResponse.json(
      { error: "Failed to fetch stores" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {name, description} = body;

    const newStore = await prisma.store.create({
      data: {
        name,
        description
      }
    })
    return NextResponse.json({
      message: "Toko berhasil ditambahkan", store: newStore
    })
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Gagal menambah toko" },
      { status: 500 },
    );
  }
}
