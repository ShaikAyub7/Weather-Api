import React from "react";
import { WeatherIcon } from "./Icons";

const Card = ({ data }) => {
  return (
    <div className=" carousel carousel-end rounded-box w-full  mt-6">
      {data?.days?.length > 0 ? (
        <div className="carousel carousel-end rounded-box  ">
          <div className="carousel-item ">
            {data.days.map((day) => (
              <div
                key={day.datetime}
                className="gap-x-12  bg-gray-200 shadow-4xl  mr-6 rounded-2xl flex flex-col items-center justify-center text-black p-4 max-w-xl"
              >
                <figure className="h-18 w-full flex justify-center items-center">
                  <WeatherIcon icon={day.icon} />
                </figure>
                <div className="card-body p-2 ">
                  <h2 className="">Date: {day.datetime}</h2>
                  <p>Temp : {day.temp}</p>
                  <p>Condition : {day.conditions}</p>
                  {/* <p className="line-clamp-1">{day.description}</p> */}
                  <p className="line-clamp-1">Sunrise : {day.sunrise}</p>
                  <p className="line-clamp-1">Sunset : {day.sunset}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No forecast data available</p>
      )}
    </div>
  );
};

export default Card;
