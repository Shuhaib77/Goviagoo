import React from "react";

function Menu({ setMenu }) {
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
  ];

  return (
    <>
      <div
        className=" h-full w-1/2 float-right absolute top-0 right-0 z-10 bg-white  shadow-sm"
        onClick={() => {
          setMenu(false);
        }}
      >
        {data.splice(0, 1).map((item) => {
          return (
            <div className=" text-center flex justify-start items-center">
              <h1>
                <img src={item.icon} alt="" className="w-[50px] h-[50px]" />
              </h1>
              <h1>{item.name}</h1>
            </div>
          );
        })}
        {data.map((item) => {
          return (
            <div className="mt-10 text-center">
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
