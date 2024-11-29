import React, { useState } from "react";
import Mapsidebar from "../components/Map/Mapsidebar";
import Liveupdate from "../components/Map/Liveupdate";

const Livemap = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div>
        <div className="h-[100vh] w-100%  flex justify-start  " onClick={()=>{
            setMenu(false)
        }}>
          <h1
            onMouseEnter={() => {
              setMenu(true);
            }}
          >
            Menu
          </h1>
          <img src="assets/images/image.jpg" alt="" />
          {menu && <Liveupdate setMenu={setMenu} />}
        </div>
      </div>
    </>
  );
};

export default Livemap;
