import React from "react";

const Banner = ({ image, searchbar }) => {
  return (
    <>
      <div className="px-9">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="h-[55vh] mx-8 mt-10 bg-center bg-cover bg-no-repeat rounded-2xl shadow-xl"
        >
          {searchbar && (
            <div className="flex lg:justify-end items-center sm:justify-center w-full p-5 ">
              <h1 >{searchbar.input}</h1>
              <h1 className="relative right-7">{searchbar.icon}</h1>
            </div>
          )}
        </div>
        <div className="lg:w-[120vh] sm:w-full h-[80px] lg:p-4 m-auto rounded-3xl shadow-xl bg-white -mt-8 flex justify-around items-center">
          <div className="flex justify-center items-center ml-3">
            <i className="fa-solid fa-location-dot fa-xl  text-gray-900"></i>
            <div className="lg:ml-3 text-center">
              <h1 className="text-sm">Go to Map</h1>
              <h1 className="text-xs">Where are you going?</h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <i className="fa-solid fa-road-circle-check fa-xl text-gray-900"></i>
            <div className="text-center lg:ml-3">
              <h1 className="text-sm">Create Roadmap</h1>
              <h1 className="text-xs">Create a custom map</h1>
            </div>
          </div>
          <div className="flex justify-center items-center ml-3">
            <i className="fa-solid fa-map-location-dot fa-xl text-gray-900"></i>
            <div className="text-center lg:ml-3">
              <h1 className="text-sm">Explore Destinations</h1>
              <h1 className="text-xs">Find your destinations</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
