import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { ArrowUpRight } from "lucide-react";
import CareersForm from "./CareersForm";

const team = [
  {
    name: "Raj Kumar",
    quote: "Inkarp isn’t just a workplace — it’s where passion meets purpose.",
    img: "https://source.unsplash.com/featured/?portrait,business",
  },
  {
    name: "Sneha Iyer",
    quote: "You’re encouraged to grow — not just in role, but in vision.",
    img: "https://source.unsplash.com/featured/?woman,leader",
  },
];

const steps = [
  { title: "Discover", desc: "Explore roles that match your passion." },
  { title: "Apply", desc: "Send in your resume or drop a message." },
  { title: "Connect", desc: "Have a conversation with our team." },
  { title: "Grow", desc: "Start your journey with Inkarp." },
];

export default function NewCareers() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gray-50 text-gray-800 mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-100 via-white to-blue-100 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            "We don't hire people to fill roles — we hire people to shape the future."
          </h1>
          <p className="text-lg text-gray-600">
            Join a team that thrives on innovation, trust, and impact.
          </p>
          <Link to='/careers/positions' className="mt-4 px-6 py-3 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition">
            View Open Positions
          </Link>
          {/* <img
            src="https://source.unsplash.com/featured/"
            alt="Careers at Inkarp"
            className="mt-10 rounded-xl shadow-lg w-full max-h-96 object-cover"
          /> */}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          Your Journey Starts Here 🚀
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 border-l-4 border-red-500 bg-red-50 rounded-lg w-72 shadow-lg">
              <h3 className="text-xl font-semibold text-red-600">{step.title}</h3>
              <p className="text-gray-700 mt-2">{step.desc}</p>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 right-[-35px] hidden md:block">
                  <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Team Voices Section */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Voices from the Team 🎧</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg max-w-sm text-center">
              {/* <img
                src={member.img}
                alt={member.name.toLocaleUpperCase}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              /> */}
              <p className="italic text-gray-600">"{member.quote}"</p>
              <h3 className="mt-4 font-semibold text-gray-900">{member.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <CareersForm />
    </div>
  );
}
