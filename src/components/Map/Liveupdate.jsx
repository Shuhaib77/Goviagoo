import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destinationById } from "../../../Redux/destinationSlice";
import { savedmapDetails } from "../../../Redux/saveSlice";

function Liveupdate({ dest }) {
  const dispatch = useDispatch();
  const { dataById } = useSelector((state) => state.destination);
  const { data } = useSelector((state) => state.savedmaps);
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (dest) {
      dispatch(destinationById(dest));
    }
  }, [dest, dispatch]);

  if (!dataById) {
    return <div>Loading...</div>;
  }

  console.log(data, "live");

  useEffect(() => {
    dispatch(savedmapDetails(id));
  }, []);

  return (
    <div
      className="w-full h-[100vh] fixed bg-black bg-opacity-0 backdrop-blur-sm inset-0   z-10"
      onClick={() => {
        // Pass setMenu as a prop if needed
        // setMenu(false);
      }}
    >
      <div className=" fixed w-full h-full bg-black bg-opacity-20"></div>
      <div className="flex justify-around items-center w-full h-full  ">
        <div className="flex flex-col  ">
          <h1 className="text-white">Destinations</h1>
          <div className="w-[250px] h-[150px] rounded-md border-2 border-black ">
            <img
              src={dataById.image}
              alt="Destination"
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col w-full  font-bold border-2  border-black   bg-[#FFFAEC]">
              <h1></h1>
              <h1>Name:{dataById.name}</h1>
              <h1>details:{dataById.description}</h1>
            </div>
          </div>
        </div>
        <div className="flex overflow-auto">
         {data?.data?.savedMap.slice(0,1)?.map((item)=>item.roadmapId.slice(0,1).map((item)=>item.destinations.slice(0,1).map((item)=>{
            return( 
              <div className="w-[200px] h-[100px] border-2 border-black rounded-md flex bg-white">
           
              <img
                src={item.image}
                alt="Food"
                className="w-1/2 h-full object-cover"
              />
              <div className="p-3 flex flex-col">
                <h1></h1>
                <h1>Food Item 2</h1>
                <h1>Food Item 3</h1>
              </div>
            </div>

            
         )})))

} 
        </div>


        <div>
          <h1>Journey</h1>
          <div className="w-[150px] h-[100px] border-2 text-center border-black rounded-md bg-white">
            <span>24 August</span>
            <h1>MAD-----LON</h1>
            <h1>Details</h1>
          </div>
        </div>

        {/* <div className="w-[200px] h-[70px] border-2 text-center border-black rounded-md bg-white">
          <h1>MAD-----LON</h1>
          <h1>Details</h1>
        </div> */}
      </div>
    </div>
  );
}

export default Liveupdate;
