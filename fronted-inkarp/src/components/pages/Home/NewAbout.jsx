import React from "react";
import DroppingText from "./DroppingText";
import Quotes from "../OurStory/Quotes";


function NewAbout() {
  return (
    <div className=" h-auto flex flex-col md:flex-row gap-8 p-6 ">
      {/* Left Section - Company Info */}
      <div className="w-full md:w-3/5 rounded-xl bg-white p-4 flex flex-col items-center justify-center shadow-xl">
        <h2 className="font-[MaxOT]">
          <DroppingText />
        </h2>
        <img
          src="inkarp.png"
          alt="Company"
          className="w-2/3 h-auto rounded-full object-cover"
        />
        
        {/* ✅ Quotes Component Added Below Image */}
        {/* <div className="">
          <Quotes />
          
        </div> */}
      </div>

      {/* Right Section - Subsidiaries & Joint Ventures */}
      <div className="w-full md:w-2/3 flex flex-col gap-6">
        {/* Heading for Right Side */}
        <div className="bg-white border border-red-500 p-4 rounded-xl shadow-2xl">
        <h2 className="text-4xl/10 font-bold text-black text-center font-[MaxOT]">
          Group Companies
        </h2>
        </div>

        {/* Subsidiaries */}
        <div className="bg-white p-4 rounded-xl shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
            100% Owned Subsidiaries
          </h3>
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
        <div className="bg-white p-4 rounded-xl shadow-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
            Our Joint Ventures
          </h3>
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
