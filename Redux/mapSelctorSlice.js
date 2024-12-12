import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import dotenv from dotenv

export const dataInfo = createAsyncThunk(
  "dataa/markers",
  async ({ lat, lng }) => {
    console.log(lat, lng, "reduxxx");

    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );
    return response.data;
  }
);

export const dataImages = createAsyncThunk("map/images", async (location) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: location,
      per_page: 3, // Get 3 images
    },
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`, // Replace with your Unsplash Access Key
    },
  });
  const images = response.data.results.map((img) => img.urls.small);
  return images;
});

// export const roadMapWithMap = createAsyncThunk(
//   "adddestinattion wit Map",
//   async ({ image, locationDetails, id }) => {
//     try {
//       const res = await axios.post(
//         `http://localhost:3000/api/destination/post/roadmap/${id}/${locationDetails?.display_name}/map`,
//         {
//           image: image,
//           name: locationDetails?.display_name,
//           location: {
//             lat: locationDetails?.lat,
//             lon: locationDetails?.lon,
//           },
//           description: locationDetails?.address?.state_district,
//           category: locationDetails?.type,
//         }
//       );
//       return res.data
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const destinationDescription = createAsyncThunk(
//   "location/description",
//   async (location) => {
//     try {
//       const res = await axios.get(
//         `https://api.foursquare.com/v3/places/search`,
//         {
//           params: {
//             query: location,
//             limit: 5,
//           },
//           headers: {
//             Authorization: `Bearer ${import.meta.env.VITE_apiKey}`,
//           },
//         }
//       );
//       console.log(res.data.results);

//       return res.data.results;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

const initialState = {
  markers: [],
  loading: false,
  reject: "",
  locationDetails: null,
  image: [],
  discription: [],
  // roadMapData: [],
  createRoadMap: false,
};
const mapSelectSlice = createSlice({
  name: "mapintagration",
  initialState,
  reducers: {
    addMarkers: (state, action) => {
      state.markers = [action.payload];
    },
    RoadmapViewd: (state, action) => {
      state.createRoadMap = action.payload;
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
    builder.addCase(dataImages.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(dataImages.fulfilled, (state, action) => {
      state.image = action.payload;
    });

    
    // builder.addCase(destinationDescription.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(destinationDescription.fulfilled, (state, action) => {
    //   console.error("Error fetching description:", action.error.message);
    //   state.discription = action.payload;
    //   state.loading = false;
    // });
  },
});

export const { addMarkers, RoadmapViewd } = mapSelectSlice.actions;

export default mapSelectSlice.reducer;
