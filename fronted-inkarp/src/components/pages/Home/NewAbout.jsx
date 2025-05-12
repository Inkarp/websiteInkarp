import React from "react";

function NewAbout() {
  return (
    <div className="w-[95%] mx-auto h-auto  flex flex-col md:flex-row gap-8 p-6 rounded-2xl shadow-md">
      {/* Left Section - Company Info */}
      <div className="w-full md:w-3/5  rounded-xl bg-white p-4 flex flex-col items-center justify-center shadow-md">
        {/* <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center font-[MaxOT]">About Inkarp</h2> */}
        <img
          src="inkarp.png"
          alt="Company"
          className="w-[90%] h-[300px]  rounded-full object-cover"
        />
        {/* <p className="text-center text-gray-700 text-lg leading-relaxed font-[Roboto]">
          Inkarp is a pioneer in providing scientific solutions across India for over 40 years. Our commitment to excellence and partnerships with global leaders fuel our innovation and service delivery.
        </p> */}
      </div>

      {/* Right Section - Subsidiaries & Joint Ventures */}
      <div className="w-full md:w-2/3 flex flex-col gap-6">
        {/* Heading for Right Side */}
        <h2 className="text-2xl/10 font-bold text-white text-center font-[MaxOT]">Group Companies</h2>

        {/* Subsidiaries */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">100% Owned Subsidiaries</h3>
          <div className="flex justify-center gap-8 mb-3 flex-wrap">
            <img src="Spark.svg" alt="Sub 1" className="w-28 h-28 object-contain" />
            <img src="inkarp old.svg" alt="Sub 2" className="w-28 h-28 object-contain" />
            <img src="inkarp old.svg" alt="Sub 3" className="w-28 h-28 object-contain" />
          </div>
          <p className="text-center text-gray-700 text-lg leading-relaxed font-[Roboto]">
            Inkarp subsidiaries work across multiple verticals to strengthen our scientific footprint throughout India.
          </p>
        </div>

        {/* Joint Ventures */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Our Joint Ventures</h3>
          <div className="flex justify-center gap-8 mb-3 flex-wrap">
            <img src="inkarp old.svg" alt="JV 1" className="w-28 h-28 object-contain" />
            <img src="inkarp old.svg" alt="JV 2" className="w-28 h-28 object-contain" />
          </div>
          <p className="text-center text-gray-700 text-lg leading-relaxed font-[Roboto]">
            We collaborate through joint ventures to bring specialized scientific technologies and services to our clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewAbout;
