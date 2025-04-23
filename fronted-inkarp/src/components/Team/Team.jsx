import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function Team() {
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
      image: "/images/natesh.jpg",
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

  const cardVariant = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 15px rgba(0,0,0,0.15)",
    },
  };

  const imageVariant = {
    hover: {
      scale: 1.1,
    },
  };

  const iconVariant = {
    hover: {
      scale: 1.2,
      rotate: 10,
    },
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Meet Our Leadership Team
        </h2>

        <div className="space-y-12">
          {/* Chairman & Executive Director */}
          {teamMembers
            .filter((m) =>
              ["Chairman", "Executive Director"].some((t) =>
                m.title.includes(t)
              )
            )
            .map((member, index) => (
              <div key={index} className="flex justify-center">
                <motion.div
                  variants={cardVariant}
                  whileHover="hover"
                  className="bg-white rounded-xl shadow-md p-6 w-full max-w-2xl"
                >
                  <motion.img
                    src={member.image}
                    // alt={member.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                    variants={imageVariant}
                  />
                  <h3 className="text-xl font-semibold text-red-600 font-bold text-xl">{member.name}</h3>
                  <p className="text-sm font-medium text-gray-600 mb-2">{member.title}</p>
                  <p className="text-sm text-gray-700 mb-4">{member.description}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    variants={iconVariant}
                  >
                    <div className='rounded-full bg-red-200 p-2 hover:bg-gray-300 transition duration-300'>
                    <Linkedin size={24} />
                    </div>
                  </a>
                </motion.div>
              </div>
            ))}

          {/* Remaining Team Members (2 per row) */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {teamMembers
              .filter(
                (m) =>
                  !m.title.includes("Chairman") &&
                  !m.title.includes("Executive Director")
              )
              .map((member, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  whileHover="hover"
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <motion.img
                    src={member.image}
                    // alt={member.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                    variants={imageVariant}
                  />
                  <h3 className="text-xl font-semibold text-red-600">{member.name}</h3>
                  <p className="text-sm font-medium text-gray-600 mb-2">{member.title}</p>
                  <p className="text-sm text-gray-700 mb-4">{member.description}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    variants={iconVariant}
                  >
                    <div className='rounded-full bg-red-200 p-2 hover:bg-gray-300 transition duration-300'>
                    <Linkedin size={24} />
                    </div>
                  </a>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
