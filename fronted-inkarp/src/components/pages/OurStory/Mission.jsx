import React from "react";
import { FlaskConical, Microscope } from "lucide-react"; // Icons


export default function Mission() {
  return (
    <section className="w-full mt-25 bg-[#eef2f9] px-6 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* LEFT - Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src='https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/10/laboratoty-tools.png'
          alt="Microscope and Labware"
          className="w-[90%] md:w-full object-contain"
        />
      </div>

      {/* RIGHT - Text Content */}
      <div className="w-full md:w-1/2 text-left">
        {/* Label */}
        <div className="mb-4">
          <span className="uppercase text-sm font-semibold tracking-wider border border-gray-500 px-3 py-1 rounded-full text-gray-800">
            Who We Are
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
          We'll Ensure You Always <br /> get the Best Results
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Chemistry Research Documentation Center, a hub of exploration &
          discovery in the realm of uncommon & extraordinary chemical phenomena.
          Our clinical pathologists are able seven days a week to render
          diagnoses.
        </p>

        {/* Feature Cards */}
        <div className="flex flex-wrap gap-6 mb-8">
          {/* Medical Research */}
          <div className="flex items-start gap-3">
            <div className="bg-white p-3 rounded-full shadow-md">
              <FlaskConical className="text-red-600 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold text-base">Medical Research</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Health research, sometimes referred to as medical research
              </p>
            </div>
          </div>

          {/* Accurate Analysis */}
          <div className="flex items-start gap-3">
            <div className="bg-white p-3 rounded-full shadow-md">
              <Microscope className="text-red-600 w-5 h-5" />
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold text-base">Accurate Analysis</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Accurate Analysis is an asbestos testing laboratory.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-3 bg-white text-gray-800 font-semibold border border-gray-400 rounded-full hover:bg-gray-200 transition-all text-sm flex items-center gap-2">
          Know More <span className="text-lg">→</span>
        </button>
      </div>
    </section>
  );
}
