import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

import { Edit2Icon } from "lucide-react";

import { Store } from "@/lib/types";
import { RiDeleteBin5Line } from "react-icons/ri";

export async function TableDemo({ stores }: { stores: Store[] }) {
  return (
    <main className="p-12">
      <div className="flex items-start justify-between p-4 mb-4">
        {/* Left Section: Image + Checkbox + Info */}
        <div className="flex items-start gap-4">
          {/* Image with Checkbox overlay */}
          <div className="relative">
            <Image
              src="/IconBlack.jpeg"
              alt="Store image"
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            {/* <Checkbox className="absolute top-1 right-1" /> */}
          </div>

          {/* Store Info */}
          <div className="flex flex-col justify-center">
            <h2 className="font-semibold text-lg text-foreground">Nama Toko</h2>
            <p className="text-sm text-muted-foreground">
              Deskripsi singkat toko
            </p>
          </div>
        </div>
      </div>
      {/* Right Section: Button */}
      <div className="flex justify-end ">
        <div className="inline-block m-4 p-2 px-4 bg-amber-600 rounded">
          Tambah
        </div>
      </div>
      <Table>
        <TableHeader className="border border-gray-300 bg-gray-400">
          <TableRow className="text-center">
            <TableHead className="border border-gray-300 px-4">
              Category
            </TableHead>
            <TableHead className="border border-gray-300 px-4">
              Product
            </TableHead>
            <TableHead className="border border-gray-300 px-4">Price</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stores.map((store) =>
            store.categories?.map((category) =>
              category.products?.map((product) => (
                <TableRow
                  key={`${store.id}-${category.id}-${product.id}`}
                  className="hover:bg-gray-50"
                >
                  <TableCell className="border border-gray-300 px-4 py-2">
                    {category.name}
                  </TableCell>
                  <TableCell className="border border-gray-300 px-4 py-2">
                    {product.name}
                  </TableCell>
                  <TableCell className="border border-gray-300 px-4 py-2">
                    {product.price}
                  </TableCell>
                  <TableCell className="flex justify-center border border-gray-300 py-2 text-right space-x-4">
                    {/* tombol aksi di sini */}
                    <Edit2Icon size={20} />

                    <RiDeleteBin5Line size={20} className="text-red-600" />
                  </TableCell>
                </TableRow>
              ))
            )
          )}
        </TableBody>
      </Table>
    </main>
  );
}
