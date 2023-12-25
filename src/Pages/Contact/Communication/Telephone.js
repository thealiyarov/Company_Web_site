import React from "react";
import imgFrame from "../../../Assets/itemFrame.svg";

export default function Telephone(props) {
  return (
    <div className="telephone w-[280px] text-white flex flex-col items-center h-[200px]">
      <div className="image relative flex justify-center items-center mt-[10px] ">
        <img className="w-[80px] h-[80px] " src={imgFrame} alt="" />
        <img
          className="w-[40px] h-[40px] absolute "
          src={props.Img}
          alt="telephone"
        />
      </div>
      <div className="desc flex flex-col items-center">
        <h1 className="name text-[21px] mb-[10px] mt-[10px]">{props.name}</h1>
        <p className="phone text-center">{props.desc1}</p>
        <p className="phone text-center">{props.desc2}</p>
      </div>
    </div>
  );
}
