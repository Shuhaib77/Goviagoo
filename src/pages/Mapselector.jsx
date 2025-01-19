import React, { useEffect, useRef, useState } from "react";
import Mapsidebar from "../components/Map/Mapsidebar";
import Header from "../components/Header";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { addMarkers, dataImages, dataInfo } from "../../Redux/mapSelctorSlice";
import { useDispatch, useSelector } from "react-redux";
// import Destinationdetail from "./Destinationdetail";

function Mapselector() {
  const mapRef = useRef(null);
  const latitude = 10.1632;
  const longitude = 76.6413;
  const { markers, locationDetails, image } = useSelector(
    (state) => state.mapSelector
  );
  const dispatch = useDispatch();
  const [sidebar, setSaidebar] = useState(false);
  console.log(markers);
  console.log(locationDetails);
  console.log(image, "JNJXN");
  // console.log(discription, "vvvv");

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });

  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        setSaidebar(true);
        const { lat, lng } = e.latlng;
        console.log(lat, lng);
        dispatch(addMarkers({ lat, lng }));
        dispatch(dataInfo({ lat, lng }));

        //   // const response = await axios.get(
        //   //   `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        //   // );
        //   // console.log(response.data);
        //   // setLocationDetails(response.data);
        //   // // console.log(location,"fkbjbkjddwbj");
        //   // // Use the location to fetch images
        //   // // console.log(gg);
        //   // const location = locationDetails.display_name ;
        //   // console.log(location);
        //   // const unsplashResponse = await axios.get(
        //   //   `https://api.unsplash.com/search/photos`,
        //   //   {
        //   //     params: {
        //   //       query: location,
        //   //       per_page: 3, // Get 3 images
        //   //     },
        //   //     headers: {
        //   //       Authorization: `Client-ID ${
        //   //         import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        //   //       }`, // Replace with your Unsplash Access Key
        //   //     },
        //   //   }
        //   // );
        //   // const images = unsplashResponse.data.results.map(
        //   //   (img) => img.urls.small
        //   // );
        //   // setImages(images);
        //   // console.log("Images:", images);
        // } catch (error) {
        //   console.error("Error fetching location details:", error);
        // }

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
  useEffect(() => {
    if (locationDetails?.display_name) {
      dispatch(dataImages(locationDetails.display_name));
      // dispatch(destinationDescription(locationDetails?.display_name))
    }
  }, [locationDetails]);

  return (
    <div className="h-[full] w-full">
      <div className="fixed w-full top-0 z-10">
        <Header />
      </div>

      {sidebar && (
        <div className="">
          <Mapsidebar sidebar={sidebar} />
        </div>
      )}
      <div className="h-full w-full">
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          ref={mapRef}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            right: 0,
            zIndex: -1,
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler />
          {/* Render markers */}
          {markers.map((marker, index) => (
            <Marker key={index} position={[marker.lat, marker.lng]}>
              <Popup>
                Marker at:
                <br />
                Lat: {marker.lat.toFixed(4)}
                <br />
                Lng: {marker.lng.toFixed(4)}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Mapselector;
