import { Button } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const Mapsidebar = ({ sidebar }) => {
  
  const { image, locationDetails } = useSelector((state) => state.mapSelector);
  const id=localStorage.getItem("id")

  const addtoMap = () => {
    const res = axios.post(
      `http://localhost:3000/api/destination/post/roadmap/${id}/${locationDetails?.display_name}/map`,
      {
        image: image,
        name: locationDetails?.display_name,
        location: {
          lat: locationDetails?.lat,
          lon: locationDetails?.lon,
        },
        description: locationDetails?.address?.state_district,
        category: locationDetails?.type,
      }

    );
    
  };

  return (
    <>
      <div className="absolute left-0 lg:w-[40vh] w-full lg:h-full h-[45vh] bg-white lg:overflow-hidden overflow-y-scroll p-5 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Destination</h1>

        {/* images */}
        <div className="flex mt-5">
          {image?.length > 0 ? (
            image.map((item, index) => (
              <div className="h-[200px] flex gap-4 overflow-x-automt-5">
                <img
                  key={index}
                  src={item}
                  alt="Location"
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No images available</p>
          )}
        </div>

        {/* buttons */}
        <div className="flex flex-col lg:flex-row justify-start items-center  gap-4 mt-10 mb-10">
          <Button className="p-2 w-28">ViewDetailss</Button>
        </div>

        {/* location details */}
        <div className="mt-5 font-medium text-l ">
          <p>
            {" "}
            <span className="font-bold"> location :</span>{" "}
            {locationDetails?.display_name || (
              <span className="text-red-300"> ""No location selected"</span>
            )}
          </p>
          {/* <p>{locationDetails?.address?.country || "Country not available"}</p> */}
          <p>
            {" "}
            <span className="font-bold"> State :</span>{" "}
            {locationDetails?.address?.state || (
              <span className="text-red-300"> "State not available"</span>
            )}
          </p>
          <p>
            <span className="font-bold"> District :</span>{" "}
            {locationDetails?.address?.state_district || (
              <span className="text-red-300">"District not available"</span>
            )}
          </p>
          <p className="">
            <span className="font-bold"> village :</span>{" "}
            {locationDetails?.address?.village || (
              <span className="text-red-300">"village not available"</span>
            )}
          </p>
          <p>
            <span className="font-bold"> poatCode :</span>{" "}
            {locationDetails?.address?.postcode || (
              <span className="text-red-300"> "Postcode not available"</span>
            )}
          </p>
        </div>

        {/* Footer */}
        <div className=" mt-10">
          <Button className="p-2 w-28" onClick={addtoMap}>
            Add to RoadMap
          </Button>
        </div>
      </div>
    </>
  );
};

export default Mapsidebar;
