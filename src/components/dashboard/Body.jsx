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
    <div className="min-h-screen bg-gray-100 p-6 overflow-auto">
      <div className="ml-3">
        <Head />
      </div>

      {/* Road Trip Details */}
      <div className="ml-3 p-4 mt-4">
        <h1 className="font-bold text-2xl text-left">RoadTrip</h1>
        <h2 className="ml-4 text-gray-600">adventure awaits</h2>
      </div>

      {/* Main Grid Layout */}
      <div className="gap-4 mt-3">
        {/* Left Section: Carousel & Booking Details */}
        <div className="flex w-full  items-center gap-6">
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
          <div className="w-[80vw]  p-5 bg-white shadow-lg rounded-xl">
            {latestRoadmap && (
              <div className="text-gray-700 space-y-2">
                <h1>
                  Food Booked:{" "}
                  <span className="font-semibold">
                    {latestRoadmap.foodBookings?.length || 0}
                  </span>
                </h1>
                <h1>
                  Stay Booked:{" "}
                  <span className="font-semibold">
                    {latestRoadmap.stayBookings?.length || 0}
                  </span>
                </h1>
                <h1>
                  Destinations:{" "}
                  <span className="font-semibold">
                    {latestRoadmap.destinations?.length || 0}
                  </span>
                </h1>
                <h1>
                  Date Created:{" "}
                  <span className="font-semibold">
                    {new Date(latestRoadmap.createdAt).toLocaleDateString()}
                  </span>
                </h1>

              <div className="flex">
                  {/* Food Bookings */}
                  <div className="mt-4">
                  <h2 className="font-bold">Food Bookings:</h2>
                  {latestRoadmap.foodBookings?.length > 0 ? (
                    latestRoadmap.foodBookings.map((food, index) => (
                      <div
                        key={food._id}
                        className="bg-green-200 p-2 rounded-md mt-1"
                      >
                        <p className="text-sm font-semibold">
                          {index + 1}. {food.mealType}
                        </p>
                        <p className="text-xs text-gray-700">
                          Restaurant: {food.restaurantName || "Not specified"}
                        </p>

                        {food?.foodSpot?.map((item) => (
                          <div>
                            <p className="text-sm font-semibold">
                              {index + 1}. {item.name} days stay
                            </p>
                            <img src={item.image} alt="" />
                            <p className="text-xs text-gray-700">
                              Hotel: {item.rating || "Not specified"}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))
                  ) : latestRoadmap.savedMap?.[3]?.roadmapId?.[0]
                      ?.foodBookings?.[0]?.foodSpot?.length > 0 ? (
                    latestRoadmap.savedMap[3].roadmapId[0].foodBookings[0].foodSpot.map(
                      (spot, index) => (
                        <div
                          key={spot._id}
                          className="bg-blue-200 p-2 rounded-md mt-1"
                        >
                          <p className="text-sm font-semibold">
                            {index + 1}. {spot.name}
                          </p>
                          <p className="text-xs text-gray-700">
                            Type: {spot.types?.join(", ")}
                          </p>
                          <p className="text-xs text-gray-700">
                            Rating: {spot.rating}
                          </p>
                          <p className="text-xs text-gray-700">
                            Website:{" "}
                            <a
                              href={spot.websaite}
                              className="text-blue-600 underline"
                            >
                              {spot.websaite}
                            </a>
                          </p>
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-xs text-gray-500">No Food Bookings</p>
                  )}
                </div>

                {/* Stay Bookings */}
                <div className="mt-4">
                  <h2 className="font-bold">Stay Bookings:</h2>
                  {latestRoadmap.stayBookings?.length > 0 ? (
                    latestRoadmap.stayBookings.map((stay, index) => (
                      <div
                        key={stay._id}
                        className="bg-blue-200 p-2 rounded-md mt-1"
                      >
                        <p className="text-sm font-semibold">
                          {index + 1}. {stay.days} days stay
                        </p>
                        <p className="text-xs text-gray-700">
                          Hotel: {stay.name || "Not specified"}
                        </p>
                        {stay?.stay?.map((item) => (
                          <div>
                            <p className="text-sm font-semibold">
                              {index + 1}. {item.name} days stay
                            </p>
                            <p className="text-xs text-gray-700">
                              Hotel: {item.rate || "Not specified"}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-500">No Stay Bookings</p>
                  )}
                </div>
              </div>
              </div>
            )}
            <div className="text-center mt-4">
              <Button className="w-full">Start Road Trip</Button>
            </div>
          </div>
          <Calendar className="border-2 rounded-md shadow-md p-4 border-black w-full" />
        </div>
      </div>
    </div>
  );
}

export default Body;
