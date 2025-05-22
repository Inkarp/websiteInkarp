import React from "react";
import DroppingText from "./DroppingText";
import Quotes from "../OurStory/Quotes";


function NewAbout() {
  return (
    <div className=" h-auto w-[98%] mx-auto flex flex-col md:flex-row gap-8 p-6 ">
      {/* Left Section - Company Info */}

      <div className="w-full md:w-3/5 flex flex-col items-center justify-center ">
      <div className="relative w-full h-full overflow-hidden rounded-[15px] shadow-lg">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="https://video.wixstatic.com/video/11062b_c4a9409cabea4e2eaa4afdda662b7eec/1080p/mp4/file.mp4"
      />

      {/* Poster image as fallback */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 pointer-events-none"
        src="https://static.wixstatic.com/media/11062b_c4a9409cabea4e2eaa4afdda662b7eecf000.jpg/v1/fill/w_475,h_796,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_c4a9409cabea4e2eaa4afdda662b7eecf000.jpg"
        alt="Background Poster"
      />

      {/* Optional overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-bold bg-black/30">
        <h2 className="font-[MaxOT]">
          <DroppingText />
        </h2>
        <img
          src="inkarp.png"
          alt="Company"
          className="w-full h-auto rounded-full object-cover"
        />
      </div>
    </div>
        
        
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
