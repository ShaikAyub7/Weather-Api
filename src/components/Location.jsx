import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Location = () => {
  const { currentLocationData } = useGlobalContext();
  return (
    <div className="  lg:w-52">
      <p className="flex items-center gap-2 justify-center">
        <FaLocationArrow />
        Location : {currentLocationData?.address}
      </p>
    </div>
  );
};

export default Location;
