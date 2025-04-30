import React from "react";

const cardData = [
  {
    title: "40 + Years",
    description: "Experience in scientific solutions across India."
  },
  {
    title: "50 + Principals",
    description: "Trusted global brands in partnership."
  },
  {
    title: "50000 + Clients",
    description: "Institutions, hospitals, and labs served nationwide."
  },
  {
    title: "10 Awards",
    description: "Recognized for excellence in innovation and service."
  }
];

export default function NewAbout() {
  return (
    <div className="flex flex-col items-center justify-center w-[96%] bg-red-100 space-y-6 mx-auto py-10">
      {/* 3D Cube Split Animation Heading */}
      <div className="flex justify-center items-center">
        {/* 3D Heading */}
        <div className="flex flex-col sm:flex-row">
          <div
            className="relative w-[250px] sm:w-[280px] h-[60px] sm:h-[80px] leading-[60px] sm:leading-[80px] text-xl sm:text-3xl font-extrabold font-sans bg-red-300 overflow-hidden"
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
            className="relative w-[250px] sm:w-[280px] h-[60px] sm:h-[80px] leading-[60px] sm:leading-[80px] text-xl sm:text-3xl font-extrabold font-sans bg-red-500 overflow-hidden"
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
      </div>

      {/* Main Grid Section */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center w-full max-w-7xl gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
          <div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-[Roboto]">
              Our mission is to become a one stop solution for all research
              solutions, we are developing a holistic platform that integrates
              the supply of high-quality products, installation support, and
              reliable after-sales support. We are currently focusing on
              providing technologically advanced after-sales support with the
              best-in-class trained engineers to guarantee that your research
              requirements are dealt on time. As Inkarp, we are doing all we can
              to analyse the evolution of science and enable our customers in
              simplifying their application requirements.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 group relative px-4">
          <div className="grid grid-cols-2 gap-4 relative max-w-[460px] mx-auto transition-all duration-500">
            {cardData.map((card, i) => (
              <div
                key={i}
                className={`card card-${i + 1} flex flex-col items-center justify-center text-center text-white bg-red-500 rounded-xl p-4 sm:p-6 transition-all duration-500`}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 font-[MaxOT]">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base font-[Roboto]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Hover Styles and Animations */}
          <style>{`
            .card {
              height: 160px;
              width: 160px;
            }

            @media (min-width: 640px) {
              .card {
                height: 200px;
                width: 200px;
              }
            }

            .group:hover .card-1 {
              transform: translate(20px, 20px);
            }
            .group:hover .card-2 {
              transform: translate(-20px, 20px);
            }
            .group:hover .card-3 {
              transform: translate(20px, -20px);
            }
            .group:hover .card-4 {
              transform: translate(-20px, -20px);
            }

            .group:hover .card {
              width: 180px;
              height: 180px;
            }

            @media (min-width: 640px) {
              .group:hover .card {
                width: 220px;
                height: 220px;
              }
            }

            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }

            .animate-marquee {
              animation: marquee 10s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
