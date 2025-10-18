import { Store } from "@/lib/types";

export const MenuWF = ({ store }: { store: Store }) => {
  return (
    <section className="border-t-2 border-amber-600 pt-8 mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 text-center">
        {/* Loop melalui setiap KATEGORI dari data */}
        {store.categories.map((category) => (
          <div key={category.id} className="flex flex-col gap-3 space-y-2">
            {/* Judul Kategori */}
            <h3 className="text-xl font-bold mb-2 text-amber-700 underline">
              {category.name}
            </h3>

            {/* Filter dan tampilkan PRODUK yang sesuai dengan kategori ini */}
            {(store.products || [])
              .filter((product) => product.categoryId === category.id)
              .map((product) => (
                <p key={product.id} className="text-lg">
                  {product.name}
                </p>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};
