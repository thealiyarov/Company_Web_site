import React from "react";
import Map from "../../../Component/Mainbottom/Map";
import './Office.css'
function Office(props) {
  return (
    <div className="officeMain bg-[#071341] flex flex-col items-center">
      <div className="office flex w-[62%] gap-[15px] justify-center mt-[20px] mb-[20px]">
        <div className="office-left w-[80%]  flex">
          <div className="officeImage flex justify-center items-center w-[30%]">
          <img
            className="w-[200px] rounded-[8px]"
            src={props.img}
            alt=""
          />
          </div>
          <div className="itemborderOffice w-[1px] h-[200px] ml-[15px] border-solid-1px border border-[#8E88C1]"></div>
          <div className="officeDesc flex gap-[50px] ml-[10px] w-[70%]">
            <p className="officeName w-[50%] h-auto flex justify-center items-center  break-all text-[30px] text-center font-bold text-white ">
              {props.name}
            </p>
            <div className="details w-[100%] flex flex-col gap-[30px] justify-center  text-[#847fb6]">
            <p className="adress">{props.adress}</p>
            <p className="tel">{props.tel}</p>
            <p className="email">{props.mail}</p>
            </div>
          </div>
        </div>
        <div className="officeMap w-[20%] flex items-center justify-center ">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Office;
