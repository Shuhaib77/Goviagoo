import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-full mt-10">
        <div className="w-full h-[100px] text-white text-center grid place-content-center  bg-black">
          <h1>Don't know which destination to choose?</h1>
          <h1>Call Us (858) 577-3477</h1>
        </div>
        <div className=" w-full  h-full lg:p-10 flex flex-col text-center  lg:flex-row justify-around items-center">
          <div className="" >
            <h1>Travel Agency </h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur. Enim nulla suscipit leo{" "}
              <br /> integer bibendum ultrices. Nulla sed arcu <br /> amet
              montes tellus sit sem quis.{" "}
            </h1>
          </div>
          <div>
            <h1>Destinations</h1>
            <h1>Destinations</h1>
            <h1>Destinations</h1>
            <h1>Destinations</h1>
          </div>
          <div>
            <h1>Useful Links </h1>
          </div>
          <div>
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
