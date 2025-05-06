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
    <div className="w-full max-w-xs bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden relative flex flex-col justify-between hover:z-10 transition-transform duration-100 hover:scale-105">
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
                className="rounded-full bg-red-500 p-2 hover:bg-gray-600 transition-transform duration-200"
              >
                <Icon size={20} color="white" />
              </a>
            ))}
          </div>

          {/* Share Button */}
          {/* <div
            className="bg-black rounded-full p-1 shadow hover:bg-gray-300 hover:scale-110 transition-transform duration-300"
            onMouseEnter={() => setShowDropdown(true)}
          > */}
          <button className="flex items-center justify-center w-12 h-12 rounded-2xl bg-red-100" onMouseLeave={() => setShowDropdown(false)} onMouseEnter={() => setShowDropdown(true)} >
            <Share2 size={20} color="black" />
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

function Offerings() {
  return (
   
     <>
      <h1 className="offering-ribbon-heading">Our Offerings</h1>

      <style>{`
        .offering-ribbon-heading {
          position: relative;
          margin: 2.5rem auto 2rem;
          padding: 1rem 2.5rem;
          max-width: max-content;
          font-family: 'MaxOT';
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          color:white;
          background-color:rgb(158, 13, 25) ;
          // border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          
        }

        .offering-ribbon-heading::before,
        .offering-ribbon-heading::after {
          content: '';
          position: absolute;
          top: 20px;
          width: 80px;
          height: 100%;
          background-color: #e63946;
          z-index: -1;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 25% 50%);
          background-image: linear-gradient(45deg, transparent 50%, #b91c1c 50%);
          background-size: 20px 20px;
          background-repeat: no-repeat;
          background-position: bottom right;
        }

        .offering-ribbon-heading::before {
          left: -60px;
        }

        .offering-ribbon-heading::after {
          right: -60px;
          transform: scaleX(-1);
        }

        @media (max-width: 400px) {
          .offering-ribbon-heading {
            font-size: 1.75rem;
          }
        }
      `}</style>
  


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
