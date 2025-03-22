import React from "react";
import Lottie from "lottie-react";

// Import Lottie animations
import clearDay from "../assets/clear-day.json";
import clearNight from "../assets/clear-night.json";
import partlyCloudyDay from "../assets/partly-cloudy-day.json";
import partlyCloudyNight from "../assets/partly-cloudy-night.json";
import cloudy from "../assets/cloudy.json";
import rain from "../assets/rain.json";

// Import FontAwesome Icons
import {
  FaSun,
  FaMoon,
  FaCloud,
  FaCloudSun,
  FaCloudMoon,
  FaCloudRain,
} from "react-icons/fa";

// Weather condition to Lottie animation mapping
const animationMapping = {
  "clear-day": clearDay,
  "clear-night": clearNight,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  cloudy: cloudy,
  rain: rain,
};

// Weather condition to FontAwesome icon mapping

export const WeatherIcon = ({ icon }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Lottie Animation */}
      <Lottie
        animationData={animationMapping[icon] || cloudy}
        className="w-40 h-40"
      />

      {/* Fallback FontAwesome Icon */}
      {/* <div className="text-4xl mt-2">{iconMapping[icon] || <FaCloud />}</div> */}
    </div>
  );
};

export default WeatherIcon;
