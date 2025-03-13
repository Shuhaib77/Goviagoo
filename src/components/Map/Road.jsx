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
    <div className="h-screen w-full overflow-auto p-6 bg-gray-200">
      {data?.data?.savedMap.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <h1 className="text-center mt-10 shadow-lg p-5 text-3xl text-blue-600 font-semibold">
            🚗 RoadMap - {index + 1}
          </h1>

          {view && <Liveupdate dest={dest} />}

          {item.roadmapId.map((road, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center w-full h-auto bg-cover bg-center mt-10 p-5 rounded-xl shadow-lg border border-gray-300"
              style={{
                backgroundImage: `url("https://images-cdn.ubuy.co.in/633fffb02d9e26314a71b548-great-vintage-world-map-in-1882.jpg")`,
              }}
            >
              {/* Road Path */}
              <div className="flex flex-col items-center">
                {/* Starting Point */}
                <div className="flex flex-col items-center">
                  <i
                    className="fa-solid fa-location-dot fa-2xl text-red-500 cursor-pointer transition-transform hover:scale-125"
                    onMouseEnter={() => savedDestinations(road.destinations[0]?._id)}
                    onMouseLeave={() => setView(false)}
                  ></i>
                  <span className="text-white mt-2 bg-gray-900 px-3 py-1 rounded-full text-sm">
                    Start
                  </span>
                </div>

                {/* Vertical Road Path */}
                <div className="w-2 bg-blue-500 h-24 my-2 rounded-lg"></div>

                {/* Middle Destinations */}
                <div className="flex items-center">
                  {road.destinations.slice(1, -1).map((dest) => (
                    <div key={dest._id} className="flex flex-col items-center mx-5">
                      <i
                        className="fa-solid fa-location-dot fa-2xl text-yellow-500 cursor-pointer transition-transform hover:scale-125"
                        onMouseEnter={() => savedDestinations(dest._id)}
                        onMouseLeave={() => setView(false)}
                      ></i>
                      <span className="text-white mt-2 bg-gray-800 px-3 py-1 rounded-full text-sm">
                        {dest.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Vertical Road Path */}
                <div className="w-2 bg-blue-500 h-24 my-2 rounded-lg"></div>

                {/* Final Destination */}
                <div className="flex flex-col items-center">
                  <i
                    className="fa-solid fa-location-dot fa-2xl text-green-500 cursor-pointer transition-transform hover:scale-125"
                    onMouseEnter={() => savedDestinations(road.destinations.slice(-1)[0]?._id)}
                    onMouseLeave={() => setView(false)}
                  ></i>
                  <span className="text-white mt-2 bg-green-700 px-3 py-1 rounded-full text-sm">
                    Destination
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Road;
