import React, { useState } from "react";

const highlights = [
  {
    title: "40+ Years Experience",
    description: "Serving research, industry, and healthcare since 1985 with trust and commitment."
  },
  {
    title: "50+ Principals",
    description: "Exclusive partnerships with globally recognized scientific brands across sectors."
  },
  {
    title: "50000+ Clients",
    description: "Proudly supporting leading organizations, research institutes, and industries across India."
  },
  {
    title: "10 Prestigious Awards",
    description: "Recognized nationally for excellence in distribution, service, and innovation."
  }
];

const WhyChooseInkarp = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % highlights.length);
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-red-100 via-white to-red-100 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10 animate-pulse bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-red-400 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* Split Box Animation with One Moving Sentence */}
        <div className="flex justify-center items-center mb-16">
          <div className="flex">
            <div className="relative w-[400px] h-[80px] leading-[80px] text-4xl font-extrabold font-sans bg-red-300 overflow-hidden" style={{ transform: "perspective(100px) rotateY(-15deg)", transformOrigin: "right" }}>
              <div className="absolute whitespace-nowrap animate-marquee text-darkred">
                Why Choose Inkarp
              </div>
            </div>
            <div className="relative w-[400px] h-[80px] leading-[80px] text-4xl font-extrabold font-sans bg-red-500 overflow-hidden" style={{ transform: "perspective(100px) rotateY(15deg)", transformOrigin: "left" }}>
              <div className="absolute whitespace-nowrap animate-marquee text-antiquewhite">
                Who Are We
              </div>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="flex justify-center">
          <div
            onClick={handleNext}
            className="group cursor-pointer relative p-10 bg-white/80 backdrop-blur-xl border border-red-200 rounded-3xl shadow-2xl hover:shadow-red-400 transition-transform transform hover:scale-105 animate-slideUp"
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-br from-red-100 to-red-300 opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <h3 className="text-2xl font-bold text-red-700 mb-4 z-10 relative animate-pulse">
              {highlights[current].title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed z-10 relative">
              {highlights[current].description}
            </p>
            <p className="mt-4 text-sm text-red-500">Click to see next</p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(80px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out both;
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseInkarp;