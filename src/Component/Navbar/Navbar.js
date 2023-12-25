import React from "react";
import {Outlet,NavLink } from "react-router-dom";
import logo from "../../Assets/logonav.png"
import "./Navbar.module.css"

function Navbar() {
  return (
    <div className="flex bg-[#24204A] ">
      <div className=" flex flex-col w-[100%]  mx-auto h-[72px] items-center justify-center">
      <div className="navbar-main w-[90%] h-[72px] flex justify-between items-center">
        <div className="navbar-left">
        <li className="list-none"><NavLink to="/"> <img className="w-[150px] " src={logo} alt="logo" /></NavLink></li>
        </div>
        <div className=" navbar-right  ">
          <ul className="flex gap-[60px] text-[#a7a6b7]">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li className="flex gap-[14px]"><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] h-[1px] bg-[#a7a6b7] "></div>
      
    </div>
    <Outlet />
    </div>
  );
}

export default Navbar;

