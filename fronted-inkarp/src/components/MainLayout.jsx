import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import NavbarNew from "./NavbarNew";

export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // 1 second
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black space-y-6">
        <div className="flex flex-col items-center justify-center bg-white rounded-full h-100 w-100 mt-20">
          <img
            src="inkarp old.svg" // Replace with your logo path
            alt="Loading Logo"
            className="w-85 h-32 animate-zoomInOut" // Adjusted size
          />
          {/* Animated Text */}
          <div className="mt-2 text-animation flex flex-wrap justify-center gap-1 text-purple-600 text-lg font-semibold">
            {"Your Knowledge Our Solution".split("").map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>

        {/* Loading Animations */}
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

  // After loading, show full layout
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/bg-video.mov" // Put your bg-video inside public folder
          autoPlay
          muted
          loop
          playsInline
          style={{
            animation: "zoomPanSlow 60s ease-in-out infinite alternate",
          }}
        />
        {/* Optional Dark Gradient Overlay */}
        <div className="absolute pointer-events-none" />
      </div>

      {/* Keyframes for video */}
      <style>{`
        @keyframes zoomPanSlow {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.1) translate(-2%, -2%);
          }
        }
      `}</style>

      {/* Foreground Scrollable Content */}
      <div className="relative flex flex-col min-h-screen z-10">
        <Header />
        {/* <Navbar/> */}
        {/* <NavbarNew/> */}
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
