import React, { useState } from "react";
import Mapsidebar from "../components/Map/Mapsidebar";
import Liveupdate from "../components/Map/Liveupdate";
import Header from "../components/Header";

const Livemap = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div>
        <div>
            <Header/>
        </div>
        <div
          className="h-[100vh] w-100%  flex justify-center bg-green-400 items-center  "
          onClick={() => {
            setMenu(false);
          }}
        >
          <h1
            onMouseEnter={() => {
              setMenu(true);
            }}
          >
            Menu
          </h1>

          {menu && <Liveupdate setMenu={setMenu} />}
        </div>
      </div>
    </>
  );
};

export default Livemap;
