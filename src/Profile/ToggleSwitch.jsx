import React, { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);

    // If turned ON, open user's location
    if (newState && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          window.open(mapsUrl, "_blank");
        },
        (error) => {
          alert("Could not get location. Please allow location access.");
          console.error(error);
        }
      );
    }
  };

  return (
    <div className="my-3">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-semibold ml-2 ">
          {/* {isOn ? "Turned On" : "Turned Off"} */}
          {isOn ? "" : ""}
        </span>

        <button
          onClick={handleToggle}
          className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 
          ${isOn ? "bg-green-500" : "bg-gray-400"}`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300
            ${isOn ? "translate-x-8" : "translate-x-0"}`}
          ></div>
        </button>
      </div>
    </div>
  );
}

export default ToggleSwitch;
