import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { foodBooking, FoodDataById } from "../../../Redux/bookingSlice";
import { Button, Input, Option, Select } from "@material-tailwind/react";

function Foodbookmodal({ foodid, setBook,rid }) {
  const { spotData } = useSelector((state) => state.bookingDatas);
  const dispatch = useDispatch();
  const [type, setType] = useState("lunch");
  const [customer, setCustomer] = useState(1);
  // const [rate, setRate] = useState(null);
  const uid = localStorage.getItem("id");
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (foodid) {
      dispatch(FoodDataById(foodid));
    }
  }, [dispatch, foodid]);

  const calculateTotal = () => {
    let totalrate = 0;
    if (!type || !spotData?.rate || customer <= 0) return 0;
    switch (type) {
      case "lunch":
        totalrate = spotData.rate[0] * customer;

        return totalrate;

      case "dinner":
        totalrate = spotData.rate[1] * customer;
        return totalrate;
      default:
        totalrate = spotData.rate[2] * customer;

        return totalrate;
    }
  };
  const rate = calculateTotal();
  const fid = foodid;
  // console.log(d);

  return (
    <div className="inset-0 backdrop-blur-md fixed flex justify-around bg-black bg-opacity-80  items-center w-full h-full">
      <div className="bg-white shadow-2xl rounded p-5">
        <Button className="float-right" onClick={() => setBook(false)}>
          Close
        </Button>

        <div className="flex justify-center items-center  w-full h-full  rounded-2xl">
          <div className="w-1/2 h-full flex flex-col items-center">
            <h1 className="text-green-400 text-center text-2xl font-bold mb-5">
              {spotData?.name || "Loading..."}
            </h1>
            <img
              src={spotData?.image || ""}
              alt={spotData?.name || "Food Image"}
              className="w-full min-w-52 h-[40vh] object-cover mt-5 rounded-md"
            />
          </div>

          <div className="flex flex-col w-1/2 p-5 justify-center gap-5">
            <h1 className="text-center text-2xl font-bold mb-5">Bookings</h1>

            <label htmlFor="rooms" className="font-semibold">
              Meal Type:
            </label>
            <Select
              id="rooms"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border border-gray-300 rounded p-2"
            >
              {spotData?.types?.length > 0 ? (
                spotData.types.map((item, index) => (
                  <Option key={index} value={item}>
                    {item}
                  </Option>
                ))
              ) : (
                <Option>Loading...</Option>
              )}
            </Select>

            <label htmlFor="quantity" className="font-semibold">
              Quantity:
            </label>
            <Select
              id="quantity"
              value={customer}
              onChange={(e) => setCustomer(Number(e.target.value))}
              className="border border-gray-300 rounded p-2"
            >
              {[...Array(10).keys()].map((item) => (
                <Option
                  key={item + 1}
                  value={item + 1}
                  onClick={() => {
                    calculateTotal();
                  }}
                >
                  {item + 1}
                </Option>
              ))}
            </Select>
            <div className="">
              <Input
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              ></Input>
            </div>

            <h1 className="text-center text-lg font-bold">
              Total Cost: ₹{rate}
            </h1>
            {console.log(customer, date,type, "jfjff")}
            <Button
              className="bg-blue-900 text-center w-full "
              onClick={() => {
                dispatch(foodBooking({ fid, uid, rate, date, type, customer,rid }));
              }}
            >
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foodbookmodal;
