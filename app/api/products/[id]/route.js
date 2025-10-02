import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req, { params }) {
  try {
    const { id } = params; // ambil id dari URL

    const deletedProduct = await prisma.product.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete product", details: err.message },
      { status: 500 }
    );
  }
}

export async function PUT(req, {params}){
  try {
    const {id} = params;
    const body = await req.json();
    const updateProduct = await prisma.product.update({
      where: {id: parseInt(id)},
      data: {
        name: body.name,
        price: body.price,
        description: body.description,
      }
    })
    return NextResponse.json({
      message: "Product updated successfully",
      product: updateProduct,
    })
  } catch (error) {
    return NextResponse.json({
      error: "Failed to update product",
      details: error.message,
    },{status: 500})
  }
}
