import { Button, Carousel } from "@material-tailwind/react";
import React, { useEffect } from "react";
import Calendar from "react-calendar";
import Head from "./Head";
import { useDispatch, useSelector } from "react-redux";
import { savedmapDetails } from "../../../Redux/saveSlice";

function Body() {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.savedmaps);
  console.log(data);
  const id = localStorage.getItem("id");

  useEffect(() => {
    dispatch(savedmapDetails(id));
  }, []);

  const latData = data?.data?.savedMap
    ?.slice(-1)
    ?.map((item) => item.roadmapId.map((item) => item.destinations))
    ?.flat(Infinity);
  const RoadData = data?.data?.savedMap
    ?.slice(-1)
    ?.map((item) => item.roadmapId)
    ?.flat(Infinity);
  console.log(RoadData, "dashboard");
  console.log(latData, "last");


  return (
    <>
      <div className="">
        <div className="ml-3">
          <Head />
        </div>

        <div className=" ml-3 p-4 mt-4">
          <h1 className="font-bold text-2xl  text-left">RoadTrip-1</h1>
          <h1 className="ml-4">dewdf</h1>
        </div>
        <div className="grid grid-cols-2 place-items-center mt-4    ">
          <div className="flex  p-5 w-full    ">
            <div className="w-1/2  rounded-2xl shadow-xl shadow-green-300">
              <Carousel>
                {latData?.map((item) => {
                  return (
                    <div>
                      <div className="bg-white w-full    shadow-md rounded border p-1 h-[50px]">
                        <h1 className="w-full text-sm">{item.name}</h1>
                      </div>

                      <div className="w-full h-[250px] overflow-x-auto rounded-md ">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full  h-full object-cover "
                        />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div className=" shadow-md rounded-2xl shadow-green-300 flex flex-col justify-around p-4 w-[350px] h-[300px]">
              {RoadData?.map((item) => {
                return (
                  <div className="pl-4">
                    <h1>Food Booked :{item?.foodBookings?.length}</h1>
                    <h1>Stay Booked :{item?.stayBookings?.length}</h1>
                    <h1>Destination added :{item?.destinations?.length}</h1>
                    <h1>Date Created :{item?.createdAt}</h1>
                    <p>dqedqewdeqd</p>
                  </div>
                );
              })}

              <div className="text-center">
                <Button className="w-72 ">Strat roadTrip</Button>
              </div>
            </div>
          </div>

          <Calendar className="border-2 rounded-md h-72 text-center pt-14   border-black" />

          <div className="  ">
            <div className="bg-blue-gray-700 flex justify-around   w-[610px] gap-x-10 overflow-auto  items-center h-[300px] mt-5 ml-10">
              <div className="min-w-[200px] flex flex-col h-[280px]">
                <div className="bg-red-900 h-full">
                  <img src="" alt="" />
                </div>
                <div className="bg-blue-300 h-full">
                  <h1>eded</h1>
                  <h1>eded</h1>
                </div>
              </div>
              {/* ------ */}
              <div className="min-w-[200px] flex flex-col h-[280px]">
                <div className="bg-red-900 h-full">
                  <img src="" alt="" />
                </div>
                <div className="bg-blue-300 h-full">
                  <h1>eded</h1>
                  <h1>eded</h1>
                </div>
              </div>
              {/* ---- */}
              <div className="min-w-[200px] flex flex-col h-[280px]">
                <div className="bg-red-900 h-full">
                  <img src="" alt="" />
                </div>
                <div className="bg-blue-300 h-full">
                  <h1>eded</h1>
                  <h1>eded</h1>
                </div>
              </div>
              {/* ---
               */}
              <div className="min-w-[200px] flex flex-col h-[280px]">
                <div className="bg-red-900 h-full">
                  <img src="" alt="" />
                </div>
                <div className="bg-blue-300 h-full">
                  <h1>eded</h1>
                  <h1>eded</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-auto gap-6 w-[460px] justify-center items-center h-[300px] bg-red-500">
            <div className="min-w-[400px] flex justify-around items-center min-h-[50px] rounded-md bg-blue-300">
              <div>
                <h1>dedede</h1>
              </div>
              <div>
                <h1>dewded</h1>
              </div>
              <Button></Button>
            </div>
            <div className="min-w-[400px] flex justify-around items-center min-h-[50px] rounded-md bg-blue-300">
              <div>
                <h1>dedede</h1>
              </div>
              <div>
                <h1>dewded</h1>
              </div>
              <Button></Button>
            </div>
            <div className="min-w-[400px] flex justify-around items-center min-h-[50px] rounded-md bg-blue-300">
              <div>
                <h1>dedede</h1>
              </div>
              <div>
                <h1>dewded</h1>
              </div>
              <Button></Button>
            </div>
            <div className="min-w-[400px] flex justify-around items-center min-h-[50px] rounded-md bg-blue-300">
              <div>
                <h1>dedede</h1>
              </div>
              <div>
                <h1>dewded</h1>
              </div>
              <Button></Button>
            </div>
            <div className="min-w-[400px] flex justify-around items-center min-h-[50px] rounded-md bg-blue-300">
              <div>
                <h1>dedede</h1>
              </div>
              <div>
                <h1>dewded</h1>
              </div>
              <Button></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
