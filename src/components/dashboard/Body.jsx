import { Button } from "@material-tailwind/react";
import React from "react";
import Calendar from "react-calendar";
import Head from "./Head";

function Body() {
  return (
    <>
      <div className="">
        <div className="ml-3">
          <Head />
        </div>

        <div className="bg-red-400  ml-3 p-4 mt-4">
          <h1 className="font-bold text-2xl  text-left">RoadTrip-1</h1>
          <h1 className="ml-4">dewdf</h1>
        </div>
        <div className="grid grid-cols-2 place-items-center mt-4    ">
          <div className="flex ml-10  gap-x-2 ">
            <div className="w-[250px] h-[250px] rounded-md bg-red-700">
              <img src="" alt="" className="w-full h-full" />
              <div className="bg-white border rounded w-full h-[50px]">
                <h1>dd</h1>
              </div>
            </div>
            <div className="bg-green-700 rounded-md flex flex-col justify-around p-4 w-[350px] h-[300px]">
              <h1>dewded</h1>
              <h1>eddwed</h1>
              <p>dqedqewdeqd</p>
              <div className="text-center">
                <Button className="w-72 ">Strat roadTrip</Button>
              </div>
            </div>
          </div>

          <Calendar className="border-2 rounded-md h-72 text-center pt-14  border-black" />

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
          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default Body;
