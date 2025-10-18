import { Store } from "@/lib/types";
import React from "react";

const MenuList = ({ store }: { store: Store }) => {
  return (
    <section className="border-t-2 border-amber-600 pt-6 grid grid-cols-3 gap-x-6 text-center">
      {/* {categories.map((category) => (
        <div
          key={category}
          className="flex flex-col gap-3 space-y-2 border-r-2 border-white last:border-r-0 pr-6"
        > */}
      {/* <h3 className="text-xl font-bold mb-2">{category}</h3> */}
      {/* {menu[category].map((item) => (
            <p key={item.name} className="text-lg">
              {item.name}
            </p>
          ))}
        </div> */}
      {/* ))} */}
      <div className="flex flex-col gap-3 space-y-2 border-r-2 border-amber-600 last:border-r-0 pr-6">
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
      </div>
      <div className="flex flex-col gap-3 space-y-2 border-r-2 border-amber-600 last:border-r-0 pr-6">
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
      </div>
      <div className="flex flex-col gap-3 space-y-2 border-r-2 border-amber-600 last:border-r-0 pr-6">
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
        <h2>MenuList</h2>
      </div>
    </section>
  );
};

export default MenuList;
