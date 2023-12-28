import React from "react";
import {Outlet,NavLink } from "react-router-dom";
import logo from "../../Assets/logonav.png"
import hamburger from "../../Assets/hamburger-menu.svg"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="flex bg-[#24204A] ">
      <div className="navbar-container flex flex-col w-[100%]  mx-auto h-[72px] items-center justify-center">
      <div className="navbar-main w-[90%] pl-[0px] h-[72px] flex justify-between items-center">
        <div className="navbar-left w-[50%]">
        <li className="list-none"><NavLink to="/"> <img className="w-[150px] " src={logo} alt="logo" /></NavLink></li>
        </div>
        <div className=" navbar-right w-auto  flex">
          <label className="label flex" htmlFor="check">
            <input className="checkbox hidden" type="checkbox" name="" id="check" />
            <img className="w-[30px] hidden" src={hamburger} alt="" />
            <ul className="ul flex gap-[60px] text-[#a7a6b7]">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li className="flex gap-[14px]"><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          </label>
          
        </div>
      </div>
      <div className="w-[90%] h-[1px] bg-[#a7a6b7] "></div>
      
    </div>
    <Outlet />
    </div>
  );
}

export default Navbar;

