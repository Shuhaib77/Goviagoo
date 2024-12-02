import { accordion } from "@material-tailwind/react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  message: "",
  type: "",
};

const ToastSlice = createSlice({
  name: "goviagoo",
  initialState,
  reducers: {
    ToastView: (state, action) => {
      const { show, message, type } = action.payload;
      state.show = show;
      state.message = message;
      state.type = type;
    },
    closetoast: (state, action) => {
     
        state.message = "",
       state.show = false
        state.type = ""
    
    },
  },
});

export const { ToastView,closetoast } = ToastSlice.actions;
export default ToastSlice.reducer;
