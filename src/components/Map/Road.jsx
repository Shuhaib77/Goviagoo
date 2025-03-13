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
      className="h-screen w-full overflow-auto p-6 flex flex-col items-center bg-cover bg-center"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/01/06/19/15/road-1958388_1280.jpg")`,
      }}
    >
      <h1 className="text-4xl font-bold text-white shadow-md mt-5 p-5 bg-gray-900 bg-opacity-60 rounded-lg">
        Your RoadMap
      </h1>

      {data?.data?.savedMap.map((item, index) => (
        <div key={index} className="relative flex flex-col items-center w-full">
          {view && <Liveupdate dest={dest} />}

          {/* Road Design */}
          <div className="relative w-5/6 h-[70vh] flex justify-center items-center">
            {/* Curved Road Path */}
            <div className="absolute w-full h-full flex justify-center">
              <svg width="100%" height="100%">
                {/* Curved Road Path */}
                <path
                  d="M 100 500 Q 400 100, 800 500 T 1500 500"
                  stroke="black"
                  strokeWidth="15"
                  fill="transparent"
                  strokeDasharray="20,15"
                />
              </svg>
            </div>

            {/* Destination Markers with Icons */}
            {item.roadmapId.map((road, idx) => (
              <div key={idx} className="absolute">
                {road.destinations.map((dest, dIdx) => {
                  const markerPosition = dIdx * 250; // Adjusted for positioning along the curve

                  return (
                    <div
                      key={dest._id}
                      className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{ left: `${markerPosition}px`, top: "50%" }}
                      onMouseEnter={() => savedDestinations(dest._id)}
                      onMouseLeave={() => setView(false)}
                    >
                      <i className="fa-solid fa-map-marker-alt fa-2xl text-red-500 animate-bounce"></i>
                      <p className="text-white bg-gray-800 p-2 rounded-md mt-1">{dest.name}</p>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Moving Car Animation */}
            <div className="absolute bottom-16 left-0 animate-carMove">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1075/1075853.png"
                alt="Car"
                className="w-16 h-16"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Road;
