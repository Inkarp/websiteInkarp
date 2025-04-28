import React from "react";

function Clients() {
  return (
    <section className="bg-white dark:bg-gray-900 shadow-xl rounded-lg w-[96%] mx-auto">
      <div className="container px-4 py-10 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Trusted By
        </h2>

        <div className="max-w-screen-xl mx-auto mt-10 flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* Left Side - 3 Images with animation from left */}
          <div className="flex flex-col items-center gap-3 animate-slideInLeft">
            <div className="flex flex-wrap justify-center gap-6">
              <img src="inkarp old.svg" alt="Client 1" className="w-32 sm:w-36 md:w-40 h-auto" />
              <img src="inkarp old.svg" alt="Client 2" className="w-32 sm:w-36 md:w-40 h-auto" />
              <img src="inkarp old.svg" alt="Client 3" className="w-32 sm:w-36 md:w-40 h-auto" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <img src="inkarp old.svg" alt="Client 4" className="w-32 sm:w-36 md:w-40 h-auto" />
              <img src="inkarp old.svg" alt="Client 5" className="w-32 sm:w-36 md:w-40 h-auto" />
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

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
      `}</style>

      
    </section>     
  );
}

export default Clients;