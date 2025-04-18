import { useState } from "react";
import { Linkedin, Facebook, Instagram, Share2 } from "lucide-react";

const profiles = [
  {
    name: "John Doe",
    title: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Jane Smith",
    title: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Carlos Reyes",
    title: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Sarah Johnson",
    title: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Ali Khan",
    title: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Lisa Wong",
    title: "QA Engineer",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "David Kim",
    title: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Emily Brown",
    title: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Mohammed Ali",
    title: "AI Engineer",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=60",
  },
];

function ProfileCard({ profile }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full max-w-xs bg-red-100 dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden relative flex flex-col justify-between transition-transform duration-300 hover:scale-105">
      <img
        className="object-cover w-[90%] rounded-lg ml-5 mt-5"
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
          className="absolute bottom-4 right-0 z-20"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          {/* Dropdown */}
          <div
            className={`absolute bottom-14 right-0 bg-white dark:bg-gray-700 rounded-lg shadow-md py-2 px-3 space-y-2 z-10 transition-all duration-300 ${showDropdown
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-2 pointer-events-none"
              }`}
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-blue-600 transition-all duration-300 ${showDropdown ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-blue-600 transition-all duration-300 ${showDropdown ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}
            >
              <Facebook size={20} />
            </a>
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

          {/* Share button */}
          <button className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-2xl shadow hover:bg-red-600 transition-transform duration-300 hover:scale-110">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Offerings() {
  return (
    <div className="w-full py-5 flex justify-center">
      <div className="flex flex-wrap gap-4 justify-center items-start">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default Offerings;
