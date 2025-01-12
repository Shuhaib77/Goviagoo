import React from "react";

function Sidebar() {
  const data = [
    {
      name: "Home",
    },
    {
      name: "SavedMap",
    },
    {
      name: "Bookings",
    },
    {
      name: "TravelDetails",
    },
  ];
  return (
    <>
      <div className="h-[100vh] w-[250px] rounded bg-blue-300 float-start flex flex-col justify-start  gap-y-14 pt-28">
        {data.map((item) => {
          return (
            <h1 className="p-3 h-[50px] ml-4 mr-4  hover:bg-white text-center rounded grid place-content-center hover:scale-105 transition-transform box-border ">
              {item.name}
            </h1>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;
