import React from "react";
import image from "./Assets/icon.svg";

function Footerli() {
  return (
    <div className="bg-[#071341]  h-[340px] flex flex-col ">
      <div className=" text-[#FFF] flex items-center justify-center space-x-36 mt-2 pb-[50px]">
        <div>
          <ul>
            <li className="font-normal mt-9 pt-5">One Blog</li>
            <li className="pt-5 text-[14px] font-normal loading-7 font-serif">
              One Position
            </li>
            <li className="pt-2 text-[14px] font-normal loading-7 font-serif">
              One Position
            </li>
            <li className="pt-2 text-[14px] font-normal loading-7 font-serif">
              One Position
            </li>
            <li className="pt-2 text-[14px] font-normal loading-7 font-serif">
              One Position
            </li>
            <li className="pt-2 text-[14px] font-normal loading-7 font-serif">
              One Position
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="font-normal mt-9 pt-5 text-[16px] loading-7 font-serif">
              Our production
            </li>
            <li className="pt-5 text-[14px] font-normal loading-7 font-serif">
              One Position
            </li>
            <li className="pt-2 text-[14px] font-normal loading-7 font-serif">
              One Position
            </li>
            <li className="pt-2 text-[14px] font-normal loading-7 font-serif">
              One Position
            </li>
            <li className="pt-2 text-[14px] font-normal loading-7 font-serif">
              One Position
            </li>
            <li className="pt-2 text-[14px] font-normal loading-7 font-serif">
              One Position
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="font-bold mb-5">Мы в соц. сетях</li>
            <li className="font-bold mb-[69px]">
              <img src={image} />
            </li>
          </ul>
        </div>
        <br />
      </div>
      <div>
        <h className="ml-[560px] text-[#fff] mb-[15px]  font-medium mt-9 pt-5 text-[12px] loading-7 font-serif">
          © All rights reserved 2019 “One position”
        </h>
      </div>
    </div>
  );
}

export default Footerli;
