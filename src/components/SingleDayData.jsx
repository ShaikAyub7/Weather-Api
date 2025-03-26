import React from "react";
import { useGlobalContext } from "./Context";
import Card from "./Card";

const SingleDayData = () => {
  const { currentLocationData, loading } = useGlobalContext();

  return (
    <div className="mt-12  max-w-5xl m-auto">
      {!loading ? (
        <>
          <Card data={currentLocationData} />
        </>
      ) : (
        <></>
        // <div className="loading loading-ring loading-xl  flex items-center justify-center place-items-center "></div>
      )}
    </div>
  );
};

export default SingleDayData;
