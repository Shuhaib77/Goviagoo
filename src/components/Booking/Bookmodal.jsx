import { Button, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stayByyId } from "../../../Redux/bookingSlice";

function Bookmodal({ id ,setOpen}) {
  const { stay } = useSelector((state) => state.bookingDatas);
  const dispatch = useDispatch();
  const [days, setdays] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(stayByyId(id));
    }
  }, [dispatch, id]); // Add id to dependency array

  console.log(stay, "AAAAAA");

  return (
    <>
      <div className="inset-0 backdrop-blur-md fixed flex justify-around items-center w-full h-full">
        <div className="bg-white  shadow-2xl rounded">
          <Button className="float-end m-2" onClick={()=>{
            setOpen(false)
          }}>close</Button>
          <div className="w-[70vh] h-[50vh]  flex justify-center items-start rounded-2xl ">
            <div className="w-[600px] h-[300px]  m-5 ">
              <h1 className="text-green-400 text-center ">{stay.name}</h1>
              <img
                src={stay.image}
                alt=""
                className="w-full h-full object-cover mt-5 rounded-md  "
              />
              <h1 className="mt-5 text-yellow-900 text-center">
                {" "}
                Rating:<span className="text-green-600">{stay.rating}/10</span>
              </h1>
            </div>
            <div className="flex flex-col  w-full h-full justify-center gap-7   ">
              <h1 className="text-center text-2xl font-bold mb-5">BOOKINGS</h1>
              <h1>Rooms:</h1>
              <select name="rooms" id="rooms" className="mr-5">
                {stay?.rooms?.length > 0 ? (
                  stay.rooms.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))
                ) : (
                  <option>Loading...</option>
                )}
              </select>

              <div>
                <h1>days</h1>
                <div>
                  <select
                    name="days"
                    id="days"
                    onChange={(e) => {
                      setdays(e.target.value);
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* <h1>rate:{stay?.rate}</h1> */}
              <h1 className="text-red-400">
                <span className="text-blue-gray-800">
                  Rate {days && `for ${days} days`}
                </span>
                : {stay?.rate * days ? stay?.rate * days : stay?.rate}
              </h1>

              <Button className="bg-blue-900 text-center w-50 mr-3">Pay</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookmodal;
