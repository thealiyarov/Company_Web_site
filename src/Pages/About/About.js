import React from "react";
import Slider from "./Slider";

function About() {
  return (
    <div className="topContainer flex flex-col items-center  bg-slate-600">
      <div className="aboutTop w-[100%] flex justify-center bg-navColor">
        <div className="top w-[1170px] flex mt-[20px] mb-[20px] justify-between ">
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
              omnis voluptas aperiam sint totam nemo harum velit maiores sequi?
            </p>
          </div>
          <div className="topRight flex flex-col gap-[10px] text-white w-[40%]">
            <div className="detailsContainer rounded-[8px] ">
            <details open className="mb-[5px]">
              <summary className="list-none bg-footColor py-[8px] pl-[10px] rounded-[6px] font-bold cursor-pointer">Lorem, ipsum dolor.</summary>
              <p className="break-words text-textColor px-[10px] py-[6px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus nisi velit vel repellendus accusantium earum natus
                optio ratione distinctio dolorum, libero voluptate suscipit
                voluptatum minima beatae molestiae, totam nulla. At?
              </p>
            </details>
            </div>
            <div className="detailsContainer rounded-[8px] ">
            <details className="mb-[5px]">
              <summary className="list-none bg-footColor py-[8px] pl-[10px] rounded-[6px] font-bold cursor-pointer">Lorem, ipsum dolor.</summary>
              <p className="break-words text-textColor px-[10px] py-[6px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus nisi velit vel repellendus accusantium earum natus
                optio ratione distinctio dolorum, libero voluptate suscipit
                voluptatum minima beatae molestiae, totam nulla. At?
              </p>
            </details>
            </div>  
            <div className="detailsContainer rounded-[8px] ">
            <details className="mb-[5px]">
              <summary className="list-none bg-footColor py-[8px] pl-[10px] rounded-[6px] font-bold cursor-pointer">Lorem, ipsum dolor.</summary>
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
      <div className="aboutBottom w-[1170px] flex justify-center bg-footColor">
        <Slider/>
      </div>
    </div>
  );
}

export default About;
