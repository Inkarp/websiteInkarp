// components/MainLayout.jsx
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Principles from "./pages/UI/Principles";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      {/* <Header /> */}
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Principles />
      <Footer />
    </div>
  );
}


