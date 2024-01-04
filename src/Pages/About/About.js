import React, { useState } from "react";
import Slider from "./Slider";

function About() {

  const [acikIndex,setAcikIndex]=useState(1) 

  const handleDetayClick = (index,e) => {
    e.preventDefault()
    setAcikIndex(index);
  };
  
  return (
    <div className="topContainer flex flex-col items-center  bg-footColor">
      <div className="aboutTop w-[100%] flex justify-center bg-navColor">
        <div className="top w-[62%] flex mt-[20px] mb-[20px] justify-between ">
          <div className="topLeft w-[55%]">
            <h1 className="text-white text-[36px] mb-[20px]">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-textColor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              nulla nobis velit? Consectetur omnis, explicabo quis molestias
              veniam ad nobis! Officia voluptatibus repellat earum provident,
              cupiditate doloribus at repellendus praesentium libero saepe, nemo
              magni modi magnam ullam? Fugiat, voluptates doloribus sapiente
              alias enim aspernatur animi iure rerum culpa commodi quisquam
              omnis voluptas aperiam sint totam nemo harum velit maiores sequi?.
            </p>
          </div>
          <div className="topRight flex flex-col gap-[10px] text-white w-[40%]">
            <div className="detailsContainer rounded-[8px] ">
              <details  open={acikIndex === 1}  className="mb-[5px]" onClick={(e) => handleDetayClick(1,e)}>
                <summary className="list-none bg-footColor py-[8px] pl-[10px] rounded-[6px] font-bold cursor-pointer">
                  Lorem, ipsum dolor.
                </summary>
                <p className="break-words text-textColor px-[10px] py-[6px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus nisi velit vel repellendus accusantium earum natus
                  optio ratione distinctio dolorum, libero voluptate suscipit
                  voluptatum minima beatae molestiae, totam nulla. At?
                </p>
              </details>
            </div>
            <div className="detailsContainer rounded-[8px] ">
              <details  open={acikIndex === 2}  className="mb-[5px]" onClick={(e) => handleDetayClick(2,e)}>
                <summary className="list-none bg-footColor py-[8px] pl-[10px] rounded-[6px] font-bold cursor-pointer">
                  Lorem, ipsum dolor.
                </summary>
                <p className="break-words text-textColor px-[10px] py-[6px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus nisi velit vel repellendus accusantium earum natus
                  optio ratione distinctio dolorum, libero voluptate suscipit
                  voluptatum minima beatae molestiae, totam nulla. At?
                </p>
              </details>
            </div>
            <div className="detailsContainer rounded-[8px] ">
              <details  open={acikIndex === 3}  className="mb-[5px]" onClick={(e) => handleDetayClick(3,e)}>
                <summary className="list-none bg-footColor py-[8px] pl-[10px] rounded-[6px] font-bold cursor-pointer">
                  Lorem, ipsum dolor.
                </summary>
                <p className="break-words text-textColor px-[10px] py-[6px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus nisi velit vel repellendus accusantium earum natus
                  optio ratione distinctio dolorum, libero voluptate suscipit
                  voluptatum minima beatae molestiae, totam nulla. At?
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutBottom w-[100%] flex flex-col items-center py-[50px]">
        <h1 className="text-white  text-[36px] text-center w-[30%] font-bold leading-[40px]">
          We know the formula of a successful partnership
        </h1>
        <p className="text-textColor text-center w-[40%] mt-[20px]">
          We carefully attend to the wishes and needs of each customer and
          strive to deliver the best. With a focus on customer satisfaction, we
          continuously work to improve the quality of our services. Adopting an
          open approach to feedback, we aim to provide solution-oriented
          services by engaging with our customers. We make every effort to meet
          the expectations of each customer and ensure their satisfaction is
          maintained at the highest level.
        </p>
      </div>
      <div className="aboutSlider w-[62%] flex  justify-center pb-[100px] bg-footColor">
        <Slider />
      </div>
    </div>
  );
}

export default About;
