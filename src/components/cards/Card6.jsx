import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getDestinationData,
  RoadMapData,
} from "../../../Redux/destinationSlice";
import { RoadmapViewd } from "../../../Redux/mapSelctorSlice";
import axios from "axios";
import useToast from "../../hooks/useToast";
import Toast from "../Toast";

function Card6() {
  const { toast } = useToast();
  const id = localStorage.getItem("id");
  // const [createRoadMap,setcreateRoadMap]=useState(false)
  const { YourMap } = useSelector((state) => state.destination);
  const { show } = useSelector((state) => state.Toastval);
  const { createRoadMap } = useSelector((state) => state.mapSelector);
  console.log(YourMap, "kkkk");
  console.log(createRoadMap, "hhhhh");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(RoadMapData(id));
  }, []);

  const deleteDesination = async (did) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api//destination/delete/roadmap/${did}/${id}`
      );
     dispatch(RoadMapData(id));
     console.log(data);
      toast({
        show: true,
        message: "deleted successfull",
        type: "green",
      });
    } catch (error) {
      toast({
        show: true,
        message: "deleted successfull",
        type: "red",
      });
    }
  };
  return (
    <>
      <div className=" w-100%  lg:ml-16 lg:mr-16 sm:mb-20  ">
        <Button className="p-2 w-28">Add more</Button>
        <h1 className="text-xl font-semibold mt-2">Road Map-1</h1>
        <div className=" lg:w-full lg:h-full h-[110vh] grid lg:grid-flow-col sm:grid-flow-row overflow-y-scroll lg:overflow-x-scroll sm:gap-y-5  gap-5 mb-10 shadow-md  ">
          {YourMap?.map((item) => {
            return (
              <div className="flex">
                <div className="shadow-md bg-white lg:w-[300px] rounded-l-md  h-full">
                  <div
                    style={{
                      backgroundImage: `url(${item?.image})`,
                    }}
                    className="bg-cover w-full h-[50vh] lg:h-[35vh] grid place-items-end pl-1 pr-1 rounded-md s   "
                  ></div>
                  <div className="w-full h-[45px] bg-white rounded flex items-center gap-3  ">
                    <div className=" w-full flex justify-between">
                      <div className="flex justify-center items-center gap-x-4">
                        <i
                          class="fa-solid fa-location-dot fa-xl ml-2"
                          style={{ color: " #232323" }}
                        ></i>

                        <h1>cfevegv</h1>
                      </div>
                      <div className="flex justify-center gap-x-4 items-center">
                        <i
                          class="fa-solid fa-star fa-lg"
                          style={{ color: "#f5ec00" }}
                        ></i>

                        <h1 className="mr-2">5.5</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" rounded-r-md  h-full text-center lg:text-start lg:w-[300px]">
                  <h1 className="p-2">
                    {item?.description || "district not found"}
                  </h1>
                  <div className="flex justify-between mt-5 p-2">
                    <h1 className="bg-gray-300 p-2 ">
                      {item?.visitTime || "! best timeToVisit"}
                    </h1>
                    <h1 className="bg-gray-300 p-2 ">
                      {item?.category || "type not found"}
                    </h1>
                  </div>

                  <p className="p-2">{item.name}</p>
                  <div></div>
                  <div className=" p-3">
                    <h1
                      className="border border-blue-200 font-medium text-sm p-2  "
                      onClick={() => {
                        navigate("/stay");
                      }}
                    >
                      <i
                        class="fa-solid fa-star fa-lg"
                        style={{ color: "#f5ec00" }}
                      ></i>
                      Add Accommadation
                    </h1>
                    <h1
                      className="border border-blue-200 p-2  mt-2 font-medium text-sm"
                      onClick={() => {
                        navigate("/food");
                      }}
                    >
                      {" "}
                      <i
                        class="fa-solid fa-star fa-lg"
                        style={{ color: "#f5ec00" }}
                      ></i>
                      Add Foodspots
                    </h1>
                    <div className="flex justify-between items-center">
                      <Button
                        className="p-2 w-40 mt-5"
                        onClick={() => {
                          navigate("/destinationdtil");
                        }}
                      >
                        View details
                      </Button>
                      <div className="mt-5">
                        <i
                          class="fa-solid fa-trash fa-xl"
                          onClick={() => {
                            deleteDesination(item._id);
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end shadow-sm">
          <Button
            className="float-end mr-14 p-2 w-36"
            onClick={() => {
              dispatch(RoadmapViewd(true));
            }}
          >
            create RoadMap
          </Button>
          {console.log(createRoadMap, "lll")}
          <Button className="float-end mr-14 p-2 w-24">Edit</Button>
        </div>
      </div>
      {show && <Toast />}
    </>
  );
}

export default Card6;
