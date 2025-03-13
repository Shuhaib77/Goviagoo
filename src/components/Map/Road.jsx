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
    <div className="h-screen w-full overflow-auto p-6 bg-gray-100">
      {data?.data?.savedMap.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <h1 className="text-center mt-10 shadow-md p-5 text-4xl text-green-500 font-bold animate-pulse">
            RoadMap - {index + 1}
          </h1>

          {view && <Liveupdate dest={dest} />}

          {item.roadmapId.map((road, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center w-full h-screen bg-cover bg-no-repeat mt-10 p-5 rounded-xl shadow-lg"
              style={{
                backgroundImage: `url("https://images-cdn.ubuy.co.in/633fffb02d9e26314a71b548-great-vintage-world-map-in-1882.jpg")`,
              }}
            >
              {/* Vertical path */}
              <div className="bg-blue-gray-900 w-20 h-[50vh] flex flex-col items-center rounded-es-full rounded-se-full shadow-lg p-5">
                {road.destinations.slice(0, 1).map((dest) => (
                  <i
                    key={dest._id}
                    className="fa-solid fa-location-dot fa-2xl animate-pulse text-green-500 cursor-pointer transition-transform transform hover:scale-125"
                    onMouseEnter={() => savedDestinations(dest._id)}
                    onMouseLeave={() => setView(false)}
                  ></i>
                ))}
                <div className="flex flex-col items-center gap-5 mt-5">
                  <span className="bg-white h-16 w-[6px] rounded"></span>
                  <span className="bg-white h-20 w-[6px]"></span>
                  <span className="bg-white h-10 w-[6px] rounded"></span>
                </div>
              </div>

              {/* Horizontal path */}
              <div className="flex w-2/3 h-16 bg-blue-gray-900 mt-5 rounded-lg shadow-md">
                <div className="flex justify-between w-full p-5">
                  {road.destinations.slice(1, -1).map((dest) => (
                    <i
                      key={dest._id}
                      className="fa-solid fa-location-dot fa-2xl animate-pulse text-green-500 cursor-pointer transition-transform transform hover:scale-125"
                      onMouseEnter={() => savedDestinations(dest._id)}
                      onMouseLeave={() => setView(false)}
                    ></i>
                  ))}
                </div>
              </div>

              {/* Final destination */}
              <div className="bg-blue-gray-900 w-20 h-[50vh] flex flex-col items-center justify-end rounded-ss-full rounded-ee-full shadow-lg p-5">
                {road.destinations.slice(-1).map((dest) => (
                  <i
                    key={dest._id}
                    className="fa-solid fa-location-dot fa-2xl animate-pulse text-green-500 cursor-pointer transition-transform transform hover:scale-125"
                    onMouseEnter={() => savedDestinations(dest._id)}
                    onMouseLeave={() => setView(false)}
                  ></i>
                ))}
                <div className="flex flex-col items-center gap-5 mt-5">
                  <span className="bg-white h-16 w-[6px] rounded"></span>
                  <span className="bg-white h-20 w-[6px]"></span>
                  <span className="bg-white h-10 w-[6px] rounded"></span>
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
