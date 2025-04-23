// components/MainLayout.jsx
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Principles from "./pages/UI/Principles";
import Slider from "./pages/UI/Slider";
import OurStory from "./pages/OurStory";
import About from "./pages/About";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* <Header /> */}
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


