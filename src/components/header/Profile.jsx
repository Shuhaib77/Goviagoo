import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../../../Redux/userSlice";

function Profile({ setProfile }) {
  const id = localStorage.getItem("id");
  const { datas } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileUser(id));
  }, []);
  console.log(datas);

  return (
    <>
      <div className=" fixed inset-0 z-10  backdrop-blur-md">
        <div className=" absolute z-10 w-100% top-40  h-[70vh] left-60 rounded shadow-2xl bg-white right-60">
          <div className="float-right p-5">
            <Button
              className="bg-red-300"
              onClick={() => {
                setProfile(false);
              }}
            >
              close
            </Button>
          </div>
          <h1 className="text-2xl p-5 font-bold">profile</h1>

          {datas?.user && (
            <div className="flex justify-around w-full  gap-5">
              <div className="w-1/3 p-2 h-[300px]  ">
                <img
                  src={datas?.user.image}
                  className="w-full object-cover h-full"
                  alt=""
                />
              </div>
              <div className="w-[70%] h-[500px] ">
                <h1>{datas?.user.email}</h1>
                <h1>{datas?.user.name}</h1>
                <h1>{datas?.user.savedRoadmaps.length}</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
