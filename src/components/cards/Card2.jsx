import React from "react";
import { useNavigate } from "react-router-dom";

function Card2() {
  const navigate=useNavigate()
  return (
    <>
      <div className="w-100%   ml-16 mr-16">
        <div className=" mb-10 text-center ">
          <h5 className="font-bold text-2xl ">Top RoadMaps</h5>
          <p className="font-bold mt-3">
            explore <br /> custom road Mapss
          </p>
        </div>
        <div className="w-full grid grid-flow-col   gap-x-24     overflow-x-scroll  ">
          <div className="w-[320px] h-[350px] bg-green-600 "></div>
          <div className="w-[320px] h-[350px] bg-green-600  "></div>
          <div className="w-[320px] h-[350px] bg-green-600  "></div>
          <div className="w-[290px] h-[350px] bg-green-600 "></div>
          <div className="w-[290px] h-[350px] bg-green-600  "></div>
          <div className="w-[290px] h-[350px] bg-green-600  "></div>
        </div>
        <div className=" mt-10 text-center ">
          <h5 className="font-bold text-medium " onClick={()=>{
            navigate('/mapselect')
          }}>
            create RoadMap{" "}
            <i
              class="fa-solid fa-arrow-right-long fa-xl ml-3"
              style={{ color: "#000000" }}
            ></i>
          </h5>
        </div>
      </div>
    </>
  );
}

export default Card2;
