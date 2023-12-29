import React from "react";
import image from "../../Assets/itemFrame.svg";
import "./Product.css";

function Items({img , itemName , itemDesc}) {
  return (
    <div className="items-container  flex justify-center w-[100%]">
      <div className="items flex justify-around gap-[70px] h-[250px] items-center  w-[62%] rounded-[8px]">
        <div className="itemleftMain w-[18%] h-auto">
          <div className="itemLeft w-[100%] h-[210px] relative flex justify-center items-center">
            <img className="leftFrame img w-[100%] h-[210px]" src={image} alt="itemframe" />
            <img className="leftImg absolute w-[60%] h-[60%]" src={img} alt="img1" />  
          </div>
        </div>
        <div className="itemborder w-[1px] h-[206px] border-solid-1px border border-[#8E88C1]"></div>
        <div className="item-right h-[206px] w-[68%]">
          <div className="item-right-container ml-[20px] mt-[20px] ">
            <div className="item-right-top w-[95%] bg-[red] text-white text-[36px] text-left">
              <h1 className=" ">{itemName}</h1>
            </div>
            <div className="item-right-bottom w-[95%] bg-[red] text-[#8E88C1] text-left text-[18px]">
              <p className="itemP w-[95%]">{itemDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;