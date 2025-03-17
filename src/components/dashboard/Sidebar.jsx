import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const data = [
    { name: "Saved Map", url: "savedmap" },
    { name: "Bookings", url: "status" },
    { name: "Travel Details", url: "body" },
  ];

  const navigate = useNavigate();

  return (
    <div className="h-[85vh] w-[270px] bg-green-600 bg-opacity-90 shadow-2xl flex flex-col pt-20 px-6">
      <h2 className="text-white text-2xl font-semibold mb-10 text-center">Dashboard</h2>
      <div className="flex flex-col gap-6">
        {data.map((item, index) => (
          <button
            key={index}
            className="text-lg font-medium p-3 rounded-lg text-white text-center transition-all duration-200 hover:bg-white hover:text-green-700 hover:scale-105"
            onClick={() => navigate(`/dashboard/${item.url}`)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
