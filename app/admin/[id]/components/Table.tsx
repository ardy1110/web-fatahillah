import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

import { Store } from "@/lib/types";
import AddButton from "./AddButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export async function TableDemo({ stores }: { stores: Store }) {
  return (
    <main className="p-12 overflow-y-auto">
      <div className="flex items-start justify-between p-4">
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
            <h2 className="font-semibold text-lg text-foreground">
              {stores.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              Deskripsi singkat toko
            </p>
          </div>
        </div>
      </div>
      {/* Right Section: Button */}
      <div className="flex justify-end ">
        <AddButton stores={stores} />
      </div>

      <div className=" border border-gray-200 rounded-xl shadow-sm ">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 text-md">
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
            {stores.categories?.map((category) =>
              category.products?.map((product) => (
                <TableRow
                  key={`${stores.id}-${category.id}-${product.id}`}
                  className="hover:bg-muted/30 transition-colors text-sm"
                >
                  <TableCell className="px-6 py-3">{category.name}</TableCell>
                  <TableCell className="px-6 py-3">{product.name}</TableCell>
                  <TableCell className="px-6 py-3 font-medium text-foreground">
                    Rp {product.price.toLocaleString("id-ID")}
                  </TableCell>
                  <TableCell className="px-6 py-3 flex justify-center space-x-4">
                    {/* Tambah Pros Stores  */}
                    <EditButton
                      categories={stores.categories}
                      product={product}
                    />
                    {/* <DeleteButton product={product}/> */}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
