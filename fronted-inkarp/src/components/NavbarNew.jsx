import { Menu, Search } from "lucide-react";
import { useState } from "react";

export default function NavbarNew() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50  py-4 px-4 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="bg-red-100 rounded-full px-4 py-2 shadow flex items-center gap-2">
          <img src="/inkarp old.svg" alt="Inkarp Logo" className="w-20 h-10 object-contain" />
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="lg:hidden">
          <button
            className="bg-white rounded-full p-2 shadow"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu />
          </button>
        </div>

        {/* Center Navigation - Desktop */}
        <div className="hidden lg:flex bg-red-100 rounded-full px-4 py-2 shadow flex-wrap justify-center items-center gap-4 font-semibold text-sm">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[17px]">
            <span className="text-white">⚛️</span>
          </div>
          {["Home", "Our Story", "Verticals", "Careers", "Insights & Updates", "Contact Us", "CatalystCue"].map(link => (
            <a key={link} href="#" className="hover:underline whitespace-nowrap">
              {link}
            </a>
          ))}
        </div>

        {/* Right - Only Icon Initially, Expand on Hover */}
        <div className="relative group bg-white rounded-full shadow px-3 py-2 flex items-center transition-all duration-300 max-w-[44px] hover:max-w-[250px] focus-within:max-w-[250px] overflow-hidden">
          <Search size={18} className="text-black min-w-[18px]" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent outline-none placeholder-gray-400 text-sm w-full opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-white rounded-2xl shadow px-6 py-4 flex flex-col gap-3 text-sm font-medium">
          {["Home", "Our Story", "Verticals", "Careers", "Insights & Updates", "Contact Us", "CatalystCue"].map(link => (
            <a key={link} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
