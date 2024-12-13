import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const profileUser = createAsyncThunk("useData", async (id) => {
  const res = await axios.get(`http://localhost:3000/api/profile/${id}`);
  console.log(res.data, "lolollool");
  return res.data
});

const initialState = {
  datas: [],
};
const UserSlice = createSlice({
  name: "userSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(profileUser.fulfilled, (state, action) => {
      state.datas = action.payload;
    });
  },
});

export default UserSlice.reducer;
