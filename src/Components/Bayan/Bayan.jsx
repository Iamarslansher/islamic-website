import React from "react";
import bayanData from "../../constant/bayans";
import { useNavigate } from "react-router-dom";

function Bayan() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto my-8">
      {bayanData.map((bayan, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-duration-300"
          onClick={() => navigate("/bayan-deatil")}
        >
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-xl">🕌</span>
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">
            {bayan.title}
          </h3>
          <p className="text-gray-600 mb-2">
            {bayan.textContent.slice(0, 50)}...
          </p>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <span className="font-medium">{bayan.speaker}</span> -
              {bayan.category}
            </div>
            <div className="text-sm text-gray-500">{bayan.duration}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bayan;
