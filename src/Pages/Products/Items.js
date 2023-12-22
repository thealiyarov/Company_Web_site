import React from "react";
import image from "../../Assets/itemFrame.svg";
import item_img1 from "../../Assets/item_img1.svg";

function Items() {
  return (
    <div className="items-container flex justify-center  ">
      <div className="items flex justify-around gap-[70px] h-[250px] items-center  w-[1170px] rounded-[8px]">
        <div className="item-left">
          <div className="w-[210px] h-[210px] relative flex justify-center items-center">
            <img className="w-[210px] h-[210px]" src={image} alt="itemframe" />
            <img className="absolute w-[60%] h-[60%]" src={item_img1} alt="img1" />  
          </div>
        </div>
        <div className="item-right border-1px-solid border border-[#8E88C1] rounded-[8px] h-[206px] w-[800px]">
          <div className="item-right-container ml-[20px] mt-[20px] ">
            <div className="item-right-top text-white text-[36px] text-left">
              <h1>Item Name</h1>
            </div>
            <div className="item-right-bottom text-[#8E88C1] text-left text-[18px]">
              <p>Item Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;