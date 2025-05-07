import React, { useEffect, useRef, useState } from "react";

export default function AboutInkarpSection() {
  const slides = [
    {
      title: "50+ Principals",
      description: "We partner with over 50 global scientific pioneers...",
    },
    {
      title: "50000+ Customers",
      description: "Over 50,000 clients — including government labs...",
    },
    {
      title: "10 Awards",
      description: "Our pursuit of excellence has earned us 10 prestigious...",
    },
    {
      title: "13+ Branches",
      description: "Inkarp is present in over 13+ cities across India...",
    },
    {
      title: "Customer Success",
      description: "We measure our success by the success of our clients...",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds interval

    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 md:px-10 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl gap-10 relative">
        {/* Circle Image */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl flex-shrink-0 z-0">
          <img
            src="inkarp.png"
            alt="About Inkarp"
            className="w-full h-full object-cover rounded-full border-[6px] border-red shadow-inner"
          />
        </div>

        {/* Auto Sliding Card */}
        <div className="relative flex flex-col z-10 -mt-5 md:mt-0 md:-ml-20 w-[90vw] md:w-[500px] ">
          <div className="relative h-[200px] sm:h-[220px] overflow-hidden ">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                }`}
              >
                <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-red-700 font-[MaxOT] mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-700 font-[Roboto]">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full border-2 border-red-500 ${
                  i === activeIndex ? "bg-red-500" : "bg-transparent"
                } transition-all duration-300`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
