import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarNew from "./NavbarNew";

export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen shadow-xl space-y-6">
        <div className="flex items-center justify-center bg-red-200 rounded-full h-64 w-64 mt-20">
          <img
            src="inkarp.png"
            alt="Loading Logo"
            className="w-full h-full animate-zoomInOut"
          />
        </div>
        <style>{`
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .animate-zoomInOut {
            animation: zoomInOut 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen overflow-hidden w-full">
      <aside className="w-[15%] bg-white fixed top-0 left-0 bottom-0 z-20 border-r border-gray-200 shadow-lg">
        <NavbarNew />
      </aside>

      <div className="w-[85%] ml-[15%]">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <img src="black.jpg" className="w-full h-full object-cover opacity-40" alt="background" />
        </div>
        <div className="relative flex flex-col min-h-screen z-10">
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
