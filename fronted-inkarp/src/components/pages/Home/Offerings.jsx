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
    description: "Innovating scalable synthesis pathways and continuous flow technologies for precise, efficient chemical development.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    icon: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Analytical Chemistry and Chromatography",
    description: "Delivering precise analytical instrumentation to ensure peak resolution and unmatched data reproducibility.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    icon: "https://cdn-icons-png.flaticon.com/512/3458/3458573.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Material Science and Battery Research",
    description: "Advanced material characterization and thermal analysis tools for energy storage, semiconductors, and polymers.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    icon: "https://cdn-icons-png.flaticon.com/512/3003/3003984.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Pilot Plants and Automation",
    description: "Designing and implementing pilot-scale automation for chemical and pharmaceutical scale-ups.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    icon: "https://cdn-icons-png.flaticon.com/512/2622/2622904.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  {
    name: "Life Sciences",
    description: "Empowering biological breakthroughs with cutting-edge cell analysis, imaging, and molecular biology platforms.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    icon: "https://cdn-icons-png.flaticon.com/512/2702/2702602.png",
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
    description: "Delivering high-pressure homogenization and extrusion equipment for nanoemulsions, dispersions, and formulations.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    icon: "https://cdn-icons-png.flaticon.com/512/4290/4290854.png",
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
    description: "Measuring material behavior and thermal properties with precision rheometers and calorimeters.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    icon: "https://cdn-icons-png.flaticon.com/512/3469/3469182.png",
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
    description: "From pH meters to water purification – your everyday research essentials under one roof.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    icon: "https://cdn-icons-png.flaticon.com/512/3050/3050034.png",
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
    description: "From pH meters to water purification – your everyday research essentials under one roof.",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
    icon: "https://cdn-icons-png.flaticon.com/512/3050/3050034.png",
    socials: {
      linkedin: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd",
      facebook: "https://www.facebook.com/InkarpInstruments/",
      instagram: "https://www.instagram.com/inkarp.instruments/",
      mail: "mailto:support@inkarp.com",
      whatsapp: "https://wa.me/918019828999",
    },
  },
  
];

function ProfileCard({ profile }) {
  const [showIcons, setShowIcons] = useState(false);
  const { linkedin, facebook, instagram, mail, whatsapp } = profile.socials || {};

  const socialLinks = [
    { icon: Linkedin, url: linkedin },
    { icon: Facebook, url: facebook },
    { icon: Instagram, url: instagram },
    { icon: Mail, url: mail },
    { icon: MessageCircle, url: whatsapp },
  ].filter(link => link.url);

  return (
    <div className="w-full max-w-xs rounded-3xl shadow-xl overflow-hidden bg-white hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      <div className="bg-white text-black h-[200px] p-5 flex flex-col justify-center items-start relative group">
  <div className="flex items-center mb-3">
    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shadow-md">
      <img src={profile.icon} alt="icon" className="w-7 h-7 object-contain" />
    </div>
    <h3 className="text-lg font-bold font-[MaxOT] pl-3">{profile.name}</h3>
  </div>
  <hr className="w-full border-t-[1.5px] border-gray-300 group-hover:border-red-500 transition-all duration-300 mb-2" />
  <p className="text-sm leading-relaxed font-[Roboto]">{profile.description}</p>
</div>


      <div className="relative w-full h-[220px]">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
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

export default function Offerings() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="text-center mb-6">
          <button className="px-4 py-1 text-sm font-semibold border border-[#be0010] text-black rounded-full mb-4">
            What are our Offerings
          </button>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            We Advise You to Make <br /> the Right Decision
          </h2>
        </div>
      <div className="w-full py-5 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>    
    </div>
  );
}
