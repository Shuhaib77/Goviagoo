import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import dotenv from dotenv

export const dataInfo = createAsyncThunk(
  "dataa/markers",
  async ({ lat, lng }) => {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    return response.data;
  }
);

export const dataImages = createAsyncThunk("map/images",async () => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: location,
        per_page: 3, // Get 3 images
      },
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`, // Replace with your Unsplash Access Key
      },
    });
    return response.data
  })  

const initialState = {
  markers: [],
  loading: false,
  reject: "",
  locationDetails: null,
  image:[]
};
const mapSelectSlice = createSlice({
  name: "mapintagration",
  initialState,
  reducers: {
    addMarkers: (state, action) => {
      state.markers = [action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(dataInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.locationDetails = action.payload;
    });
    builder.addCase(dataInfo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(dataInfo.rejected, (state, action) => {
      state.reject = "errorrr";
      state.loading = false;
    });
    builder.addCase(dataImages.pending,(state,)=>{
        state

    })
  },
});

export const { addMarkers } = mapSelectSlice.actions;

export default mapSelectSlice.reducer;
