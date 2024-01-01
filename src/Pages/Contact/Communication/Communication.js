import React from "react";
import linkedin from "../../../Assets/linkedin.svg";
import youtube from "../../../Assets/youtube.svg";
import locationIMg from "../../../Assets/location.svg";
import mailImg from "../../../Assets/mail.svg";
import telImg from "../../../Assets/telephone.svg";
import Telephone from "../Communication/Telephone";
import "./Communication.css";

function Communication() {
  return (
    <div className="Communication-container flex justify-center bg-navColor">
      <div className="Communication-main flex w-[62%] gap-[20px] items-center justify-center h-[500px] ">
        <div className="Communation-left w-[77%] h-auto flex">
          <Telephone Img={telImg} name="Telephone" desc1="+99999999999" desc2="+88888888888" />
          <Telephone Img={mailImg} name="E-mail" desc1="example1@example.com" desc2="example2@example.com" />
          <Telephone Img={locationIMg} name="Headquarter" desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam." />
        </div>
        <div className="Communation-right w-[21%]">
          <div className="socialMain">
            <div className="linkedin flex items-center">
              <img
                className="w-[60px]  cursor-pointer"
                src={linkedin}
                alt="Linkedin"
              />
              <p className="ml-[10px] cursor-pointer text-white">Linkedin</p>
            </div>
            <div className="youtube flex items-center ">
              <img
                className="w-[60px] cursor-pointer"
                src={youtube}
                alt="Youtube"
              />
              <p className="ml-[10px] cursor-pointer text-white">Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communication;
