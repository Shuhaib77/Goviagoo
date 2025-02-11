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

  const id = localStorage.getItem("id");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(stayBookingstatus(id));
    dispatch(foodBookDetailss(id));
  }, []);

  // const color = foodBookingStat.map((item) => item.status);
  // console.log(color);

  // const d = color === true ? "red" : "green";
  return (
    <>
     
      <div className="w-full pl-5 pr-5 mt-10 h-[85vh] overflow-auto   ">
        <h1 className="font-bold text-2xl ml-7 ">Accommadation</h1>
        {/* {stayBookingStat.length === 0 ? ( */}
          <h1 className="text-center font-bold text-2xl text-red-700">
            no stay Booking yet
          </h1>
        {/* ) : ( */}
          <div>
            {/* {stayBookingStat.map((item) => { */}
              {/* return ( */}
                <div className="w-100% h-[35vh] flex justify-around mt-10 ">
                  <div className="w-1/3  bg-red-500 ">
                    {/* {item.stay.map((item) => { */}
                      {/* return ( */}
                        <img
                          src=""
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      {/* ); */}
                    {/* })} */}
                  </div>
                  <div className="w-1/3  flex flex-col justify-around p-5 ">
                    {/* {item.stay.map((item) => { */}
                      {/* return ( */}
                        <div>
                          <h1 className="font-bold text-xl mt-5">
                            {/* {item.name} */}
                          </h1>
                          <h1>
                            {/* <i
                  class="fa-solid fa-star fa-lg"
                  style={{ color: "#f5ec00" }}
                ></i>
                <i
                  class="fa-solid fa-star fa-lg"
                  style={{ color: "#f5ec00" }}
                ></i>
                <i
                  class="fa-solid fa-star fa-lg"
                  style={{ color: "#f5ec00" }}
                ></i>
                <i
                  class="fa-solid fa-star fa-lg"
                  style={{ color: "#f5ec00" }}
                ></i> */}
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor <br />
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud <br />
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat
                          </p>
                        </div>
                      {/* // ); */}
                    {/* })} */}

                    {/* {item.status === true ? ( */}
                      <div className="flex justify-between">
                        <Button className="bg-green-600 ">success</Button>
                        <Button className="bg-red-600 ">cancel</Button>
                      </div>
                    {/* ) : ( */}
                      <div className="flex justify-between">
                        <Button className="bg-red-600">failed</Button>
                        <Button className="bg-blue-600">bookagain</Button>
                      </div>
                    {/* )} */}
                  </div>
                  <div className="w-1/5  text-end grid place-content-end  ">
                    {/* <h1>{`Room: ${item.roomNo} for ${item.days} days`}</h1> */}
                    <h1 className="text-red-700">
                      {/* Total amount Paid:{item.rate} */}
                    </h1>
                    <h1 className="mb-5">include all taxx</h1>
                  </div>
                </div>
              {/* );
            })} */}
          </div>
        {/* )} */}

        {/* ---- */}

        <div className="mt-20">
          <h1 className="font-bold text-2xl ml-7 ">Food Spotsss</h1>
          {/* {foodBookingStat.length === 0 ? ( */}
            <h1 className="text-center font-bold text-2xl text-red-700">
              {" "}
              no food booking yett
            </h1>
          {/* ) : ( */}
            <div>
              {/* {foodBookingStat.map((item) => { */}
            
                  <div className="w-100% h-[35vh] flex justify-around mt-10 ">
                    <div className="w-1/3  bg-red-500 ">
                      {/* {item.foodSpot.map((item)=>{
           return( */}
                      <img
                        src=""
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      {/* )
         })} */}
                    </div>
                    <div className="w-1/3  flex flex-col justify-around p-5 ">
                      <h1 className="font-bold text-xl mt-5">
                        {/* {item.foodSpot.name} */}
                      </h1>
                      {/* <h1>{`Rating:${item.foodSpot.rating}/10`}</h1> */}
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud <br />
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </p>
                      {/* <div className="flex justify-between"> */}
                      {/* {item.status === true ? ( */}
                        <div className="flex justify-between">
                          <Button className="bg-green-600 ">success</Button>
                          <Button className="bg-red-600 ">cancel</Button>
                        </div>
                      {/* // ) : ( */}
                        <div className="flex justify-between">
                          <Button className="bg-red-600">failed</Button>
                          <Button className="bg-blue-600">bookagain</Button>
                        </div>
                      {/* )} */}
                      {/* </div> */}
                    </div>
                    <div className="w-1/5  text-end grid place-content-end  ">
                      {/* <h1>Date:{item.date}</h1> */}
                      {/* <h1>{`customers:${item.customers}`}</h1> */}
                      <h1 className="text-red-700">
                        {/* Total amount Paid:{item.rate} */}
                      </h1>
                      <h1 className="mb-5">include all taxsss</h1>
                    </div>
                  </div>
                {/* ); */}
              {/* })} */}
            </div>
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
