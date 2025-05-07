import React from "react";

export default function AnimatedIcons() {
  const topItems = [
    { name: 'Inkarp', text: 'Leading distributor of scientific solutions.', image: "inkarp old.svg", colors: ['from-[#fd4617]', 'to-[#ffc445]'] },
    { name: 'Inkarp Instruments', text: 'Empowering research across India.', image: "inkarp old.svg", colors: ['from-[#ffaa5a]', 'to-[#fff05a]'] },
    { name: 'Inkarp Biotech', text: 'Advancing biotechnology innovations.', image: "inkarp old.svg", colors: ['from-[#96c93d]', 'to-[#00b09b]'] },
  ];

  const bottomItems = [
    { name: 'BioVentures', text: 'Joint venture in life sciences.', image: "inkarp old.svg", colors: ['from-[#3da5d9]', 'to-[#54f2f2]'] },
    { name: 'MedixLink', text: 'Connecting global medtech.', image: "inkarp old.svg", colors: ['from-[#8e44ad]', 'to-[#9b59b6]'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* LEFT - Intro content */}
        <div className="lg:w-1/3 w-full space-y-6 px-4">
          <h2 className="text-3xl font-bold text-gray-800 leading-snug">Welcome to Inkarp Group</h2>
          <p className="text-gray-600 text-lg">
            We are a family of scientific innovation companies and global joint ventures.
            Our vision is to empower life sciences, diagnostics, and medtech communities with cutting-edge tools and support.
          </p>
          <p className="text-gray-500">
            From core research to collaborative biotech, discover who we are—and how we’re building the future, together.
          </p>
        </div>

        {/* RIGHT - Animated Pendulums */}
        <div className="lg:w-2/3 w-full flex flex-col items-center gap-14">
          {/* Top Section */}
          <div className="w-full">
            <div className="w-2/3 mx-auto h-11 bg-neutral-700 text-white text-xl font-bold rounded-xl shadow flex items-center justify-center">
              Our Companies
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-0">
              {topItems.map((item, index) => (
                <div key={index} className="w-52 text-center uppercase font-sans">
                  <div className="flex flex-col items-center h-[250px] justify-end">
                    <div className="w-1 h-[75px] bg-gray-500" />
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 -mt-1 z-10" />
                    <div
                      className={`w-32 h-32 rounded-full border-4 border-white shadow-lg -mt-4 flex items-center justify-center animate-[swing_0.5s_ease-in-out_infinite_alternate] bg-gradient-to-br ${item.colors[0]} ${item.colors[1]}`}
                      style={{ transformOrigin: 'top center' }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold mt-3 text-[${item.colors[0].slice(6)}]`}>{item.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full">
            <div className="w-full h-11 bg-neutral-700 text-white text-xl font-bold rounded-xl shadow flex items-center justify-center">
              Our Joint Ventures
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-0">
              {bottomItems.map((item, index) => (
                <div key={index} className="w-52 text-center uppercase font-sans">
                  <div className="flex flex-col items-center h-[250px] justify-end">
                    <div className="w-1 h-[75px] bg-gray-500" />
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 -mt-1 z-10" />
                    <div
                      className={`w-32 h-32 rounded-full border-4 border-white shadow-lg -mt-4 flex items-center justify-center animate-[swing_0.5s_ease-in-out_infinite_alternate] bg-gradient-to-br ${item.colors[0]} ${item.colors[1]}`}
                      style={{ transformOrigin: 'top center' }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold mt-3 text-[${item.colors[0].slice(6)}]`}>{item.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind custom swing animation */}
      <style>{`
        @keyframes swing {
          0% { transform: rotate(-8deg); }
          100% { transform: rotate(8deg); }
        }
      `}</style>
    </div>
  );
}
