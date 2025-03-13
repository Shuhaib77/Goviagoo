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
  const [hoveredDestination, setHoveredDestination] = useState(null);
  
  const handleDestinationHover = (destinationId) => {
    setHoveredDestination(destinationId);
  };
  
  const handleDestinationClick = (destinationId) => {
    setDest(destinationId);
    setView(true);
  };

  // Calculate marker position along the SVG path
  const calculatePathPosition = (index, total) => {
    if (total <= 1) return { x: 50, y: 50 };
    
    // Distribute points evenly along the path
    const percentage = index / (total - 1);
    const x = 8 + (percentage * 84); // 8% to 92% of width
    
    // Create a slight curve for visual appeal
    const midPoint = 0.5;
    const amplitude = 15; // How much the curve dips
    
    // Create a parabolic curve that's highest at the edges and lowest in the middle
    const normalizedDistance = Math.abs(percentage - midPoint) * 2; // 0 at middle, 1 at edges
    const y = 50 - (amplitude * (1 - normalizedDistance * normalizedDistance));
    
    return { x, y };
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-800 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">
            <span>🚗</span> Your Journey RoadMap
          </h1>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* RoadMap Visualization */}
          <div className="relative h-64 md:h-80 lg:h-96 bg-gray-200 border-b border-gray-300">
            {/* Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("https://cdn.pixabay.com/photo/2017/01/06/19/15/road-1958388_1280.jpg")`,
                filter: "brightness(0.7)"
              }}
            />
            
            {/* Road Path */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              preserveAspectRatio="none" 
              viewBox="0 0 100 100"
            >
              {/* Main Road */}
              <path
                d="M 5,50 Q 50,20 95,50"
                stroke="#333"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Yellow Center Line */}
              <path
                d="M 5,50 Q 50,20 95,50"
                stroke="#FFD700"
                strokeWidth="2"
                strokeDasharray="5,3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            
            {/* Destination Markers - Only shown when hovering */}
            {data?.data?.savedMap?.map((item, mapIndex) => (
              <div key={mapIndex} className="absolute inset-0">
                {item?.roadmapId?.map((road, roadIndex) => {
                  const totalDestinations = road?.destinations?.length || 0;
                  
                  return road?.destinations?.map((dest, dIdx) => {
                    const position = calculatePathPosition(dIdx, totalDestinations);
                    const isHovered = hoveredDestination === dest._id;
                    const isSelected = dest._id === dest;
                    
                    if (!isHovered && !isSelected) return null; // Only show if hovered
                    
                    return (
                      <div
                        key={`${dest._id}-${dIdx}`}
                        className="absolute"
                        style={{
                          left: `${position.x}%`,
                          top: `${position.y}%`,
                          transform: "translate(-50%, -50%)",
                          zIndex: 20,
                          transition: "opacity 0.2s ease-in-out",
                          opacity: isHovered ? 1 : 0
                        }}
                      >
                        <div className="relative">
                          {/* Pin */}
                          <div className="w-10 h-10 rounded-full bg-red-600 shadow-md flex items-center justify-center">
                            <span className="text-white font-bold">{dIdx + 1}</span>
                          </div>
                          
                          {/* Destination Label */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded shadow-md text-xs font-medium text-gray-800 whitespace-nowrap">
                            {dest.name}
                          </div>
                        </div>
                      </div>
                    );
                  });
                })}
              </div>
            ))}
          </div>
          
          {/* Destination Details Section */}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Destination Details</h2>
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Destination List */}
              <div className="md:w-1/2 bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Destination List</h3>
                
                <div className="space-y-2">
                  {data?.data?.savedMap?.map((item, mapIndex) => (
                    <div key={mapIndex}>
                      {item?.roadmapId?.map((road, roadIndex) => (
                        <div key={roadIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-indigo-700 text-white p-2 font-medium">
                            Roadmap: {road.name || `Journey ${roadIndex + 1}`}
                          </div>
                          
                          <div className="divide-y divide-gray-200">
                            {road?.destinations?.map((dest, dIdx) => (
                              <div 
                                key={`list-${dest._id}`}
                                className={`p-3 cursor-pointer transition-colors ${
                                  dest._id === dest ? "bg-blue-50" : "hover:bg-gray-100"
                                }`}
                                onMouseEnter={() => handleDestinationHover(dest._id)}
                                onMouseLeave={() => handleDestinationHover(null)}
                                onClick={() => handleDestinationClick(dest._id)}
                              >
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                                    {dIdx + 1}
                                  </div>
                                  <div className="ml-3">
                                    <h4 className="font-medium text-gray-900">{dest.name}</h4>
                                    <p className="text-sm text-gray-500">
                                      {dest.description?.substring(0, 60)}
                                      {dest.description?.length > 60 ? '...' : ''}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Selected Destination Details */}
              <div className="md:w-1/2">
                {view ? (
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <Liveupdate dest={dest} />
                  </div>
                ) : (
                  <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-800">No Destination Selected</h3>
                    <p className="text-gray-500 mt-2">
                      Hover over a destination in the list to see it on the roadmap.<br/>
                      Click a destination to view its complete details.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Summary Statistics */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-medium text-gray-800">Total Destinations</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">
              {data?.data?.savedMap?.reduce((total, item) => 
                total + item?.roadmapId?.reduce((roadTotal, road) => 
                  roadTotal + (road?.destinations?.length || 0), 0
                ), 0
              )}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-medium text-gray-800">Journey Status</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {data?.data?.savedMap?.[0]?.roadmapId?.[0]?.completed ? 'Completed' : 'In Progress'}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-medium text-gray-800">Created On</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {new Date(data?.data?.savedMap?.[0]?.createdAt || Date.now()).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Road;