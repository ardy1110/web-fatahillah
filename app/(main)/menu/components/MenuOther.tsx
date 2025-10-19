import { Store } from "@/lib/types";
import Image from "next/image";

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

  //Ngambil Gambar
  const andalanGambar = store.categories.find(
    (cat) => cat.name === "Menu Andalan"
  )?.imageUrl;

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
    <div className="w-full">
      {/* --- BAGIAN MENU ANDALAN --- */}
      {(menuAndalanProducts || []).length > 0 && (
        <div className="mb-10 px-6 md:px-32">
          <h2 className="text-2xl font-bold mb-4 text-center text-amber-600">
            Menu Andalan
          </h2>
          <div className="border-2 border-gray-300 rounded-xl overflow-hidden shadow-lg bg-white text-black">
            <div className="relative h-64 md:h-96 bg-neutral-200">
              <Image
                src={andalanGambar || "/IconBlack.jpeg"}
                alt="Menu Andalan"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                quality={95}
                priority
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center justify-center bg-white border-t-2 border-gray-300">
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
          <div className="flex justify-center">
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: `repeat(${Math.min(
                  (menuFavoriteProducts || []).length,
                  4
                )}, minmax(0, 1fr))`,
              }}
            >
              {(menuFavoriteProducts || []).map((menu) => (
                <div
                  key={menu.id}
                  className="bg-white text-black border-2 border-gray-200 text-center rounded-xl shadow p-2"
                >
                  <div className="relative h-24 w-full bg-neutral-200 rounded-md mb-2 overflow-hidden"></div>
                  <p className="text-sm font-semibold">{menu.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* --- BAGIAN MENU LAINNYA --- */}
      {(menuLainnyaProducts || []).length > 0 && (
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-amber-600">
            Menu Lainnya
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(menuLainnyaProducts || []).map((menu) => (
              <div
                key={menu.id}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 text-center border-2 border-amber-200 transition-all hover:shadow-md"
              >
                <p className="text-base font-semibold text-gray-800">
                  {menu.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
