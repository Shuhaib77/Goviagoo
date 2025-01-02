import React, { useState, useRef, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
  Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useSelector, useDispatch } from "react-redux";
import { RoadMapData } from "../../../Redux/destinationSlice";
import { addToSave } from "../../../Redux/saveSlice";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function Mapview() {
  const latitude = 10.1632;
  const longitude = 76.6413;
  const [markers, setMarkers] = useState([]);
  const dispatch = useDispatch();
  const uid = localStorage.getItem("id");
  const { YourMap } = useSelector((state) => state.destination);
  const { createRoadMap } = useSelector((state) => state.mapSelector);
  const navigate = useNavigate();
  console.log(YourMap?.destinations, "viewww");

  useEffect(() => {
    dispatch(RoadMapData(uid));
  }, []);

  const polyCordinates = YourMap?.destinations?.map((item) => [
    item?.location?.latitude,
    item?.location?.longitude,
  ]);

  const distanceCalculate = () => {
    console.log(polyCordinates, "pppp");
    const dist = [];
    if (!Array.isArray(polyCordinates) || polyCordinates.length < 2) {
      console.warn("Insufficient or invalid coordinates.");
      return dist;
    }

    for (let i = 0; i < polyCordinates.length - 1; i++) {
      const point1 = L.latLng(polyCordinates[i][0], polyCordinates[i][1]); // Use lat, lng
      const point2 = L.latLng(
        polyCordinates[i + 1][0],
        polyCordinates[i + 1][1]
      ); // Use lat, lng
      const distance = point1.distanceTo(point2) / 1000; // Distance in kilometers
      dist.push(distance);
    }
    return dist;
  };

  // Calculate distances
  const dist = distanceCalculate();

  console.log(dist, "Distances between coordinates");

  // const rid = YourMap.map((item)=>item._id);
  // console.log(rid, "ttttt");

  return (
    <>
      {createRoadMap && (
        <div>
          <div className="w-full px-4 lg:px-16">
            <h1 className="text-2xl mb-10 font-bold text-center">Your Map</h1>
            <div className="rounded-lg lg:w-[90vw] h-[70vh] grid place-items-center">
              <MapContainer
                center={[latitude, longitude]}
                zoom={13}
                style={{ height: "600px", width: "100%" }}
                // className=" "
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="© OpenStreetMap contributors"
                />
                {/* <MapClickHandler /> */}
                {YourMap?.destinations?.map((marker, index) => (
                  <Marker
                    key={index}
                    position={[
                      marker.location.latitude,
                      marker.location.longitude,
                    ]}
                  >
                    <Popup>
                      Latitude: {marker.location.latitude.toFixed(4)},
                      Longitude: {marker.location.longitude.toFixed(4)}
                      {marker.name}
                      {index > 0 && ` distence to previouse:${dist[index - 1]}`}
                    </Popup>
                  </Marker>
                ))}
                {/* connectionLine */}
                <Polygon positions={polyCordinates} color="blue" />
              </MapContainer>
            </div>
          </div>
          <div className="text-center mt-5">
            <Button
              className="p-2 w-24 lg:w-32"
              onClick={() => navigate("/live")}
            >
              Start
            </Button>
            {console.log(YourMap?._id, "kokok")}

            {/* {YourMap.map((item)=>{
          return( */}

            <Button
              className="p-2 w-24 lg:w-32"
              onClick={() => {
                dispatch(addToSave({ rid: YourMap._id, uid }));
              }}
            >
              Save
            </Button>
            {/* )
         })} */}
          </div>
        </div>
      )}
    </>
  );
}

export default Mapview;
