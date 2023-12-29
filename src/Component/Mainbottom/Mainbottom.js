import React, { useEffect, useState } from "react";
import Form from "./Form";
import "./Mainbottom.css";

function Mainbottom() {
  const [position1, setPosition] = useState({ long: "", lat: "" });

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    }

    function showPosition(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      setPosition({ lat, long });
    }

    getLocation();
  }, []);

  return (
    <div className=" w-[100%] bg-[#24204A] flex h-[100%] justify-center">
      <div className="mainbottom container w-[62%]    flex flex-col items-center h-[680px] pb-[30px] bg-[#24204A] ">
        <h1 className="mainbottom h1 text-[36px] font-bold text-white w-[100%] h-auto text-center pt-[50px] pb-[50px] ">
          Here you will find all the necessary information about the products
          manufactured by our company
        </h1>
        <div className="mainbottom map relative w-[100%] h-[100%]">
          <iframe
            title="map "
            className="relative iframe-map  w-[100%] h-[100%]"
            src={`https://maps.google.com/?q=${position1.lat},${position1.long}&output=embed`}
            frameborder="0"
          ></iframe>
          <Form absolute="absolute" />
        </div>
      </div>
    </div>
  );
}

export default Mainbottom;
