import React from "react";
import "./Maintop.css";
import ideaimage from "../../Assets/idea.svg";

function Maintop() {
  return (
    <div className="maintop pt-[46px] flex w-[100%]  h-[595px] bg-[#24204A]">
      <div className="maintop-main w-[62%]  flex justify-between mx-auto">
        <div className="maintop-left main w-[60%] h-[393px]">
          <p className="maintop-left topPosition w-[100%] text-[36px] text-white font-bold">
            One position
          </p>
          <p className="maintop-left bottomPosition w-[80%] text-[#8E88C1] mt-[27px] text-[16px] leading-[130%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias
            aperiam illum quibusdam suscipit animi eaque earum, sunt ullam
            excepturi.
          </p>
          <button className="maintop-left hover:opacity-90 button w-[25%] h-[46px] font-bold bg-[#3F50E7] text-white rounded-[8px] mt-[50px] ">
            Button
          </button>
        </div>
        <div className="maintop-right image w-[40%] h-auto">
          <img src={ideaimage} alt="Ideaimage" />
        </div>
      </div>
    </div>
  );
}

export default Maintop;
