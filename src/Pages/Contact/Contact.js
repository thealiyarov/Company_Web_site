import React from "react";
import Mainbottom from "../../Component/Mainbottom/Mainbottom";
import Office from "../../Pages/Contact/Office/Office";
import Communication from "./Communication/Communication";
import officeBuilding1 from "../../Assets/OfficeBuilding1.jpg";
import officeBuilding2 from "../../Assets/OfficeBuilding2.jpg";

function Contact() {
  return (
    <div>
      <Communication />
      <Office
        img={officeBuilding1}
        name="Office 1"
        adress="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        tel="+99999999999"
        mail="example1@example.com"
      />
      <Office
        img={officeBuilding2}
        name="Office 2"
        adress="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, aliquid. Sint, quidem."
        tel="+88888888888"
        mail="example2@example.com"
      />
      <Mainbottom />
    </div>
  );
}

export default Contact;
