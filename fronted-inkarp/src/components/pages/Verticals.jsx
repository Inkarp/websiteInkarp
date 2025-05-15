import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const verticalsList = [
  "Synthesis and Flow Chemistry",
  "Analytical and Chromatography Solutions",
  "Analytical Chemistry and Weighing",
  "Material Science and Battery",
  "General Laboratory Instrument",
  "Lifesciences",
  "Extrusion and Homogenization",
  "Rheology and Thermal Analysis",
  "Pilot Plants and Automation",
];

const Verticals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [verticalData, setVerticalData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (index) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5&_start=${index * 5}`
      );
      const data = await res.json();
      setVerticalData(data);
    } catch (err) {
      setVerticalData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(activeIndex);
  }, [activeIndex]);

  return (
    <>
      {/* Top Banner */}
      <div className="flex bg-white text-white justify-center items-center h-80 shadow-full mt-2 mx-auto rounded-lg">
        <img src="inkarp old.svg" className="h-64" alt="Inkarp Logo" />
      </div>

      {/* Content Area */}
      <div className="flex min-h-screen bg-white mt-2 w-[98%] mx-auto rounded-lg shadow-lg">
        {/* Sidebar */}
        <aside className="w-[340px] bg-white p-6 flex flex-col items-start space-y-5">
          {verticalsList.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full flex items-center justify-between px-5 py-3 rounded-full shadow-xl cursor-pointer transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-red-500 border border-black font-[MaxOT] font-lg"
                    : "bg-red-100 text-black border border-[#c7d3e3] text-[#0a2540] font-[Roboto]"
                }`}
              >
                <span className="text-base font-medium">{item}</span>
                <span
                  className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300
                    ${
                      isActive
                        ? "bg-red-500 text-white shadow-lg"
                        : "bg-[#0a2540] text-white"
                    }`}
                >
                  <ArrowRight size={18} />
                </span>
              </div>
            );
          })}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {verticalsList[activeIndex]}
          </h1>
          {loading ? (
            <p className="text-gray-500"><img  src="loadingImage.svg" className="w-100 h-100 bg-red-100"/></p>
          ) : (
            <div className="space-y-4">
              {verticalData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-lg shadow border"
                >
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Verticals;
