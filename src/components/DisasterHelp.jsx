import React from "react";

const DisasterHelp = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-red-600">
        🚨 Weather Disaster Help
      </h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">🌪️ Storms & Hurricanes</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Stay indoors & away from windows.</li>
          <li>Charge your mobile devices & prepare an emergency kit.</li>
          <li>Evacuate if instructed by local authorities.</li>
        </ul>
      </section>
      \{" "}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">🌊 Floods</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Avoid walking or driving through floodwaters.</li>
          <li>Move to higher ground immediately.</li>
          <li>Stay updated with weather alerts & evacuation notices.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">🔥 Heatwaves</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Stay hydrated & avoid direct sunlight during peak hours.</li>
          <li>Wear loose, light-colored clothing.</li>
          <li>Check on elderly & vulnerable people.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">📞 Emergency Contacts</h2>
        <p className="mt-2">Keep these numbers saved for quick access:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>🚑 **Medical Emergency:** 911 / Local hospital</li>
          <li>🚔 **Police & Rescue:** 112</li>
          <li>🌊 **Flood Helpline:** National Disaster Helpline</li>
          <li>
            📡 **Weather Alerts:** [NOAA](
            <a
              href="https://www.weather.gov/"
              target="blank"
              className="text-blue-400 cursor-pointer"
            >
              https://www.weather.gov/
            </a>
            ) / Local meteorological department
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DisasterHelp;
