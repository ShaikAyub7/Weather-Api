import React from "react";
import Lottie from "lottie-react";

// Import only the animations you provided
import clearDay from "../assets/clear-day.json";
import clearNight from "../assets/clear-night.json";
import partlyCloudyDay from "../assets/partly-cloudy-day.json";
import partlyCloudyNight from "../assets/partly-cloudy-night.json";
import cloudy from "../assets/cloudy.json";
import rain from "../assets/rain.json";
import sunnyDay from "../assets/sunnyDay.json";
import rainynight from "../assets/rainynight.json";
import sun2 from "../assets/sun2.json";
import cloudyMoon from "../assets/cloudyMoon.json";
import blueClouds from "../assets/blueClouds.json";
import snow from "../assets/snow.json";

export const WeatherIcon = ({ weather, size, color }) => {
  const hour = new Date().getHours();
  const isDay = hour >= 6 && hour < 18;
  let animationData;

  const weatherLower = weather.toLowerCase();

  if (weatherLower.includes("rain")) {
    animationData = isDay ? rain : rainynight;
  } else if (weatherLower.includes("partly cloudy")) {
    animationData = isDay ? partlyCloudyDay : partlyCloudyNight;
  } else if (weatherLower.includes("cloud")) {
    animationData = cloudy;
  } else if (weatherLower.includes("sunny")) {
    animationData = sunnyDay;
  } else if (weatherLower.includes("haze")) {
    animationData = isDay ? blueClouds : cloudyMoon;
  } else if (weatherLower.includes("snow")) {
    animationData = isDay ? snow : snow;
  } else {
    animationData = isDay ? clearDay : clearNight;
  }

  return (
    <div className="flex flex-col items-center">
      <Lottie animationData={animationData} className={`${size} ${color}`} />
    </div>
  );
};

export default WeatherIcon;
