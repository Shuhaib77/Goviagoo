import React, { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { pay, stayByyId } from "../../../Redux/bookingSlice";

function Bookmodal({ id, setOpen,rid }) {
  const { stay, loading, error } = useSelector((state) => state.bookingDatas);
  console.log(rid,"roadmapid");
  
  const dispatch = useDispatch();
  const [days, setDays] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState("");
  const uid=localStorage.getItem("id")
// const rate=stay.rate
// const roomNo=selectedRoom

  useEffect(() => {
    if (id) {
      dispatch(stayByyId(id));
    }
  }, [dispatch, id]);

  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  const handleDaysChange = (e) => {
    setDays(parseInt(e.target.value, 10));
  };

  const calculateRate = () => {
    let total=0
    if (!stay?.rate || !days){
      total=0
    }else{
      total=stay.rate * days;

    }
    return total
  
  };
    
  const rate=calculateRate()
  console.log(rate);
  

  return (
    <>
      <div
        className="inset-0 backdrop-blur-md fixed flex justify-center items-center w-full h-full"
        aria-hidden={!id}
      >
        <div className="bg-white shadow-2xl rounded w-[90%] max-w-[800px]">
          <Button
            className="float-right m-2"
            onClick={() => setOpen(false)}
            aria-label="Close modal"
          >
            Close
          </Button>
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <p>Loading...</p>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-red-500">Error fetching stay details.</p>
            </div>
          ) : (
            <div className="p-5 flex flex-col items-center">
              <h1 className="text-2xl font-bold text-green-400 text-center mb-4">
                {stay?.name}
              </h1>
              <img
                src={stay?.image}
                alt={`${stay?.name} thumbnail`}
                className="w-full max-w-md h-[200px] object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-medium text-yellow-900 text-center">
                Rating:{" "}
                <span className="text-green-600">{stay?.rating || "N/A"}/10</span>
              </h2>
              <div className="w-full mt-5">
                <h3 className="mb-2 font-medium">Rooms:</h3>
                <select
                  name="rooms"
                  id="rooms"
                  className="w-full p-2 border rounded"
                  onChange={handleRoomChange}
                  value={selectedRoom}
                  aria-label="Select a room"
                >
                  {stay?.rooms?.length > 0 ? (
                    stay.rooms.map((room, index) => (
                      <option key={index} value={room}>
                        {room}
                      </option>
                    ))
                  ) : (
                    <option value="">No rooms available</option>
                  )}
                </select>
              </div>
              <div className="w-full mt-5">
                <h3 className="mb-2 font-medium">Days:</h3>
                <select
                  name="days"
                  id="days"
                  className="w-full p-2 border rounded"
                  onChange={handleDaysChange}
                  value={days}
                  aria-label="Select number of days"
                >
                  {[1, 2, 3, 4, 5, 6].map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <h3 className="text-lg text-blue-900 mt-5">
                Total Rate:{" "}
                <span className="text-red-500 font-bold">
                  {calculateRate()}
                </span>
              </h3>
              {console.log(uid,"igg",id,"idssss")
              }
              <Button
                className="bg-blue-900 text-white mt-5"
                onClick={() => dispatch(pay({id,uid,days,selectedRoom,rate,rid}))}
                aria-label="Proceed to payment"
              >
                Pay
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Bookmodal;
