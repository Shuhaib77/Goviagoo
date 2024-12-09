import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { addMarkers, dataInfo } from "../../Redux/mapSelctorSlice";

// Fix Leaflet's default icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const AddMarkerOnClick = () => {
  // const [markers, setMarkers] = useState([]);
  // const [locationDetails, setLocationDetails] = useState(null);
  const [dimages, setImages] = useState(null);
  const {markers,locationDetails}=useSelector((state)=>state.mapSelector)
  const dispatch=useDispatch()
  console.log(markers);
  console.log(locationDetails);
  
  

  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        console.log(lat, lng);
        dispatch(addMarkers({lat,lng}))
        dispatch(dataInfo({lat,lng}))

        try {
         
          // const response = await axios.get(
          //   `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
          // );
          // console.log(response.data);

          // setLocationDetails(response.data);

          // // console.log(location,"fkbjbkjddwbj");

          // // Use the location to fetch images

          // // console.log(gg);
          // const location = locationDetails.display_name ;
          // console.log(location);

          const unsplashResponse = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
              params: {
                query: location,
                per_page: 3, // Get 3 images
              },
              headers: {
                Authorization: `Client-ID ${
                  import.meta.env.VITE_UNSPLASH_ACCESS_KEY
                }`, // Replace with your Unsplash Access Key
              },
            }
          );

          

          const images = unsplashResponse.data.results.map(
            (img) => img.urls.small
          );
          setImages(images)
          console.log("Images:", images);
        } catch (error) {
          console.error("Error fetching location details:", error);
        }
        // useEffect(()=>{
          
        // },[locationDetails])
   
        // setMarkers((prevMarkers) => [...prevMarkers, { lat, lng }]);
        // const mm=markers.map((item)=>{
        //     return {lat:item.lat,im:item.lng}
        // })
        // const rr=markers.map((item)=>[item.lat,item.lng])
        // const nn=markers.map((item)=>item.lng)
        // console.log(rr);
        // console.log(nn);
      },
    });
    return null; // No JSX is rendered by this component
  };

  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {/* Custom component to handle map clicks */}
        <MapClickHandler />
        {/* Render markers */}
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker?.lat, marker?.lng]}>
            <Popup>
              Marker at:
              <br />
              Lat: {marker?.lat?.toFixed(4)}
              <br />
              Lng: {marker?.lng?.toFixed(4)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* {console.log(locationDetails)} */}

      <div>
        {locationDetails && (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <h3>Location Details:</h3>
            <p>
              <strong>Display Name:</strong> {locationDetails.display_name}
            </p>
            <p>
              <strong>Latitude:</strong> {locationDetails.lat}
            </p>
            <p>
              <strong>Longitude:</strong> {locationDetails.lon}
            </p>
            <p>
              <strong>Longitude:</strong> {locationDetails.address.city}
            </p>
          </div>
        )}
        {
          dimages?.map((item)=>{
            return(
              <div>
                <img src={item} alt="" />

              </div>

            )

          })

}
      </div>
    </>
  );
};

export default AddMarkerOnClick;
