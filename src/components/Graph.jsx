import React from "react";
import WeatherChart from "./Chart";
import { useGlobalContext } from "./Context";
import { Link } from "react-router";
export const Graph = () => {
  const { currentLocationData, loading, user } = useGlobalContext();
  return (
    <>
      {loading ? (
        <>
          {" "}
          <span className="loading loading-ring loading-lg"></span>{" "}
        </>
      ) : (
        <div>
          <h1 className="text-center text-3xl font-bold my-6 underline ">
            Weather Graph
          </h1>
          {user ? (
            <>
              {currentLocationData && (
                <WeatherChart forecastData={currentLocationData.days} />
              )}
            </>
          ) : (
            <div className="grid place-items-center mt-24 justify-center items-center">
              <p>Please Login for this feature </p>
              <Link to={"/login"} className="btn btn-primary mt-6">
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};
