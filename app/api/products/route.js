import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET() {
    try {
        const product = await prisma.product.findMany({
            include: {
                category: true
            }
        })
        return NextResponse.json(product)
    } catch (e) {
        return NextResponse.json({message: e.message})
    }
}

