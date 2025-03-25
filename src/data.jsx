import { FaCloudSun, FaTemperatureLow } from "react-icons/fa";
import { useGlobalContext } from "./components/Context";
import { WiDayShowers, WiHumidity, WiWindBeaufort0 } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { CiClock1 } from "react-icons/ci";

export const formatTime12Hour = (timeString) => {
  if (!timeString) return "";

  const date = new Date(`1970-01-01T${timeString}`);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
const searchDataFn = () => {
  const { searchData, currentLocationData } = useGlobalContext();
  return [
    {
      name: "Temperature : ",

      temp:
        searchData?.currentConditions?.temp ||
        currentLocationData?.currentConditions?.temp,
      symbol: "°C",
      icon: <FaTemperatureLow />,
    },
    // {
    //   name: "Weather : ",
    //   temp:
    //     searchData?.currentConditions?.conditions ||
    //     currentLocationData?.currentConditions.conditions,
    //   icon: <WiDayShowers />,
    // },
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
    {
      name: "UVIndex : ",
      temp:
        searchData?.days?.[0]?.uvindex ||
        currentLocationData?.days?.[0]?.uvindex,
      symbol: "",
      icon: <TbUvIndex />,
    },
  ];
};

export default searchDataFn;
