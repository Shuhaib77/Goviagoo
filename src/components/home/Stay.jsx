import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FoodDataById, foodSpotData } from "../../../Redux/bookingSlice";
import Foodbookmodal from "../Booking/Foodbookmodal";

function Stay({ button, foodSpot, lat, lng,rid }) {
  const [book, setBook] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [foodid, setfoodid] = useState(null);

  useEffect(() => {
    if (lat && lng) {
      try {
        dispatch(foodSpotData({ lat, lng }));
      } catch (error) {
        console.error("failed to fetch food spot:", error);
      }
    } else {
      console.error("invalid lat or lng");
    }
  }, [lat, lng, dispatch]);

  const getSpotById = async (id) => {
    setfoodid(id);
    console.log(id, "ttttt");
    if (id) {
      dispatch(FoodDataById(id));
      setBook(true);
    } else {
      console.error("invalid id");
    }
  };

  return (
    <>
      <div className="text-center mt-16">
        <h1 className="font-bold text-2xl">Budget-Friendly Accommodations</h1>
      </div>
      {!foodSpot || foodSpot.length === 0 ? (
        <div className="text-center mt-10 text-red-400">
          No accommodations available.
        </div>
      ) : (
        <div className="grid grid-flow-col overflow-x-scroll gap-x-5 w-full ml-16 mr-16 mt-16 mb-20">
          {foodSpot.map((item, index) => (
            <div key={index} className="w-[300px] h-full border rounded-md">
              <img
                src={item.image}
                alt={item.name || "Accommodation image"}
                className="object-cover w-full h-[150px] rounded-md"
              />
              <div className="font-bold text-md m-2">
                <h1>{item.name}</h1>
                <h1>BreakFast:{item?.rate[0]}</h1>
                <h1>Lunch:{item?.rate[1]}</h1>
                <h1>Dinner:{item?.rate[2]}</h1>
              </div>
              <h1 className="m-2">Rating: {item.rating}/10</h1>
              {button && (
                <Button
                  className="p-2 w-16 float-end mb-2"
                  onClick={() => {
                    getSpotById(item._id);
                  }}
                >
                  {button}
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
      {book && <Foodbookmodal setBook={setBook} foodid={foodid} rid={rid} />}
    </>
  );
}

export default Stay;
