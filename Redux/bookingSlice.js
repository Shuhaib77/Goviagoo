import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//location based stay data
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
//  id based stay data
export const stayByyId = createAsyncThunk("id/data", async (id) => {
  console.log(id, "??????");
  try {
    const res = await axios.get(`http://localhost:3000/api/get/stay/${id}`);
    console.log(res.data.data, "ssss");

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
});

//location based fooddd data
export const foodSpotData = createAsyncThunk(
  "foodspot",
  async ({ lat, lng }) => {
    console.log(lat, lng, "plpllpllp");

    try {
      const res = await axios.get(
        `http://localhost:3000/api/get/foodspot/location/${lat}/${lng}`
      );
      console.log(res.data, "foodspot data");
       return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//id based foodspot data

export const FoodDataById = createAsyncThunk("foodspotdata/id", async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/get/foodspot/${id}`);
    console.log(res.data, "gdgdgd");
    return res.data.data;
  } catch (error) {
    throw error;
  }
});

export const pay = createAsyncThunk(
  "pay",
  async ({ id, uid, days, selectedRoom, rate }) => {
    console.log(id, "oo", uid, "MMMMMM", days, selectedRoom, rate);

    try {
      const res = await axios.post(
        `http://localhost:3000/api/stay/book/${id}/${uid}`,
        {
          rate: rate,
          roomNo: selectedRoom,
          days: days,
        }
      );
      console.log(res.data, "approovel url");

      const approvalUrl = res.data.data?.approval_url; // Updated to access the URL correctly
      if (approvalUrl) {
        window.location.href = approvalUrl; // Redirect to PayPal approval page
      } else {
        throw new Error("Approval URL not found in response");
      }
      // return approvalUrl
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const foodBooking = createAsyncThunk(
  "foddspot booking",
  async ({ fid, uid, rate, date, type, customer }) => {
    console.log(fid, uid, rate, date, type, customer, "ldedledlede");

    try {
      const res = await axios.post(
        `http://localhost:3000/api/food/book/${fid}/${uid}`,
        {
          type: type,
          customer: customer,
          rate: rate,
          date: date,
        }
      );

      const approvedUrl = res.data.data?.approval_url;
      if (approvedUrl) {
        window.location.href = approvedUrl;
      } else {
        throw new Error("Approval URL not found in response");
      }
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const initialState = {
  locationdata: [],
  stay: [],
  foodSpot: [],
  spotData: [],
  payData: [],

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
    builder.addCase(stayByyId.fulfilled, (state, action) => {
      state.stay = action.payload;
    });
    builder.addCase(foodSpotData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(foodSpotData.fulfilled, (state, action) => {
      state.foodSpot = action.payload;
    });
    builder.addCase(FoodDataById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(FoodDataById.fulfilled, (state, action) => {
      state.spotData = action.payload;
    });
    builder.addCase(pay.fulfilled, (state, action) => {
      state.payData = action.payload;
    });
  },
});

export const {} = bookingSlice.actions;
export default bookingSlice.reducer;
