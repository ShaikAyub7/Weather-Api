import { FaCloudSun, FaTemperatureLow } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import { WiDayShowers, WiHumidity } from "react-icons/wi";
import SingleDayData from "./SingleDayData";

const FetchData = () => {
  const {
    data: searchData,
    loading: searchLoading,
    currentLocationData,
    loading,
    setBgClass,
    bgClass,
  } = useGlobalContext();

  return (
    <section className="align-element p-12 py-18">
      <div
        className={`  grid lg:grid-cols-2 place-items-center sm:grid-cols-1 md:grid-cols-2 `}
      >
        <div className={""}>
          <img src="./header2.svg" alt="" className="lg:w-96 sm:66" />
        </div>
        <div>
          {loading ? (
            <>
              <span className="loading loading-ring loading-lg"></span>
            </>
          ) : (
            <div className="p-2 md:p-6 mt-12">
              <h2 className="font-bold text-xl mb-4 flex items-center gap-2 md:text-4xl ">
                <FaCloudSun />
                Weather in {searchData?.name || currentLocationData?.address}
              </h2>

              <p className="font-medium text-2xl flex gap-x-2.5 items-center ">
                Temperature: <FaTemperatureLow />
                {searchData?.main?.temp ||
                  currentLocationData?.currentConditions?.temp}
                °C
              </p>
              <p className="font-medium text-2xl flex gap-x-2.5 items-center">
                Weather:
                <WiDayShowers />
                {searchData?.weather?.[0]?.description ||
                  currentLocationData?.currentConditions.conditions}
              </p>
              <p className="font-medium text-2xl flex gap-x-2.5 items-center">
                Humidity : <WiHumidity />
                {searchData?.main?.humidity ||
                  currentLocationData?.currentConditions?.humidity}
                %
              </p>
            </div>
          )}
        </div>
      </div>
      <SingleDayData />
    </section>
  );
};

export default FetchData;
