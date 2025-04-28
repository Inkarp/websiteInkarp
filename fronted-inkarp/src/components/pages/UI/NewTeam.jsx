import React from "react";

const NewTeam = () => {
  return (
    <div className="relative w-[100vmin] h-[65vmin] m-8 overflow-hidden flex flex-nowrap justify-between group transition-all duration-300" style={{
      borderWidth: "8px",
      borderStyle: "solid",
      borderImage: "linear-gradient(-50deg, white,red) 1"
    }}>
      {/* Overlay Section */}
      <div className="relative flex w-full h-full p-3 bg-red-100 transition-transform duration-500 z-10 group-hover:-translate-x-[60vmin]">
        <div className="flex flex-col justify-between w-[20vmin] h-full p-2 transition-all duration-500 delay-200 group-hover:border-none group-hover:translate-x-[60vmin] font-[MaxOT]" style={{
          borderLeftWidth: "4px",
          borderLeftStyle: "solid",
          borderImage: "linear-gradient(red,black) 1"
        }}>
          <h1 className="text-black text-[10vmin] text-center animate-pop delay-[1.2s]">S.Balu</h1>
          <p className="text-white mb-10 animate-pop delay-[1.5s]">Chairman </p>
        </div>
        <div className="absolute top-0 right-0 w-[60vmin] h-full bg-cover bg-center transition-all duration-300 " style={{
          backgroundImage: "url('https://www.inkarp.co.in/assets/images/chairman-sir.jpg')"
        }}></div>
        {/* Dots */}
        <div className="absolute bottom-4 right-8 flex space-x-2 w-[55px] h-[4vmin] transition-all duration-300 delay-300 group-hover:translate-x-4">
          <div className="w-4 h-4 bg-yellow-400 border border-indigo-700 rounded-full transition-colors duration-300 group-hover:bg-white"></div>
          <div className="w-4 h-4 bg-yellow-400 border border-indigo-700 rounded-full transition-colors duration-300 group-hover:bg-white"></div>
          <div className="w-4 h-4 bg-yellow-400 border border-indigo-700 rounded-full transition-colors duration-300 group-hover:bg-white"></div>
        </div>
      </div>

      {/* Text Section */}
      <div className="absolute top-0 right-0 w-[60vmin] h-full p-8 bg-white shadow-inner overflow-y-scroll">
        <p className="text-green-900 text-[max(10pt,2.5vmin)] leading-relaxed mb-6">
          <img
            src="inkarp old.svg"
            alt=""
            className="max-w-[50%] float-left mr-4 mb-4 rounded "
          />
          <em className="text-black">chairman</em>
        </p>
        <p className="text-green-900 text-[max(10pt,2.5vmin)] leading-relaxed mb-6">
        Chairman's Message
        </p>
        <p className="text-green-900 text-[max(10pt,2.5vmin)] leading-relaxed font-[MaxOT]">
          
          When I first started Inkarp in 1985, I had one guiding principle: to provide unmatched after-sale service and unwavering support to our customers. This commitment has been the cornerstone of our journey, and it remains at the heart of everything we do today

          Our success is built on the trust and dedication of everyone we work with, from the passionate scientists who use our products to the incredible team that strives to meet and exceed expectations every day. We are not just a company; we are a family that believes in fostering strong relationships and making a real difference in the scientific community.

          I am deeply grateful for your continued support and trust. It is your belief in our mission that drives us to push boundaries, explore new markets, and continually enhance our offerings. Together, we are building a future where science thrives, and innovation knows no bounds.

          Thank you for being an integral part of Inkarp's journey. Let us continue to grow, innovate, and make a lasting impact together.
        </p>
      </div>

      {/* Internal Styles */}
      <style>{`
        @keyframes pop {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-pop {
          animation-name: pop;
          animation-duration: 0.7s;
          animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
          animation-fill-mode: backwards;
        }
        .delay-\[1\.2s\] {
          animation-delay: 1.2s;
        }
        .delay-\[1\.5s\] {
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default NewTeam;
