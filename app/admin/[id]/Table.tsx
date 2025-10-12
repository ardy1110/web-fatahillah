import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Store {
  id: number;
  name: string;
  categories: Categories[];
}

interface Categories {
  id: number;
  name: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  price: number;
}

export async function TableDemo({ stores }: { stores: Store[] }) {
  return (
    <>
      <div className="p-6 border">
        <Table className="p-4">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Category</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stores.map((store) =>
              store.categories.map((category) =>
                category.products.map((product) => (
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
                    <TableCell className="border border-gray-300 px-4 py-2 text-right">
                      {/* tombol aksi di sini */}
                    </TableCell>
                  </TableRow>
                ))
              )
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
