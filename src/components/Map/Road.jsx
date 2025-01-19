import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savedmapDetails } from "../../../Redux/saveSlice";
import Liveupdate from "./Liveupdate";
// import './roadmapStyle.scss'

function Road() {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.savedmaps);
  console.log(data);
  const id = localStorage.getItem("id");

  useEffect(() => {
    dispatch(savedmapDetails(id));
  }, []);

  const [dest, setDest] = useState(null);

  const [view, setView] = useState(false);
  console.log(view, dest);

  // const savedRoadmaps = [
  //   {
  //     id: 1,
  //     name: "Mountain Escape",
  //     destinations: ["Base Camp", "Midpoint Trail", "Summit"],
  //     user: {
  //       name: "John Doe",
  //       email: "john.doe@example.com",
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: "City Explorer",
  //     destinations: ["Downtown Plaza", "Art Museum", "Rooftop Cafe"],
  //     user: {
  //       name: "Jane Smith",
  //       email: "jane.smith@example.com",
  //     },
  //   },
  // ];

  const savedDestinations = (ids) => {
    setDest(ids), setView(true);
  };
  // const savedBookings = (ids) => {
  //   setDest(ids), setView(true);
  // };

  return (
    <>
      <div className=" h-[100vh] w-full    oveflow-auto    ">
        {data?.data?.savedMap.map((item, index) => {
          return (
            <div className="flex flex-col h-[100vh] justify-center m-5">
              <h1 className="text-center mt-10  text-4xl text-[#3cd367] animate-pulse">
                roadMap-{index + 1}
              </h1>
              {view && <Liveupdate dest={dest} />}
              {/* <h1 className="text-center mt-3 text-4xl text-[#3cd367] animate-pulse">RoadTrip-1</h1> */}
              {item.roadmapId.map((item, index) => {
                return (
                  <div
                    className="w-full h-screen   flex justify-center items-center bg-no-repeat bg-cover mt-10 p-5  "
                    style={{
                      backgroundImage: `url(${"https://images-cdn.ubuy.co.in/633fffb02d9e26314a71b548-great-vintage-world-map-in-1882.jpg"})`,
                    }}
                  >
                    <div className="bg-blue-gray-900 w-[10vh] p-5 flex justify-center items-center rounded-es-full h-[50vh] rounded-se-full   ">
                      <div className="flex flex-col items-center   justify-between h-96   ">
                        {item.destinations.slice(0, 1).map((item) => {
                          return (
                            <i
                              class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                              style={{ color: "#77bb41" }}
                              onMouseEnter={() => {
                                console.log(item._id);

                                savedDestinations(item._id);
                              }}
                              onMouseLeave={() => {
                                setView(false);
                              }}
                            ></i>
                          );
                        })}
                        {/* <h1 className="text-red-700">crdcdcf</h1>
                     <h1 className="text-red-700">crdcdcf</h1>
                     <h1 className="text-red-700">crdcdcf</h1> */}
                      </div>
                      <div className="flex flex-col gap-y-5 justify-center items-center mr-6   h-full">
                        <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-se-full"></h1>
                        <h1 className="bg-white h-1/3 w-[10px]"></h1>
                        <h1 className="bg-white h-1/6 w-[10px] rounded-es-full"></h1>
                      </div>
                    </div>
                    <div className="flex w-full h-[50vh] justify-center items-end ">
                      <div className="bg-blue-gray-900 flex flex-col justify-center  w-1/3 h-[10vh]  ">
                        <div className="flex justify-between items-center h-full  ">
                          {item.destinations
                            .slice(1, item.destinations.length - 1)
                            .map((item) => {
                              return (
                                <div className="flex justify-center">
                                  <i
                                    class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse  "
                                    style={{ color: "#77bb41" }}
                                    onMouseEnter={() => {
                                      savedDestinations(item._id);
                                    }}
                                    onMouseLeave={() => {
                                      setView(false);
                                    }}
                                  ></i>
                                </div>
                              );
                            })}
                        </div>
                        <div className="flex gap-x-5 justify-center  h-full">
                          <h1 className="bg-white h-[10px] w-full"> </h1>
                          <h1 className="bg-white h-[10px] w-full"></h1>
                          <h1 className="bg-white h-[10px] w-full"></h1>
                        </div>
                      </div>
                      <div className="flex w-full h-[50vh] justify-center items-start">
                        <div className="bg-blue-gray-900  w-[10vh] h-[50vh] rounded-ss-full rounded-ee-full ">
                          <div className="flex flex-col gap-5 justify-center items-center h-full">
                            <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-ss-full"></h1>
                            <h1 className="bg-white h-1/3 w-[10px]"></h1>
                            <h1 className="bg-white h-1/6 w-[10px] rounded-ee-full"></h1>
                          </div>
                        </div>
                        <div className="flex w-full h-[50vh] justify-center items-start">
                          <div className="bg-blue-gray-900  w-full h-[10vh] ">
                            <div className="flex gap-5 justify-center items-center h-full">
                              <h1 className="bg-white h-[10px] w-full"></h1>
                              {/* <h1 className="bg-white h-[10px] w-full"></h1> */}
                              {/* <h1 className="bg-white h-[10px] w-full"></h1> */}
                            </div>
                          </div>
                          <div className="flex w-full h-[50vh] justify-center items-end">
                            <div className="bg-blue-gray-900 w-[10vh] flex justify-center items-center rounded-es-full h-[50vh] rounded-se-full  ">
                              <div className="flex flex-col items-center   justify-between h-96  ">
                                {/* { item.destinations.slice(0, 1).map((item) => {
                                  return (
                                    <i
                                      class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                                      style={{ color: "#77bb41" }}
                                      onMouseEnter={() => {
                                        console.log(item._id);

                                        fn(item._id);
                                      }}
                                      onMouseLeave={() => {
                                        setView(false);
                                      }}
                                    ></i>
                                  );
                                })} */}
                                {/* <h1 className="text-red-700">crdcdcf</h1>
                  <h1 className="text-red-700">crdcdcf</h1>
                  <h1 className="text-red-700">crdcdcf</h1> */}
                              </div>
                              <div className="flex flex-col gap-y-5 justify-center items-center    h-full">
                                <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-se-full"></h1>
                                <h1 className="bg-white h-1/3 w-[10px]"></h1>
                                <h1 className="bg-white h-1/6 w-[10px] rounded-es-full"></h1>
                              </div>
                            </div>
                            <div className="bg-blue-gray-900 flex flex-col justify-center    w-[50vh] h-[10vh] rounded-r-full ">
                              <div className="flex justify-between items-center h-full">
                                {item.destinations.slice(-1).map((item) => {
                                  return (
                                    <i
                                      class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                                      style={{ color: "#77bb41" }}
                                      onMouseEnter={() => {
                                        console.log(item._id);

                                        savedDestinations(item._id);
                                      }}
                                      onMouseLeave={() => {
                                        setView(false);
                                      }}
                                    ></i>
                                  );
                                })}
                              </div>
                              <div className="flex gap-x-5 justify-center  h-full">
                                <h1 className="bg-white h-[10px] w-full"></h1>
                                <h1 className="bg-white h-[10px] w-full"></h1>
                                <h1 className="bg-white h-[10px] w-full rounded-r-full"></h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div></div>
    </>
  );
}

export default Road;
