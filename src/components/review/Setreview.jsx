import { Button, Input } from "@material-tailwind/react";
import React from "react";

function Setreview({ setadd }) {
  return (
    <>
      <div className="w-full h-full absolute top-32  z-10   ">
        <div
          className="w-full h-[500px] flex justify-center items-start      "
          onClick={() => {
            setadd(false);
          }}
        >
          <div className=" w-1/2  bg-white h-[290px] ml-20">
            <Input type="file" className="h-72"></Input>
          </div>

          <div className="  w-1/2  bg-white h-[350px] p-20 mr-20  flex flex-col items-start justify-between">
            <h1>ewfwfwr</h1>
            <Input className=" "></Input>

            <Input className=""></Input>
            <div className="flex justify-between w-full">
              <div>
                <Input className=""></Input>
              </div>
              <div>
                <Input className=""></Input>
              </div>
            </div>
            <Button type="submit" className=" rounded-md bg-blue-400 float-end"  >Submit</Button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Setreview;
