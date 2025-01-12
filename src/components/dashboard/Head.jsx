import React from 'react'
import { Input, Button } from "@material-tailwind/react";

function Head() {
  return (
    <>
          <div className=" flex justify-around mt-5 items-center   ">
          <div className="">
            <h1>shuhaimm</h1>
            <h1>dnndd</h1>
          </div>
          <div>
            <Input label="search"></Input>
          </div>
          <div>
          <i class="fa-solid fa-circle-user fa-2xl" style={{color: "#0042aa"}}></i>
          <i class="fa-solid fa-circle-user fa-2xl" style={{color: "#0042aa"}}></i>
          </div>
        </div>
    </>
  )
}

export default Head