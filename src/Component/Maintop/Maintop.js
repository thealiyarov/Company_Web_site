import React from "react";
import './Maintop.module.css'
import ideaimage from '../../Assets/idea.svg'

function Maintop() {
  return (
    <div className="maintop pt-[46px] flex  h-[595px] bg-[#24204A]">
      <div className="maintop-main w-[1170px]  flex justify-between mx-auto">
        <div className="maintop-left  w-[573px] h-[393px]">
          <button className="w-[145px] h-[41px] mt-[30px] mb-[38px] bg-[#4B4864] rounded-[8px] text-[#8E88C1] ">One position</button>
          <p className="text-[36px] text-white font-bold">One position</p>
          <p className="text-[#8E88C1] mt-[27px] text-[16px] leading-[130%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            voluptatum rem magnam et nam omnis corporis accusamus amet quos
            placeat dolor temporibus, optio eum ipsum minima, iste deleniti
            nisi? Enim?
          </p>
          <button className="w-[200px] h-[56px] bg-[#3F50E7] text-white rounded-[8px] mt-[50px] ">Button</button>
        </div>
        <div className="maintop-right w-[470px] h-[506px]"><img src={ideaimage} alt="Ideaimage" /></div>
      </div>
    </div>
  );
}

export default Maintop;
