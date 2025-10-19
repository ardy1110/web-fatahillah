import { Store } from "@/lib/types";

export const MenuWF = ({ store }: { store: Store }) => {
  if (!store || !store.categories) return null;

  const firstTwoCategories = store.categories.slice(0, 2);
  const remainingCategories = store.categories.slice(2);

  return (
    <section className="w-full py-10 px-4 md:px-12">
      {/* ===== Bagian Atas ====== */}
      <div className="relative bg-white/5 border border-amber-400/20 rounded-2xl p-6 mb-12 overflow-hidden">
        {/* Gambar Kiri — terpotong di luar container */}
        {/* <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full overflow-hidden border-4 border-amber-400/30 z-0">
          <Image
            src="/iconBlack.jpeg"
            alt="Left decor"
            fill
            className="object-cover opacity-80"
          />
        </div> */}

        {/* Gambar Kanan — terpotong di luar container */}
        {/* <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full overflow-hidden border-4 border-amber-400/30 z-0">
          <Image
            src="/img-right.png"
            alt="Right decor"
            fill
            className="object-cover opacity-80"
          />
        </div> */}

        {/* Grid 2 Kolom */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 z-10">
          {firstTwoCategories.map((category) => {
            const categoryProducts = (store.products || []).filter(
              (product) => product.categoryId === category.id
            );

            if (categoryProducts.length === 0) return null;

            return (
              <div
                key={category.id}
                className="bg-white/10 border border-amber-200/30 rounded-xl p-5 shadow-sm"
              >
                <div className="bg-amber-600 text-white font-semibold text-center rounded-md py-2 mb-4">
                  {category.name}
                </div>

                <div className="space-y-2">
                  {categoryProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-amber-50/90 hover:bg-amber-100 text-gray-800 py-2 px-3 rounded-md border border-amber-100 transition-all"
                    >
                      {product.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================= */}
      {/* ===== Bagian Bawah ====== */}
      {/* ========================= */}
      {remainingCategories.length > 0 && (
        <div className="bg-white/5 border border-amber-400/20 rounded-2xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingCategories.map((category) => {
              const categoryProducts = (store.products || []).filter(
                (product) => product.categoryId === category.id
              );

              if (categoryProducts.length === 0) return null;

              return (
                <div
                  key={category.id}
                  className="bg-white/10 border border-amber-200/30 rounded-xl p-5 shadow-sm"
                >
                  <div className="bg-amber-600 text-white font-semibold text-center rounded-md py-2 mb-4">
                    {category.name}
                  </div>

                  <div className="space-y-2">
                    {categoryProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-amber-50/90 hover:bg-amber-100 text-gray-800 py-2 px-3 rounded-md border border-amber-100 transition-all"
                      >
                        {product.name}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
