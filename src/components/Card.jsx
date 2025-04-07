import React from "react";
import { WeatherIcon } from "./Icons";
import { formatTime12Hour } from "../data";
import { useState } from "react";
import { useGlobalContext } from "./Context";
const Card = ({ data, searchData, currentLocationData }) => {
  const { user } = useGlobalContext();
  const displayData = searchData || data || currentLocationData;

  return (
    <div className="carousel carousel-end rounded-box w-full mt-6">
      {user ? (
        <>
          {displayData?.days?.length > 0 ? (
            <div className="carousel carousel-end rounded-box p-6">
              <div className="carousel-item">
                {displayData.days.map((day) => (
                  <div
                    key={day.datetime}
                    id="card-items"
                    className="gap-x-12 bg-gray-50 shadow-4xl mr-6 rounded-2xl flex flex-col items-center justify-center text-black p-4 max-w-xl"
                  >
                    <figure className="h-12 w-full flex justify-center items-center mt-8">
                      <WeatherIcon
                        icon={day.icon}
                        weather={day.conditions}
                        size={`h-45 w-45`}
                      />
                    </figure>
                    <div className="card-body p-2 z-10">
                      <h2>Date: {day.datetime}</h2>
                      <p>Temp: {day.temp}°C</p>
                      <p>Condition: {day.conditions}</p>
                      <p>Sunrise: {formatTime12Hour(day.sunrise)}</p>
                      <p>Sunset: {formatTime12Hour(day.sunset)}</p>
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
        <p>Please log in to view weather data.</p>
      )}
    </div>
  );
};

export default Card;
