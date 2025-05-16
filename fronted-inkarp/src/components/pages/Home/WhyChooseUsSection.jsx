import React, { useState, useRef } from 'react';
import {
  Dna,
  FlaskConical,
  Microscope,
  GraduationCap,
  CheckCircle,
  PillBottle
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const options = [
  {
    label: 'Pharmaceuticals',
    icon: <PillBottle className="w-5 h-5 text-white" />,
    image: 'https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg',
    content: [
      'Streamline R&D and manufacturing processes.',
      'Regulatory compliance support.',
      'Enhanced quality control solutions.',
      'Scalable lab instrumentation.'
    ]
  },
  {
    label: 'Biotechnology',
    icon: <Dna className="w-5 h-5 text-white" />,
    image: 'https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg',
    content: [
      'Advanced genomic analysis tools.',
      'High-precision measurement equipment.',
      'Support for innovative life sciences research.',
      'Reliable partner for biopharma labs.'
    ]
  },
  {
    label: 'Chemical and Petrochemical',
    icon: <FlaskConical className="w-5 h-5 text-white" />,
    image: 'https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg',
    content: [
      'Robust instruments for harsh environments.',
      'Accurate analysis for chemicals and fuels.',
      'Compliance with global standards.',
      'Process optimization and safety.'
    ]
  },
  {
    label: 'Diagnostics',
    icon: <Microscope className="w-5 h-5 text-white" />,
    image: 'https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg',
    content: [
      'Efficient sample preparation tools.',
      'Reliable and fast testing support.',
      'Instrument calibration and validation.',
      'Scalable lab automation.'
    ]
  },
  {
    label: 'Academic and Research',
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    image: 'https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg',
    content: [
      'Trusted by top universities.',
      'Customized setups for experiments.',
      'Workshops and training.',
      'Affordable, high-accuracy tools.'
    ]
  }
];

export default function WhyChooseUsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const activeOption = options[active];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className=" py-5 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <button className="px-4 py-1 text-sm font-semibold border border-[#be0010] text-black rounded-full mb-4">
            WHY CHOOSE US?
          </button>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            We Advise You to Make <br /> the Right Decision
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          {/* LEFT - Industries */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-[MaxOT] font-semibold mb-6 text-black">
              Industries We Serve
            </h2>
            <div className="flex flex-col gap-5">
              {options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`flex items-center justify-between px-6 py-2 rounded-full border text-left text-base font-medium transition-all duration-300 ${
                    active === index
                      ? 'bg-white text-[#1b254b] shadow-md border-[#be0010]'
                      : 'bg-[#ffe6e9] text-[#1b254b] border-gray-300'
                  }`}
                >
                  {opt.label}
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      active === index ? 'bg-[#be0010]' : 'bg-[#1b254b]'
                    }`}
                  >
                    {opt.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* MIDDLE - Image */}
          <motion.div
            key={active} // Force re-animate when tab changes
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[45%] rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={activeOption.image}
              alt={activeOption.label}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT - Description */}
          <motion.div
            key={active + '-desc'}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 text-black"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
              {activeOption.label}: Tailored Solutions for You
            </h3>
            <p className="text-black mb-5">
              We provide trusted consultation and precision instruments designed for:
            </p>
            <ul className="space-y-5">
              {activeOption.content.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-red-800 w-5 h-5" />
                  <span className="font-medium text-[16px] text-black">{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
