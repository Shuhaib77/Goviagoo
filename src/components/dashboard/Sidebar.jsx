import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Sidebar() {
  const data = [
    // {
    //   name: "Home",
    //   url:"/"
    // },
    {
      name: "SavedMap",
      url: "savedmap",
    },
    {
      name: "Bookings",
      url: "status",
    },
    {
      name: "TravelDetails",
      url: "body",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="h-[100vh] w-[250px] rounded shadow-xl bg-blue-800 bg-opacity-90 float-start flex flex-col justify-start  gap-y-14 pt-28">
        {data.map((item) => {
          return (
            <h1
              className="p-3 h-[50px] ml-4 mr-4  hover:bg-white text-center rounded grid place-content-center hover:scale-105 transition-transform box-border  "
              onClick={() => {
                navigate(`/dashboard/${item.url}`);
              }}
            >
              {item.name}
            </h1>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;
