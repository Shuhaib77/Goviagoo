 import { configureStore } from "@reduxjs/toolkit";
// import ToastSlice from "./ToastSlice";
import ToastSlice from './ToastSlice'
import mapSelctorSlice from './mapSelctorSlice'

 const store=configureStore({
    reducer:{
        Toastval:ToastSlice,
        mapSelector:mapSelctorSlice
        
    }
 })

 export default store