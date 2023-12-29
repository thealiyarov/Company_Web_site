import React from "react";
import {  NavLink } from "react-router-dom";
import logo from "../../Assets/logonav.png";
import hamburger from "../../Assets/hamburger-menu.svg";
import "./Navbar.css";

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
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/catalogs">Catalogs</NavLink></li>
              <li className="flex gap-[14px]"><NavLink to="/contact">Contact</NavLink><img src={downarrow} alt="downarrow" /></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
          </div>
          <div className="navbar-line w-[90%] h-[1px] bg-[#a7a6b7] "></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
