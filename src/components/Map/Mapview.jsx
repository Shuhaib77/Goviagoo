import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useSelector, useDispatch } from "react-redux";
import { RoadMapData } from "../../../Redux/destinationSlice";
import { addToSave } from "../../../Redux/saveSlice";
import useToast from "../../hooks/useToast";
import Toast from "../Toast";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function Mapview() {
  const latitude = 10.1632;
  const longitude = 76.6413;
  const dispatch = useDispatch();
  const uid = localStorage.getItem("id");
  const { show, message, type } = useSelector((state) => state.Toastval);
  const { YourMap } = useSelector((state) => state.destination);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  const fetchRoadMap = async () => {
    await dispatch(RoadMapData({uid}));
    setLoading(false);
  };

  useEffect(() => {
    fetchRoadMap();
  }, [uid]);

  const polyCordinates =
    YourMap?.destinations?.map((item) => [
      item?.location?.latitude,
      item?.location?.longitude,
    ]) || [];

  const dist = useMemo(() => {
    const distances = [];
    if (polyCordinates.length < 2) return distances;
    for (let i = 0; i < polyCordinates.length - 1; i++) {
      const point1 = L.latLng(polyCordinates[i]);
      const point2 = L.latLng(polyCordinates[i + 1]);
      distances.push(point1.distanceTo(point2) / 1000);
    }
    return distances;
  }, [polyCordinates]);

  const handleSave = async () => {
    try {
      const response = await dispatch(addToSave({ rid: YourMap._id, uid })).unwrap();
      toast({
        show: true,
        message: "Successfully saved!",
        type: "#28a745",
      });
      fetchRoadMap();
    } catch (error) {
      toast({
        show: true,
        message: error?.response?.data?.error_message || "Already added to map",
        type: "#a6354a",
      });
    }
  };

  const mapCenter = useMemo(() => {
    if (polyCordinates.length) {
      const [totalLat, totalLng] = polyCordinates.reduce(
        ([latSum, lngSum], [lat, lng]) => [latSum + lat, lngSum + lng],
        [0, 0]
      );
      return [totalLat / polyCordinates.length, totalLng / polyCordinates.length];
    }
    return [latitude, longitude];
  }, [polyCordinates]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {YourMap && (
        <div>
          <div className="w-full  px-4 lg:px-16">
            <h1 className="text-2xl mb-10 font-bold text-center">Your Map</h1>
            <div className="rounded-lg lg:w-[90vw] relative top-0 -z-20  h-[70vh] grid place-items-center">
              <MapContainer
                center={mapCenter}
                zoom={13}
                style={{ height: "600px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="© OpenStreetMap contributors"
                />
                {YourMap?.destinations?.map((marker, index) => (
                  <Marker
                    key={index}
                    position={[marker.location.latitude, marker.location.longitude]}
                  >
                    <Popup>
                      Latitude: {marker.location.latitude.toFixed(4)}, Longitude: {marker.location.longitude.toFixed(4)}
                      <br />
                      {marker.name}
                      <br />
                      {index > 0 && `Distance to previous: ${dist[index - 1].toFixed(2)} km`}
                    </Popup>
                  </Marker>
                ))}
                <Polygon positions={polyCordinates} color="blue" />
              </MapContainer>
            </div>
          </div>
          <div className="text-center mt-5">
            <Button className="p-2 w-24 lg:w-32" onClick={() => navigate("/live")}>
              Start
            </Button>
            <Button className="p-2 w-24 lg:w-32" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      )}
      {show && <Toast message={message} type={type} />}
    </>
  );
}

export default Mapview;