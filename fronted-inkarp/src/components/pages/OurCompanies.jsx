import React from "react";

function OurCompanies() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background and Moving Panel */}
      <div className="moving-panel"></div>

      {/* Static Card */}
      <div className="relative z-10  
       backdrop-blur-sm shadow-xl 
      rounded-lg w-[96%] mx-auto mt-5 p-8">
        <div className="container px-4 py-10 mx-auto text-center animate-zoomOnMove">
          {/* Only this inner content zooms */}

          {/* Animated Title */}
          <div className="flex justify-center items-center">
            <h2 className="flex flex-wrap text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-10 text-center font-[MaxOT] bg-red-200 px-5 py-4 rounded-xl">
              {"Our Group Companies".split("").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-wave"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h2>
          </div>

          {/* Logos */}
          <div className="max-w-screen-xl mx-auto mt-10 flex flex-col lg:flex-row justify-center items-center gap-10">
            {/* Left Side */}
            <div className="flex flex-col items-center gap-3 animate-slideInLeft">
              <div className="flex flex-wrap justify-center gap-6">
                <img src="https://www.inkarp.co.in/assets/images/sparksci.png" alt="Subsidiary 1" className="w-32 sm:w-36 md:w-40 h-auto" />
                <img src="https://www.inkarp.co.in/assets/images/inkarp-instrumental-services.png" alt="Subsidiary 2" className="w-32 sm:w-36 md:w-40 h-auto" />
                <img src="https://www.inkarp.co.in/assets/images/inkarp-telecom.png" alt="Subsidiary 3" className="w-32 sm:w-36 md:w-40 h-auto" />
              </div>
              <div className="font-semibold text-xl text-red-800 mt-3 text-center">
                100% Owned Subsidiaries
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-36 bg-red-500" />

            {/* Right Side */}
            <div className="flex flex-col items-center gap-3 animate-slideInRight">
              <div className="flex flex-wrap justify-center gap-6">
                <img src="inkarp old.svg" alt="Joint Venture 1" className="w-32 sm:w-36 md:w-40 h-auto" />
                <img src="inkarp old.svg" alt="Joint Venture 2" className="w-32 sm:w-36 md:w-40 h-auto" />
              </div>
              <div className="font-semibold text-xl text-red-800 mt-3 text-center">
                Our Joint Ventures
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        .moving-panel {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 300px;
          height: 100%;
          background: url('https://www.inkarp.co.in/assets/images/inkarp-building.png');
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: 110%;
          box-shadow: 20px 0 100px rgba(0,0,0,0.2),
                      -20px 0 100px rgba(0,0,0,0.2);
          animation: animatePanel 5s ease-in-out infinite;
          z-index: 5;
        }

        @keyframes animatePanel {
          0%, 100% {
            left: 0;
          }
          50% {
            left: calc(100% - 300px);
          }
        }

        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }

        /* Zoom animation only on inner content */
        @keyframes zoomOnMove {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-zoomOnMove {
          animation: zoomOnMove 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default OurCompanies;
