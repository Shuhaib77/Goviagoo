import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToSave = createAsyncThunk("addsave", async ({ rid, uid }) => {
  console.log(rid, uid, "saveee");

  try {
   const res= await axios.post(`https://goviagoo-server.onrender.com/api/save/roadmap/${rid}/${uid}`);
   console.log(res);
   
   return res

  } catch (error) {
    throw error;
  }
});

export const savedmapDetails = createAsyncThunk(
  "savedmapdetails",
  async (id) => {
    const res = await axios.get(`https://goviagoo-server.onrender.com/api/save/view/${id}`);
    console.log(res.data,"savedsleccf");
    return res.data;
  }
);

const initialState = {
  data: [],
};

const saveSlice = createSlice({
  name: "saveSlice",
  initialState,
 
  extraReducers: (builder) => {
    builder.addCase(savedmapDetails.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default saveSlice.reducer
