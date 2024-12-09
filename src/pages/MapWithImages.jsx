import React, { useState } from "react";
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

// Fix Leaflet's default icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapWithImages = () => {
  const [markers, setMarkers] = useState([]); // Store marker positions
  const [images, setImages] = useState([]); // Store fetched images
  const [locationDetails, setLocationDetails] = useState(null); // Store location details

  // Fetch location details using Nominatim API
  const fetchLocationDetails = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse`,
        {
          params: {
            format: "json",
            lat: lat,
            lon: lng,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching location details:", error);
      return null;
    }
  };

  // Fetch images from Wikimedia Commons API
  const fetchWikimediaImages = async (query) => {
    try {
        const response = await axios.get(
          `https://commons.wikimedia.org/w/api.php`,
          {
            params: {
              action: "query",
              format: "json",
              generator: "search",
              gsrsearch: query,
              gsrlimit: 5,
              prop: "imageinfo",
              iiprop: "url",
              origin: "*",
            },
          }
        );
    
        console.log("Wikimedia API Response:", response.data);
    
        const images = Object.values(response?.data?.query?.pages || []).flatMap(
          (page) => page.imageinfo?.map((info) => info.url) || []
        );
        if (images.length === 0) {
          console.warn("No images found for query:", query);
          return ["https://via.placeholder.com/150"];
        }
        return images;
      } catch (error) {
        console.error("Error fetching Wikimedia images:", error);
        return ["https://via.placeholder.com/150"];
      }
  };

  // Handle map clicks
  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;

        // Add marker to the map
        setMarkers((prev) => [...prev, { lat, lng }]);

        // Fetch location details
        const locationData = await fetchLocationDetails(lat, lng);
        setLocationDetails(locationData);

        // Use location name to fetch images
        const query =
          locationData?.display_name || locationData?.address?.city || "Nature";
        const locationImages = await fetchWikimediaImages(query);
        setImages(locationImages);
        console.log(locationImages);
        
      },
    });
    return null;
  };

  return (
    <div>
      {/* Map */}
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <MapClickHandler />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup>
              Latitude: {marker.lat.toFixed(4)} <br />
              Longitude: {marker.lng.toFixed(4)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Location Details */}
      {locationDetails && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
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
        </div>
      )}

      {/* Fetched Images */}
      {images.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Images:</h3>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Location"
                style={{
                  width: "150px",
                  height: "100px",
                  objectFit: "cover",
                  margin: "5px",
                  borderRadius: "8px",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MapWithImages;
