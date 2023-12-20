import React, { useEffect, useState } from "react";

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
      <iframe
        className="relative w-[1170px] h-[480px]"
        src={`https://maps.google.com/?q=${position1.lat},${position1.long}&output=embed`}
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Mainbottom;
