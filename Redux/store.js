 import { configureStore } from "@reduxjs/toolkit";
import ToastSlice from "./ToastSlice";

 const store=configureStore({
    reducer:{
        Toastval:ToastSlice
    }
 })

 export default store