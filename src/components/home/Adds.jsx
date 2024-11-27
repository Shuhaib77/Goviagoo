import { Button } from "@material-tailwind/react";
import React from "react";

function Adds() {
  return (
    <>
      <div className="grid place-content-center mt-10 mb-10">
        <div className=" flex flex-col lg:flex-row justify-center gap-5 border rounded  w-full ">
          <img
            src="/assets/images/Food.avif"
            alt=""
            className="w-[500px] h-[300px] rounded"
          />

          <div className="w-full grid place-content-center text-center  ">
            <h1>Get special offers and
            more from Travel </h1>
            <p>Facilisi vulputate malesuada libero vitae <br /> fusce placerat dignissim blandit. </p>
           <div className="text-center mb-3">
           <Button className="w-24 mt-3 ">Details</Button>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adds;
