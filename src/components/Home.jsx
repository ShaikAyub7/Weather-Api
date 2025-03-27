import { FaCloudSun, FaTemperatureLow } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import SingleDayData from "./SingleDayData";
import { WeatherIcon } from "./Icons";
import dataFn from "../data";
import Alert from "./Alert";
import { Link } from "react-router";

const FetchData = () => {
  const {
    search,
    currentLocationData,
    loading,
    user,
    data: searchData,
  } = useGlobalContext();
  const data = dataFn();
  return (
    <section className="align-element p-2 py-18 ">
      <div
        className={`grid lg:grid-cols-2 place-items-center grid-cols-1 md:grid-cols-2  `}
      >
        <div className={" md:block"}>
          <WeatherIcon
            icon={
              searchData?.days?.[0]?.icon ||
              currentLocationData?.days?.[0]?.icon
            }
            color={"text-amber-500"}
            weather={
              searchData?.currentConditions?.conditions ??
              currentLocationData?.currentConditions?.conditions ??
              ""
            }
            size={" h-76 w-55 lg:w-100"}
            className="lg:w-96 sm:66 absolute"
          />
        </div>
        <div>
          {loading ? (
            <>
              <span className="loading loading-ring loading-lg"></span>
            </>
          ) : (
            <div className=" ">
              <div className="p-2 w-full   text-md sm:text-sm md:text-lg lg:text-2xl leading-snug">
                <h2 className="flex items-center lg:w-100 gap-x-1 sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 ">
                  Weather in {""}
                  {searchData?.address || currentLocationData?.address}
                  <FaCloudSun />
                </h2>
                {data.map((d, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start gap-1 md:gap-2 leading-tight"
                  >
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold items-center justify-between gap-1  p-2 flex ">
                        {d.name}
                        {d.icon} {d.temp} {d.symbol}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Alert />
      {user ? (
        <SingleDayData />
      ) : (
        <div className="grid place-items-center mt-24 justify-center items-center">
          <p>Please Login for future weather details</p>
          <Link to={"/login"} className="btn btn-primary mt-2.5">
            Login
          </Link>
        </div>
      )}
    </section>
  );
};

export default FetchData;
