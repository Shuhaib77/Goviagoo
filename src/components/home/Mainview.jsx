import React from "react";
import Toast from "../Toast";

function Mainview() {
  return (
    <>
      <div className=" lg:flex-row  justify-between items-center  flex flex-col  mb-10   lg:p-5  text-center mt-10 w-full h-full  ">
        <div className="text-center w-full " >
          <i class="fa-solid fa-ship fa-2xl" style={{ color: "#232323" }}></i>
          <h1 className="text-xl font-bold">Create RoadMap</h1>
          <h1>custom roadMAp</h1>
          <p>is simply dummy text of the <br /> printing and typesetting industry </p>
        </div>
        <div className="text-center w-full ">
          <i
            class="fa-solid fa-plane-arrival fa-2xl"
            style={{ color: "#232323" }}
          ></i>
          <h1 className="text-xl font-bold">Get liveUpdates</h1>
          <h1>live view</h1>
          <p>is simply dummy text of the <br /> printing and typesetting industry</p>
        </div>
        <div className="text-center w-full ">
          <i class="fa-solid fa-route fa-2xl" style={{ color: "#232323" }}></i>
          <h1 className="text-xl font-bold">
            Book Stay and Foods
          </h1>
          <h1>travel safe</h1>
          <p>is simply dummy text of the <br /> printing and typesetting industry</p>
        </div>
        <div>
          <Toast/>
        </div>
      </div>
    </>
  );
}

export default Mainview;
