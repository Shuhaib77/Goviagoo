import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToSave=createAsyncThunk("addsave",async()=>{
   try {
    await axios.post(`http://localhost:3000/api/save/roadmap/:rid/:uid`)

   } catch (error) {
    throw error
    
   }
})

const initialState={
    data:[]

}

const saveSlice=createSlice({
    name:"saveSlice",
    initialState,
    reducers:{
        saveSlice:()=>{

        }
    },
    extraReducers:(builder)=>{
        builder.addCase()
    }

})