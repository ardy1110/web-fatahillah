import { Store } from "@/lib/types";

export const MenuWF = ({ store }: { store: Store }) => {
  if (!store || !store.categories) return null;

  const firstTwoCategories = store.categories.slice(0, 2);
  const remainingCategories = store.categories.slice(2);

  return (
    <section className="min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header dengan Dekorasi */}
        <div className="relative mb-8">
          <div className="absolute -top-4 -left-4 text-6xl">🌿</div>
        </div>

        {/* ===== Bagian Atas - 2 Kategori Pertama ====== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {firstTwoCategories.map((category) => {
            const categoryProducts = (store.products || []).filter(
              (product) => product.categoryId === category.id
            );

            if (categoryProducts.length === 0) return null;

            return (
              <div key={category.id} className="space-y-6">
                {/* Card Kategori */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                  {/* Header dengan warna merah marun */}
                  <div className="bg-gradient-to-r from-red-900 to-red-800 px-6 py-4">
                    <h2 className="text-white text-center text-2xl font-bold tracking-wide uppercase">
                      {category.name}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-2">
                      {categoryProducts.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-gray-800 font-medium text-sm">
                            {product.name}
                          </span>
                          {product.price && (
                            <span className="font-bold text-gray-900 text-sm ml-4">
                              {product.price}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== Bagian Bawah - Kategori Sisanya ====== */}
        {remainingCategories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingCategories.map((category) => {
              const categoryProducts = (store.products || []).filter(
                (product) => product.categoryId === category.id
              );
              if (categoryProducts.length === 0) return null;
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-red-900 to-red-800 px-6 py-4">
                    <h2 className="text-white text-center text-xl font-bold tracking-wide uppercase">
                      {category.name}
                    </h2>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-2">
                      {categoryProducts.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-gray-800 font-medium text-sm">
                            {product.name}
                          </span>
                          {product.price && (
                            <span className="font-bold text-gray-900 text-sm ml-4">
                              {product.price}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
