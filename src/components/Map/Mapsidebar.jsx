import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Mapsidebar = ({ setMenu }) => {
  const { image, locationDetails } = useSelector((state) => state.mapSelector);
  // console.log(discription);
  
  
  return (
    <>
      <div>
        <div
          className=" w-full z-1 lg:w-[40vh] h-[45vh] lg:h-[100vh] bg-white absolute left-0 lg:overflow-hidden overflow-y-scroll mt-10 "
          onClick={() => {
            setMenu(false);
          }}
        >
          <h1 className="text-2xl font-bold text-center">Destination</h1>
          <div className=" lg:m-5 h-[200px] flex justify-around   overflow-x-auto object-cover    mt-5 rounded-md">
            {image?.map((item) => {
              return (
                
                <img src={item} alt="" className="w-full h-full object-cover p-5" />
              );
            })}
          </div>
          <div className=" flex flex-col items-center  gap-4 lg:flex-row justify-around mt-5">
            <Button className="p-2 w-28">bhjbhwe</Button>
            <Button className="p-2 w-28">wcdcwd</Button>
          </div>
          <p className="mt-10 text-center">
           <p>{locationDetails?.display_name}</p>
           <p>{locationDetails?.address.country}</p>
           <p>{locationDetails?.address.state}</p>
           <p>{locationDetails?.address.state_district}</p>
           <p>{locationDetails?.address.neighbourhood}</p>
           <p>{locationDetails?.address.postcode}</p>
          </p>
          <h1 className="text-2xl font-bold text-center mt-8 mb-8">Links</h1>
          <p className="text-center">
            Bolton Abbey Estate in Wharfedale, North Yorkshire, England, takes
            its name from a 12th-century Augustinian monastery of canons
            regular, now known as Bolton Priory. The priory, which was closed in
            the 1539 Dissolution of the Monasteries ordered by King
          </p>
          <div className="text-center mt-16">
            <Button className="p-2 w-28">go toMap</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mapsidebar;
