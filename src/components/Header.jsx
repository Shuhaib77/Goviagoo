import React, { useState } from "react";
// import image from "../../pu";
import { Button } from "@material-tailwind/react";
import Menu from "./header/Menu";
import { useNavigate, useParams } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const { url } = useParams();
  console.log(url);

  const data = [
    { name: "Goviagoo", icon: "/assets/images/home_con.png", url: "home" },
    { name: "home", icon: "", url: "home" },
    { name: "Road trip", icon: "", url: "roadmap" },
    { name: "Destination", icon: "", url: "destination" },
    { name: "Dashboard", icon: "", url: "Dashboarde" },
    { name: "Go to map", icon: "", url: "mapselect" },
    { name: "Aboutus", icon: "", url: "about" },
    {
      name: "reviews",
      icon: "",
      url: "review",
    },

    {
      name: "signin",
      icon: (
        <i
          class="fa-solid fa-magnifying-glass"
          style={{ color: "#000000" }}
        ></i>
      ),
      url: "",
    },
  ];

  return (
    <>
      {/* <div>{menu && <Menu setMenu={setMenu} />}</div> */}
      <div className="flex justify-around sm:justify-between items-center w-full sticky  bg-white top-0     ">
        <div className=" lg:w-25% ">
          {data.splice(0, 1).map((item) => {
            return (
              <div className=" flex w-full justify-start items-center">
                <img src={item.icon} alt="" className="w-[80px] h-[70px] " />
                <h1
                  className="text-green-700 text-lg cursor-pointer font-extrabold "
                  onClick={() => {
                    navigate(`/${item?.url}`);
                  }}
                >
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="  lg:flex w-[120vh] h-5 justify-around   md:block hidden ">
          {data.splice(1, 6).map((item) => {
            return (
              <div className=" ">
                <h1
                  className="hover:border-b-2 w-fit h-fit cursor-pointer border-green-400 "
                  onClick={() => {
                    navigate(`/${item?.url}`);
                  }}
                >
                  {item.name}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="  lg:w-25%   ">
          {data.splice(1, 1).map((item) => {
            return (
              <div className="flex justify-center items-center  w-full ">
                {/* <h1>{item.icon}</h1> */}
                <Button
                  className="lg:mr-4 "
                  onClick={() => {
                    navigate(`/${item?.url}`);
                  }}
                >
                  {item.name}
                </Button>
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
