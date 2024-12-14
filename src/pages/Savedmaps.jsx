import React from "react";
import Road from "../components/Map/Road";
import Header from "../components/Header";


function Savedmaps() {
  return (
    <>
      {/* <div className="w-full h-screen  flex justify-center gap-y-20 items-center ">
        <div className="bg-gray-700 w-[10vh] rounded-es-full h-[50vh] rounded-se-full">
        <div className="flex flex-col gap-5 justify-center items-center h-full">
                <h1 className="bg-white h-1/4 w-[10px] rounded-se-full"></h1>
                <h1 className="bg-white h-1/3 w-[10px]"></h1>
                <h1 className="bg-white h-1/6 w-[10px] rounded-es-full"></h1>
              </div>
        </div>
        <div className="flex w-full h-[50vh] justify-center items-end ">
          <div className="bg-gray-700  w-1/3 h-[10vh]  ">
            <div className="flex gap-5 justify-center items-center h-full">
              <h1 className="bg-white h-[10px] w-full"></h1>
              <h1 className="bg-white h-[10px] w-full"></h1>
              <h1 className="bg-white h-[10px] w-full"></h1>
            </div>
          </div>
          <div className="flex w-full h-[50vh] justify-center items-start">
            <div className="bg-gray-700 w-[10vh] h-[50vh] rounded-ss-full rounded-ee-full">
              <div className="flex flex-col gap-5 justify-center items-center h-full">
                <h1 className="bg-white h-1/4 w-[10px] rounded-ss-full"></h1>
                <h1 className="bg-white h-1/3 w-[10px]"></h1>
                <h1 className="bg-white h-1/6 w-[10px] rounded-ee-full"></h1>
              </div>
            </div>
            <div className="flex w-full h-[50vh] justify-center items-start">
              <div className="bg-gray-700  w-full h-[10vh]">
                <div className="flex gap-5 justify-center items-center h-full">
                  <h1 className="bg-white h-[10px] w-full"></h1>
                  <h1 className="bg-white h-[10px] w-full"></h1>
                  <h1 className="bg-white h-[10px] w-full"></h1>
                </div>
              </div>
              <div className="flex w-full h-[50vh] justify-center items-end">
                <div className="bg-gray-700  w-[10vh] h-[50vh] rounded-se-full rounded-es-full"> <div className="flex flex-col gap-5 justify-center items-center h-full">
                <h1 className="bg-white h-1/4 w-[10px] rounded-se-full"></h1>
                <h1 className="bg-white h-1/3 w-[10px]"></h1>
                <h1 className="bg-white h-1/6 w-[10px] rounded-es-full"></h1>
              </div>

                </div>
                <div className="bg-gray-700  w-[50vh] h-[10vh] rounded-r-full">
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
      <div>
        <Header/>
      </div>
     <div>
     <Road/>
     </div>
    </>
  );
}

export default Savedmaps;
