import { Button, Carousel } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getDestinationData } from "../../../Redux/destinationSlice";

function Cards5() {
  const { data } = useSelector((state) => state.destination);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDestinationData());
  }, []);

//pagination
const [page, setPage] = useState(1);
const pageitem=5
const totalpage=Math.ceil(data.length/pageitem)
const onepageData=data.slice((page-1)*pageitem,page*pageitem)
const paginate=(pagenum)=>{
  if(pagenum>=1 && pagenum<=totalpage){
    setPage(pagenum)
  }

}

  console.log(data);

  return (
    <>
      <div className="w-100%  lg:ml-36 lg:mr-36">
        {/* {console.log(data.length)} */}
        {onepageData?.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <div className=" flex flex-col justify-center items-center lg:flex-row w-100% h-full mb-5 gap-10 shadow-md      ">
                <div className="lg:w-1/2 flex overflow-auto ">
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
                <div className=" lg:w-1/2 lg:text-start text-center  h-full p-5 ">
                  <h1 className="text-2xl font-bold">Discover {item?.description }</h1>
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
                    <Button className="bg-blue-900">add toRoadMap</Button>
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
                    <Button className="bg-blue-900">Add toRoadmap </Button>
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
          <Button onClick={()=>{
            paginate(page-1)
          }} className="bg-indigo-400" >-</Button>
         { <h1 className="text-center" >{page}</h1>}
        <Button onClick={()=>{
                paginate(page+1)
        }} >+</Button>
         
        </div>

        {/* <div className=" flex flex-col justify-center items-center lg:flex-row w-100% h-full mb-5 gap-10 shadow-md      ">
          <div className="lg:w-1/2 ">
            <img
              src="assets/images/banner-2.jpg"
              alt=""
              className=" h-[40vh] w-full object-cover rounded-md"
            />
          </div>
          <div className=" lg:w-1/2 lg:text-start text-center  h-full p-5 ">
            <h1 className="text-2xl font-bold">Discover France</h1>
            <p>
              Viverra non commodo vel ac aliquet. Ac euismod tincidunt <br />{" "}
              sed quam pharetra laoreet nisl mollis vitae.{" "}
            </p>
            <div className="  mt-5">
              <h1>Full financial protection</h1>
              <h1>Full financial protection</h1>
              <h1>Full financial protection</h1>
            </div>
            <div className="flex  justify-start gap-5 mt-10 ">
              <div className="w-[30px] h-[30px] bg-white "></div>
              <div className="w-[30px] h-[30px] bg-white "></div>
            </div>
            <div className="flex justify-between mt-10 ">
              <Button>view detail</Button>
              <Button className="">view map</Button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Cards5;
