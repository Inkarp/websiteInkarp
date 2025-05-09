import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Pavan Kumar",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b4?fit=crop&w=500&h=500&q=80",
    linkedin: "#"
  },
  {
    name: "Sharath Reddy",
    role: "Lead UX Designer",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b4?fit=crop&w=500&h=500&q=80",
    linkedin: "#"
  },
  {
    name: "Mellabri Singh",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b4?fit=crop&w=500&h=500&q=80",
    linkedin: "#"
  },
  {
    name: "Tuan Nguyen",
    role: "Data Analyst",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b4?fit=crop&w=500&h=500&q=80",
    linkedin: "#"
  },
  {
    name: "Annie Spratt",
    role: "Content Manager",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b4?fit=crop&w=500&h=500&q=80",
    linkedin: "#"
  },
  {
    name: "Soberanes Lee",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b4?fit=crop&w=500&h=500&q=80",
    linkedin: "#"
  }
];

export default function TeamGallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {teamMembers.map((member, index) => (
          <figure
            key={index}
            className="relative w-[120px] sm:w-[140px] group overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[100px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute bottom-0 w-full bg-white/80 backdrop-blur-sm px-2 py-1 text-[10px] text-gray-800 transition-all duration-500 max-h-[36px] group-hover:max-h-full overflow-hidden">
              <h2 className="font-semibold truncate">{member.name}</h2>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <p className="mt-1 font-medium">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 mt-1 text-blue-700 hover:underline"
                >
                  <FaLinkedin className="text-sm" /> LinkedIn
                </a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
