import React, { useRef, useState } from "react";
import Mapsidebar from "../components/Map/Mapsidebar";
import Liveupdate from "../components/Map/Liveupdate";
import Header from "../components/Header";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Livemap = () => {
  
  const [menu, setMenu] = useState(false);
  const mapRef = useRef(null);
  const latitude = 10.1632;
  const longitude = 76.6413;


  const destinations = [
    {
      id: "1",
      name: "Eiffel Tower",
      description: "An iconic landmark in Paris.",
      coordinates: { lat: 9.9816, lng: 76.2999 },
    },
    {
      id: "2",
      name: "Statue of Liberty",
      description: "A symbol of freedom in New York City.",
      coordinates: { lat: 9.9189, lng: 77.1025 },
    },
  ];
  return (
    <>
      <div>
        <div className="sticky top-0">
          <Header />
         
        </div>
        <h1
            onMouseEnter={() => {
              setMenu(true);
            }}
            className="m-5"
          >
            Menurfr
          </h1>
        <div
          className="h-[100vh] w-100%  flex justify-center bg-green-400 items-center  "
          onClick={() => {
            setMenu(false);
          }}
        >
          
          <div className="h-full w-full">
            {/* <div className="absolute top-0 left-0 h-full w-64 bg-gray-100 shadow-lg">
          <Mapsidebar />
        </div> */}
            <MapContainer
              center={[latitude, longitude]}
              zoom={13}
              ref={mapRef}
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                right: 0,
                zIndex:1
              }}
              onClick={(e) => {
                const { lat, lng } = e.latlng;
                setMarkers((prev) => [...prev, { lat, lng }]);
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {destinations.map((destination) => (
          <Marker
            key={destination.id}
            position={[destination.coordinates.lat, destination.coordinates.lng]}
          >
            <Popup>
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <button
                onClick={() => handleAddToRoadmap(destination.id)}
                className="btn btn-primary"
              >
                Add to Roadmap
              </button>
            </Popup>
          </Marker>
        ))}
            </MapContainer>
          </div>

          {menu && <Liveupdate setMenu={setMenu} />}
        </div>
      </div>
    </>
  );
};

export default Livemap;
