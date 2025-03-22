import { FaCloudSun, FaTemperatureLow } from "react-icons/fa";
import { useGlobalContext } from "./components/Context";
import { WiDayShowers, WiHumidity, WiWindBeaufort0 } from "react-icons/wi";

const dataFn = () => {
  const { data: searchData, currentLocationData } = useGlobalContext();
  return [
    {
      name: "Temperature : ",

      temp:
        searchData?.currentConditions?.temp ||
        currentLocationData?.currentConditions?.temp,
      symbol: "°C",
      icon: <FaTemperatureLow />,
    },
    {
      name: "Weather : ",

      temp:
        searchData?.currentConditions?.conditions ||
        currentLocationData?.currentConditions.conditions,
      icon: <WiDayShowers />,
    },
    {
      name: "Humidity : ",
      temp:
        searchData?.currentConditions?.humidity ||
        currentLocationData?.currentConditions?.humidity,
      symbol: "%",
      icon: <WiHumidity />,
    },
    {
      name: "Windspeed : ",
      temp:
        searchData?.currentConditions?.windspeed ||
        currentLocationData?.currentConditions?.windspeed,
      symbol: "Km/hr",
      icon: <WiWindBeaufort0 />,
    },
  ];
};

export default dataFn;
