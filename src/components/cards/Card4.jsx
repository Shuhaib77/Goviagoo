import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Card4({ datas }) {
  const navigate=useNavigate()
  return (
    <>
      <div className="w-100% ml-16 mr-16">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Accommadationss</h1>
        </div>
        <div className="flex justify-between overflow-x-scroll  mt-10 mb-10 gap-x-10  ">
          {datas.map((item) => {
            return (
              <div className="w-[450px]  shadow-md rounded-md  pt-1">
                <img
                  src="assets/images/images-8.jpeg"
                  alt=""
                  className="w-[270px] h-[180px] rounded-md  m-auto "
                />
                <div className="font-bold text-md p-3">
                  <h1>{item.hotel}</h1>
                  <h1>{item.state}</h1>
                </div>
                <div className="pl-3">
                  <h1>
                    {" "}
                    <img
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                      }
                      alt=""
                      className="rounded-100% w-[20px] h-[20px]"
                    />
                  </h1>
                  <h1>{item.link}</h1>
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
                    class="fa-solid fa-star fa-lg"
                    style={{ color: "#f5ec00" }}
                  ></i>{" "}
                  <i
                    class="fa-solid fa-star fa-lg"
                    style={{ color: "#f5ec00" }}
                  ></i>{" "}
                  <i
                    class="fa-solid fa-star fa-lg"
                    style={{ color: "#f5ec00" }}
                  ></i>{" "}
                  <i
                    class="fa-solid fa-star fa-lg"
                    style={{ color: "#f5ec00" }}
                  ></i>{" "}
                </h1>
                <div className="text-center">
                  <Button className="w-[290px] h-10 " onClick={()=>{
                    navigate('/status')
                  }} >Book</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Card4;
