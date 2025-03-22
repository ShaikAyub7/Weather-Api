import { createContext, useContext } from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import WeatherChart from "./Chart";

const APIkey = import.meta.env.VITE_API_FIRST_KEY;
const secondKey = import.meta.env.VITE_API_SECOND_KEY;
const ApiContext = createContext();

const Context = ({ children }) => {
  const [bgClass, setBgClass] = useState("default-bg");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  const [currentLocationData, setCurrentLocationData] = useState(null);

  const updateBackground = (weather) => {
    if (!weather) return;

    if (weather.includes("rain")) {
      setBgClass("default-bg");
    } else if (weather.includes("haze")) {
      setBgClass("haze-bg");
    } else if (weather.includes("sunny")) {
      setBgClass("default-bg");
    }
  };

  const fetchData = () => {
    if (!navigator.geolocation) {
      return toast.error("Please Turn on Location");
    }
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const { latitude, longitude } = position.coords;
        const locationApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`;
        const response1 = await axios.get(locationApi);
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${response1.data.name}?key=${secondKey}&unitGroup=metric`;
        const response = await axios.get(url);
        setCurrentLocationData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchWeatherByCity = async (city) => {
    if (!city) {
      return toast.error("Please enter city name ");
    }
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("City not found");
    } finally {
      setLoading(false);
    }
  };
  return (
    <ApiContext
      value={{
        loading,
        fetchWeatherByCity,
        data,
        search,
        setSearch,
        setLoading,
        currentLocationData,
        loading,
        fetchData,
        setBgClass,
        bgClass,
      }}
    >
      {children}
    </ApiContext>
  );
};

export const useGlobalContext = () => useContext(ApiContext);

export default Context;
