import React from "react";
import Lottie from "lottie-react";

import clearDay from "../assets/clear-day.json";
import clearNight from "../assets/clear-night.json";
import partlyCloudyDay from "../assets/partly-cloudy-day.json";
import partlyCloudyNight from "../assets/partly-cloudy-night.json";
import cloudy from "../assets/cloudy.json";
import rain from "../assets/rain.json";

import {
  FaSun,
  FaMoon,
  FaCloud,
  FaCloudSun,
  FaCloudMoon,
  FaCloudRain,
} from "react-icons/fa";

const animationMapping = {
  "clear-day": clearDay,
  "clear-night": clearNight,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  cloudy: cloudy,
  rain: rain,
};

export const WeatherIcon = ({ icon }) => {
  const hour = new Date().getHours();

  const isDay = hour >= 6 && hour < 18;
  return (
    <div className="flex flex-col items-center">
      <Lottie
        animationData={
          animationMapping[icon] || (isDay ? clearNight : clearDay)
        }
        className="w-40 h-40"
      />

      {/* <div className="text-4xl mt-2">{iconMapping[icon] || <FaCloud />}</div> */}
    </div>
  );
};

export default WeatherIcon;
