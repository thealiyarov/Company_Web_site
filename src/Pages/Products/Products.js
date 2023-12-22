import React from "react";
import Items from "./Items/Items";

function Products() {
  return (
    <div className="bg-[#24204A]">
      <div className="h-[662px] justify-evenly flex flex-col items-center bg-[#24204A]">
        <Items />
        <Items />
      </div>
      <div  className="h-[662px] justify-evenly flex flex-col items-center bg-[#071341]">
        <Items />
        <Items />
      </div>
      <div className="h-[662px] justify-evenly flex flex-col items-center bg-[#24204A]">
        <Items />
        <Items />
      </div>
    </div>
  );
}

export default Products;
