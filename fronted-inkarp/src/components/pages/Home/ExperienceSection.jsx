import React from "react";

export default function ExperienceSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-16 px-6 md:px-20"
    //   style={{
    //     backgroundImage:
    //       "url('black.jpg')",
    //   }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center rounded-xl p-6 gap-8">
        {/* Left Column */}
        <div className="md:w-1/2 flex  items-center justify-center space space-y-4">
          <img
            src="inkarp.png"
            alt="40 Years"
            className="w-full h-60 object-cover rounded-full bg-red"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              With <span className="text-red-800">40+ Years</span> of <br /> Scientific Excellence
            </h2>
            <p className="text-white text-lg mt-2">
              Inkarp has empowered Indian laboratories and institutions for over four decades by delivering reliable solutions through trusted global partnerships.
            </p>
            <button className="mt-4 bg-red-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold shadow">
              Know More
            </button>
          </div>
        </div>

        {/* Right Column - Stats in 2 rows */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Customers */}
          <StatCard icon="👥" title="5000+" subtitle="Customers" />
          {/* Principals */}
          <StatCard icon="🌍" title="50+" subtitle="Principals" />
          {/* Branches */}
          <StatCard icon="📍" title="13+" subtitle="Branches" />
          {/* Awards */}
          <StatCard icon="🏆" title="10" subtitle="Awards" />
        </div>
      </div>
    </section>
  );
}

// Reusable card component
function StatCard({ icon, title, subtitle }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-2 sm:p-4 rounded-xl flex flex-col items-center text-center shadow-lg">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm mt-1">{subtitle}</p>
    </div>
  );
}
