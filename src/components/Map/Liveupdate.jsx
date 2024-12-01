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
            <div className="w-[200px] h-[200px] border-2 border-black rounded-md bg-white ">
              <img
                src="/assets/images/images-8.jpeg"
                alt=""
                className="w-full h-1/2 object-cover"
              />
              <div className="p-3">
                <h1>ddwcefcf</h1>
                <h1>ddwcefcf</h1>
                <h1>ddwcefcf</h1>
              </div>
            </div>
          </div>
          <div className="w-[200px] h-[100px]  border-2 border-black rounded-md flex bg-white ">
            <img
              src="/assets/images/Food.avif"
              alt=""
              className="w-1/2 h-full object-cover"
            />

            <div className="p-3 flex flex-col">
              <h1>ddwcefcf</h1>
              <h1>ddwcefcf</h1>
              <h1>ddwcefcf</h1>
            </div>
          </div>
          <div>
            <h1>journy</h1>
            <div className="w-[150px] h-[100px] border-2 text-center border-black rounded-md bg-white">
                <span>24 august</span>
                <h1>MAD-----LON</h1>
                <h1>ded</h1>
                <h1 className="">dw</h1>
            </div>
          </div>

          <div className="w-[200px] h-[70px] border-2 text-center border-black rounded-md bg-white">
          <h1>MAD-----LON</h1>
          <h1>ded</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Liveupdate;
