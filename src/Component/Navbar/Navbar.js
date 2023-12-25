import React from "react";
import {Outlet,NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png"
import "./Navbar.module.css"

function Navbar() {
  return (
    <div className="flex bg-[#24204A] ">
      <div className=" flex flex-col  mx-auto h-[72px] justify-center">
      <div className="navbar-main  text-white   w-[1170px] h-[72px] flex justify-between items-center">
        <div className="navbar-left">
        <li className="list-none"><NavLink to="/"> <img className="w-[150px]" src={logo} alt="logo" /></NavLink></li>
        </div>
        <div className=" navbar-right  ">
          <ul className="flex gap-[60px] text-[#a7a6b7]">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li className="flex gap-[14px]"><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="w-[1170px] h-[1px] bg-[#a7a6b7] "></div>
      
    </div>
    <Outlet />
    </div>
  );
}

export default Navbar;

