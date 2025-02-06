import React, { useEffect } from "react";

// import images from "../../assets/images/image.jpg";
import { Carousel } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { viewReviews } from "../../../Redux/userSlice";

function Topreviews() {
  const dispatch = useDispatch();
  const { allReview } = useSelector((state) => state.userData);

  useEffect(() => {
    const userReivews = () => {
      dispatch(viewReviews());
    };
    userReivews();
  }, []);

  console.log(allReview, "dc");

  return (
    <>
      <div className="   mt-16 ml-14 mr-14 ">
        {/* <div className="text-center mb-10">
          <h1 className="text-2xl font-bold">Top Reviews</h1>
        </div> */}
        <div className="">
          <Carousel className="Carousel pt-5 pb-5 bg-green-200 flex">
            {allReview.map((item, i) => {
              return (
                <div>
                  <div className="grid grid-cols-1 place-items-center  w-100% ml-14 mr-14  text-center  p-16 ">
                    <h1 className="mb-5 font-bold text-xl">cfwcwevv</h1>
                    <img
                      src={item.image}
                      alt=""
                      className="w-[17vh] h-[17vh] rounded-[100%]"
                    />
                    <h1 className="mt-3 font-semibold">{item.title}</h1>
                    <p className="font-medium mb-5">
                      {item.review}
                      <br />
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Topreviews;
