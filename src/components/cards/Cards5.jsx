import { Button, Carousel } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDestinationData } from "../../../Redux/destinationSlice";
import axios from "axios";
import Toast from "../Toast";
import useToast from "../../hooks/useToast";

function Cards5() {
  const { data } = useSelector((state) => state.destination);
  console.log(data, "kkk");
  const { toast } = useToast();
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");
  useEffect(() => {
    dispatch(getDestinationData());
  }, []);
  const { show, message, type } = useSelector((state) => state.Toastval);

  //pagination
  const [page, setPage] = useState(1);
  const pageitem = 5;
  const totalpage = Math.ceil(data.length / pageitem);
  const onepageData = data?.slice((page - 1) * pageitem, page * pageitem);
  const paginate = (pagenum) => {
    if (pagenum >= 1 && pagenum <= totalpage) {
      setPage(pagenum);
    }
  };
  const addToMap = async (did) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/destination/post/roadmap/${did}/${id}`
      );

      toast({
        show: true,
        message: "destination added to collection ",
        type: "#5da364",
      });
    } catch (error) {
      toast({
        show: true,
        message: "destination alredy in yor collection ",
        type: "#de5269",
      });
    }
    console.log(res);
  };

  console.log(data);

  return (
    <>
      <div className=" -z-20 pr-36 pl-36">
        {/* {console.log(data.length)} */}
        {onepageData?.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <div className=" flex flex-col justify-center items-center lg:flex-row w-100% h-full mb-5 gap-10 shadow-md      ">
                <div className="lg:w-1/2 flex overflow-auto ">
                  <Carousel>
                    {item?.image.map((val) => {
                      return (
                        <img
                          src={val}
                          alt=""
                          className=" h-[40vh]  w-full object-cover rounded-md"
                        />
                      );
                    })}
                  </Carousel>
                </div>
                <div className=" lg:w-1/2 lg:text-start text-center  h-full p-5 ">
                  <h1 className="text-2xl font-bold">
                    Discover {item?.description}
                  </h1>
                  <p>{item?.name}</p>
                  <div className="  mt-5">
                    <h1>{item?.description || "not found"}</h1>
                    <h1>{item?.category || "not found"}</h1>
                    <h1>lat:{item.location.latitude || "not found"}</h1>
                    <h1>lon:{item.location.longitude || "not found"}</h1>
                  </div>
                  <div className="flex  justify-start gap-5 mt-10 ">
                    <div className="w-[30px] h-[30px] bg-blue-300 "></div>
                    <div className="w-[30px] h-[30px] bg-blue-300"></div>
                  </div>
                  <div className="flex justify-between mt-10 ">
                    <Button className="bg-blue-900">view detail</Button>
                    <Button
                      className="bg-blue-900"
                      onClick={() => {
                        addToMap(item?._id);
                      }}
                    >
                      add toRoadMap
                    </Button>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className=" flex flex-col justify-center items-center lg:flex-row w-100% h-full mb-5 gap-10 shadow-md      ">
                <div className=" lg:w-1/2 lg:text-start text-center  h-full p-5 ">
                  <h1 className="text-2xl font-bold">Discover France</h1>
                  <p>{item.name}</p>
                  <div className="  mt-5">
                    <h1>{item?.description || "not found"}</h1>
                    <h1>{item.category || "not found"}</h1>
                    <h1>lat:{item.location.latitude || "not found"}</h1>
                    <h1>lon:{item.location.longitude || "not found"}</h1>
                  </div>
                  <div className="flex  justify-start gap-5 mt-10 ">
                    <div className="w-[30px] h-[30px] bg-blue-300 "></div>
                    <div className="w-[30px] h-[30px] bg-blue-300"></div>
                  </div>
                  <div className="flex justify-between mt-10 ">
                    <Button className="bg-blue-900">view detail</Button>
                    <Button
                      className="bg-blue-900"
                      onClick={() => {
                        addToMap(item._id);
                      }}
                    >
                      Add toRoadmap{" "}
                    </Button>
                  </div>
                </div>
                <div className="lg:w-1/2 flex overflow-auto ">
                  {console.log(item.image)}

                  <Carousel>
                    {item.image.map((val) => {
                      return (
                        <img
                          src={val}
                          alt=""
                          className=" h-[40vh]  w-full object-cover rounded-md"
                        />
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            );
          }
        })}
        <div className="flex justify-center items-center gap-5">
          <Button
            onClick={() => {
              paginate(page - 1);
            }}
            className="bg-indigo-400"
          >
            -
          </Button>
          {<h1 className="text-center">{page}</h1>}
          <Button
            onClick={() => {
              paginate(page + 1);
            }}
          >
            +
          </Button>
        </div>
      </div>

      {show && <Toast />}
    </>
  );
}

export default Cards5;
