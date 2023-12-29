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
          <div className=" navbar-right w-auto  flex">
            <label className="label flex" htmlFor="check">
              <input className="checkbox " type="checkbox" name="" id="check" />
              <img className="hamburger w-[30px] " src={hamburger} alt="" />
              <ul className="ul w-[100%] flex gap-[60px] text-[#a7a6b7]">
                <li className="">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About US</NavLink>
                </li>
              </ul>
            </label>
          <div className="navbar-line w-[90%] h-[1px] bg-[#a7a6b7] "></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
