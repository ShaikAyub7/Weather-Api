import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useGlobalContext } from "./context/Context";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const API_KEY = import.meta.env.VITE_API_FIRST_KEY;

const Map = () => {
  const [location, setLocation] = useState({ lat: 17.385, lng: 78.486 });
  const [data, setData] = useState([]);

  const { user } = useGlobalContext();

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
    <div className="w-full max-w-4xl mx-auto mt-2 mb-6 px-2">
      <h3 className="text-lg sm:text-xl font-semibold  text-center lg:text-2xl py-4  mb-5">
        Weather Map
      </h3>

      {user ? (
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

            <Marker position={[location.lat, location.lng]} icon={customIcon}>
              <Popup>
                <strong>Current Location Weather:</strong>{" "}
                {data.find((d) => d.name === "Temperature")?.temp ||
                  "Loading..."}
                °C
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <div className="grid place-items-center mt-24 justify-center items-center">
          <p>Please Login for this feature </p>

          <Link to={"/login"} className="btn btn-primary mt-6">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Map;
