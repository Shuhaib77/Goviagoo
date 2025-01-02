import React from "react";
// import './roadmapStyle.scss'

function Road() {
  const savedRoadmaps = [
    {
      id: 1,
      name: "Mountain Escape",
      destinations: ["Base Camp", "Midpoint Trail", "Summit"],
      user: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
    },
    {
      id: 2,
      name: "City Explorer",
      destinations: ["Downtown Plaza", "Art Museum", "Rooftop Cafe"],
      user: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
      },
    },
  ];
  return (
    <>
      <div className=" h-[100vh] w-full flex flex-col  border-t-2 border-red-700 bg-[#E9EFEC]  overflow-auto  m-0">
      <h1 className="text-center mt-20 text-4xl text-[#3cd367] animate-pulse">RoadTrip-1</h1>
      {/* <h1 className="text-center mt-3 text-4xl text-[#3cd367] animate-pulse">RoadTrip-1</h1> */}
        <div className="w-full h-screen   flex justify-center items-center   p-5 ">
          <div className="bg-black w-[10vh] rounded-es-full h-[50vh] rounded-se-full  ">
            <div className="flex flex-col gap-5 justify-center items-center h-full">
              <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-ss-full">
                <i
                  class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse "
                  style={{ color: "#77bb41" }}
                ></i>
              </h1>
              <h1 className="bg-white h-1/3 w-[10px]"></h1>
              <h1 className="bg-white h-1/6 w-[10px] rounded-es-full"></h1>
            </div>
          </div>
          <div className="flex w-full h-[50vh] justify-center items-end ">
            <div className="bg-black   w-1/3 h-[10vh]  ">
              <div className="flex gap-5 justify-center items-center h-full">
                <h1 className="bg-white h-[10px] w-full"></h1>
                <h1 className="bg-white h-[10px] w-full">
                  <i
                    class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                    style={{ color: "#77bb41" }}
                  ></i>
                </h1>
                <h1 className="bg-white h-[10px] w-full"></h1>
              </div>
            </div>
            <div className="flex w-full h-[50vh] justify-center items-start">
              <div className="bg-black  w-[10vh] h-[50vh] rounded-ss-full rounded-ee-full ">
                <div className="flex flex-col gap-5 justify-center items-center h-full">
                  <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-ss-full">
                    <i
                      class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                      style={{ color: "#77bb41" }}
                    ></i>
                  </h1>
                  <h1 className="bg-white h-1/3 w-[10px]"></h1>
                  <h1 className="bg-white h-1/6 w-[10px] rounded-ee-full"></h1>
                </div>
              </div>
              <div className="flex w-full h-[50vh] justify-center items-start">
                <div className="bg-black  w-full h-[10vh] ">
                  <div className="flex gap-5 justify-center items-center h-full">
                    <h1 className="bg-white h-[10px] w-full"></h1>
                    <h1 className="bg-white h-[10px] w-full">
                      <i
                        class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                        style={{ color: "#77bb41" }}
                      ></i>
                    </h1>
                    <h1 className="bg-white h-[10px] w-full"></h1>
                  </div>
                </div>
                <div className="flex w-full h-[50vh] justify-center items-end">
                  <div className="bg-black   w-[10vh] h-[50vh]  rounded-se-full rounded-es-full ">
                    {" "}
                    <div className="flex flex-col gap-5 justify-center items-center h-full">
                      <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-ss-full">
                        <i
                          class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                          style={{ color: "#77bb41" }}
                        ></i>
                      </h1>
                      <h1 className="bg-white h-1/3 w-[10px]"></h1>
                      <h1 className="bg-white h-1/6 w-[10px] rounded-es-full"></h1>
                    </div>
                  </div>
                  <div className="bg-black   w-[50vh] h-[10vh] rounded-r-full ">
                    <div className="flex gap-5 justify-center items-center h-full">
                      <h1 className="bg-white h-[10px] w-full"></h1>
                      <h1 className="bg-white h-[10px] w-full">
                        <i
                          class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                          style={{ color: "#77bb41" }}
                        ></i>
                      </h1>
                      <h1 className="bg-white h-[10px] w-full rounded-r-full"></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        


        {/* ------ */}
       

        
      </div>
      <div className=" h-[100vh] w-full flex flex-col  border-t-2 border-red-700 bg-blue-gray-900 overflow-auto  m-0">
      <h1 className="text-center mt-20 text-4xl text-[#3cd367] animate-pulse">RoadTrip-1</h1>
        <div className="w-full h-screen shadow-2xl  flex justify-center items-center  p-5 ">
          <div className="bg-black w-[10vh] rounded-es-full h-[50vh] rounded-se-full animate-pulse">
            <div className="flex flex-col gap-5 justify-center items-center h-full">
              <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-ss-full">
                <i
                  class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse "
                  style={{ color: "#77bb41" }}
                ></i>
              </h1>
              <h1 className="bg-white h-1/3 w-[10px]"></h1>
              <h1 className="bg-white h-1/6 w-[10px] rounded-es-full"></h1>
            </div>
          </div>
          <div className="flex w-full h-[50vh] justify-center items-end ">
            <div className="bg-black   w-1/3 h-[10vh] animate-pulse ">
              <div className="flex gap-5 justify-center items-center h-full">
                <h1 className="bg-white h-[10px] w-full"></h1>
                <h1 className="bg-white h-[10px] w-full">
                  <i
                    class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                    style={{ color: "#77bb41" }}
                  ></i>
                </h1>
                <h1 className="bg-white h-[10px] w-full"></h1>
              </div>
            </div>
            <div className="flex w-full h-[50vh] justify-center items-start">
              <div className="bg-black  w-[10vh] h-[50vh] rounded-ss-full rounded-ee-full animate-pulse ">
                <div className="flex flex-col gap-5 justify-center items-center h-full">
                  <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-ss-full">
                    <i
                      class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                      style={{ color: "#77bb41" }}
                    ></i>
                  </h1>
                  <h1 className="bg-white h-1/3 w-[10px]"></h1>
                  <h1 className="bg-white h-1/6 w-[10px] rounded-ee-full"></h1>
                </div>
              </div>
              <div className="flex w-full h-[50vh] justify-center items-start">
                <div className="bg-black  w-full h-[10vh] animate-pulse animate">
                  <div className="flex gap-5 justify-center items-center h-full">
                    <h1 className="bg-white h-[10px] w-full"></h1>
                    <h1 className="bg-white h-[10px] w-full">
                      <i
                        class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                        style={{ color: "#77bb41" }}
                      ></i>
                    </h1>
                    <h1 className="bg-white h-[10px] w-full"></h1>
                  </div>
                </div>
                <div className="flex w-full h-[50vh] justify-center items-end">
                  <div className="bg-black   w-[10vh] h-[50vh] rounded-se-full rounded-es-full animate-pulse ">
                    {" "}
                    <div className="flex flex-col gap-5 justify-center items-center h-full">
                      <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-ss-full">
                        <i
                          class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                          style={{ color: "#77bb41" }}
                        ></i>
                      </h1>
                      <h1 className="bg-white h-1/3 w-[10px]"></h1>
                      <h1 className="bg-white h-1/6 w-[10px] rounded-es-full"></h1>
                    </div>
                  </div>
                  <div className="bg-black   w-[50vh] h-[10vh] rounded-r-full animate-pulse ">
                    <div className="flex gap-5 justify-center items-center h-full">
                      <h1 className="bg-white h-[10px] w-full"></h1>
                      <h1 className="bg-white h-[10px] w-full">
                        <i
                          class="fa-solid fa-location-dot fa-2xl fa-flip animate-pulse"
                          style={{ color: "#77bb41" }}
                        ></i>
                      </h1>
                      <h1 className="bg-white h-[10px] w-full rounded-r-full"></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        


        {/* ------ */}
       

        
      </div>

      {/* ------ */}
      {/* <div className="w-full h-screen shadow-2xl flex justify-center gap-y-20 items-center">
        <div className="bg-black w-[10vh] rounded-es-full h-[50vh] rounded-se-full">
          <div className="flex flex-col gap-5 justify-center items-center h-full">
            <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-ss-full">
              <i
                class="fa-solid fa-location-dot fa-2xl fa-flip "
                style={{ color: "#77bb41" }}
              ></i>
              <i
                class="fa-solid fa-location-dot fa-2xl fa-flip"
                style={{ color: "#77bb41" }}
              ></i>
            </h1>
            <h1 className="bg-white h-1/3 w-[10px]"></h1>
            <h1 className="bg-white h-1/6 w-[10px] rounded-es-full"></h1>
          </div>
        </div>
        <div className="flex w-full h-[50vh] justify-center items-end ">
          <div className="bg-black   w-1/3 h-[10vh]  ">
            <div className="flex gap-5 justify-center items-center h-full">
              <h1 className="bg-white h-[10px] w-full"></h1>
              <h1 className="bg-white h-[10px] w-full"></h1>
              <h1 className="bg-white h-[10px] w-full"></h1>
            </div>
          </div>
          <div className="flex w-full h-[50vh] justify-center items-start">
            <div className="bg-black  w-[10vh] h-[50vh] rounded-ss-full rounded-ee-full">
              <div className="flex flex-col gap-5 justify-center items-center h-full">
                <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-ss-full">
                  <i
                    class="fa-solid fa-location-dot fa-2xl fa-flip "
                    style={{ color: "#77bb41" }}
                  ></i>
                  <i
                    class="fa-solid fa-location-dot fa-2xl fa-flip"
                    style={{ color: "#77bb41" }}
                  ></i>
                </h1>
                <h1 className="bg-white h-1/3 w-[10px]"></h1>
                <h1 className="bg-white h-1/6 w-[10px] rounded-ee-full"></h1>
              </div>
            </div>
            <div className="flex w-full h-[50vh] justify-center items-start">
              <div className="bg-black  w-full h-[10vh]">
                <div className="flex gap-5 justify-center items-center h-full">
                  <h1 className="bg-white h-[10px] w-full"></h1>
                  <h1 className="bg-white h-[10px] w-full"></h1>
                  <h1 className="bg-white h-[10px] w-full"></h1>
                </div>
              </div>
              <div className="flex w-full h-[50vh] justify-center items-end">
                <div className="bg-black   w-[10vh] h-[50vh] rounded-se-full rounded-es-full">
                  {" "}
                  <div className="flex flex-col gap-5 justify-center items-center h-full">
                    <h1 className="bg-white h-1/4 w-[10px] flex flex-col justify-around items-center rounded-ss-full">
                      <i
                        class="fa-solid fa-location-dot fa-2xl fa-flip "
                        style={{ color: "#77bb41" }}
                      ></i>
                      <i
                        class="fa-solid fa-location-dot fa-2xl fa-flip"
                        style={{ color: "#77bb41" }}
                      ></i>
                    </h1>
                    <h1 className="bg-white h-1/3 w-[10px]"></h1>
                    <h1 className="bg-white h-1/6 w-[10px] rounded-es-full"></h1>
                  </div>
                </div>
                <div className="bg-black   w-[50vh] h-[10vh] rounded-r-full">
                  <div className="flex gap-5 justify-center items-center h-full">
                    <h1 className="bg-white h-[10px] w-full"></h1>
                    <h1 className="bg-white h-[10px] w-full"></h1>
                    <h1 className="bg-white h-[10px] w-full rounded-r-full"></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="roadmap-container">
      <h1 className="title">Your Saved Roadmaps</h1>
      {savedRoadmaps.map((roadmap) => (
        <div key={roadmap.id} className="roadmap-road">
          <div className="road-details">
            <h2 className="roadmap-name">{roadmap.name}</h2>
            <p className="user-details">
              <strong>{roadmap.user.name}</strong> | {roadmap.user.email}
            </p>
          </div>
          <div className="road-structure">
            <div className="road">
              {roadmap.destinations.map((destination, index) => (
                <div key={index} className="road-segment">
                  <i className="fa-solid fa-map-marker-alt destination-icon"></i>
                  <span className="destination-name">{destination}</span>
                  {index < roadmap.destinations.length - 1 && (
                    <div className="road-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div> */}
    </>
  );
}

export default Road;
