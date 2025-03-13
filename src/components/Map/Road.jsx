import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savedmapDetails } from "../../../Redux/saveSlice";
import Liveupdate from "./Liveupdate";

function Road() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.savedmaps);
  const id = localStorage.getItem("id");

  useEffect(() => {
    dispatch(savedmapDetails(id));
  }, [dispatch, id]);

  const [dest, setDest] = useState(null);
  const [view, setView] = useState(false);

  const savedDestinations = (ids) => {
    setDest(ids);
    setView(true);
  };

  return (
    <div
      className="h-screen w-full overflow-auto flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/01/06/19/15/road-1958388_1280.jpg")`,
      }}
    >
      {/* Dark Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <h1 className="text-5xl font-bold text-white shadow-md mt-5 p-5 bg-gray-900 bg-opacity-70 rounded-lg relative z-10">
        🚗 Your Journey RoadMap
      </h1>

      <div className="relative w-5/6 h-[70vh] flex justify-center items-center z-10">
        {/* SVG Road Path with Neon Effect */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1500 500"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          {/* Glowing Road Path */}
          <path
            d="M 100 400 Q 400 50, 800 400 T 1500 400"
            stroke="yellow"
            strokeWidth="20"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray="20,15"
            className="animate-glow"
          />
        </svg>

        {/* Destination Markers */}
        {data?.data?.savedMap.map((item, index) => (
          <div key={index} className="absolute flex w-full justify-between">
            {item.roadmapId.map((road) =>
              road.destinations.map((dest, dIdx) => {
                const markerPosition = `${10 + dIdx * 25}%`;

                return (
                  <div
                    key={dest._id}
                    className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-125"
                    style={{ left: markerPosition, top: "50%" }}
                    onMouseEnter={() => savedDestinations(dest._id)}
                    onMouseLeave={() => setView(false)}
                  >
                    <i className="fa-solid fa-map-marker-alt fa-3x text-red-500 animate-bounce"></i>
                    <p className="text-white bg-gray-800 bg-opacity-80 p-2 rounded-md mt-1 text-sm">
                      {dest.name}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        ))}

        {/* Animated Moving Car */}
        <div className="absolute bottom-20 left-0 animate-carMove transition-transform duration-[10s]">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1075/1075853.png"
            alt="Car"
            className="w-16 h-16"
          />
        </div>
      </div>

      {view && <Liveupdate dest={dest} />}
    </div>
  );
}

export default Road;
