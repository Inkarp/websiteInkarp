import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white space-y-6">
        <div className="flex flex-col items-center">
          <img
            src="inkarp old.svg" // replace with your logo link
            alt="Loading Logo"
            className="w-50 h-50 animate-zoomInOut"
          />
  
          {/* Animated Text under Logo */}
          <div className="mt-1 text-animation flex flex-wrap justify-center gap-1 text-purple-600 text-lg font-semibold">
            {"Your Knowledge Our Solution".split("").map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>
  
        {/* Scoped Animations */}
        <style>{`
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .animate-zoomInOut {
            animation: zoomInOut 2s ease-in-out infinite;
          }
          @keyframes move-out {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          .text-animation span {
            display: inline-block;
            animation: move-out 1s ease infinite;
          }
        `}</style>
      </div>
    );
  }
  
  

  // Normal page rendering
  return (
    <div className="relative min-h-screen min-w-screen overflow-hidden">
      {/* Background Section */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <img
          src="https://www.inkarp.co.in/assets/images/inkarp-building.png"
          alt="Animated Background"
          className="w-screen h-screen object-cover"
          style={{
            animation: "zoomPanSlow 120s ease-in-out infinite alternate",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-red/50" />
      </div>

      {/* Keyframes inside style tag */}
      <style>{`
        @keyframes zoomPanSlow {
          0% {
            transform: scale(1) translateX(0) translateY(0);
          }
          100% {
            transform: scale(1.05) translateX(-2%) translateY(-2%);
          }
        }
      `}</style>

      {/* Scrollable Page Content */}
      <div className="relative flex flex-col min-h-screen z-10">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
