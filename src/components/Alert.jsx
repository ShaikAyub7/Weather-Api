import React from "react";
import { useGlobalContext } from "./Context";

const Alert = () => {
  const { currentLocationData, loading } = useGlobalContext();

  // Ensure data is available before accessing properties
  if (loading) {
    return (
      <p>
        {" "}
        <span className="loading loading-ring loading-lg"></span>
      </p>
    );
  }

  const alertData = currentLocationData?.alert;

  return alertData ? (
    <div className="bg-red-500 text-white p-2  shadow-md">
      <h2 className="text-sm font-bold">Weather Alert</h2>
      <p>{alertData}</p>
    </div>
  ) : null;
};

export default Alert;
