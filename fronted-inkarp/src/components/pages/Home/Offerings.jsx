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
    description:
      "Developing innovative therapies to address unmet medical needs and improve patient outcomes.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Analytical Chemistry and Chromotography Solutions",
    description:
      "Developing innovative therapies to address unmet medical needs and improve patient outcomes.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Analytical Chemistry and Weighing",
    description:
      "Developing innovative therapies to address unmet medical needs and improve patient outcomes.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Material Science and Battery",
    description:
      "Developing innovative therapies to address unmet medical needs and improve patient outcomes.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Pilot Plants and Automation ",
    description:
      "Developing innovative therapies to address unmet medical needs and improve patient outcomes.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Lifesciences",
    description:
      "Developing innovative therapies to address unmet medical needs and improve patient outcomes.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Extrusion and Homogenization",
    description:
      "Developing innovative therapies to address unmet medical needs and improve patient outcomes.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Rheology and Thermal Analysis",
    description:
      "Developing innovative therapies to address unmet medical needs and improve patient outcomes.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "General Laboratory Instruments",
    description:
      "Developing innovative therapies to address unmet medical needs and improve patient outcomes.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
];


// ✅ Card Component
function ProfileCard({ profile }) {
  const [showIcons, setShowIcons] = useState(false);
  const { linkedin, facebook, instagram, mail, whatsapp } = profile.socials || {};

  const socialLinks = [
    { icon: Linkedin, url: linkedin },
    { icon: Facebook, url: facebook },
    { icon: Instagram, url: instagram },
    { icon: Mail, url: mail },
    { icon: MessageCircle, url: whatsapp },
  ].filter(link => link.url); // Only valid links

  return (
    <div className="w-full max-w-xs rounded-3xl shadow-xl overflow-hidden bg-white hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      {/* Top black section */}
      <div className="bg-white text-black h-[160px] p-5 flex flex-col justify-center items-center ">
        <h3 className="text-lg font-bold font-[MaxOT] p-2">{profile.name}</h3>
        <p className="text-sm leading-relaxed font-[Roboto] ">{profile.description}</p>
      </div>

      {/* Image with share button inside */}
      <div className="relative w-full h-[220px]">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
        />

        {/* Share Button and Icons */}
        {socialLinks.length > 0 && (
          <div className="absolute bottom-3 right-3">
            <div className="relative">
              <button
                className="w-10 h-10 rounded-full bg-white hover:bg-red-100 flex items-center justify-center shadow-md"
                onMouseEnter={() => setShowIcons(true)}
                onMouseLeave={() => setShowIcons(false)}
              >
                <Share2 size={18} color="black" />
              </button>

              <div
                className={`absolute right-12 top-1/2 transform -translate-y-1/2 flex gap-2 transition-all duration-300 ${
                  showIcons ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {socialLinks.map(({ icon: Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-red-500 p-2 hover:bg-black transition-all"
                  >
                    <Icon size={18} color="white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ✅ Main Export Component
export default function Offerings() {
  return (
    <>
      <h1 className="offering-ribbon-heading">Our Offerings</h1>

      {/* Ribbon Style */}
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
          color: black;
          background-color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
        }
        .offering-ribbon-heading::before,
        .offering-ribbon-heading::after {
          content: '';
          position: absolute;
          top: 20px;
          width: 80px;
          height: 100%;
          background-color: white;
          z-index: -1;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 25% 50%);
          background-image: linear-gradient(45deg, transparent 50%, black 50%);
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

      {/* Grid Layout */}
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

