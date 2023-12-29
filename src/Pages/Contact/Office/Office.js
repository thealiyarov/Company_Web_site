import React from "react";
import Map from "../../../Component/Mainbottom/Map";

function Office(props) {
  return (
    <div className="officeMain bg-[#071341]  flex flex-col items-center">
      <div className="office flex w-[1170px] gap-[15px] justify-center mt-[20px] mb-[20px] ">
        <div className="officeImage w-[200px] h-[200px]  ">
          <img
            className="w-[200px] h-[200px] rounded-[8px]"
            src={props.img}
            alt=""
          />
        </div>
        <div className="itemborder w-[1px] h-[200px] ml-[15px] border-solid-1px border border-[#8E88C1]"></div>
        <div className="officeDesc  flex gap-[70px]  w-[660px]">
            <p className="officeName w-[150px] h-[200px] flex justify-center items-center  break-all text-[30px] text-center font-bold text-white ">
              {props.name}
            </p>
          <div className="w-[550px] flex flex-col gap-[30px] justify-center text-[#847fb6]">
            <p className="adress">{props.adress}</p>
            <p className="tel">{props.tel}</p>
            <p className="email">{props.mail}</p>
          </div>
        </div>
        <div className="officeMap flex items-center justify-center ">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Office;
