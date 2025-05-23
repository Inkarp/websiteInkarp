import React from 'react';
import { CalendarDays } from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: "Accelerate Process Development & Enhance Process Knowledge",
    description:
      "Join us as Procos, a leading Italian CDMO, shares 3 powerful case studies showcasing how the Chemspeed Autoplant Prores platform is transforming pharmaceutical R&D.",
    learnings: [
      "Solving hydrogenolysis reproducibility for 3 MT scale-up",
      "Boosting process robustness with multivariate analysis",
      "Running parallel experiments = higher productivity",
    ],
    date1: "May 15 | 12:30 PM IST",
    date2: "May 15 | 08:30 PM IST",
    registerLink: "#",
    image: "https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg",
  },
   {
    id: 2,
    title: "Accelerate Process Development & Enhance Process Knowledge",
    description:
      "Join us as Procos, a leading Italian CDMO, shares 3 powerful case studies showcasing how the Chemspeed Autoplant Prores platform is transforming pharmaceutical R&D.",
    learnings: [
      "Solving hydrogenolysis reproducibility for 3 MT scale-up",
      "Boosting process robustness with multivariate analysis",
      "Running parallel experiments = higher productivity",
    ],
    date1: "May 15 | 12:30 PM IST",
    date2: "May 15 | 08:30 PM IST",
    registerLink: "#",
    image: "https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg",
  },
   {
    id: 3,
    title: "Accelerate Process Development & Enhance Process Knowledge",
    description:
      "Join us as Procos, a leading Italian CDMO, shares 3 powerful case studies showcasing how the Chemspeed Autoplant Prores platform is transforming pharmaceutical R&D.",
    learnings: [
      "Solving hydrogenolysis reproducibility for 3 MT scale-up",
      "Boosting process robustness with multivariate analysis",
      "Running parallel experiments = higher productivity",
    ],
    date1: "May 15 | 12:30 PM IST",
    date2: "May 15 | 08:30 PM IST",
    registerLink: "#",
    image: "https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg",
  },
];

const WebinarCard = ({ title, description, learnings, date1, date2, registerLink, image }) => (
  <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden flex flex-col md:flex-row transition duration-300">
    <img
          src="inkarp old.png"
          alt="Chemspeed Logo"
          className="h-6"
        />
    <div className="md:w-1/3 p-4 flex items-center justify-center">
      <img src={image} alt={title} className="rounded-xl border-2 border-red-500 p-2 max-h-64 object-contain" />
    </div>
    <div className="md:w-2/3 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <div>
        <p className="font-semibold mb-1">What you’ll learn:</p>
        <ul className="list-decimal list-inside text-sm text-gray-800 space-y-1 mb-4">
          {learnings.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 text-sm text-gray-800 mb-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          <span>{date1}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          <span>{date2}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={registerLink}
          className="inline-block px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-medium"
        >
          Register Here →
        </a>
        
      </div>
    </div>
  </div>
);

const WebinarsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-[url('https://www.inkarp.co.in/assets/images/webinar-banner.jpg')] bg-cover bg-center h-[400px] relative">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Empowering Labs Through Knowledge</h1>
          <p className="text-lg max-w-2xl text-center">Join our expert-led webinars on lab technologies, automation, and research advancements.</p>
          <a href="#upcoming" className="mt-5 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">View Upcoming Webinars</a>
        </div>
      </div>

      {/* Filter & Subscribe CTA */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0 text-center lg:text-left">
          <p className="text-sm text-gray-600">Use filters to explore by topic, time or speaker. Subscribe to get updates.</p>
        </div>
        <div className="flex items-center gap-4">
          <input type="email" placeholder="Your Email" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Subscribe</button>
        </div>
      </div>

      {/* Webinar Cards */}
      <div id="upcoming" className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Webinars</h2>
        {webinars.map((webinar) => (
          <WebinarCard key={webinar.id} {...webinar} />
        ))}
      </div>
    </div>
  );
};

export default WebinarsPage;
