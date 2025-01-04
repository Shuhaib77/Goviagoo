import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Bookmodal from "../Booking/Bookmodal";
import { useDispatch, useSelector } from "react-redux";
import { stayByyId, stayData } from "../../../Redux/bookingSlice";
import axios from "axios";

function Card4({ locationdata, lat, lng, dataById,rid }) {
  console.log(lat, lng, "popopo");

  const { stay } = useSelector((state) => state.bookingDatas);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    if (lat && lng) {
      dispatch(stayData({ lat, lng }));
    } else {
      console.error("Invalid lat or lng");
    }
  }, [lat, lng, dispatch]);

  const fn = async (id) => {
    setId(id);
    console.log(id, "23232");
    if (id) {
      dispatch(stayByyId(id));
    } else {
      console.error("Invalid ID");
    }
  };

  console.log(stay, "OOOOOO");

  return (
    <>
      <div className="w-100% ml-16 mr-16">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Accommadationss</h1>
        </div>
        {locationdata ? (
          <div className="flex justify-between overflow-x-scroll mt-10 mb-10 gap-x-10">
            {!locationdata || locationdata.length === 0 ? (
              <h1 className="text-center text-red-400 w-full h-full p-5">
                not accommadation finded
              </h1>
            ) : (
              locationdata?.map((item, index) => (
                <div
                  key={index}
                  className="w-[300px] shadow-md rounded-md pt-1"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-[270px] h-[180px] rounded-md m-auto"
                  />
                  <div className="font-bold text-md p-3">
                    <h1>{item.name}</h1>
                    <h1>{item.rate}</h1>
                  </div>
                  <div className="pl-3">
                    <h1>
                      <img
                        src={
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                        }
                        alt=""
                        className="rounded-100% w-[20px] h-[20px]"
                      />
                    </h1>
                    <h1>{item.websaite}</h1>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                      alt=""
                      className="rounded-100% w-[20px] h-[20px]"
                    />
                    <h1>{item.link}</h1>
                  </div>
                  <h1 className="font-bold text-red-400 text-sm pl-3">
                    {item.price}
                  </h1>
                  <h1 className="pl-3">
                    Rating:
                    <i
                      className="fa-solid fa-star fa-lg"
                      style={{ color: "#f5ec00" }}
                    ></i>{" "}
                    <i
                      className="fa-solid fa-star fa-lg"
                      style={{ color: "#f5ec00" }}
                    ></i>{" "}
                    <i
                      className="fa-solid fa-star fa-lg"
                      style={{ color: "#f5ec00" }}
                    ></i>{" "}
                    <i
                      className="fa-solid fa-star fa-lg"
                      style={{ color: "#f5ec00" }}
                    ></i>{" "}
                  </h1>
                  <div className="text-center">
                    <Button
                      className="w-[290px] h-10"
                      onClick={() => {
                        setOpen(true);
                        fn(item._id);
                      }}
                    >
                      Book
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="flex justify-between overflow-x-scroll mt-10 mb-10 gap-x-10">
            {/* {!locationdata || locationdata.length === 0 ? ( */}
            {/* <h1 className="text-center text-red-400 w-full h-full p-5">not accommadation finded</h1> */}
            {/* ) : ( */}
            {/* locationdata?.map((item, index) => ( */}
            <div className="w-[300px] shadow-md rounded-md pt-1">
              <img
                src={dataById.image}
                alt=""
                className="w-[270px] h-[180px] rounded-md m-auto"
              />
              <div className="font-bold text-md p-3">
                <h1>{dataById.name}</h1>
                {/* <h1>{item.rate}</h1> */}
              </div>
              <div className="pl-3">
                <h1>
                  <img
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                    }
                    alt=""
                    className="rounded-100% w-[20px] h-[20px]"
                  />
                </h1>
                {/* <h1>{item.websaite}</h1> */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                  alt=""
                  className="rounded-100% w-[20px] h-[20px]"
                />
                {/* <h1>{item.link}</h1> */}
              </div>
              <h1 className="font-bold text-red-400 text-sm pl-3">
                {/* {item.price} */}
              </h1>
              <h1 className="pl-3">
                Rating:
                <i
                  className="fa-solid fa-star fa-lg"
                  style={{ color: "#f5ec00" }}
                ></i>{" "}
                <i
                  className="fa-solid fa-star fa-lg"
                  style={{ color: "#f5ec00" }}
                ></i>{" "}
                <i
                  className="fa-solid fa-star fa-lg"
                  style={{ color: "#f5ec00" }}
                ></i>{" "}
                <i
                  className="fa-solid fa-star fa-lg"
                  style={{ color: "#f5ec00" }}
                ></i>{" "}
              </h1>
              <div className="text-center">
                <Button
                  className="w-[290px] h-10"
                  // onClick={() => {
                  //   setOpen(true);
                  //   fn(item._id);
                  // }}
                >
                  Book
                </Button>
              </div>
            </div>
            {/* )) */}
            {/* )} */}
          </div>
        )}
      </div>
    {open && <Bookmodal setOpen={setOpen} id={id} rid={rid} />}
    </>
  );
}

export default Card4;
