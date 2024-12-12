import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastView ,closetoast} from "../../Redux/ToastSlice";

function useToast() {
  const { show, message, type } = useSelector((state) => state.Toastval);
  const dispatch = useDispatch();

  const toast = ({show,message,type}) => {
    dispatch(
      ToastView({
        show: true,
        message,
        type,
      })
    );
  };

  const closeToast=()=>{
    dispatch(closetoast())
  }
  return {show,message,type,toast,closeToast}
}

export default useToast;
