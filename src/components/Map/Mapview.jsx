import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Mapview() {
    const navigate=useNavigate()
  return (
    <>
      <div className="w-100%  ml-8 mr-8 lg:ml-16 lg:mr-16">
        <h1 className="text-2xl mb-10 font-bold text-center">Your Map</h1>
        <div className="bg-green-600 rounded-lg  lg:w-[140vh] h-[70vh] m-auto"></div>
      </div>
      <div className="text-center lg:float-end">
      <Button className=" sm:text-center  p-2 lg:mr-24 w-24 mt-5 mb-20" onClick={()=>{
        navigate('/live')
      }}> Start</Button>
      </div>
    </>
  );
}

export default Mapview;
