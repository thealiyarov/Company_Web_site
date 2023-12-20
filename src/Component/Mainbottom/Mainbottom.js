import React, { useEffect, useState } from "react";
import Form from "./Form";

function Mainbottom() {
  const [current, setCurrent] = useState(null);
  const [position1, setPosition] = useState({ long: "", lat: "" });

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        current.innerHTML = "Geolocation is not supported by this browser.";
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
    <div className="Mainbottom flex flex-col items-center h-[664px] bg-[#24204A] ">
      <h1 className="w-[899px] text-[36px] font-bold text-white text-center mt-[50px] mb-[50px] leading-[42px]">Here you will find all the necessary information about the products manufactured by our company</h1>
      <iframe
        className="relative w-[1170px] h-[480px]"
        src={`https://maps.google.com/?q=${position1.lat},${position1.long}&output=embed`}
        frameborder="0"
      ></iframe>
      <Form/>
    </div>
  );
}

export default Mainbottom;
