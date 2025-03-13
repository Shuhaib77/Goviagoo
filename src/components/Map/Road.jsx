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

  const savedDestinations = (id) => {
    setDest(id);
    setView(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {data?.data?.savedMap.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-center text-green-500 mb-6 animate-pulse">
            RoadMap-{index + 1}
          </h1>
          {view && <Liveupdate dest={dest} />}
          <div className="space-y-4">
            {item.roadmapId.map((roadmap, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {roadmap.name}
                </h2>
                <ul className="space-y-3">
                  {roadmap.destinations.map((destination, destIdx) => (
                    <li
                      key={destIdx}
                      className="flex items-center p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
                      onMouseEnter={() => savedDestinations(destination._id)}
                      onMouseLeave={() => setView(false)}
                    >
                      <i
                        className="fas fa-location-dot text-lg text-green-500 mr-3"
                      ></i>
                      <span className="text-gray-700">{destination.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Road;