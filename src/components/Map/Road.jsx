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
  const [activeMarker, setActiveMarker] = useState(null);
  
  const savedDestinations = (ids, index) => {
    setDest(ids);
    setView(true);
    setActiveMarker(index);
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-900 flex flex-col">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-xl p-6 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            <span className="text-yellow-400">🚗</span> Your Journey RoadMap
          </h1>
          <div className="hidden md:block">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full transition-all duration-300 shadow-lg">
              New Journey
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row p-4 relative">
        {/* Road Visual Section */}
        <div className="w-full md:w-3/4 h-[60vh] md:h-[80vh] relative rounded-xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://cdn.pixabay.com/photo/2017/01/06/19/15/road-1958388_1280.jpg")`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>

          {/* SVG Road Path with Enhanced Neon Effect */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1500 500"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
          >
            {/* Glowing Shadow Effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            {/* Road Base */}
            <path
              d="M 100 400 Q 400 50, 800 400 T 1500 400"
              stroke="#333"
              strokeWidth="30"
              fill="transparent"
              strokeLinecap="round"
            />
            
            {/* Road Lines */}
            <path
              d="M 100 400 Q 400 50, 800 400 T 1500 400"
              stroke="yellow"
              strokeWidth="20"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray="20,15"
              className="animate-pulse"
              filter="url(#glow)"
            />
          </svg>

          {/* Destination Markers with Enhanced Styling */}
          {data?.data?.savedMap?.map((item, index) => (
            <div key={index} className="absolute flex w-full justify-between">
              {item?.roadmapId?.map((road) =>
                road?.destinations?.map((dest, dIdx) => {
                  const markerPosition = `${10 + dIdx * 25}%`;
                  const isActive = activeMarker === `${dest._id}-${dIdx}`;
                  
                  return (
                    <div
                      key={dest._id}
                      className={`absolute text-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                        isActive ? "scale-125 z-30" : "hover:scale-110"
                      }`}
                      style={{ left: markerPosition, top: "50%" }}
                      onMouseEnter={() => savedDestinations(dest._id, `${dest._id}-${dIdx}`)}
                      onMouseLeave={() => {
                        setView(false);
                        setActiveMarker(null);
                      }}
                    >
                      <div className={`relative ${isActive ? "animate-pulse" : ""}`}>
                        <i className={`fa-solid fa-map-marker-alt fa-3x ${isActive ? "text-red-400" : "text-red-500"}`}></i>
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-full">
                          <div className={`bg-gray-800 bg-opacity-90 px-3 py-2 rounded-lg shadow-lg transition-all duration-300 ${
                            isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
                          }`}>
                            <p className="text-white font-medium text-sm whitespace-nowrap">
                              {dest.name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="text-white bg-gray-800 bg-opacity-80 p-2 rounded-md mt-1 text-sm font-semibold shadow-md">
                        {dest.name}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          ))}

          {/* Animated Moving Car with Shadow */}
          <div className="absolute bottom-20 left-0 animate-carMove transition-transform duration-[10s]">
            <div className="relative">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black opacity-40 rounded-full blur-sm"></div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1075/1075853.png"
                alt="Car"
                className="w-16 h-16 drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Sidebar/Info Panel */}
        <div className="w-full md:w-1/4 md:ml-4 mt-4 md:mt-0">
          <div className="bg-gray-800 rounded-xl shadow-xl p-4 h-full">
            <h2 className="text-xl text-white font-bold mb-4 border-b border-gray-700 pb-2">
              Journey Details
            </h2>
            
            {view ? (
              <div className="animate-fadeIn">
                <Liveupdate dest={dest} />
              </div>
            ) : (
              <div className="text-gray-300 text-center flex flex-col justify-center items-center h-[50vh]">
                <i className="fa-solid fa-hand-pointer fa-3x mb-4 text-yellow-500 animate-bounce"></i>
                <p className="text-lg">Hover over a destination marker to view details</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 p-4 text-center border-t border-gray-800">
        <p>© {new Date().getFullYear()} Journey RoadMap - Your Path to Success</p>
      </footer>
    </div>
  );
}

// Add these animations to your tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         carMove: 'carMove 10s linear infinite',
//         fadeIn: 'fadeIn 0.3s ease-in-out',
//         pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//       keyframes: {
//         carMove: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(100vw)' }
//         },
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'translateY(10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' }
//         }
//       }
//     }
//   }
// }

export default Road;