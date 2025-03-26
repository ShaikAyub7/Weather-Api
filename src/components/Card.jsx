import React from "react";
import { WeatherIcon } from "./Icons";
import { formatTime12Hour } from "../data";
import { useState } from "react";

const Card = ({ data }) => {
  const [user, setUser] = useState(true);
  return (
    <div className=" carousel carousel-end rounded-box w-full  mt-6">
      {user ? (
        <>
          {data?.days?.length > 0 ? (
            <div className="carousel carousel-end rounded-box  p-12">
              <div className="carousel-item ">
                {data.days.map((day) => (
                  <div
                    key={day.datetime}
                    id="card-items"
                    className="gap-x-12  bg-gray-50  shadow-4xl  mr-6 rounded-2xl flex flex-col items-center justify-center text-black p-4 max-w-xl"
                  >
                    <figure className="h-12 w-full flex justify-center items-center mt-8">
                      <WeatherIcon icon={day.icon} size={` h-55 w-48`} />
                    </figure>
                    <div className="card-body p-2 z-10">
                      <h2 className="">Date: {day.datetime}</h2>
                      <p>Temp : {day.temp}</p>
                      <p>Condition : {day.conditions}</p>
                      <p className="line-clamp-1">
                        Sunrise : {formatTime12Hour(day.sunrise)}
                      </p>
                      <p className="line-clamp-1">
                        Sunset : {formatTime12Hour(day.sunset)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No forecast data available</p>
          )}
        </>
      ) : (
        <div className="p-25 flex flex-col justify-center items-center gap-y-5 m-auto  ">
          <h1 className="md:font-bold font-light w-full">
            Please Login For future weather details...
          </h1>
          <button className="btn btn-primary ">Login</button>
        </div>
      )}
    </div>
  );
};

export default Card;
