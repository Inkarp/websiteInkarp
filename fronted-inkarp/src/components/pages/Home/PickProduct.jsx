import React, { useState } from "react";
import { BiSolidLeftArrowSquare, BiSolidRightArrowSquare } from "react-icons/bi";

const productData = [
  {
    name: "Hei-VAP HL G3",
    image: "https://www.inkarp.co.in/assets/images/products/Hei-VAP-HL-G3.webp",
    heading: "Hei-VAP HL G3",
    description: "High-performance rotary evaporator for demanding lab applications.",
    details: {
      Capacity: "100 ml",
      Voltage: "220V",
      Weight: "1.5 kg",
    },
    link: "/products/hei-vap-hl-g3"
  },
  {
    name: "Vac Valve Control",
    image: "https://www.inkarp.co.in/assets/images/products/hei-vac-valve-control.webp",
    heading: "Hei-VAC Valve Control",
    description: "Automated vacuum control for efficient solvent evaporation.",
    details: {
      Capacity: "200 ml",
      Voltage: "110V",
      Weight: "2.0 kg",
    },
    link: "/products/valve-control"
  },
  {
    name: "Vario Station",
    image: "https://www.inkarp.co.in/assets/images/products/hei-vac-vario-station.webp",
    heading: "Hei-VAC Vario Station",
    description: "Vacuum station with intelligent control for varied applications.",
    details: {
      Capacity: "300 ml",
      Voltage: "230V",
      Weight: "2.5 kg",
    },
    link: "/products/vario-station"
  },
  {
    name: "Valve Tec",
    image: "https://www.inkarp.co.in/assets/images/products/hei-vac-valve-tec.webp",
    heading: "Hei-VAC Valve Tec",
    description: "Precision valve-based vacuum regulation system.",
    details: {
      Capacity: "150 ml",
      Voltage: "220V",
      Weight: "1.8 kg",
    },
    link: "/products/valve-tec"
  },
  {
    name: "Valve Tec",
    image: "https://www.inkarp.co.in/assets/images/products/hei-vac-valve-tec.webp",
    heading: "Hei-VAC Valve Tec",
    description: "Precision valve-based vacuum regulation system.",
    details: {
      Capacity: "150 ml",
      Voltage: "220V",
      Weight: "1.8 kg",
    },
    link: "/products/valve-tec"
  },
  {
    name: "Valve Tec",
    image: "https://www.inkarp.co.in/assets/images/products/hei-vac-valve-tec.webp",
    heading: "Hei-VAC Valve Tec",
    description: "Precision valve-based vacuum regulation system.",
    details: {
      Capacity: "150 ml",
      Voltage: "220V",
      Weight: "1.8 kg",
    },
    link: "/products/valve-tec"
  },
  {
    name: "Valve Tec",
    image: "https://www.inkarp.co.in/assets/images/products/hei-vac-valve-tec.webp",
    heading: "Hei-VAC Valve Tec",
    description: "Precision valve-based vacuum regulation system.",
    details: {
      Capacity: "150 ml",
      Voltage: "220V",
      Weight: "1.8 kg",
    },
    link: "/products/valve-tec"
  }
];

export default function PickProduct() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const maxVisible = 4;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex < productData.length - maxVisible) setStartIndex(startIndex + 1);
  };

  const visibleTabs = productData.slice(startIndex, startIndex + maxVisible);
  const selectedProduct = productData[selectedIndex];

  return (
    <div className="w-[96%] mx-auto py-6 flex flex-col items-center space-y-5">
      <div className="text-center">
        <h1 className="font-bold text-3xl text-white font-[MaxOT]">Pick a Product to Start</h1>
        <p className="font-[Roboto] text-red-600 mt-1">
          Our professional and well-trained staff is ready to assist.
        </p>
      </div>

      {/* Product Selector Tabs */}
      <div className="w-[60%] bg-gray-200 h-[50px] rounded-full flex items-center justify-between px-4 shadow">
        <div
          onClick={handlePrev}
          className={`text-black text-2xl font-bold cursor-pointer ${startIndex === 0 ? "opacity-30 pointer-events-none" : ""
            }`}
        >
          <BiSolidLeftArrowSquare />
        </div>
        <div className="flex-1 flex justify-center gap-2 overflow-hidden px-2">
          {visibleTabs.map((item, idx) => {
            const actualIndex = startIndex + idx;
            const isSelected = actualIndex === selectedIndex;
            return (
              <button
                key={actualIndex}
                onClick={() => setSelectedIndex(actualIndex)}
                className={`px-4 py-2 rounded-full text-sm font-[Roboto] hover:bg-red-300 transition ${isSelected ? "text-red-500 font-bold" : "text-black font-bold"
                  }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div
          onClick={handleNext}
          className={`text-black text-2xl font-bold cursor-pointer ${startIndex + maxVisible >= productData.length ? "opacity-30 pointer-events-none" : ""
            }`}
        >
      <BiSolidRightArrowSquare />


        </div>
      </div>

      {/* Details Section */}
      <div className="w-[70%] mx-auto flex flex-col md:flex-row bg-white border border-red-500 p-6 space-y-6 md:space-y-0 md:space-x-6 items-center">
        {/* Left - Circular Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative grid aspect-square w-[280px] p-[14px] overflow-hidden">
            <img
              key={selectedProduct.image}
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-contain animate-slide-in"
            />
            <div className="absolute inset-0 p-[14px] rounded-full pointer-events-none z-[-1] gallery-mask"></div>
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 font-[MaxOT]">{selectedProduct.heading}</h2>
          <p className="font-[Roboto] text-md text-gray-700">{selectedProduct.description}</p>
          <table className="table-auto w-full text-sm text-left border border-red-500 rounded-lg">
            <tbody>
              {Object.entries(selectedProduct.details).map(([key, value]) => (
                <tr key={key} className="border-t border-red-200">
                  <td className="px-4 py-2 font-medium font-[Roboto]">{key}</td>
                  <td className="px-4 py-2 font-[Roboto]">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <a
            href={selectedProduct.link}
            className="inline-block mt-4 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-[Roboto] bounce-top"
          >
            Know More

          </a> */}
          <a href={selectedProduct.link}>
            <button
              type="button"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-[#be0010] bg-red-100 backdrop-blur-md font-semibold border-2 border-[#be0010] rounded-full px-4 py-2 overflow-hidden relative z-10 group before:absolute before:w-0 before:h-full before:bg-red-700 before:top-0 before:left-0 before:z-[-1] before:transition-all before:duration-700 before:hover:w-full before:hover:left-0 before:rounded-full hover:text-black before:bg-emerald-500 hover:bg-white"
            >
              Explore
              <svg
                className="w-8 h-8 text-[#be0010] group-hover:rotate-90 group-hover:bg-black ease-linear duration-300 rounded-full border border-[#be0010] group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-[#be0010] group-hover:fill-white"
                />
              </svg>
            </button>
          </a>

        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        @keyframes slideIn {
          0% {
            transform: translateX(100%) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slideIn 0.8s ease forwards;
        }

        .gallery-mask {
          background: conic-gradient(red, black, white, red);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>
    </div>
  );
}
