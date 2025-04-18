import { useState } from "react";
import { Linkedin, Facebook, Instagram, Share2 } from "lucide-react";

const profiles = [
  {
    name: "Synthesis and Flow Chemistry", 
   
    image:
      "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Analytical Chemistry and Chromotography Solutions",
   
    
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Analytical Chemistry and Weighing",
   
    
    image:
      "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Material Science and Battery",
   
    
    image:
      "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Pilot Plants and Automation ",
   
    image:
      "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Lifesciences",
   
    image:
      "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Extrusion and Homogenization",
   
    
    image:
      "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Rheology and Thermal Analysis",
   
    
    image:
      "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "General Laboratory Instruments",
   
    
    image:
      "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
];

function ProfileCard({ profile }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full max-w-xs bg-red-100 dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden relative flex flex-col justify-between hover:z-10 transition-transform duration-100 hover:scale-105">
      <img
        className="object-cover rounded-lg  transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:z-10"
        src={profile.image}
        alt={profile.name}
      />

      <div className="py-5 text-center">
        <p className="text-xl font-bold text-gray-800 dark:text-white">
          {profile.name}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          {profile.title}
        </p>
      </div>

      <div className="relative h-14">
        <div
          className="absolute bottom-0 right-0 z-20"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          {/* Dropdown */}
          <div
            className={`absolute bottom-14 right-2 dark:bg-gray-700 rounded-lg  py-2 px-3 space-y-2 z-10 transition-all duration-300 ${showDropdown
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-2 pointer-events-none"
              }`}
          >
            <div className="bg-gray-500 rounded-full bg-blue-800 p-2 ">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-blue-600 transition-all duration-300 ${showDropdown ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
            >
              <Linkedin size={20} color="black" />
            </a>
            </div>
            <div className="bg-gray-500 rounded-full bg-blue-800 p-2 ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-blue-600 transition-all duration-300 ${showDropdown ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
            >
              <Facebook size={20} />
            </a>
            </div>
            <div className="bg-gray-500 rounded-full bg-blue-800 p-2 ">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-pink-500 transition-all duration-300 ${showDropdown ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
            >
              <Instagram size={20} />
            </a>
            </div>
          </div>

          {/* Share button */}
          <div className="bg-gray-500 rounded-full bg-white p-2 ">
          <button className="flex items-center justify-center w-12 h-12 rounded-2xl transition-transform duration-300 hover:scale-110">
            <Share2 size={20} color="black" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Offerings() {
  return (
    <div className="w-full py-5 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
}


export default Offerings;
