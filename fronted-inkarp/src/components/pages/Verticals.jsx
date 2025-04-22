import React from 'react';

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
  return (
    <>
    <div className="flex bg-black text-white justify-center items-center h-80 w-[90%] shadow-full mt-8 mx-auto rounded-lg lining-2">
    <img src='inkarp old.svg' className='h-75 '/>
    </div>
    <div className="flex min-h-screen bg-gray-100 mt-3 w-[95%] mx-auto rounded-lg shadow-lg">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b text-xl font-semibold">
          Verticals
        </div>
        <ul className="p-4 space-y-2">
          {verticalsList.map((item, index) => (
            <li
              key={index}
              className="px-3 py-2 rounded-md hover:bg-red-100 cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Placeholder for main content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Select a vertical from the sidebar</h1>
      </main>
    </div>
    </>
  );
};

export default Verticals;
