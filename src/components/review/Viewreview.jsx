import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewReviews } from "../../../Redux/userSlice";

function Viewreview() {
  const { allReview } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewReviews());
  }, []);
  console.log(allReview);

  return (
    <>
      <div className="w-100% h-full ml-36 mr-36">
        <div className="">
          {allReview.map((item) => {
            return (
              <div className=" flex justify-center w-full h-full mb-5">
                <div className="w-1/2 h-full  ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-[30vh] rounded-md   object-cover"
                  />
                </div>
                <div className=" w-full h-[30vh] p-5 grid place-content-left ml-5 gap-x-5">
                  <span>Kathmandu, Nepal</span>
                  <h1 className="font-bond text-2xl mt-2 mb-2 ">
                    {item.title}
                  </h1>
                  <p className="mb-2">{item.review}</p>
                  <h1>{item.date}</h1>
                  <h1>
                    <i
                      class="fa-solid fa-star fa-lg"
                      style={{ color: "#f5ec00" }}
                    ></i>
                    <i
                      class="fa-solid fa-star fa-lg"
                      style={{ color: "#f5ec00" }}
                    ></i>
                    <i
                      class="fa-solid fa-star fa-lg"
                      style={{ color: "#f5ec00" }}
                    ></i>
                    <i
                      class="fa-solid fa-star fa-lg"
                      style={{ color: "#f5ec00" }}
                    ></i>
                  </h1>
                </div>
              </div>
            );
          })}
          {/* --- */}

          {/* <div className=" flex justify-center w-full h-full mb-5">
          <div className="w-1/2 h-[30vh] ">
            <img
              src={"assets/images/images-8.jpeg"}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" w-full h-[30vh] p-5 grid place-content-center">
          <span>Kathmandu, Nepal</span>
          <h1 className="font-bond text-2xl mt-2 mb-2 ">11 Best Places to visit in Nepal</h1>
            <p className="mb-2">
              I recently spent two weeks in Nepal and it was one of the most
              memorable trips of my life. The people were incredibly friendly
              and welcoming, and I was amazed by the beauty of the natural
              landscape. The highlight of my trip was trekking in the Himalayas.
              The views were simply breathtaking and the experience of reaching
              the Everest Base Camp was truly unforgettable. I also spent a day
              in Chitwan National Park.
            </p>
            <h1>
            <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>
              <i
                class="fa-solid fa-star fa-lg"
                style={{ color: "#f5ec00" }}
              ></i>
            </h1>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Viewreview;
