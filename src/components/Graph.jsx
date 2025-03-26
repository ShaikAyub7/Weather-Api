import React from "react";
import WeatherChart from "./Chart";
import { useGlobalContext } from "./Context";

export const Graph = () => {
  const { currentLocationData, loading } = useGlobalContext();
  return (
    <>
      {loading ? (
        <> {/* <span className="loading loading-ring loading-lg"></span> */}</>
      ) : (
        <div>
          <h1 className="text-center text-3xl font-bold my-6 underline ">
            Weather Graph
          </h1>
          {currentLocationData && (
            <WeatherChart forecastData={currentLocationData.days} />
          )}
        </div>
      )}
    </>
  );
};
