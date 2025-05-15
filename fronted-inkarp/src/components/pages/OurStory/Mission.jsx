import React from "react";
import { FlaskConical, Microscope, Target, Eye } from "lucide-react";

export default function Mission() {
  return (
    <section className="w-full mx-auto bg-[#eef2f9] px-6 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* LEFT - Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://xleb-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2024/10/laboratoty-tools.png"
          alt="Microscope and Labware"
          className="w-[80%] md:w-full object-contain"
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
          We'll Ensure You Always <br /> Get the Best Results
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Inkarp is a hub of scientific innovation and service excellence. With over four decades of
          experience, we partner with global leaders to empower research, diagnostics, and industry
          through reliable, precise instrumentation and personalized technical support.
        </p>

        {/* Feature Cards */}
        {/* <div className="flex flex-wrap gap-6 mb-10">        
          <div className="flex items-start gap-3">
            <div className="bg-white p-3 rounded-full shadow-md">
              <FlaskConical className="text-[#be0010] w-5 h-5" />
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold text-base">Medical Research</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Health research, sometimes referred to as medical research
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-white p-3 rounded-full shadow-md">
              <Microscope className="text-[#be0010] w-5 h-5" />
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold text-base">Accurate Analysis</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Accurate Analysis is an asbestos testing laboratory.
              </p>
            </div>
          </div>
        </div> */}

        {/* Mission & Vision Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Our Mission */}
          <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
            <div className="bg-[#be0010] p-3 rounded-full">
              <Target className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl flex flex-col font-bold text-[#1b254b] mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To empower scientific progress across India by delivering cutting-edge instruments,
                responsive support, and trusted expertise in every partnership.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
            <div className="bg-[#be0010] p-3 rounded-full">
              <Eye className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1b254b] mb-2">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To be India’s most trusted and innovative scientific solutions partner, enabling
                discovery, development, and diagnostics with excellence and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
