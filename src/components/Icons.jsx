import React from "react";

import {
  FaSun,
  FaMoon,
  FaCloud,
  FaCloudSun,
  FaCloudMoon,
  FaCloudRain,
} from "react-icons/fa";

const iconMapping = {
  "clear-day": <FaSun />,
  "clear-night": <FaMoon />,
  "partly-cloudy-day": <FaCloudSun />,
  "partly-cloudy-night": <FaCloudMoon />,
  cloudy: <FaCloud />,
  rain: <FaCloudRain />,
};

export const WeatherIcon = ({ icon }) => {
  return <div className="text-4xl ">{iconMapping[icon] || <FaCloud />}</div>;
};
