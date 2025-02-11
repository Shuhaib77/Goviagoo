import React, { useEffect } from "react";
import Header from "../Header";
import { Button } from "@material-tailwind/react";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  foodBookDetailss,
  stayBookingstatus,
} from "../../../Redux/bookingSlice";

function Statusview() {
  const { stayBookingStat, foodBookingStat } = useSelector(
    (state) => state.bookingDatas
  );
  console.log(foodBookingStat, "statsss");
  console.log(stayBookingStat, "bioookkss");

  const id = localStorage.getItem("id");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(stayBookingstatus(id));
    dispatch(foodBookDetailss(id));
  }, []);
  return (
    <>
      <div className="w-full pl-5 pr-5 mt-10 h-[85vh] overflow-auto   ">
        <h1 className="font-bold text-2xl ml-7 ">Accommadation</h1>

        <div>
          {stayBookingStat.length === 0 ? (
            <h1 className="text-center font-bold text-2xl text-red-700">
              no stay Booking yet
            </h1>
          ) : (
            stayBookingStat.map((item) => {
              return (
                <div className="w-100% h-[35vh] flex justify-around mt-10 ">
                  <div className="w-1/3  bg-red-500 ">
                    {item.stay.map((item) => {
                      return (
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full rounded-md shadow-md object-cover"
                        />
                      );
                    })}
                  </div>
                  <div className="w-1/3  flex flex-col justify-around p-5 ">
                    {item.stay.map((item) => {
                      return (
                        <div>
                          <h1 className="font-bold text-xl mt-5">
                            {item.name}
                          </h1>

                          <h1>{`rating:10/ ${item.rating}`} </h1>
                          <h1 className=" "> {`web:${item.websaite}`}</h1>
                          <h1></h1>
                        </div>
                      );
                    })}
                    <div>
                      <h1>{`Days:${item.roomNo}`}</h1>

                      <h1> {`Days:${item.days}`} </h1>
                      <h1> {`BookedDate:${item.createdAt}`} </h1>
                    </div>

                    {item.status === true ? (
                      <div className="flex justify-between">
                        <Button className="bg-green-600 ">success</Button>
                        <Button className="bg-red-600 ">cancel</Button>
                      </div>
                    ) : (
                      <div className="flex justify-between">
                        <Button className="bg-red-600">failed</Button>
                        <Button className="bg-blue-600">bookagain</Button>
                      </div>
                    )}
                  </div>
                  <div className="w-1/5  text-end grid place-content-end  ">
                    <h1 className="text-blue-800">{`Room: ${item.roomNo} for ${item.days} days`}</h1>
                    <h1 className="text-red-700">
                      Total amount Paid: {item.rate}
                    </h1>
                    <h1></h1>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* ---- */}

        <div className="mt-20">
          <h1 className="font-bold text-2xl ml-7 ">Food Spotsss</h1>
          {/* {foodBookingStat.length === 0 ? ( */}

          {foodBookingStat.length === 0 ? (
            <h1 className="text-center font-bold text-2xl text-red-700">
              {" "}
              no food booking yett
            </h1>
          ) : (
            foodBookingStat?.map((item) => {
              return (
                <div>
                  {/* {foodBookingStat.map((item) => { */}

                  <div className="w-100% h-[35vh] flex justify-around mt-10 ">
                    <div className="w-1/3  bg-red-500 ">
                      {item.foodSpot?.map((item) => {
                        return (
                          <img
                            src={item.image}
                            alt=""
                            className="w-full rounded-md h-full object-cover"
                          />
                        );
                      })}
                    </div>
                    <div className="w-1/3  flex flex-col justify-around p-5 ">
                      {item.foodSpot?.map((item) => {
                        return (
                          <div>
                            <h1 className="font-bold text-xl mt-5">
                              {item.name}
                            </h1>
                            <h1>{`Rating:${item.rating}/10`}</h1>
                            <h1>{`web:${item.websaite}`}</h1>
                          </div>
                        );
                      })}
                      <div>
                        <h1>{`Total Members:${item?.customers}`}</h1>
                        <h1>{`Date Booked:${item?.date}`}</h1>
                        <h1>{`Total Amount Paid:${item?.rate}`}</h1>
                        <h1>{`Food Type:${item?.type}`}</h1>
                      </div>
                      <div className="flex justify-between ">
                        {item.status === true ? (
                          <div className="flex justify-between w-full">
                            <Button className="bg-green-600 ">success</Button>
                            <Button className="bg-red-600 ">cancel</Button>
                          </div>
                        ) : (
                          <div className="flex justify-between w-full">
                            <Button className="bg-red-600">failed</Button>
                            <Button className="bg-blue-600">bookagain</Button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-1/5  text-end grid place-content-end  ">
                      <h1 className="text-green-900">Date:{item.date}</h1>
                      <h1 className="text-red-700"></h1>
                      <h1 className="text-blue-800">{`Food Type ${item.type} for ${item?.customers} members`}</h1>
                      <h1 className="text-red-700">{`Total Amount Paid:${item?.rate}`}</h1>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* ) : ( */}

          {/* )} */}
        </div>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
}

export default Statusview;
