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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
              width={120}
              height={120}
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

      <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 text-sm">
              <TableHead className="text-left px-6 py-3 font-semibold">
                Category
              </TableHead>
              <TableHead className="text-left px-6 py-3 font-semibold">
                Product
              </TableHead>
              <TableHead className="text-left px-6 py-3 font-semibold">
                Price
              </TableHead>
              <TableHead className="text-center px-6 py-3 font-semibold">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {stores.map((store) =>
              store.categories?.map((category) =>
                category.products?.map((product) => (
                  <TableRow
                    key={`${store.id}-${category.id}-${product.id}`}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <TableCell className="px-6 py-3">
                      <Badge variant="secondary">{category.name}</Badge>
                    </TableCell>
                    <TableCell className="px-6 py-3">{product.name}</TableCell>
                    <TableCell className="px-6 py-3 font-medium text-foreground">
                      Rp {product.price.toLocaleString("id-ID")}
                    </TableCell>
                    <TableCell className="px-6 py-3 flex justify-center space-x-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-amber-100 text-amber-600 cursor-pointer"
                      >
                        <Edit2Icon size={18} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-red-100 text-red-600 cursor-pointer"
                      >
                        <RiDeleteBin5Line size={18} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
