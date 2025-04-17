import { useState } from "react";
import { Linkedin, Facebook, Instagram, Share2 } from "lucide-react";


// Array of profile data
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

// Individual profile card
function ProfileCard({ profile }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 relative">
      <img
        className="object-cover w-full h-56"
        src={profile.image}
        alt={profile.name}
      />
      <div className="py-5 text-center">
        <a
          href="#"
          className="block text-xl font-bold text-gray-800 dark:text-white"
        >
          {profile.name}
        </a>
        <span className="text-sm text-gray-700 dark:text-gray-200">
          {profile.title}
        </span>
      </div>

      {/* Button and Dropdown */}
      <div className="flex justify-center pb-4">
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="px-4 py-4 bg-red-500 text-white rounded-full shadow hover:bg-blue-700 transition">
          <Share2 />
          </button>

          {isHovered && (
            <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-700 rounded-lg shadow-md py-2 px-4 space-y-2 z-10">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-blue-600"
              >
                <Linkedin size={20} /> 
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-blue-600"
              >
                <Facebook size={20} /> 
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-blue-600"
              >
                <Instagram size={20} /> 
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Parent component that maps over all profiles
function Offerings() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
}

export default Offerings;
