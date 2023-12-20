import React from "react";
import './Maincenter.module.css'
import itemmain from "../../Assets/ledmain.svg";
import led1 from "../../Assets/led1.svg";
import led2 from "../../Assets/led2.svg";
import led3 from "../../Assets/led3.svg";
import led4 from "../../Assets/led4.svg";
import rectangle from "../../Assets/Rectangle.svg";
import rectangle2 from "../../Assets/Rectangle2.svg";
import sun from "../../Assets/sun.svg";

function Maincenter() {
  return (
    <div className="maincenter pt-[50px] bg-[#071341] h-[764px] ">
      <div className="maincenter-top ">
        <div className=" w-[1400px] mx-auto justify-center gap-[123px] flex text-white maincenter-top ">
          <div className="flex item1 gap-[18px] items-center">
            <div className="w-[56px] h-[56px] flex justify-center bg-[#FF6853] rounded-[8px]">
              <img className="w-[40px]" src={itemmain} alt="s" />
            </div>
            <div>
              <p className="font-bold text-[16px]">+3400</p>
              <p className="text-[#8E88C1] leading-[24px]">Products</p>
            </div>
          </div>
          <div className="flex item2 gap-[18px] items-center">
            <div className="w-[56px] h-[56px] flex justify-center bg-[#FF537C] rounded-[8px]">
              <img className="w-[40px]" src={led1} alt="" />
            </div>
            <div>
              <p className="font-bold text-[16px]">+1200</p>
              <p className="text-[#8E88C1] leading-[24px]">Products</p>
            </div>
          </div>
          <div className="flex item3 gap-[18px] items-center">
            <div className="w-[56px] h-[56px] flex justify-center bg-[#80D2C4] rounded-[8px]">
              <img className="w-[40px]" src={led2} alt="" />
            </div>
            <div>
              <p className="font-bold text-[16px]">+800</p>
              <p className="text-[#8E88C1] leading-[24px]">Products</p>
            </div>
          </div>
          <div className="flex item4 gap-[18px]  items-center">
            <div className="w-[56px] h-[56px] flex justify-center bg-[#3F50E7] rounded-[8px]">
              <img className="w-[40px]" src={led3} alt="" />
            </div>
            <div>
              <p className="font-bold text-[16px]">+500</p>
              <p className="text-[#8E88C1] leading-[24px]">Products</p>
            </div>
          </div>
          <div className="flex item5 gap-[18px] items-center">
            <div className="w-[56px] h-[56px]  flex justify-center bg-[#95CB7C] rounded-[8px]">
              <img className="w-[60px]" src={led4} alt="" />
            </div>
            <div>
              <p className="font-bold text-[16px]">+900</p>
              <p className="text-[#8E88C1] leading-[24px]">Products</p>
            </div>
          </div>
        </div>
        <div className="w-[1170px] h-[1px] bg-[#8E88C1] mt-[50px] mx-auto "></div>
      </div>
      <div className="maincenter-center  pt-[34px] flex flex-col items-center mx-auto w-[1170px] text-white">
        <div className="w-[1000px]  text-[36px] ">
          <p className="text-center font-bold"> 
            The main goal of the company is the development, production and
            distribution of lighting equipment of the highest quality
          </p>
        </div>
        <div className="text-[#8E88C1] text-[16px] pt-[15px] w-[1074px] ">
          <p className="text-center font-medium">It is very important for us to keep up with the times</p>
        </div>
      </div>
      <div className="maincenter-end flex justify-center mt-[58px]">
        <div className="w-[208px] h-[300px] flex flex-col items-center relative rounded-[8px] bg-white ">
          <div><img src={rectangle} alt="" /></div>
          <div className="absolute top-[44px] w-[194px] h-[52px] flex">
              <img src={rectangle2} alt="" />
              <p className="text-white">Технологическая ячейка uLite</p>
          </div>
          <div className="mt-[6px]"> <p className="text-[#8E88C1]">One position</p></div>
          <button className="w-[118px] h-[30px] mt-[70px] bg-[#3F50E7] text-white rounded-[20px] ">Button</button>
        </div>
        <div className="card w-[209px] h-[206px] border-solid border-[2px] border-[#8E88C1] rounded-[8px] ml-[32px] ">
           <div className="flex flex-col items-center pt-[44px]">
            <img src={sun} alt="dasd" />
            <p className="text-[#8E88C1] mt-[26px]">One position</p>
           </div>
        </div>
        <div className="card w-[209px] h-[206px] border-solid border-[2px] border-[#8E88C1] rounded-[8px] ml-[32px] ">
           <div className="flex flex-col items-center pt-[44px]">
            <img src={sun} alt="dasd" />
            <p className="text-[#8E88C1] mt-[26px]">One position </p>
           </div>
        </div>
        <div className="card w-[209px] h-[206px] border-solid border-[2px] border-[#8E88C1] rounded-[8px] ml-[32px] ">
           <div className="flex flex-col items-center pt-[44px]">
            <img src={sun} alt="dasd" />
            <p className="text-[#8E88C1] mt-[26px] text-center w-[178px]">One position One position One position</p>
           </div>
        </div>
        <div className="card w-[209px] h-[206px] border-solid border-[2px] border-[#8E88C1] rounded-[8px] ml-[32px] ">
           <div className="flex flex-col items-center pt-[44px]">
            <img src={sun} alt="dasd" />
            <p className="text-[#8E88C1] mt-[26px] text-center w-[178px]">One position One position One position</p>
           </div>
        </div>
      
      </div>
    </div>
  );
}

export default Maincenter;