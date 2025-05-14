import React, { useState } from 'react';
import {
 
  Dna,
  FlaskConical,
  Microscope,
  GraduationCap,
  CheckCircle,
  PillBottle
} from 'lucide-react';

const options = [
  { label: 'Pharmaceuticals', icon: <PillBottle  className="w-5 h-5 text-white" /> },
  { label: 'Biotechnology', icon: <Dna className="w-5 h-5 text-white" /> },
  { label: 'Chemical and Petrochemical', icon: <FlaskConical className="w-5 h-5 text-white" /> },
  { label: 'Diagnostics', icon: <Microscope className="w-5 h-5 text-white" /> },
  { label: 'Academic and Research', icon: <GraduationCap className="w-5 h-5 text-white" /> }
];

const features = [
  'Access Expert Advice For A Thriving Life',
  'Benefits Of Health Conscious Living',
  'Benefits Of Proactive Health Management',
  'Countless Benefits Of Prioritizing Health'
];

export default function WhyChooseUsSection() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full bg-white py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <button className="px-4 py-1 text-sm font-semibold border border-black rounded-full mb-4">
            WHY CHOOSE US?
          </button>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b254b] leading-tight">
            We Advice to Choose a <br /> Right Decision
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          {/* LEFT - Industries */}
          <div className="w-full lg:w-1/4">
            <h2 className="text-3xl font-[MaxOT] font-semibold mb-6 text-[#1b254b]">
              Industries We Serve
            </h2>
            <div className="flex flex-col gap-5">
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
                  {opt.label}
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      active === index ? 'bg-blue-500' : 'bg-[#0a1437]'
                    }`}
                  >
                    {opt.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* MIDDLE - Image */}
          <div className="w-full lg:w-[30%] rounded-3xl overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/portrait-female-scientist-using-microscope-laboratory_23-2150897833.jpg"
              alt="lab"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT - Description */}
          <div className="w-full lg:w-1/3 text-[#1b254b]">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
              We'll Ensure You Always Make the Right Decision.
            </h3>
            <p className="text-gray-500 mb-5">
              We help ambitious businesses like yours generate more impact by enabling access to
              expert consultation, reliable instruments, and tailored scientific solutions.
            </p>
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
