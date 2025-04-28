import React, { useState } from "react";

const teamMembers = [
  {
    name: "S. Balu",
    title: "Chairman & Managing Director",
    image: "inkarp old.svg",
    description:
      "Founder of Inkarp in 1985, committed to providing unmatched after-sale service and unwavering support to customers.",
    linkedin: "https://www.linkedin.com/in/sbalu",
  },
  {
    name: "K. Natesh",
    title: "Executive Director",
    image: "https://www.inkarp.co.in/assets/images/our_team/K.Natesh.jpeg",
    description:
      "Leads all aspects of Inkarp's operations, ensuring cohesive departmental collaboration to deliver exceptional value to customers.",
    linkedin: "https://www.linkedin.com/in/knatesh",
  },
  {
    name: "K. Sreedhar",
    title: "Regional Director (South & East)",
    image: "/images/sreedhar.jpg",
    description:
      "Directs sales efforts across South, East, and Northeast regions, aligning cutting-edge technologies with customer requirements.",
    linkedin: "https://www.linkedin.com/in/ksreedhar",
  },
  {
    name: "M. Madhusudhan",
    title: "Regional Director (North)",
    image: "/images/madhusudhan.jpg",
    description:
      "Heads operations in Northern, Central, and select Eastern regions, specializing in chromatography and precision instrumentation.",
    linkedin: "https://www.linkedin.com/in/mmadhusudhan",
  },
  {
    name: "M. S. Reddy",
    title: "Regional Director (West)",
    image: "/images/reddy.jpg",
    description:
      "Leads sales operations across the Western region, focusing on advanced homogenization and precision laboratory solutions.",
    linkedin: "https://www.linkedin.com/in/msreddy",
  },
  {
    name: "N. Saravanan",
    title: "Chief Operating Officer (All India)",
    image: "/images/saravanan.jpg",
    description:
      "Drives operational success and fosters innovation, emphasizing trust, transparency, and continuous learning across the organization.",
    linkedin: "https://www.linkedin.com/in/nsaravanan",
  },
];

function Team() {
  const [expandedMember, setExpandedMember] = useState(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100 py-24">
      {/* Animated House Background */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center z-0 animate-pulse">
        <img
          src="/images/house-animated.svg"
          alt="House of Inkarp"
          className="w-96 h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setExpandedMember(idx)}
            onMouseLeave={() => setExpandedMember(null)}
            className="relative cursor-pointer p-4 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeIn"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            {/* Normal View */}
            <div className="flex flex-col items-center space-y-3">
              <h3 className="text-center text-md font-semibold text-gray-600">{member.title}</h3>
            </div>

            {/* Hover Expanded View */}
            {expandedMember === idx && (
              <div className="absolute inset-0 flex flex-col items-center justify-start bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-2xl animate-scaleIn text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-red-300 mb-4"
                />
                <h2 className="text-xl font-bold text-red-600">{member.name}</h2>
                <p className="text-sm font-semibold text-gray-700 mb-2">{member.title}</p>
                <p className="text-xs text-gray-500">{member.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Internal Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s forwards;
        }
      `}</style>
    </section>
  );
}

export default Team;
