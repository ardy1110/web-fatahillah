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
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import AddButtonProduct from "./AddButtonProduct";
import CategoryActionsButton from "./CategoryActionsButton";


export async function TableMenu({ stores }: { stores: Store }) {
  return (
    <main className="p-12">
      <div className="flex items-start justify-between p-4">
        {/* Left Section: Image + Checkbox + Info */}
        <div className="flex items-start gap-4">
          {/* Image with Checkbox overlay */}
          <div className="relative">
            <Image
              src={stores.imageUrl || "/IconBlack.jpeg"}
              alt="Store image"
              width={120}
              height={120}
              priority
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
              {stores.description}
            </p>
          </div>
        </div>
      </div>
      {/* Right Section: Button */}
      <div className="flex justify-end items-center  ">
        <CategoryActionsButton storeId={stores.id} categories={stores.categories}/>
        <AddButtonProduct stores={stores} categories={stores.categories} />
      </div>

      <div className="border border-gray-200 rounded-xl shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 text-md">
              <TableHead className="text-left px-6 py-3 font-semibold">
                Kategori
              </TableHead>
              <TableHead className="text-left px-6 py-3 font-semibold">
                Menu
              </TableHead>
              <TableHead className="text-left px-6 py-3 font-semibold">
                Harga
              </TableHead>
              <TableHead className="text-center px-6 py-3 font-semibold">
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {(() => {
              const categories = stores.categories || [];
              const hasCategories = categories.length > 0;
              const hasProducts = categories.some((c) => c.products?.length);
              const isEmpty = !hasCategories || !hasProducts;

              if (isEmpty) {
                return (
                  <TableRow key="empty-row">
                    <TableCell
                      colSpan={4}
                      className="text-center py-6 text-muted-foreground italic"
                    >
                      Belum ada Menu yang ditambahkan!
                    </TableCell>
                  </TableRow>
                );
              }

              return categories.flatMap((category) =>
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
                      <EditButton
                        store={stores}
                        categories={stores.categories}
                        product={product}
                      />
                      <DeleteButton product={product} />
                    </TableCell>
                  </TableRow>
                ))
              );
            })()}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
