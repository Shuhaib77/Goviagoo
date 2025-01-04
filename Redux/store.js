 import { configureStore } from "@reduxjs/toolkit";
// import ToastSlice from "./ToastSlice";
import ToastSlice from './ToastSlice'
import mapSelctorSlice from './mapSelctorSlice'
import destinationSlice from './destinationSlice'
import bookingSlice from './bookingSlice'
import useSlice from './userSlice'
import saveSlice from './saveSlice'

 const store=configureStore({
    reducer:{
        Toastval:ToastSlice,
        mapSelector:mapSelctorSlice,
        destination:destinationSlice,
        userData:useSlice,
        bookingDatas:bookingSlice,
        savedmaps:saveSlice

        
    }
 })

 export default store