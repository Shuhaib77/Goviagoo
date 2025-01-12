import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/dashboard/Sidebar";

import Head from "../components/dashboard/Head";
import Body from "../components/dashboard/Body";

function Dashboard() {
  return (
    <>
      <div className="bg-n">
        <Header />
      </div>
   
      <div className="flex">
      <div>
        <Sidebar />
      </div>
     
      <div>
        <Body/>
      </div>
      </div>
     
    </>
  );
}

export default Dashboard;
