import { Button, Carousel } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastView } from "../../../Redux/ToastSlice";
import Toast from "../Toast";
import useToast from "../../hooks/useToast";
import { useNavigate } from "react-router-dom";
// import { roadMapWithMap } from "../../../Redux/mapSelctorSlice";

const Mapsidebar = ({ sidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { image, locationDetails } = useSelector((state) => state.mapSelector);
  const id = localStorage.getItem("id");
  const { show, message, type } = useSelector((state) => state.Toastval);
  console.log(locationDetails, "////");
  console.log(locationDetails?.lon, "++++++++");
  const { toast } = useToast();

  const addtoMap = async () => {
    try {
      const res = await axios.post(
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
      console.log(res.data, "hyhyhyhyhyy");
      toast({
        show: true,
        message: "destination addeddd",
        type: "#5da364",
      });
    } catch (error) {
      toast({
        show: true,
        message: "destination alredy added",
        type: "#a6354a",
      });
    }
  };

  return (
    <>
      <div className="absolute left-0 top-15 z--2 lg:w-[40vh] w-full lg:h-full h-[45vh] bg-white lg:overflow-hidden overflow-y-scroll p-5 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Destination</h1>

        <div className="flex pt-10">
          <Carousel>
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
          </Carousel>
        </div>

        <div className="flex flex-col lg:flex-row justify-start items-center  gap-4 mt-10 mb-10">
          <Button className="p-2 w-28">ViewDetailss</Button>
        </div>

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

        <div className=" mt-10   flex flex-col justify-between">
          <Button className="p-2 w-44" onClick={addtoMap}>
            Add to RoadMap
          </Button>
          <Button
            className=" p-2 mt-4 w-24"
            onClick={() => {
              navigate("/roadmap");
            }}
          >
            go toTrip
          </Button>
        </div>
      </div>
      {show && <Toast />}
    </>
  );
};

export default Mapsidebar;
