import React from "react";

export default function ExperienceSection() {
  return (
    <section className="relative bg-cover bg-center text-white  px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-black/40 p-6 rounded-2xl">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          {/* <img
            src="inkarp.png"
            alt="40 Years"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full shadow-md"
          /> */}

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              With <span className="text-red-600">40+ Years</span> of <br className="hidden sm:block" />
              Scientific Excellence
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-white">
              Inkarp has empowered Indian laboratories and institutions for over four decades by delivering reliable solutions through trusted global partnerships.
            </p>
            <button className="mt-4 bg-red-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold shadow transition">
              Know More
            </button>
          </div>
        </div>

        {/* Right Column - Stats Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6">
          <StatCard icon="👨‍🔬" title="5000+" subtitle="Customers" />
          <StatCard icon="🤝" title="50+" subtitle="Principals" />
          <StatCard icon="🌐" title="13+" subtitle="Branches" />
          <StatCard icon="🏆" title="10" subtitle="Awards" />
        </div>
      </div>
    </section>
  );
}

// Reusable card component
function StatCard({ icon, title, subtitle }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-xl flex flex-col items-center text-center shadow-md transition">
      <div className="text-3xl sm:text-4xl mb-2">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
      <p className="text-sm sm:text-base mt-1">{subtitle}</p>
    </div>
  );
}
