import React from 'react'
import Mapsidebar from '../components/Map/Mapsidebar';

function Mapselector() {
  return (
    <>
      <div>
        <div className="h-[100vh] w-100% bg-green-300 flex justify-start ">
          <h1
            onClick={() => {
              setMenu(true);
            }}
            className="p-5"
          >
            Menu
          </h1>
          <Mapsidebar />
        </div>
      </div>
    </>
  )
}

export default Mapselector