import { FaCloudSun, FaTemperatureLow } from "react-icons/fa";
import { useGlobalContext } from "./components/context/Context";
import { WiDayShowers, WiHumidity, WiWindBeaufort0 } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";

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
  const { data: searchData, currentLocationData } = useGlobalContext();
  return [
    ,
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
      symbol: "Km/h",
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

export const navlinks = [
  {
    name: "Home",
    Path: "/",
  },
  {
    name: "Graph",
    Path: "graph",
  },
  {
    name: "Map",
    Path: "map",
  },
  {
    name: "Help",
    Path: "help",
  },
];
export default searchDataFn;
