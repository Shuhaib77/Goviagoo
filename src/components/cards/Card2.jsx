import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savedmapDetails } from "../../../Redux/saveSlice";
import { Carousel } from "@material-tailwind/react";

function Card2() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.savedmaps);
  console.log(data);
  const id = localStorage.getItem("id");

  useEffect(() => {
    dispatch(savedmapDetails(id));
  }, []);
  const latData = data?.data?.savedMap
    ?.map((item) => item?.roadmapId?.map((item) => item.destinations))
    ?.flat(Infinity);
  console.log(
    // latData?.map((item) => item.image.map((item) => item)).flat().map((item)),
    "ghj"
  );

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
          <Carousel>
            {latData?.map((item) => {
              return (
                <div className="w-[320px] h-[350px] bg-green-600  ">
                  {item.image.flatMap((item) => {
                    return (
                      <img
                        src={item}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>

          <div className="w-[320px] h-[350px] bg-green-600  "></div>
          <div className="w-[290px] h-[350px] bg-green-600 "></div>
          <div className="w-[290px] h-[350px] bg-green-600  "></div>
          <div className="w-[290px] h-[350px] bg-green-600  "></div>
        </div>
        <div className=" mt-10 text-center ">
          <h5
            className="font-bold text-medium "
            onClick={() => {
              navigate("/mapselect");
            }}
          >
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
