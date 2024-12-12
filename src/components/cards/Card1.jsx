import React from "react";
import { useNavigate } from "react-router-dom";

function Card1({ heading, paragraph, icons, image }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="text-center mt-10 mb-5 ">
          <h5 className="font-bold text-2xl">{heading}</h5>
          <p className="font-bold mt-3">{paragraph}</p>
          <h1
            className="font-medium text-sm mt-4"
            onClick={() => {
              navigate("/destination");
            }}
          >
            {icons.name} {icons.icon}{" "}
          </h1>
        </div>
        <div className=" grid lg:grid-cols-3 place-items-center sm:grid-cols-1  mb-10 gap-y-5   w-full  ">
          {image &&
            image.slice(0, 6).map((item) => {
              return (
                <div className="rounded-2xl overflow-auto    ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[350px] h-[200px] "
                  />
                </div>
              );
            })}
          {/* <div className="w-[350px] h-[200px] rounded-2xl bg-red-400"></div>
          <div className="w-[350px] h-[200px] rounded-2xl bg-red-400"></div>
          <div className="w-[350px] h-[200px] rounded-2xl bg-red-400"></div>
          <div className="w-[350px] h-[200px] rounded-2xl bg-red-400"></div>
          <div className="w-[350px] h-[200px] rounded-2xl bg-red-400"></div> */}
        </div>
      </div>
    </>
  );
}

export default Card1;
