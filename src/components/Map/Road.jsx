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

  // Calculate marker positions along the SVG path
  const calculatePathPosition = (index, total) => {
    // This function calculates position along the curve
    const percentage = index / (total - 1);
    
    // For the SVG path "M 100 400 Q 400 50, 800 400 T 1500 400"
    // These are approximated positions along the path
    const x = 100 + (1400 * percentage);
    
    // Calculate y position along the curve (simplified approximation)
    let y;
    if (percentage < 0.25) {
      // First quarter - going up
      y = 400 - (350 * (percentage / 0.25));
    } else if (percentage < 0.5) {
      // Second quarter - going down
      y = 50 + (350 * ((percentage - 0.25) / 0.25));
    } else if (percentage < 0.75) {
      // Third quarter - going up
      y = 400 - (350 * ((percentage - 0.5) / 0.25));
    } else {
      // Last quarter - going down
      y = 50 + (350 * ((percentage - 0.75) / 0.25));
    }
    
    return { x: `${x}`, y: `${y}` };
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
            
            {/* Road Base - Wider for better visibility */}
            <path
              d="M 100 400 Q 400 50, 800 400 T 1500 400"
              stroke="#333"
              strokeWidth="40"
              fill="transparent"
              strokeLinecap="round"
            />
            
            {/* Road Lines - More vibrant yellow */}
            <path
              d="M 100 400 Q 400 50, 800 400 T 1500 400"
              stroke="#FFD700"
              strokeWidth="30"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray="20,15"
              className="animate-pulse"
              filter="url(#glow)"
            />
            
            {/* Road Edges - For better definition */}
            <path
              d="M 100 400 Q 400 50, 800 400 T 1500 400"
              stroke="#FFF"
              strokeWidth="2"
              fill="transparent"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
          </svg>

          {/* Destination Markers - Positioned properly along the path */}
          {data?.data?.savedMap?.map((item, index) => (
            <div key={index} className="absolute inset-0">
              {item?.roadmapId?.map((road) => {
                // Get total number of destinations for positioning
                const totalDestinations = road?.destinations?.length || 0;
                
                return road?.destinations?.map((dest, dIdx) => {
                  // Calculate position along the SVG path
                  const position = calculatePathPosition(dIdx, Math.max(totalDestinations, 1));
                  const isActive = activeMarker === `${dest._id}-${dIdx}`;
                  
                  return (
                    <div
                      key={dest._id}
                      className="absolute"
                      style={{ 
                        left: position.x + "px", 
                        top: position.y + "px",
                        transform: "translate(-50%, -50%)",
                        zIndex: isActive ? 30 : 20 
                      }}
                    >
                      {/* Marker with Hover Effects */}
                      <div 
                        className={`cursor-pointer transition-all duration-300 ${
                          isActive ? "scale-125" : "hover:scale-110"
                        }`}
                        onMouseEnter={() => savedDestinations(dest._id, `${dest._id}-${dIdx}`)}
                        onMouseLeave={() => {
                          setView(false);
                          setActiveMarker(null);
                        }}
                      >
                        {/* Custom Marker Design */}
                        <div className="relative text-center">
                          {/* Marker Glow Effect */}
                          <div className={`absolute inset-0 rounded-full bg-red-500 opacity-30 blur-md ${
                            isActive ? "scale-150 animate-pulse" : ""
                          }`}></div>
                          
                          {/* Pin Base */}
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg mb-1">
                              <i className="fa-solid fa-location-dot text-white text-xl"></i>
                            </div>
                            
                            {/* Pin Bottom */}
                            <div 
                              className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-red-600 border-b-0 mx-auto" 
                              style={{ borderLeft: "8px solid transparent", borderRight: "8px solid transparent" }}
                            ></div>
                            
                            {/* Destination Number */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{dIdx + 1}</span>
                            </div>
                          </div>
                          
                          {/* Destination Name */}
                          <div className={`mt-2 bg-gray-800 bg-opacity-90 px-3 py-1 rounded-lg shadow-lg whitespace-nowrap transform transition-all duration-300 ${
                            isActive ? "opacity-100 scale-100" : "opacity-80 scale-95"
                          }`}>
                            <p className="text-white font-medium text-sm">{dest.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                });
              })}
            </div>
          ))}

          {/* Animated Moving Car with Shadow */}
          <div className="absolute" style={{ bottom: "400px", left: "0", animation: "carMoveAlongPath 15s linear infinite" }}>
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

        {/* Destination Info Panel - Enhanced */}
        <div className="w-full md:w-1/4 md:ml-4 mt-4 md:mt-0">
          <div className="bg-gray-800 rounded-xl shadow-xl h-full overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-blue-800 to-purple-800 p-4">
              <h2 className="text-xl text-white font-bold flex items-center">
                <i className="fa-solid fa-map-location-dot mr-2"></i>
                Destination Details
              </h2>
            </div>
            
            <div className="flex-grow overflow-auto p-4">
              {view ? (
                <div className="animate-fadeIn">
                  <div className="bg-gray-700 rounded-lg p-4 mb-4">
                    <Liveupdate dest={dest} />
                  </div>
                </div>
              ) : (
                <div className="text-gray-300 text-center flex flex-col justify-center items-center h-64">
                  <div className="bg-gray-700 rounded-full p-6 mb-4">
                    <i className="fa-solid fa-hand-pointer text-3xl text-yellow-400"></i>
                  </div>
                  <p className="text-lg">Select a destination marker to view details</p>
                  <p className="text-sm text-gray-400 mt-2">Hover over the numbered pins on the road</p>
                </div>
              )}
            </div>
            
            {/* Quick Stats */}
            <div className="bg-gray-900 p-4">
              <div className="flex justify-between text-sm">
                <div className="text-center">
                  <div className="text-yellow-400 font-bold">{data?.data?.savedMap?.[0]?.roadmapId?.[0]?.destinations?.length || 0}</div>
                  <div className="text-gray-400">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400 font-bold">
                    {data?.data?.savedMap?.[0]?.roadmapId?.[0]?.completed ? 'Complete' : 'In Progress'}
                  </div>
                  <div className="text-gray-400">Status</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 font-bold">
                    {new Date(data?.data?.savedMap?.[0]?.createdAt || Date.now()).toLocaleDateString()}
                  </div>
                  <div className="text-gray-400">Created</div>
                </div>
              </div>
            </div>
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
//         fadeIn: 'fadeIn 0.3s ease-in-out',
//         pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'translateY(10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' }
//         },
//         carMoveAlongPath: {
//           '0%': { transform: 'translate(100px, 400px)' },
//           '25%': { transform: 'translate(400px, 50px)' },
//           '50%': { transform: 'translate(800px, 400px)' },
//           '75%': { transform: 'translate(1200px, 50px)' },
//           '100%': { transform: 'translate(1500px, 400px)' }
//         }
//       }
//     }
//   }
// }

// Add this to your global CSS for the car animation
// @keyframes carMoveAlongPath {
//   0% { transform: translate(100px, 400px); }
//   25% { transform: translate(400px, 50px); }
//   50% { transform: translate(800px, 400px); }
//   75% { transform: translate(1200px, 50px); }
//   100% { transform: translate(1500px, 400px); }
// }
// 
// .absolute {
//   animation: carMoveAlongPath 15s linear infinite;
// }

export default Road;