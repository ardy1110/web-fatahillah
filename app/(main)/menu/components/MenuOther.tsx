import { Store } from "@/lib/types";
import Image from "next/image";

export const MenuOther = ({ store }: { store: Store }) => {
  const andalanCategoryId = store.categories.find(
    (cat) => cat.name === "Menu Andalan"
  )?.id;
  const favoriteCategoryId = store.categories.find(
    (cat) => cat.name === "Menu Favorite"
  )?.id;
  const lainnyaCategoryId = store.categories.find(
    (cat) => cat.name === "Menu Lainnya"
  )?.id;

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
    <div className="w-full space-y-12">
      {/* ===== ATAS GRID ===== */}
      {(menuAndalanProducts || []).length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 items-center">
          {/* --- MENU ANDALAN --- */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border-4 border-amber-500/50">
            <Image
              src={menuAndalanProducts?.[0].imageUrl || "/IconBlack.jpeg"}
              alt={menuAndalanProducts?.[0].name || "Menu Andalan"}
              fill
              className="object-cover"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                {menuAndalanProducts?.[0].name || "Menu Andalan"}
              </h2>
            </div>
          </div>

          {/* --- MENU FAVORITE --- */}
          {(menuFavoriteProducts || []).length > 0 && (
            <div className="flex flex-col items-center w-full">
              <h2 className="text-2xl font-bold mb-4 text-amber-500">
                Menu Favorite
              </h2>

              {menuFavoriteProducts?.length === 3 ? (
                // Jika item-nya 3 → Buat layout 2 atas, 1 bawah di tengah
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  {menuFavoriteProducts?.slice(0, 2).map((menu) => (
                    <div
                      key={menu.id}
                      className="bg-white border border-amber-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
                    >
                      <div className="relative w-full h-24 bg-neutral-200">
                        <Image
                          src={menu.imageUrl || "/IconBlack.jpeg"}
                          alt={menu.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="py-2 text-center bg-amber-50">
                        <p className="font-semibold text-gray-800 text-sm">
                          {menu.name}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Item ketiga di tengah */}
                  <div className="col-span-2 flex justify-center">
                    {menuFavoriteProducts?.slice(2).map((menu) => (
                      <div
                        key={menu.id}
                        className="bg-white border border-amber-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all w-1/2"
                      >
                        <div className="relative w-full h-24 bg-neutral-200">
                          <Image
                            src={menu.imageUrl || "/IconBlack.jpeg"}
                            alt={menu.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="py-2 text-center bg-amber-50">
                          <p className="font-semibold text-gray-800 text-sm">
                            {menu.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Jika bukan 3 item → tetap grid biasa
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  {menuFavoriteProducts?.map((menu) => (
                    <div
                      key={menu.id}
                      className="bg-white border border-amber-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
                    >
                      <div className="relative w-full h-24 bg-neutral-200">
                        <Image
                          src={menu.imageUrl || "/IconBlack.jpeg"}
                          alt={menu.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="py-2 text-center bg-amber-50">
                        <p className="font-semibold text-gray-800 text-sm">
                          {menu.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ===== MENU LAINNYA ===== */}
      {(menuLainnyaProducts || []).length > 0 && (
        <div className="bg-white/5 border border-amber-400/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-amber-600">
            Menu Lainnya
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(menuLainnyaProducts || []).map((menu) => (
              <div
                key={menu.id}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 text-center border-2 border-amber-200 transition-all hover:shadow-md flex items-center justify-center"
              >
                <p className="text-base font-semibold text-gray-800 break-words">
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
