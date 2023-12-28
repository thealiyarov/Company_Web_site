import React from "react";
import logofoot from "../../Assets/logofoot.png";
import linkedin from "../../Assets/linkedin.svg";
import youtube from "../../Assets/youtube.svg";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container bg-[#071341] w-[100%]  h-[80px] flex  flex-col items-center ">
      <div className="w-[100%] flex flex-col items-center h-[100%]">
        <div className="footer-main text-[#FFF] w-[90%] flex items-center h-[100%] justify-between">
          <div className="flex logo-main w-[50%] justify-between items-center">
            <img className="logo w-[20%] cursor-pointer " src={logofoot} alt="" />
            <p className=" copyright w-[70%]">
              © All rights reserved 2019 “One position”
            </p>
          </div>
          <div className="socialMain flex gap-[8px]">
            <div className="linkedin flex items-center">
              <img
                className="w-[40px]  cursor-pointer"
                src={linkedin}
                alt="Linkedin"
              />
            </div>
            <div className="youtube flex items-center ">
              <img
                className="w-[40px] cursor-pointer"
                src={youtube}
                alt="Youtube"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
