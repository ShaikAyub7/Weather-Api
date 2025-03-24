import { FaCloudSun, FaTemperatureLow } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import SingleDayData from "./SingleDayData";
import { WeatherIcon } from "./Icons";
import dataFn from "../data";
import Alert from "./Alert";

const FetchData = () => {
  const { data: searchData, currentLocationData, loading } = useGlobalContext();
  const data = dataFn();
  return (
    <section className="align-element p-12 py-18">
      <div
        className={`grid lg:grid-cols-2 place-items-center sm:grid-cols-1 md:grid-cols-2 `}
      >
        <div className={" md:block"}>
          <WeatherIcon
            icon={
              searchData?.days?.[0]?.icon ||
              currentLocationData?.days?.[0]?.icon
            }
            className="lg:w-96 sm:66 absolute"
          />
        </div>
        <div>
          {loading ? (
            <>
              <span className="loading loading-ring loading-lg"></span>
            </>
          ) : (
            <div className="p-2 md:p-6  md:mt:8 w-full relative leading-2.5">
              <h2 className="md:font-medium mb-4 flex items-center gap-2 md:text-4xl flex-wrap font-light  text-2xl ">
                Weather in {searchData?.address || currentLocationData?.address}
                <FaCloudSun />
              </h2>
              {data.map((d, i) => (
                <div key={i} className="leading-56             ">
                  <p className="font-light text-2xl  gap-x-2.5 items-center flex justify-baseline md:font-semibold">
                    <span className="font-medium">{d.name}</span>

                    {d.icon}
                    {d.temp}
                    {d.symbol}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Alert />

      <SingleDayData />
    </section>
  );
};

export default FetchData;
