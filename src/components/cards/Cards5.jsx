import { Button } from "@material-tailwind/react";
import React from "react";

function Cards5() {
  return (
    <>
      <div className="w-100%  lg:ml-36 lg:mr-36">
        <div className=" flex flex-col justify-center items-center lg:flex-row w-100% h-full mb-5 gap-10 shadow-md      ">
          <div className="lg:w-1/2 ">
            <img
              src="assets/images/banner-2.jpg"
              alt=""
              className=" h-[40vh] w-full object-cover rounded-md"
            />
          </div>
          <div className=" lg:w-1/2 lg:text-start text-center  h-full p-5 ">
            <h1 className="text-2xl font-bold">Discover France</h1>
            <p>
              Viverra non commodo vel ac aliquet. Ac euismod tincidunt <br />{" "}
              sed quam pharetra laoreet nisl mollis vitae.{" "}
            </p>
            <div className="  mt-5">
              <h1>Full financial protection</h1>
              <h1>Full financial protection</h1>
              <h1>Full financial protection</h1>
            </div>
            <div className="flex  justify-start gap-5 mt-10 ">
              <div className="w-[30px] h-[30px] bg-white "></div>
              <div className="w-[30px] h-[30px] bg-white "></div>
            </div>
            <div className="flex justify-between mt-10 ">
              <Button>view detail</Button>
              <Button className="">view map</Button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center lg:flex-row w-100% h-full mb-5 gap-10 shadow-md      ">
          <div className="lg:w-1/2 ">
            <img
              src="assets/images/banner-2.jpg"
              alt=""
              className=" h-[40vh] w-full object-cover rounded-md"
            />
          </div>
          <div className=" lg:w-1/2 lg:text-start text-center  h-full p-5 ">
            <h1 className="text-2xl font-bold">Discover France</h1>
            <p>
              Viverra non commodo vel ac aliquet. Ac euismod tincidunt <br />{" "}
              sed quam pharetra laoreet nisl mollis vitae.{" "}
            </p>
            <div className="  mt-5">
              <h1>Full financial protection</h1>
              <h1>Full financial protection</h1>
              <h1>Full financial protection</h1>
            </div>
            <div className="flex  justify-start gap-5 mt-10 ">
              <div className="w-[30px] h-[30px] bg-white "></div>
              <div className="w-[30px] h-[30px] bg-white "></div>
            </div>
            <div className="flex justify-between mt-10 ">
              <Button>view detail</Button>
              <Button className="">view map</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards5;
