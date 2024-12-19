import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const stayData = createAsyncThunk(
  "locationbased/stay",
  async ({ lat, lng }) => {
    console.log(lat, lng, "plpllpllp");

    try {
      const res = await axios.get(
        `http://localhost:3000/api/get/stay/location/${lat}/${lng}`
      );
      console.log(res.data, "lklkll");

      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const stayByyId = createAsyncThunk("id/data", async (id) => {
  console.log(id,"??????");
  try {
    const res = await axios.get(`http://localhost:3000/api/get/stay/${id}`);
    console.log(res.data, "ssss");

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  locationdata: [],
  stay:[],
  loading: false,
};

const bookingSlice = createSlice({
  name: "BookingSlice",
  initialState,
  // reducers:{

  // }
  extraReducers: (builder) => {
    builder.addCase(stayData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(stayData.fulfilled, (state, action) => {
      state.loading = false;
      state.locationdata = action.payload;
    });
    builder.addCase(stayByyId.fulfilled,(state,action)=>{
      state.stay=action.payload
    })
  },
});

export const {} = bookingSlice.actions;
export default bookingSlice.reducer;
