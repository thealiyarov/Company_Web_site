import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logonav.png";
import hamburger from "../../Assets/hamburger-menu.svg";
import "./Navbar.css";

function Navbar() {
  const [closeToggle, setClosetoggle] = useState(true);
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setClosetoggle(!closeToggle);
  }

  function liFn() {
    setMenu(true);
    
  }

  useEffect(() => {
    if (closeToggle) {
      setMenu(false);
    }
  }, [closeToggle]);

  return (
    <div className="flex bg-[#24204A] flex-col w-[100%]">
      <div className="navbar-container flex flex-col w-[100%]  mx-auto h-[72px] items-center justify-center">
        <div className="navbar-main w-[90%] pl-[0px] h-[72px] flex justify-between items-center">
          <div className="navbar-left w-[50%]">
            <li className="list-none">
              <NavLink to="/">
                <img className="w-[150px] " src={logo} alt="logo" />
              </NavLink>
            </li>
          </div>
          <div className=" navbar-right w-auto  flex">
            <label className="label flex" htmlFor="check">
              <input className="checkbox " type="checkbox" name="" id="check" />
              <img
                onClick={toggleMenu}
                className="hamburger w-[30px] "
                src={hamburger}
                alt=""
              />
              <ul
                className={`ul w-[100%] flex gap-[60px] text-[#a7a6b7]  ${
                  menu ? "toggleUl" : " "
                } `}
              >
                <li className="">
                  <NavLink onClick={liFn} to="/">
                    Home
                  </NavLink>
                </li>
                <li onClick={liFn}>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li onClick={liFn}>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li onClick={liFn}>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </label>
          </div>
        </div>
        <div className="navbar-line w-[90%] h-[1px] bg-[#a7a6b7] "></div>
      </div>
    </div>
  );
}

export default Navbar;
