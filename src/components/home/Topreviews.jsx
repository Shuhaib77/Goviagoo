import React from "react";

// import images from "../../assets/images/image.jpg";
import { Carousel } from "@material-tailwind/react";

function Topreviews() {
  return (
    <>
      <div className=" w-100% mb-16 mt-16 ml-14 mr-14 ">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold">Top Reviews</h1>
        </div>

        <Carousel className="Carousel bg-green-200 ppt-5 pb-5">
          <div className="grid grid-cols-1 place-items-center  w-100% ml-14 mr-14  text-center  p-3 ">
            <h1 className="mb-5 font-bold text-xl">cfwcwevv</h1>
            <img
              src="/assets/images/image.jpg"
              alt=""
              className="w-[17vh] h-[17vh] rounded-[100%]"
            />
            <h1 className="mt-3 font-semibold">dcewfcfv</h1>
            <p className="font-medium mb-5">
              3edcwrcfveerffgtgyvhy5hbyhjujujjynjuyjnyunjujyunjyujyjjnjjyjyju
              <br /> khbkbcewcjuju6jyujyunjujujujjherjceg feriu
              gfriffwrjkfghwelifwfwef
              <br />
              cwececfrfrfjbkrjbhfiuugbfkferfyfgefk,bekfgek
            </p>
          </div>
          <div className="grid grid-cols-1 place-items-center bg-green-200  text-center p-5 ">
            <h1 className="mb-5">cfwcwevv</h1>
            <img
              src="/assets/images/image.jpg"
              alt=""
              className="w-[17vh] h-[17vh] rounded-[100%]"
            />
            <h1 className="mt-3">dcewfcfv</h1>
            <p>
              3edcwrcfveerffgtgyvhy5hbyhjujujjynjuyjnyunjujyunjyujyjjnjjyjyju
              <br /> khbkbcewcjuju6jyujyunjujujujjherjceg feriu
              gfriffwrjkfghwelifwfwef
              <br />
              cwececfrfrfjbkrjbhfiuugbfkferfyfgefk,bekfgek
            </p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Topreviews;
