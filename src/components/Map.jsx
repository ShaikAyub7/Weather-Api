import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const API_KEY = import.meta.env.VITE_API_FIRST_KEY;

const Map = () => {
  const { searchData, currentLocationData, loading } = useGlobalContext();
  const [location, setLocation] = useState({ lat: 17.385, lng: 78.486 }); // Default: Hyderabad
  const [data, setData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 px-2">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center lg:text-3xl py-4">
        Weather Map
      </h3>

      <div className="w-full h-[400px] sm:h-[500px] lg:h-[500px] rounded-lg overflow-hidden">
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={3}
          className="w-full h-full"
        >
          <TileLayer
            url={`https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=${API_KEY}`}
          />

          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <TileLayer
            url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
          />
          <TileLayer
            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
          />

          <Marker position={[location.lat, location.lng]}>
            <Popup>
              <strong>Current Location Weather:</strong>{" "}
              {data.find((d) => d.name === "Temperature")?.temp || "Loading..."}
              °C
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
