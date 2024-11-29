import { Button } from "@material-tailwind/react";
import React from "react";

const Mapsidebar = ({ setMenu }) => {
  return (
    <>
      <div>
        <div
          className=" w-full  lg:w-[40vh] h-[45vh] lg:h-[100vh] bg-white absolute left-0 lg:overflow-hidden overflow-y-scroll "
          onClick={() => {
            setMenu(false);
          }}
        >
          <h1 className="text-2xl font-bold text-center">Destination</h1>
          <div className=" lg:m-5 h-[200px] bg-blue-300  mt-5 rounded-md"></div>
          <div className=" flex flex-col items-center  gap-4 lg:flex-row justify-around mt-5">
            <Button className="p-2 w-28">bhjbhwe</Button>
            <Button  className="p-2 w-28">wcdcwd</Button>
          </div>
          <p className="mt-10 text-center">Bolton Abbey Estate in Wharfedale, North Yorkshire, England, takes its name from a 12th-century Augustinian <br /> monastery of canons regular, now known as Bolton Priory. <br /> The priory, which was closed in the 1539 Dissolution of the Monasteries ordered by King </p>
          <h1 className="text-2xl font-bold text-center mt-8 mb-8">Links</h1>
          <p className="text-center">Bolton Abbey Estate in Wharfedale, North Yorkshire, England, takes its name from a 12th-century Augustinian
monastery of canons regular, now known as Bolton Priory.
The priory, which was closed in the 1539 Dissolution of the Monasteries ordered by King</p>
<div className="text-center mt-16">
<Button className="p-2 w-28">go toMap</Button>
</div>
        </div>
      </div>
    </>
  );
};

export default Mapsidebar;
