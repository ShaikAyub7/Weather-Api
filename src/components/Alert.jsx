import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context/Context";

const Alert = () => {
  const { currentLocationData, loading } = useGlobalContext();

  const [alertStatus, setAlertStatus] = useState(
    localStorage.getItem("hiddenAlert") || "block"
  );

  const hideBar = () => {
    localStorage.setItem("hiddenAlert", "hidden");
    setAlertStatus("hidden");
  };
  const removeHiddenClass = () => {
    localStorage.removeItem("hiddenAlert");
  };

  setInterval(() => {
    removeHiddenClass();
  }, 14400000);

  if (loading) return null;

  const realAlert =
    currentLocationData?.alerts?.[0] || currentLocationData?.events?.[0];

  const dummyAlert = {
    sender_name: "Weather Alert System",
    event: "No alert",
    start: "March 20, 2025, 10:00 AM",
    end: "March 21, 2025, 6:00 PM",
    description:
      "Expect heavy rainfall in your area. Drive safely and avoid waterlogged roads.",
  };

  const alertData = realAlert || dummyAlert;
  const bgColor = realAlert ? "bg-red-600" : "bg-red-500";

  return (
    <section
      className={`${alertStatus} fixed top-4 left-0 right-0 mx-auto w-11/12 max-w-2xl z-50 transition-transform transform ${
        alertStatus === "hidden" ? "translate-y-[-100%]" : "translate-y-0"
      }`}
    >
      <div className={`${bgColor} text-white p-4 shadow-lg rounded-xl`}>
        <h2 className="text-lg font-semibold flex items-center">
          ⚠️ Weather Alert!
        </h2>
        <p className="font-bold">{alertData.event}</p>
        <p className="text-sm">{alertData.description}</p>
        <p className="text-xs">Issued by: {alertData.sender_name}</p>
        <p className="text-xs">
          Effective: {alertData.start} - {alertData.end}
        </p>

        <div className="flex justify-center items-center mt-3">
          <button
            className="btn btn-sm btn-outline btn-light hover:bg-gray-100 transition-all"
            onClick={hideBar}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default Alert;
