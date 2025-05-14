import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle } from 'lucide-react';


const options = [
  'Precision Instruments',
  'Life Science Solutions',
  'Pharma & Clinical Research'
];

const features = [
  'Trusted Scientific Solutions Since 1985',
  'Customized Support Across Research & Diagnostics',
  'Partnered with Global Leaders in Lab Technology'
];

export default function WhyHome() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full bg-[#f0f5ff] py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <button className="px-4 py-1 text-sm font-semibold border border-black rounded-full mb-4">
            WHY CHOOSE US?
          </button>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b254b] leading-tight">
            Choose The Right Lab Partner
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          {/* Left Options */}
          <div className="flex flex-col gap-5 w-full lg:w-1/3">
            {options.map((opt, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`flex items-center justify-between px-6 py-4 rounded-full border text-left text-base font-medium transition-all duration-300 ${
                  active === index
                    ? 'bg-white text-[#1b254b] shadow-md'
                    : 'bg-[#e6edff] text-[#1b254b] border-gray-300'
                }`}
              >
                {opt}
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    active === index ? 'bg-blue-500' : 'bg-[#0a1437]'
                  }`}
                >
                  <ArrowUpRight className="text-white w-4 h-4" />
                </span>
              </button>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-[30%] rounded-3xl overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/portrait-female-scientist-using-microscope-laboratory_23-2150897833.jpg"
              alt="lab"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Features */}
          <div className="w-full lg:w-1/3 text-[#1b254b]">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
              Trusted Lab Services. Expertly Delivered.
            </h3>
            <ul className="space-y-3">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 w-5 h-5" />
                  <span className="font-medium text-[16px]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
