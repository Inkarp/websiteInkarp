import React from "react";

function OurCompanies() {
  return (
    <section className="bg-white dark:bg-gray-900 shadow-xl rounded-lg w-[96%] mx-auto mt-10">
      <div className="container px-4 py-10 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Our Group Companies
        </h2>

        <div className="max-w-screen-xl mx-auto mt-10 flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* Left Side - 3 Images with animation from left */}
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

          {/* Right Side - 2 Images with animation from right */}
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

      <style jsx>{`
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
      `}</style>
    </section>
  );
}

export default OurCompanies;
