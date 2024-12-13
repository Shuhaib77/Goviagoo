import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const profileUser = createAsyncThunk("useData", async (id) => {
  const res = await axios.get(`http://localhost:3000/api/profile/${id}`);
  console.log(res.data, "lolollool");
  return res.data;
});
export const addreview = createAsyncThunk(
  "addreview",
  async ({ id, formdata }) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/user/review/${id}`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const viewReviews = createAsyncThunk("allrevieww", async () => {
 try {
    const res = await axios.get("http://localhost:3000/api/user/review/all");
    return res.data.review;
    
 } catch (error) {
    throw error
    
 }
});

const initialState = {
  allReview: [],
  datas: [],
  loading: false,
  reject: "",
};
const UserSlice = createSlice({
  name: "userSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(profileUser.fulfilled, (state, action) => {
      state.datas = action.payload;
    });
    builder.addCase(profileUser.rejected, (state, action) => {
      state.reject = "erroeee";
    });
    builder.addCase(viewReviews.fulfilled, (state, action) => {
      state.allReview=action.payload
    });
  },
});

export default UserSlice.reducer;
