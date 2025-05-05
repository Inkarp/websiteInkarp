import React, { useRef, useState } from "react";

export default function AboutInkarpSection() {
  const [hovered, setHovered] = useState(false);
  const meanings = [
    "Innovation", "Integrity", "Quality", "Teamwork",
    "Sustainability", "Growth", "Excellence", "Trust",
  ];
  const radius = 160;

  const slides = [
    {
      title: "50+ Principals",
      label: "50+ Principals",
      description: "We partner with over 50 global scientific pioneers...",
    },
    {
      title: "50000+ Customers",
      label: "50000+ Customers",
      description: "Over 50,000 clients — including government labs...",
    },
    {
      title: "10 Awards",
      label: "10 Awards",
      description: "Our pursuit of excellence has earned us 10 prestigious...",
    },
    {
      title: "25+ Branches",
      label: "25+ Branches",
      description: "Inkarp is present in over 25 cities across India...",
    },
    {
      title: "Customer Success",
      label: "Customer Success",
      description: "We measure our success by the success of our clients...",
    },
  ];

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setActiveIndex(newIndex);
  };

  return (
    <div className="w-full flex flex-col items-center py-10 overflow-hidden">
      {/* 🔴 TOP HEADER */}
      {/* <div className="flex flex-col sm:flex-row justify-center items-center mb-10 scale-110">
        <div
          className="relative w-48 sm:w-64 h-14 sm:h-20 text-xl sm:text-2xl font-extrabold bg-red-300 overflow-hidden"
          style={{ transform: "perspective(100px) rotateY(-15deg)", transformOrigin: "right" }}
        >
          <div className="absolute whitespace-nowrap animate-marquee text-red-900 font-[MaxOT]">
            Who Are We
          </div>
        </div>
        <div
          className="relative w-48 sm:w-64 h-14 sm:h-20 text-xl sm:text-2xl font-extrabold bg-red-500 overflow-hidden"
          style={{ transform: "perspective(100px) rotateY(15deg)", transformOrigin: "left" }}
        >
          <div className="absolute whitespace-nowrap animate-marquee text-red-50 font-[MaxOT]">
            About Inkarp
          </div>
        </div>
      </div> */}

      {/* 🔴 TWO COLUMN LAYOUT */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-screen-xl px-6">
        {/* LEFT: CUBE BURST CENTERED TO RIGHT SIDE */}
        <div className="md:w-1/3 w-full flex justify-center md:items-center">
          <div className="relative w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] flex items-center justify-center z-[20]">
            {/* Blurred Circle */}
            <div
              className={`absolute w-full h-full rounded-full transition-all duration-500 ${
                hovered ? "backdrop-blur-sm bg-red-500/20 scale-125" : "scale-100"
              }`}
            ></div>
            {/* Words */}
            {meanings.map((text, index) => {
              const angle = (index / meanings.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              return (
                <div
                  key={index}
                  className={`absolute w-20 sm:w-24 h-20 sm:h-24 bg-red-500 text-white text-xs font-semibold shadow-md rounded-full flex items-center justify-center transition-all duration-500 ${
                    hovered ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                  style={{
                    transform: hovered
                      ? `translate(${x}px, ${y}px)`
                      : "translate(0px, 0px)",
                  }}
                >
                  {text}
                </div>
              );
            })}
            {/* Center Image */}
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-red-100 z-10 shadow-xl cursor-pointer overflow-hidden flex items-center justify-center"
            >
              <img
                src="inkarp.png"
                alt="40+ Years"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: About Cube + Cards stacked vertically */}
        <div className="md:w-2/3 w-full flex flex-col items-center gap-6">
          {/* ✅ MARQUEE CUBE (NOW INSIDE RIGHT) */}
          <div className="flex flex-col sm:flex-row justify-center items-center scale-95">
            <div
              className="relative w-68 sm:w-60 h-14 sm:h-20 text-xl sm:text-2xl font-extrabold bg-red-300 overflow-hidden"
              style={{ transform: "perspective(100px) rotateY(-15deg)", transformOrigin: "right" }}
            >
              <div className="absolute whitespace-nowrap animate-marquee text-red-900 font-[MaxOT]">
                Who Are We
              </div>
            </div>
            <div
              className="relative w-48 sm:w-60 h-14 sm:h-20 text-xl sm:text-2xl font-extrabold bg-red-500 overflow-hidden"
              style={{ transform: "perspective(100px) rotateY(15deg)", transformOrigin: "left" }}
            >
              <div className="absolute whitespace-nowrap animate-marquee text-red-50 font-[MaxOT]">
                About Inkarp
              </div>
            </div>
          </div>

          {/* ✅ Scrollable Cards */}
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="overflow-x-auto snap-x snap-mandatory flex flex-nowrap w-full scrollbar-hide scroll-smooth"
          >
            {slides.map((slide, i) => {
              const zigzag = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="min-w-full snap-start px-4 flex items-center justify-center"
                >
                  <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl flex flex-col p-6 gap-4 items-center justify-start">
                    <div
                      className={`flex flex-col sm:flex-row items-center justify-between gap-6 w-full ${
                        zigzag ? "" : "sm:flex-row-reverse"
                      }`}
                    >
                      <div className="w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] bg-red-500 text-white rounded-full flex items-center justify-center text-center shadow-lg animate-float">
                        <h2 className="text-lg sm:text-2xl font-bold font-[MaxOT]">
                          {slide.label}
                        </h2>
                      </div>
                      <div className="sm:w-[60%] text-gray-700 font-[Roboto] text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-bold text-red-700 font-[MaxOT] mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-3 mt-4">
            {slides.map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border-2 border-red-500 relative"
              >
                <div
                  className={`absolute top-0 left-0 h-full rounded-full bg-red-500 transition-all duration-500 ${
                    index === activeIndex ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔴 Animation Styles */}
      <style>{`
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
