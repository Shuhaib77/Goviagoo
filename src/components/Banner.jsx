import React from "react";

const Banner = ({ image, searchbar }) => {
  return (
    <>
      <div className="pl-9 pr-9   ">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="h-[55vh] ml-8 mr-8  mt-10  bg-banner1 bg-center bg-cover bg-no-repeat rounded-2xl shadow-xl "
        >
          {searchbar && (
            <div className="flex lg:justify-end items-center sm:flex justify-center w-full p-5">
              <h1>{searchbar.input}</h1>
              <h1 className="position relative right-7">{searchbar.icon}</h1>
            </div>
          )}
        </div>
      <div>
      <div className="lg:w-[120vh] relative   sm:w-full h-[80px] lg:p-4  m-auto rounded-3xl shadow-xl mb-10    bg-white  bottom-10  flex justify-around  items-center ">
          <div className="flex justify-center items-center ml-3">
            <div>
              <h1>
                <i
                  class="fa-solid fa-location-dot fa-xl"
                  style={{ color: " #232323" }}
                ></i>
              </h1>
            </div>
            <div className=" lg:ml-3 text-center">
              <h1 className="text-sm">Go toMap</h1>
              <h1 className="text-xs">where you are going?</h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h5>
                <i
                  class="fa-solid fa-road-circle-check fa-xl"
                  style={{ color: "#232323" }}
                ></i>
              </h5>
            </div>
            <div className="text-center lg:ml-3">
              <h1 className="text-sm">Create roadMap</h1>
              <h1 className="text-xs">create custom map</h1>
            </div>
          </div>
          <div className="flex justify-center items-center ml-3">
            <div>
              <h1>
                <i
                  class="fa-solid fa-map-location-dot fa-xl"
                  style={{ color: "#232323" }}
                ></i>
              </h1>
            </div>
            <div className="text-center lg:ml-3">
              <h1 className="text-sm">Explre destinations</h1>
              <h1 className="text-xs">find your destinations</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
