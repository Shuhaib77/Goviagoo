import React, { useEffect, useState } from "react";
// import { closetoast } from "../redux/ToastSlice";
import { useDispatch, useSelector } from "react-redux";
import { closetoast } from "../../Redux/ToastSlice";

function Toast() {
  const { show, message, type } = useSelector((state) => state.Toastval);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(closetoast());
    }, 2000);
  }, [dispatch]);
  return (
    <div>
      <div
        style={{ backgroundColor: type }}
        className="h-20px w-20px  pl-10 pr-10 pt-3 pb-3 float-end absolute bottom-5 right-5 rounded"
        onClick={() => {
          dispatch(closetoast());
        }}
      >
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Toast;
