"use client";

import React, { useState } from "react";

export default function HomePage() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
        Switch and Bulb
      </h1>
      <div className="flex items-center space-x-6">
        <button
          className={`px-6 py-3 rounded-full font-semibold transition-transform duration-200 transform ${
            isOn
              ? "bg-green-500 text-white scale-110 shadow-lg"
              : "bg-gray-300 text-black scale-100"
          }`}
          onClick={toggleSwitch}
        >
          {isOn ? "Turn Off" : "Turn On"}
        </button>
        <div
          className={`ml-4 w-16 h-16 rounded-full transition-all duration-300 ${
            isOn ? "bg-yellow-400 shadow-xl animate-pulse" : "bg-gray-400"
          }`}
        >
          {/* Bulb representation */}
        </div>
      </div>
      <p className="mt-6 text-lg font-medium transition-colors duration-300">
        {isOn ? "The bulb is on! 🔆" : "The bulb is off. 🌑"}
      </p>
    </div>
  );
}



