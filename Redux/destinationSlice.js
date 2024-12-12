import {
  createSlice,
  asyncThunkCreator,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getDestinationData = createAsyncThunk("destination/data", async () => {
  const res = await axios.get("http://localhost:3000/api/destination/gets");
  console.log(res.data,"destinationDataa");
  return res.data.destination
});

export const RoadMapData=createAsyncThunk("roadmapof/User",async(id)=>{
    console.log(id);
    
    const res=await axios.get(`http://localhost:3000/api/profile/roadmap/${id}`)

    console.log(res.data.data[0].destinations,"rodmapDataaa");
    return res.data.data[0].destinations
    

})
const initialState = {
  data: [],
  YourMap:[]
};

const DestinationSlice = createSlice({
  name: "destinations",
  initialState,
  // reducers:{
  //     getData:

  // }
  extraReducers: (builder) => {
    builder.addCase(getDestinationData.fulfilled, (state, action) => {
      state.data = action.payload
    });
    builder.addCase(RoadMapData.fulfilled, (state, action) => {
        state.YourMap = action.payload
      });
  },
});


export default DestinationSlice.reducer