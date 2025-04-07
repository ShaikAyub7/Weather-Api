import React from "react";
import { useGlobalContext } from "./Context";
import SingleDayData from "./SingleDayData";
import dataFn from "../data";
import { Link } from "react-router-dom";

const HomePageData = () => {
  const {
    currentLocationData,

    user,
    data: searchData,
  } = useGlobalContext();
  return (
    <>
      {" "}
      <section className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Today's Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <p className="text-sm text-gray-500">UV Index</p>
            <p className="text-lg font-bold">
              {" "}
              {searchData?.currentConditions?.uvindex ||
                currentLocationData?.currentConditions?.uvindex}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <p className="text-sm text-gray-500">Wind Speed</p>
            <p className="text-lg font-bold">
              {" "}
              {searchData?.currentConditions?.windspeed ||
                currentLocationData?.currentConditions?.windspeed}{" "}
              km/h
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="text-lg font-bold">
              {" "}
              {searchData?.currentConditions?.humidity ||
                currentLocationData?.currentConditions?.humidity}
              %
            </p>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Week Forecast</h2>

        {user ? (
          <SingleDayData />
        ) : (
          <div className="grid place-items-center  justify-center items-center">
            <p>Please Login for future weather details</p>
            <Link to={"/login"} className="btn btn-primary ">
              Login
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default HomePageData;
