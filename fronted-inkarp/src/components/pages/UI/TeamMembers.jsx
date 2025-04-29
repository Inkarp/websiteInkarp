import React from "react";

const members = [
  { name: "Alice Johnson", quote: "Believe in yourself", icon: "fa-user-circle" },
  { name: "Bob Smith", quote: "Keep pushing forward", icon: "fa-user-circle" },
  { name: "Charlie Rose", quote: "Dream big", icon: "fa-user-circle" },
  { name: "Diana Prince", quote: "Stay positive", icon: "fa-user-circle" },
  { name: "Edward Norton", quote: "Work hard in silence", icon: "fa-user-circle" },
  { name: "Fiona Gallagher", quote: "Turn dreams into reality", icon: "fa-user-circle" },
  { name: "George King", quote: "Never settle", icon: "fa-user-circle" },
  { name: "Hannah Miles", quote: "Consistency wins", icon: "fa-user-circle" },
  { name: "Ian Wright", quote: "One step at a time", icon: "fa-user-circle" },
  { name: "Julia Adams", quote: "Create your own path", icon: "fa-user-circle" },
];

const TeamMembers = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-64 bg-white rounded-xl overflow-hidden shadow-md group transition-all duration-500 ease-in-out hover:h-72 h-48 flex flex-col items-center justify-center cursor-pointer"
          >
            {/* Icon */}
            <div className="text-blue-600 text-6xl mb-4">
              <i className={`fa ${member.icon}`}></i>
            </div>
            {/* Name and Quote (Hidden Initially) */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-500 mt-2">{member.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
