 import { configureStore } from "@reduxjs/toolkit";
// import ToastSlice from "./ToastSlice";
import ToastSlice from './ToastSlice'
import mapSelctorSlice from './mapSelctorSlice'
import destinationSlice from './destinationSlice'

 const store=configureStore({
    reducer:{
        Toastval:ToastSlice,
        mapSelector:mapSelctorSlice,
        destination:destinationSlice
        
    }
 })

 export default store