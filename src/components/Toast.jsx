import React, { useState } from "react";
import { closetoast } from "../../Redux/ToastSlice";
import { useDispatch } from "react-redux";



function Toast({ message, type,  }) {
    const dispatch=useDispatch()
  return (
    <div>
      <div
        style={{ backgroundColor: type }}
        className="h-20px w-20px bg-red-300 pl-10 pr-10 pt-3 pb-3 float-end absolute bottom-5 right-5 rounded"
        onClick={()=>{
            dispatch(closetoast())
        }}
      >
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Toast;
