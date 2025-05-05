import React from "react";

export default function InkarpSplitBubbles() {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center relative overflow-hidden">
      {/* Center Bubble: Inkarp */}
      <div className="absolute w-36 h-36 bg-white rounded-full z-30 flex items-center justify-center text-black font-bold animate-pulse">
        Inkarp
      </div>

      {/* 6 Surrounding Bubbles */}
      <div className="absolute w-28 h-28 bg-white rounded-full flex items-center justify-center text-black font-semibold animate-moveTopLeft">
        Spark
      </div>

      <div className="absolute w-28 h-28 bg-white rounded-full flex items-center justify-center text-black font-semibold animate-moveTopRight">
        Nova
      </div>

      <div className="absolute w-28 h-28 bg-white rounded-full flex items-center justify-center text-black font-semibold animate-moveBottomLeft">
        Quantum
      </div>

      <div className="absolute w-28 h-28 bg-white rounded-full flex items-center justify-center text-black font-semibold animate-moveBottomRight">
        Astro
      </div>

      <div className="absolute w-28 h-28 bg-white rounded-full flex items-center justify-center text-black font-semibold animate-moveLeft">
        Orion
      </div>

      <div className="absolute w-28 h-28 bg-white rounded-full flex items-center justify-center text-black font-semibold animate-moveRight">
        Lumina
      </div>

      {/* Animations */}
      <style>{`
        @keyframes moveTopLeft {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-200px, -150px); }
        }

        @keyframes moveTopRight {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(200px, -150px); }
        }

        @keyframes moveBottomLeft {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-200px, 150px); }
        }

        @keyframes moveBottomRight {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(200px, 150px); }
        }

        @keyframes moveLeft {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-300px, 0); }
        }

        @keyframes moveRight {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(300px, 0); }
        }

        .animate-moveTopLeft {
          animation: moveTopLeft 6s ease-in-out infinite;
        }

        .animate-moveTopRight {
          animation: moveTopRight 6s ease-in-out infinite;
        }

        .animate-moveBottomLeft {
          animation: moveBottomLeft 6s ease-in-out infinite;
        }

        .animate-moveBottomRight {
          animation: moveBottomRight 6s ease-in-out infinite;
        }

        .animate-moveLeft {
          animation: moveLeft 6s ease-in-out infinite;
        }

        .animate-moveRight {
          animation: moveRight 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
