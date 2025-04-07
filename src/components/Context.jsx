import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const APIkey = import.meta.env.VITE_API_FIRST_KEY;
const secondKey = import.meta.env.VITE_API_SECOND_KEY;
const ApiContext = createContext();

const Context = ({ children }) => {
  const [bgClass, setBgClass] = useState("default-bg");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [cityImage, setCityImage] = useState(null);
  const [currentLocationData, setCurrentLocationData] = useState([]);

  const fetchData = () => {
    if (!navigator.geolocation) {
      toast.error("Please Turn on Location");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const locationApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`;
          const response1 = await axios.get(locationApi);
          const cityName = response1.data.name;

          const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${secondKey}&unitGroup=metric`;
          const response = await axios.get(url);
          setCurrentLocationData(response.data);
          setLoading(false);
        } catch (error) {
          toast.error(error.message || "Error fetching location data");
          setLoading(false);
        }
      },
      (error) => {
        toast.error("Geolocation permission denied");
        setLoading(false);
      }
    );
  };

  const fetchWeatherByCity = async (city) => {
    if (!city) {
      toast.error("Please enter city name");
      return;
    }
    setLoading(true);
    try {
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${secondKey}&unitGroup=metric`;
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("City not found");
      setLoading(false);
    }
  };

  const fetchImagesOfCity = async (city) => {
    const url = await axios.get(
      `https://api.unsplash.com/search/photos?query=${city}&client_id=Fvo6YvJtk7_nWfRNmUxYpbWLHa0-1LyCw65kjljYogQ`
    );
    setCityImage(url.data.results[0].urls.regular);
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return (
    <ApiContext.Provider
      value={{
        user,
        setUser,
        loading,
        fetchWeatherByCity,
        data,
        search,
        setSearch,
        setLoading,
        cityImage,
        currentLocationData,
        fetchData,
        setBgClass,
        fetchImagesOfCity,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useGlobalContext = () => useContext(ApiContext);

export default Context;
