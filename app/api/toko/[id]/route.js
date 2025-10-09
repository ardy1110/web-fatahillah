import prisma from "../../prisma.js";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();

    const updateToko = await prisma.toko.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: body.name,
            categories: body.categories
        }
    })
    return NextResponse.json({
        message: "update product successfully",
        toko: updateToko
    })
  } catch (error) {
    return NextResponse({
        error: "update product failed",
        detail: error.message
    },{
        status: 500
    })
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    const deleteToko = await prisma.toko.delete({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json({
        message: "delete toko successfully",
        toko: deleteToko
    })
  } catch (error) {
    return NextResponse({
        error: "delete toko failed",
        detail: error.message
    },{
        status: 500
    })
  }
}

