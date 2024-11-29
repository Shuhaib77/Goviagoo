import React from "react";

function Liveupdate({ setMenu }) {
  return (
    <>
      <div
        className="w-[100vh] h-[50vh] bg-black  bg-opacity-0 absolute left-0 z-10"
        onClick={() => {
          setMenu(false);
        }}
      >
        <div className="flex justify-around items-center w-full h-full  ">
          <div>
            <h1>hotel</h1>
            <div className="w-[200px] h-[200px] bg-red-600"></div>
          </div>
          <div className="w-[200px] h-[100px] bg-green-600"></div>
         <div>
            <h1>journy</h1>
         <div className="w-[150px] h-[100px] bg-red-600"></div>
         </div>

          <div className="w-[200px] h-[70px] bg-blue-600"></div>
        </div>
      </div>
    </>
  );
}

export default Liveupdate;
