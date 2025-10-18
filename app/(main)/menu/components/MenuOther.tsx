import { Store } from "@/lib/types";

export const MenuOther = ({ store }: { store: Store }) => {
  // Cari ID untuk setiap kategori yang kita butuhkan
  // Menggunakan optional chaining (?) untuk mencegah error jika suatu kategori tidak ada
  const andalanCategoryId = store.categories.find(
    (cat) => cat.name === "Menu Andalan"
  )?.id;
  const favoriteCategoryId = store.categories.find(
    (cat) => cat.name === "Menu Favorite"
  )?.id;
  const lainnyaCategoryId = store.categories.find(
    (cat) => cat.name === "Menu Lainnya"
  )?.id;

  // Filter daftar produk berdasarkan ID kategori yang sudah ditemukan
  const menuAndalanProducts = store.products?.filter(
    (p) => p.categoryId === andalanCategoryId
  );
  const menuFavoriteProducts = store.products?.filter(
    (p) => p.categoryId === favoriteCategoryId
  );
  const menuLainnyaProducts = store.products?.filter(
    (p) => p.categoryId === lainnyaCategoryId
  );

  return (
    // Kita gunakan div kosong sebagai root jika ada beberapa bagian level atas
    <>
      {/* --- BAGIAN MENU ANDALAN --- */}
      {(menuAndalanProducts || []).length > 0 && (
        <div className="mb-10 md:mx-24">
          <h2 className="text-2xl font-bold mb-4 text-center text-amber-600">
            Menu Andalan
          </h2>
          <div className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg bg-white text-black">
            <div className="relative h-64">
              {/* <Image
                src={menuAndalanProducts[0].imageUrl || "/placeholder-image.jpg"}
                alt={menuAndalanProducts[0].name}
                fill
                className="object-cover"
              /> */}
            </div>
            <div className="p-4 text-center justify-center bg-white border-t-2 border-gray-200">
              <p className="font-semibold text-lg">
                {menuAndalanProducts?.[0].name}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- BAGIAN MENU FAVORITE --- */}
      {(menuFavoriteProducts || []).length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-amber-600">
            Menu Favorite
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(menuFavoriteProducts || []).map((menu) => (
              <div
                key={menu.id}
                className="bg-white text-black border-2 border-gray-200 text-center rounded-xl shadow p-2"
              >
                <div className="relative h-24 w-full bg-neutral-200 rounded-md mb-2 overflow-hidden">
                  {/* <Image
                    src={menu.imageUrl || "/placeholder-image.jpg"}
                    alt={menu.name}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <p className="text-sm font-semibold">{menu.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- BAGIAN MENU LAINNYA --- */}
      {(menuLainnyaProducts || []).length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center text-amber-600">
            Menu Lainnya
          </h2>
          <div className="columns-2 md:columns-3 gap-x-8 text-center space-y-3">
            {(menuLainnyaProducts || []).map((menu) => (
              <p
                key={menu.id}
                className="text-lg text-black break-inside-avoid"
              >
                {menu.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
