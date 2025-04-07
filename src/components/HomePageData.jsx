import React from "react";
import { useGlobalContext } from "./context/Context";
import SingleDayData from "./SingleDayData";
import { Link } from "react-router-dom";
import searchDataFn from "../data";

const HomePageData = () => {
  const data = searchDataFn();
  const { currentLocationData, user, data: searchData } = useGlobalContext();
  console.log(currentLocationData);
  return (
    <>
      {" "}
      <section className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Today's Highlights</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => {
            return (
              <div className="p-4 bg-gray-50 rounded-lg shadow">
                <p className="text-sm text-gray-500">{item.name}</p>
                <p className="text-lg dark:text-gray-700 font-bold">
                  {" "}
                  {item.temp} {item.symbol}
                </p>
              </div>
            );
          })}
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
