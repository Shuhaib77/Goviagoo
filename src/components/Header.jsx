import React from "react";
import image from "../assets/images/home_con.png";
import { Button } from "@material-tailwind/react";

function Header() {
  const data = [
    { name: "Goviagoo", icon: image },
    { name: "home", icon: "" },
    { name: "Road trip", icon: "" },
    { name: "Destination", icon: "" },
    { name: "Dashboard", icon: "" },
    { name: "Go to map", icon: "" },
    { name: "Aboutus", icon: "" },
    {
      name: (
        <i
          class="fa-solid fa-magnifying-glass fa-xl"
          style={{ color: "#000000" }}
        ></i>
      ),
      icon: "",
    },
    {
      name: "signin",
      icon: (
        <i
          class="fa-solid fa-magnifying-glass"
          style={{ color: "#000000" }}
        ></i>
      ),
    },
  ];
  return (
    <>
      <div className="flex justify-around items-center w-full   ">
        <div className=" w-[25%] ">
          {data.splice(0, 1).map((item) => {
            return (
              <div className=" flex w-full justify-start items-center">
                <img src={item.icon} alt="" className="w-[80px] h-[70px] " />
                <h1 className="text-green-700 text-lg font-extrabold ">
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex w-full justify-between ml-5    ">
          {data.splice(1, 6).map((item) => {
            return (
              <div className="">
                <h1 className="">{item.name}</h1>
              </div>
            );
          })}
        </div>
        <div className="w-[25%]">
          {data.splice(1, 1).map((item) => {
            return (
              <div className="flex justify-end items-center w-full">
                {/* <h1> {item.icon}</h1> */}
                <Button className="mr-4">{item.name}</Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Header;
