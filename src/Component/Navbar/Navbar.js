import React from "react";
import downarrow from '../../Assets/downarrow.svg'

function Navbar() {
  return (
    <div className="flex bg-[#24204A]">
      <div className=" flex flex-col  mx-auto h-[72px] justify-center">
      <div className="navbar-main  text-white   w-[1170px] h-[72px] flex justify-between items-center">
        <div className="navbar-left">
          <p>one position</p>
        </div>
        <div className=" navbar-right  ">
          <ul className="flex gap-[60px] text-[#a7a6b7]">
            <li>Main</li>
            <li>Products</li>
            <li>Catalogs</li>
            <li className="flex gap-[14px]">Contact <img src={downarrow} alt="downarrow" /></li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="w-[1170px] h-[1px] bg-[#a7a6b7] "></div>
      
    </div>
    </div>
  );
}

export default Navbar;
