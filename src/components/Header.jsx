import React, { useState } from "react";
// import image from "../../pu";
import { Button } from "@material-tailwind/react";
import Menu from "./header/Menu";

function Header() {
  const data = [
    { name: "Goviagoo", icon: "/assets/images/home_con.png" },
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

  const [menu, setMenu] = useState(false);
  return (
    <>
      <div>{menu && <Menu setMenu={setMenu} />}</div>
      <div className="flex justify-around sm:justify-between items-center w-full     ">
        <div className=" lg:w-25% ">
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
        <div className="  lg:flex w-[120vh] justify-around  md:block hidden ">
          {data.splice(1, 6).map((item) => {
            return (
              <div className=" ">
                <h1 className="">{item.name}</h1>
              </div>
            );
          })}
        </div>
        <div className="  lg:w-25%   ">
          {data.splice(1, 1).map((item) => {
            return (
              <div className="flex justify-center items-center  w-full ">
                {/* <h1>{item.icon}</h1> */}
                <Button className="lg:mr-4">{item.name}</Button>
              </div>
            );
          })}
        </div>
        <i
          class="fa-solid fa-bars fa-2xl lg:hidden"
          style={{ color: "#232323" }}
          onClick={() => {
            menu ? setMenu(false) : setMenu(true);
          }}
        ></i>
      </div>
    </>
  );
}

export default Header;
