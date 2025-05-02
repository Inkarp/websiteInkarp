import React, { useRef, useState } from "react";

const slides = [
  {
    type: "hero",
    title: "About Inkarp",
    description:
      "Inkarp Instruments Pvt Ltd, established in 1985, is a pioneer in delivering end-to-end scientific solutions across India. We have carved our niche as a reliable partner in life sciences, diagnostics, and research domains. With our unwavering commitment to quality, we empower institutions with innovative products, personalized service, and technical expertise.",
    image: "inkarp.png"
  },
  {
    title: "50+ Principals",
    label: "50+ Principals",
    description:
      "We partner with over 50 global scientific pioneers, offering state-of-the-art technologies and equipment in India. Our principals are market leaders in diagnostics, molecular biology, genomics, proteomics, and medical research."
  },
  {
    title: "50000+ Customers",
    label: "50000+ Customers",
    description:
      "Over 50,000 clients — including government labs, hospitals, research centers, and educational institutions — rely on Inkarp. We support every research journey with trust, service reliability, and scientific insight."
  },
  {
    title: "10 Awards",
    label: "10 Awards",
    description:
      "Our pursuit of excellence has earned us 10 prestigious national and international awards for service, innovation, and sustainability. These accolades drive us to keep innovating."
  },
  {
    title: "25+ Branches",
    label: "25+ Branches",
    description:
      "Inkarp is present in over 25 cities across India. Our pan-India presence enables localized support, fast delivery, and demo labs that offer hands-on experience for customers."
  },
  {
    title: "Customer Success",
    label: "Customer Success",
    description:
      "We measure our success by the success of our clients. From installation to after-sales support, we deliver experiences that simplify science and accelerate outcomes."
  }
];

export default function NewAbout() {
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
    <div className="w-screen overflow-hidden">
      {/* Scroll Section */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="overflow-x-auto snap-x snap-mandatory flex flex-nowrap w-screen h-[450px] scrollbar-hide scroll-smooth"
      >
        {slides.map((slide, i) => {
          const isHero = slide.type === "hero";
          const zigzag = i % 2 === 0;

          return (
            <div
              key={i}
              className="min-w-full snap-start flex items-center justify-center"
            >
              <div className="bg-white max-w-[1100px] w-full rounded-2xl shadow-xl flex flex-col p-6 gap-6 h-auto items-center justify-start">
                {/* Cube Header */}
                <div className="flex flex-col sm:flex-row justify-center items-center mb-4">
                  <div
                    className="relative w-[220px] sm:w-[250px] h-[60px] sm:h-[80px] leading-[60px] sm:leading-[80px] text-lg sm:text-2xl font-extrabold bg-red-300 overflow-hidden"
                    style={{
                      transform: "perspective(100px) rotateY(-15deg)",
                      transformOrigin: "right"
                    }}
                  >
                    <div className="absolute whitespace-nowrap animate-marquee text-red-900 font-[MaxOT]">
                      Who Are We
                    </div>
                  </div>
                  <div
                    className="relative w-[220px] sm:w-[250px] h-[60px] sm:h-[80px] leading-[60px] sm:leading-[80px] text-lg sm:text-2xl font-extrabold bg-red-500 overflow-hidden"
                    style={{
                      transform: "perspective(100px) rotateY(15deg)",
                      transformOrigin: "left"
                    }}
                  >
                    <div className="absolute whitespace-nowrap animate-marquee text-red-50 font-[MaxOT]">
                      About Inkarp
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                {isHero ? (
                  <div className="flex flex-col lg:flex-row gap-6 items-center justify-between w-full">
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                      <h2 className="text-3xl font-bold text-red-700 font-[MaxOT]">{slide.title}</h2>
                      <p className="text-gray-700 text-base font-[Roboto]">{slide.description}</p>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                      <img
                        src={slide.image}
                        alt="Inkarp Hero"
                        className="rounded-lg bg-red-100 shadow-md max-h-[280px] w-auto object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className={`flex flex-row items-center justify-between gap-8 w-full ${zigzag ? "" : "flex-row-reverse"}`}>
                    {/* Bubble */}
                    <div className="w-[220px] h-[220px] bg-red-500 text-white rounded-full flex items-center justify-center flex-col text-center shadow-lg animate-float">
                      <h2 className="text-xl sm:text-2xl font-bold font-[MaxOT]">{slide.label}</h2>
                    </div>
                    {/* Right-aligned text with limited width */}
                    <div className={`lg:w-[60%] text-gray-700 font-[Roboto] ${zigzag ? "text-right" : "text-left"}`}>
                      <h3 className="text-xl font-bold text-red-700 font-[MaxOT] mb-2">{slide.title}</h3>
                      <p className="text-base leading-relaxed max-w-[95%]">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-3 mt-6">
        {slides.map((_, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-full border-2 border-red-500 relative"
          >
            <div
              className={`absolute top-0 left-0 h-full rounded-full bg-red-500 transition-all duration-500 ${index === activeIndex ? "w-full" : "w-0"}`}
            ></div>
          </div>
        ))}
      </div>

      {/* Styles */}
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
