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
          <h1 className="text-center mt-10 shadow-md p-5 text-4xl text-blue-600 font-bold">
            RoadMap - {index + 1}
          </h1>

          {view && <Liveupdate dest={dest} />}

          {item.roadmapId.map((road, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center w-full h-[90vh] bg-cover bg-center bg-no-repeat mt-10 p-5 rounded-xl shadow-xl"
              style={{
                backgroundImage: `url("https://cdn.pixabay.com/photo/2016/11/29/03/53/map-1866673_1280.jpg")`,
              }}
            >
              {/* Vertical Path (Start) */}
              <div className="bg-gray-900 w-16 h-[45vh] flex flex-col items-center justify-start rounded-es-full rounded-se-full shadow-lg p-5">
                {road.destinations.slice(0, 1).map((dest) => (
                  <i
                    key={dest._id}
                    className="fa-solid fa-map-marker-alt fa-2xl animate-pulse text-red-500 cursor-pointer transition-transform hover:scale-125"
                    onMouseEnter={() => savedDestinations(dest._id)}
                    onMouseLeave={() => setView(false)}
                  ></i>
                ))}
                <div className="flex flex-col items-center gap-5 mt-5">
                  <span className="bg-white h-14 w-[5px] rounded"></span>
                  <span className="bg-white h-16 w-[5px]"></span>
                  <span className="bg-white h-10 w-[5px] rounded"></span>
                </div>
              </div>

              {/* Horizontal Path (Middle) */}
              <div className="flex w-2/3 h-14 bg-gray-900 mt-5 rounded-lg shadow-md">
                <div className="flex justify-between w-full p-5">
                  {road.destinations.slice(1, -1).map((dest) => (
                    <i
                      key={dest._id}
                      className="fa-solid fa-map-marker-alt fa-2xl animate-pulse text-yellow-500 cursor-pointer transition-transform hover:scale-125"
                      onMouseEnter={() => savedDestinations(dest._id)}
                      onMouseLeave={() => setView(false)}
                    ></i>
                  ))}
                </div>
              </div>

              {/* Vertical Path (End) */}
              <div className="bg-gray-900 w-16 h-[45vh] flex flex-col items-center justify-end rounded-ss-full rounded-ee-full shadow-lg p-5">
                {road.destinations.slice(-1).map((dest) => (
                  <i
                    key={dest._id}
                    className="fa-solid fa-map-marker-alt fa-2xl animate-pulse text-green-500 cursor-pointer transition-transform hover:scale-125"
                    onMouseEnter={() => savedDestinations(dest._id)}
                    onMouseLeave={() => setView(false)}
                  ></i>
                ))}
                <div className="flex flex-col items-center gap-5 mt-5">
                  <span className="bg-white h-14 w-[5px] rounded"></span>
                  <span className="bg-white h-16 w-[5px]"></span>
                  <span className="bg-white h-10 w-[5px] rounded"></span>
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
