import { useState } from "react";
import {
  Linkedin,
  Facebook,
  Instagram,
  Share2,
  MessageCircle,
  Mail,
} from "lucide-react";

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
    <div className="w-full max-w-xs bg-red-100 dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden relative flex flex-col justify-between hover:z-10 transition-transform duration-100 hover:scale-105">
      <img
        className="object-cover rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:z-10"
        src={profile.image}
        alt={profile.name}
      />

      <div className="py-5 text-center">
        <p className="text-xl font-bold text-gray-800 dark:text-white">
          {profile.name}
        </p>
      </div>

      {/* Share + Icons */}
      <div className="relative flex justify-end p-4">
        <div className="relative flex items-center space-x-2">
          {/* Social Icons */}
          <div
            className={`absolute right-14 flex flex-row-reverse items-center space-x-reverse space-x-2 transition-all duration-300 ${showDropdown
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 -translate-x-5 pointer-events-none"
              }`}
          >
            {[Linkedin, Facebook, Instagram, Mail, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="http://wa.me/8019828999"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-800 p-2 hover:bg-gray-600 transition-transform duration-200"
              >
                <Icon size={20} color="white" />
              </a>
            ))}
          </div>

          {/* Share Button */}
          <div
            className="bg-white rounded-full p-1 shadow hover:bg-gray-300 hover:scale-110 transition-transform duration-300"
            onMouseEnter={() => setShowDropdown(true)}
          >
            <button className="flex items-center justify-center w-12 h-12 rounded-2xl" onMouseLeave={() => setShowDropdown(false)} >
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
    <>
      <h1 className="mt-10 px-4 sm:px-6 md:px-10 py-3 mx-auto max-w-3xl rounded-full bg-red-100 shadow-lg text-red-500 text-3xl/3 sm:text-4xl md:text-5xl font-bold text-center mb-6" style={{ fontFamily: 'MaxOT' }}>
        Our Offerings
      </h1>
      <div className="w-full py-5 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Offerings;
