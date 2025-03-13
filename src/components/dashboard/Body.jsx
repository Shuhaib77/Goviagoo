import { Button, Carousel } from "@material-tailwind/react";
import React, { useEffect } from "react";
import Calendar from "react-calendar";
import Head from "./Head";
import { useDispatch, useSelector } from "react-redux";
import { savedmapDetails } from "../../../Redux/saveSlice";

function Body() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.savedmaps);
  const id = localStorage.getItem("id");

  useEffect(() => {
    dispatch(savedmapDetails(id));
  }, []);

  // Extract the latest saved roadmap
  const latestSavedMap = data?.data?.savedMap?.slice(-1)[0];
  const latestRoadmap = latestSavedMap?.roadmapId[0];


  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="ml-3">
        <Head />
      </div>

      {/* Road Trip Details */}
      <div className="ml-3 p-4 mt-4">
        <h1 className="font-bold text-2xl text-left">RoadTrip-1</h1>
        <h2 className="ml-4 text-gray-600">Your adventure awaits!</h2>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-2 gap-8 mt-6">
        {/* Left Section: Carousel & Booking Details */}
        <div className="flex flex-col items-center gap-6">
          {/* Carousel Section */}
          <div className="w-[350px] rounded-2xl shadow-lg bg-white p-4">
            <Carousel>
              {latestRoadmap?.destinations?.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-200 p-2 rounded-md">
                    <h1 className="text-sm font-semibold">{item.name}</h1>
                  </div>
                  <div className="w-full h-[250px] rounded-md overflow-hidden mt-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          {/* Booking Details */}
          <div className="w-[350px] p-5 bg-white shadow-lg rounded-xl">
            {latestRoadmap && (
              <div className="text-gray-700 space-y-2">
                <h1>
                  Food Booked:{" "}
                  <span className="font-semibold">
                    {latestRoadmap.foodBookings.length}
                  </span>
                </h1>
                <h1>
                  Stay Booked:{" "}
                  <span className="font-semibold">
                    {latestRoadmap.stayBookings.length}
                  </span>
                </h1>
                <h1>
                  Destinations:{" "}
                  <span className="font-semibold">
                    {latestRoadmap.destinations.length}
                  </span>
                </h1>
                <h1>
                  Date Created:{" "}
                  <span className="font-semibold">
                    {new Date(latestRoadmap.createdAt).toLocaleDateString()}
                  </span>
                </h1>
              </div>
            )}
            <div className="text-center mt-4">
              <Button className="w-full">Start Road Trip</Button>
            </div>
          </div>
        </div>

        {/* Right Section: Calendar & Highlights */}
        <div className="flex flex-col items-center gap-6">
          <Calendar className="border-2 rounded-md shadow-md p-4 border-black w-full" />

          {/* Roadmap Highlights */}
          {/* <div className="w-[610px] flex gap-4 overflow-x-auto items-center p-4 bg-blue-gray-700 rounded-lg shadow-lg">
            {latestRoadmap?.destinations?.map((dest, index) => (
              <div key={index} className="min-w-[200px] flex flex-col h-[280px] bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-2/3 bg-gray-300 flex justify-center items-center">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover"/>
                </div>
                <div className="h-1/3 p-3 bg-gray-100">
                  <h1 className="font-semibold">{dest.name}</h1>
                  <p className="text-sm text-gray-600">A beautiful place to explore.</p>
                </div>
              </div>
            ))}
          </div> */}

          {/* Bookings List */}
          <div className="w-[460px] bg-red-500 p-4 rounded-lg shadow-md">
      <h2 className="text-white font-bold text-lg mb-2">All Saved Map Bookings</h2>

      <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
        {data?.savedMap?.length > 0 ? (
          data.savedMap.map((saved, mapIndex) => (
            <div key={saved._id} className="bg-gray-100 p-3 rounded-md">
              <h3 className="font-bold text-md text-gray-800">Roadmap {mapIndex + 1}</h3>

              {saved.roadmapId?.length > 0 ? (
                saved.roadmapId.map((roadmapId, roadmapIndex) => {
                  const roadmap = typeof roadmapId === "string" ? roadmapData[roadmapId] : roadmapId;

                  return roadmap ? (
                    <div key={roadmap._id} className="mt-2 bg-white p-3 rounded-md shadow">
                      <h4 className="font-semibold text-gray-700">
                        Bookings for Roadmap {roadmapIndex + 1}
                      </h4>

                      {/* Stay Bookings */}
                      {roadmap?.stayBookings?.length > 0 ? (
                        roadmap.stayBookings.map((stay, stayIndex) => (
                          <div key={stay._id} className="flex justify-between items-center p-3 rounded-md bg-blue-300 mt-1">
                            <div>
                              <h1 className="text-sm font-semibold">
                                Stay {stayIndex + 1}: {stay.days} days
                              </h1>
                              <p className="text-xs text-gray-700">
                                Room: {stay.roomNo || "Not specified"}
                              </p>
                            </div>
                            <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                              View
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-gray-500">No Stay Bookings</p>
                      )}

                      {/* Food Bookings */}
                      {roadmap?.foodBookings?.length > 0 ? (
                        roadmap.foodBookings.map((food, foodIndex) => (
                          <div key={food._id} className="flex justify-between items-center p-3 rounded-md bg-green-300 mt-1">
                            <div>
                              <h1 className="text-sm font-semibold">
                                Food {foodIndex + 1}: {food.type}
                              </h1>
                              <p className="text-xs text-gray-700">
                                Rate: {food.rate} | Date: {food.date}
                              </p>
                            </div>
                            <button className="text-xs bg-green-500 text-white px-2 py-1 rounded">
                              View
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-gray-500">No Food Bookings</p>
                      )}
                    </div>
                  ) : (
                    <p key={roadmapIndex} className="text-xs text-gray-500">
                      Loading roadmap details...
                    </p>
                  );
                })
              ) : (
                <p className="text-xs text-gray-500">No Roadmap Found</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-white text-center">No Saved Maps Found</p>
        )}
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
