// TeamFloatingReveal.jsx


const teamMembers  = [
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

// TeamMagneticBlob.jsx
import { useState } from "react";
import { MotionDiv, MotionImage } from "../../utils/MotionWrapper";

function Team() {
  const [expandedMember, setExpandedMember] = useState(null);

  // const teamMembers = [/*... your team data ...*/];

  return (
    <section className="relative bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setExpandedMember(idx)}
            onMouseLeave={() => setExpandedMember(null)}
            className="relative cursor-pointer p-4 bg-white rounded-xl shadow-md"
          >
            <h3 className="text-center text-lg font-bold">{member.title}</h3>

            {expandedMember === idx && (
              <MotionDiv
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute top-0 left-0 w-full h-full bg-white z-10 rounded-xl flex flex-col items-center justify-center p-6 shadow-2xl"
              >
                <MotionImage
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-3"
                />
                <h2 className="text-xl font-bold text-red-600">{member.name}</h2>
                <p className="text-sm text-gray-700 mb-2">{member.title}</p>
                <p className="text-xs text-center text-gray-500">{member.description}</p>
              </MotionDiv>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


export default Team;

