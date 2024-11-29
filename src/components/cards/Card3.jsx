import React from "react";

function Card3() {
  return (
    <>
      <div>
      <div className="text-center  mb-10">
            <h1 className="font-bold text-2xl">Explore Food</h1>
        </div>
        <div className="flex flex-col gap-y-5 w-100% lg:flex-row justify-around gap-x-2  lg:ml-16 lg:mr-16 mt-16  ">
          <img
            src="/assets/images/Food.avif"
            alt=""
            className="w-[450px]  h-[300px] rounded-md object-cover"
          />
          <img
            src="/assets/images/Food.avif"
            alt=""
            className="w-[450px]  h-[300px] object-cover rounded-md "
          />
           <img
            src="/assets/images/Food.avif"
            alt=""
            className="w-[450px]  h-[300px] object-cover rounded-md "
          />
        </div>
      </div>
    </>
  );
}

export default Card3;
