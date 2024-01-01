import React, { useEffect, useState } from "react";

function Map() {
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
    <div className="Mainbottom flex w-[100%] flex-col items-center bg-[#24204A] ">
      <div className="w-[100%] relative">
      <iframe title="map"
        className="relative  w-[100%] h-[200px]"
        src={`https://maps.google.com/?q=${position1.lat},${position1.long}&output=embed&z=13`}
        frameborder="0"
      ></iframe>
      </div>
    </div>
  );
}

export default Map;
