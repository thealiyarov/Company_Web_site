import React from "react";
import "./Maincenter.css";
import itemmain from "../../Assets/ledmain.svg";
import led1 from "../../Assets/led1.svg";
import led2 from "../../Assets/led2.svg";
import led3 from "../../Assets/led3.svg";
import rectangle from "../../Assets/Rectangle.svg";
import rectangle2 from "../../Assets/Rectangle2.svg";
import sun from "../../Assets/sun.svg";

function Maincenter() {
  return (
    <div className="maincenter w-[100%] pt-[50px] pb-[50px] flex flex-col items-center bg-[#071341] h-auto">
      <div className="maincenter-top flex flex-col items-center w-[62%] ">
        <div className="maincenter-top container w-[100%] ">
          <div className="maincenter-top main w-[100%] mx-auto justify-center flex text-white maincenter-top ">
            <div className="item item1 flex w-[20%]  justify-between items-center">
              <div className="aytim w-[25%] flex justify-center bg-[#FF6853] rounded-[8px]">
                <img className="w-[100%] h-[100%]" src={itemmain} alt="" />
              </div>
              <div className="itemDesc w-[70%]">
                <p className="font-bold text-[16px]">+3400</p>
                <p className="text-[#8E88C1] leading-[24px]">Products</p>
              </div>
            </div>
            <div className="item item2 flex w-[20%] justify-between items-center">
              <div className="w-[25%]  flex justify-center bg-[#FF537C] rounded-[8px]">
                <img className="w-[100%]" src={led1} alt="" />
              </div>
              <div className="itemDesc w-[70%]">
                <p className="font-bold text-[16px]">+1200</p>
                <p className="text-[#8E88C1] leading-[24px]">Products</p>
              </div>
            </div>
            <div className="item item3 flex w-[20%]  justify-between items-center">
              <div className="w-[25%]  flex justify-center bg-[#80D2C4] rounded-[8px]">
                <img className="w-[100%]" src={led2} alt="" />
              </div>
              <div className="itemDesc w-[70%]">
                <p className="font-bold text-[16px]">+800...</p>
                <p className="text-[#8E88C1] leading-[24px]">Products</p>
              </div>
            </div>
            <div className="item item4 flex w-[20%]  justify-between items-center">
              <div className="w-[25%]  flex justify-center bg-[#3F50E7] rounded-[8px]">
                <img className="w-[100%]" src={led3} alt="" />
              </div>
              <div className="itemDesc w-[70%]">
                <p className="font-bold text-[16px]">+500</p>
                <p className="text-[#8E88C1] leading-[24px]">Products</p>
              </div>
            </div>
          </div>
          <div className="maincenter-top line w-[100%] h-[1px] bg-[#8E88C1] mt-[50px] mx-auto "></div>
        </div>
      </div>
      <div className="maincenter-center  pt-[34px] flex flex-col items-center mx-auto w-[62%] text-white">
        <div className="header-container w-[80%] text-[10px] ">
          <p className="header text-center text-[36px] font-bold">
            The main goal of the company is the development, production and
            distribution of lighting equipment of the highest quality
          </p>
        </div>
        <div className="header-container text-[#8E88C1] text-[16px] pt-[15px] w-[50%] ">
          <p className="text text-center  font-medium">
            It is very important for us to keep up with the times
          </p>
        </div>
      </div>
      <div className="maincenter-end w-[100%] flex justify-center mt-[50px]">
        <div className="w-[62%] flex justify-center">
          <div className="w-[20%] h-[300px] flex flex-col items-center relative rounded-[8px]  bg-white ">
            <div>
              <img src={rectangle} alt="" />
            </div>
            <div className="absolute top-[44px] w-[82%] h-[52px] flex">
              <img className="w-[26%]" src={rectangle2} alt="" />
              <p className="text-white">Технологическая ячейка uLite</p>
            </div>
            <div className="mt-[6px]">
              <p className="text-[#8E88C1]">One position</p>
            </div>
            <button className="w-[118px] h-[30px] mt-[70px] bg-[#3F50E7] text-white rounded-[20px] ">
              Button
            </button>
          </div>
          <div className="card w-[21%] h-[206px] border-solid border-[2px] border-[#8E88C1] rounded-[8px] ml-[32px] ">
            <div className="flex flex-col items-center pt-[44px]">
              <img src={sun} alt="dasd" />
              <p className="text-[#8E88C1] mt-[26px]">One position</p>
            </div>
          </div>
          <div className="card w-[20%] h-[206px] border-solid border-[2px] border-[#8E88C1] rounded-[8px] ml-[32px] ">
            <div className="flex flex-col items-center pt-[44px]">
              <img src={sun} alt="dasd" />
              <p className="text-[#8E88C1] mt-[26px]">One position </p>
            </div>
          </div>
          <div className="card w-[20%] h-[206px] border-solid border-[2px] border-[#8E88C1] rounded-[8px] ml-[32px] ">
            <div className="flex flex-col items-center pt-[44px]">
              <img src={sun} alt="dasd" />
              <p className="text-[#8E88C1] mt-[26px] text-center ">
                One position
              </p>
            </div>
          </div>
          <div className="card w-[20%] h-[206px] border-solid border-[2px] border-[#8E88C1] rounded-[8px] ml-[32px] ">
            <div className="flex flex-col items-center pt-[44px]">
              <img src={sun} alt="dasd" />
              <p className="text-[#8E88C1] mt-[26px] text-center ">
                One position
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincenter;
