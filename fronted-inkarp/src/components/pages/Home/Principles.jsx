import React from 'react';

const logos = Array.from({ length: 46 }).map((_, i) => ({
  src: "inkarp old.svg", // Replace with actual logo path
  link: `https://www.inkarp.co.in/principal${i + 1}`,
}));

export default function Principles() {
  const rows = 7;

  return (
    <div className="relative bg-[#f6ebf0] py-10 overflow-hidden">
      <h1 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 mb-6 font-[MaxOT]">
        Global Partnership with Leading Brands{" "}
        <span className="text-[#af2d58]">46+ top principals</span>
      </h1>

      {[...Array(rows)].map((_, rowIndex) => (
        <div key={rowIndex} className="relative overflow-hidden group my-4">
          <div
            className={`scroll-row ${
              rowIndex % 2 === 0 ? "scroll-left" : "scroll-right"
            } group-hover:paused flex w-max space-x-10`}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <a
                key={`row${rowIndex}-${idx}`}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/logo block"
              >
                <img
                  src={logo.src}
                  alt={`Principal ${idx + 1}`}
                  className="h-10 sm:h-12 object-contain relative z-10"
                />
                <span className="overlay"></span>
              </a>
            ))}
          </div>

          {/* Darker Gradient Shadows */}
          <div className="absolute top-0 left-0 w-24 h-full z-20 bg-gradient-to-r from-[#f6ebf0] via-[#f6ebf0] to-[#8a1f41]/80 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-full z-20 bg-gradient-to-l from-[#f6ebf0] via-[#f6ebf0] to-[#8a1f41]/80 pointer-events-none" />
        </div>
      ))}

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .scroll-left {
          animation: scroll-left 200s linear infinite;
        }
        .scroll-right {
          animation: scroll-right 100s linear infinite;
        }

        .paused {
          animation-play-state: paused !important;
        }
        .group:hover .group-hover\\:paused {
          animation-play-state: paused !important;
        }

        .group\\/logo {
          position: relative;
          display: inline-block;
        }
        .group\\/logo .overlay {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(175, 45, 88, 0.25);
          z-index: 5;
          transition: top 0.4s ease;
        }
        .group\\/logo:hover .overlay {
          top: 0;
        }
      `}</style>
    </div>
  );
}
