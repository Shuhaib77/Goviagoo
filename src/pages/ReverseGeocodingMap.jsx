import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const ReverseGeocodingMap = () => {
  const [locationDetails, setLocationDetails] = useState(null);

  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;

        // Call a reverse geocoding API to fetch location details
        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
          );
          setLocationDetails(response.data);
        } catch (error) {
          console.error("Error fetching location details:", error);
        }
      },
    });
    return null; // No rendering needed for this handler
  };

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <MapClickHandler />
      </MapContainer>

      {/* Display location details */}
      {locationDetails && (
        <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>Location Details:</h3>
          <p><strong>Display Name:</strong> {locationDetails.display_name}</p>
          <p><strong>Latitude:</strong> {locationDetails.lat}</p>
          <p><strong>Longitude:</strong> {locationDetails.lon}</p>
          <p><strong>Longitude:</strong> {locationDetails.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default ReverseGeocodingMap;
