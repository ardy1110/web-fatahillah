import React from "react";

const StoreHeader = () => {
  return (
    <>
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-black">Nama Toko</h1>
      </header>

      {/* Bagian Menu */}
      <div className="text-white pb-6">
        <div className="border-2 border-white overflow-hidden mb-6 px-12">
          <div className="h-64 flex items-center justify-center bg-neutral-800 rounded-t-xl">
            Image Menu Andalan
          </div>
          <div className="p-4 text-center justify-center bg-neutral-950 border-t-2 border-white rounded-b-xl">
            <p className="font-semibold text-lg">Mana ini</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {/* {store.favoriteMenus.map((menu, index) => (
            <Card key={index} className="bg-black border-2 border-white text-center">
              <CardContent className="p-2">
                <div className="h-16 flex items-center justify-center bg-neutral-800 rounded-md mb-2">
                  Img
                </div>
                <p className="text-sm">{menu.name}</p>
              </CardContent>
            </Card>
          ))} */}
          <div className="bg-black border-2 border-white text-center rounded-xl">
            <div className="p-2">
              <div className="h-16 flex items-center justify-center bg-neutral-800 rounded-md mb-2">
                Img Fav Menu
              </div>
              <p className="text-sm">Fav Menu</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreHeader;
