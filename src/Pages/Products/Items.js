import React from "react";
import image from "../../Assets/itemFrame.svg";
import "./Product.css";

function Items({ img, itemName, itemDesc }) {
  return (
    <div className="items-container mb-[20px] mt-[20px] flex justify-center w-[100%]">
      <div className="items flex justify-around gap-[30px] h-[100%] items-center w-[62%] rounded-[8px]">
        <div className="itemleftMain w-[18%]  h-[100%]">
          <div className="itemLeft w-[100%] h-[100%]  relative flex justify-center items-center">
            <img
              className="leftFrame img w-[100%]  h-[100%]"
              src={image}
              alt="itemframe"
            />
            <img
              className="leftImg absolute w-[60%] h-[60%]"
              src={img}
              alt="img1"
            />
          </div>
        </div>
        <div className="itemborder w-[1px] h-[140px] border-solid-1px border border-[#8E88C1]"></div>
        <div className="item-right h-[206px] w-[100%] ">
          <div className="item-right-container w-[100%] ml-[0px] mt-[20px]">
            <div className="item-right-top w-[100%] text-white text-[25px] text-left">
              <h1 className=" itemh   w-[100%]">{itemName}</h1>
            </div>
            <div className="item-right-bottom w-[100%] text-[#8E88C1] text-left text-[14px]">
              <p className="itemP">{itemDesc}</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
