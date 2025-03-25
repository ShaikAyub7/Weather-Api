import React from "react";
import { useGlobalContext } from "./Context";
const Alert = () => {
  const { currentLocationData, loading } = useGlobalContext();

  if (loading) return <p></p>;

  const realAlert =
    currentLocationData?.alerts?.[0] || currentLocationData?.events?.[0];

  const dummyAlert = {
    sender_name: "Weather Alert System",
    event: "No alert",
    // start: "March 20, 2025, 10:00 AM",
    // end: "March 21, 2025, 6:00 PM",
    // description:
    //   "Expect heavy rainfall in your area. Drive safely and avoid waterlogged roads.",
  };

  const alertData = realAlert || dummyAlert;
  const bgColor = dummyAlert ? "bg-blue-500" : "bg-red-500";

  return (
    <div className={`${bgColor} text-white p-4 rounded-2xl shadow-md mt-12 `}>
      <h2 className="text-xl font-bold">⚠️ Weather Alert!</h2>
      <p className="font-semibold">{alertData.event}</p>
      <p>{alertData.description}</p>
      <p className="text-sm">Issued by: {alertData.sender_name}</p>
      <p className="text-xs">
        Effective: {alertData.start} - {alertData.end}
      </p>
    </div>
  );
};

export default Alert;
