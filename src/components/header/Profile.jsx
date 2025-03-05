import { Button } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../../../Redux/userSlice";

function Profile({ setProfile }) {
  const id = localStorage.getItem("id");
  const { datas } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileUser(id));
  }, [dispatch, id]);

  return (
    <div className="fixed  z-[50000] top-0 left-0 w-full h-[100vh] overflow-hidden  flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-md">
      <div className="relative w-[70vh] h-[60vh] rounded-lg shadow-2xl bg-white z-[1051]">
        <div className="absolute top-4 right-4">
          <Button className="bg-red-500 text-white" onClick={() => setProfile(false)}>
            Close
          </Button>
        </div>
        <h1 className="text-2xl p-5 font-bold text-center">Profile</h1>

        {datas?.user && (
          <div className="flex justify-around items-center w-full gap-5 p-5">
            <div className="w-1/3 h-[250px]">
              <img src={datas.user.image} className="w-full h-full object-cover rounded-lg" alt="Profile" />
            </div>
            <div className="w-[70%]">
              <h1 className="text-lg font-semibold">{datas.user.name}</h1>
              <h1 className="text-gray-600">{datas.user.email}</h1>
              <h1 className="text-gray-600">Saved Roadmaps: {datas.user.savedRoadmaps.length}</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
