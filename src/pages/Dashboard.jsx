import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/dashboard/Sidebar";
import Head from "../components/dashboard/Head";
import Body from "../components/dashboard/Body";
import Savedmaps from "./Savedmaps";
import Bookingstatus from "./Bookingstatus";
import { useParams } from "react-router-dom";

function Dashboard() {
  const { url } = useParams();
  console.log(url, "ur");
  return (
    <>
      <div className=" ">
        <Header />
      </div>

      <div className="flex h-[88vh]">
        <div className=""  >
          <Sidebar />
        </div>

        <div className="overflow-y-scroll h-[95vh] w-full">
          {url === "savedmap" ? (
            <Savedmaps />
          ) : url === "status" ? (
            <Bookingstatus />
          ) : (
            <Body />
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
