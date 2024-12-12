import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { closetoast } from "../../Redux/ToastSlice";
import useToast from "../hooks/useToast";

function Toast() {
  const { show, message, type,closeToast } = useToast();
  // const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        closeToast()
      }, 2000);
    
    }
  }, [show,closeToast]);

  if (!show) return null

  return (
    <div
      style={{ backgroundColor: type }}
      className="fixed top-16 right-5 px-6 py-3 rounded shadow-md text-white z-50 cursor-pointer transition-transform transform hover:scale-105"
      onClick={() => {
        closetoast()
      }}
    >
      <span>{message}</span>
    </div>
  );
}

export default Toast;
