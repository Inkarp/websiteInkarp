import React from "react";

export default function BusinessRelationshipMap() {
  const ownCompanies = [
    { src: "inkarp old.svg", name: "Own Company 1" },
    { src: "inkarp old.svg", name: "Own Company 2" },
    { src: "inkarp old.svg", name: "Own Company 3" },
  ];

  const subsidiaries = [
    { src: "inkarp old.svg", name: "Subsidiary 1" },
    { src: "inkarp old.svg", name: "Subsidiary 2" },
  ];

  const trustedBy = new Array(7).fill({ src: "inkarp old.svg", name: "Trusted" });

  return (
    <div className="relative w-full min-h-screen bg-gray-50 py-20 px-4 flex flex-col items-center">
      {/* TRUSTED BY Arc Banner */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {trustedBy.map((item, idx) => (
          <div key={idx} className="w-16 h-16 bg-white p-1 shadow rounded-full flex items-center justify-center">
            <img src={item.src} alt={`Trusted ${idx + 1}`} className="object-contain w-full h-full" />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12">
        {/* OWN COMPANIES */}
        <div className="flex flex-col items-center gap-6">
          {ownCompanies.map((company, idx) => (
            <div key={idx} className="w-20 h-20 bg-white p-2 rounded-full shadow flex items-center justify-center">
              <img src={company.src} alt={company.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* MAIN BRAND */}
        <div className="relative">
          <div className="w-36 h-36 bg-yellow-100 border-4 border-yellow-500 rounded-full shadow-lg flex items-center justify-center text-center text-xs font-semibold text-gray-700">
            <img src="inkarp old.svg" alt="Main Brand" className="w-24 h-24 object-contain" />
          </div>

          {/* Connecting lines - optional SVG or divs */}
          <div className="absolute top-1/2 left-0 w-[150px] h-0.5 bg-yellow-400 -translate-x-full hidden md:block"></div>
          <div className="absolute top-1/2 right-0 w-[150px] h-0.5 bg-green-400 translate-x-full hidden md:block"></div>
        </div>

        {/* SUBSIDIARIES */}
        <div className="flex flex-col items-center gap-6">
          {subsidiaries.map((company, idx) => (
            <div key={idx} className="w-20 h-20 bg-white p-2 rounded-full shadow flex items-center justify-center">
              <img src={company.src} alt={company.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* LEGENDS */}
      <div className="mt-16 text-sm text-gray-600 flex flex-col md:flex-row gap-4 justify-center">
        <span>🟡 Inkarp (Main)</span>
        <span>🔵 Own Companies</span>
        <span>🟢 Subsidiaries</span>
        <span>🟣 Trusted by 7+ Brands</span>
      </div>
    </div>
  );
}
