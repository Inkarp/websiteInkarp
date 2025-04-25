// components/MainLayout.jsx
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Principles from "./pages/UI/Principles";
import Slider from "./pages/UI/Slider";
import OurStory from "./pages/OurStory";
import About from "./pages/About";
import HeroSection from "./HeroSection";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* <Header /> */}
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


