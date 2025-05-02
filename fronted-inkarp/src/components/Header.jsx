import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Verticals", path: "/verticals" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
    { name: "CatalystCue", path: "/catalystcue" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 z-20 w-full">
      <div className="flex justify-between items-center h-20 px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="inkarp old.svg"
            alt="Logo"
            className="h-14 w-28 sm:h-16 sm:w-32 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex font-medium text-sm md:text-[15px] lg:text-base">
          <ul className="flex items-center space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`relative group px-2 lg:px-3 py-2 ${
                    isActive(path) ? "text-[red]" : "text-black"
                  }`}
                >
                  <span className="relative z-0">
                    {name}
                    <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 group-hover:scale-x-100 bg-[#fcae04] origin-left transition-transform duration-300"></span>
                  </span>
                </Link>
              </li>
            ))}
            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={() => setInsightsOpen(!insightsOpen)}
                className="flex items-center px-2 lg:px-3 py-2 text-black whitespace-nowrap relative group"
              >
                <span className="relative z-0">
                  Insights & Updates
                  <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 group-hover:scale-x-100 bg-[#fcae04] origin-left transition-transform duration-300"></span>
                </span>
                <svg className="h-3 opacity-50 ml-1" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
                  />
                </svg>
              </button>
              {insightsOpen && (
                <ul className="absolute top-full left-0 bg-white border mt-2 w-48 rounded-md shadow-md text-sm z-50">
                  <li>
                    <Link
                      to="/insights/blogs"
                      className="group block px-4 py-2 hover:bg-gray-100 font-medium relative text-black"
                    >
                      <span className="relative z-0">
                        Blogs
                        <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 group-hover:scale-x-100 bg-[#fcae04] origin-left transition-transform duration-300"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/insights/news"
                      className="group block px-4 py-2 hover:bg-gray-100 font-medium relative text-black"
                    >
                      <span className="relative z-0">
                        News & Events
                        <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 group-hover:scale-x-100 bg-[#fcae04] origin-left transition-transform duration-300"></span>
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          {/* Search Icon */}
          <button>
            <svg
              className="h-5 sm:h-5 md:h-6"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" />
            </svg>
          </button>

          {/* Product Profile Button with Download Icon */}
          <button className="bg-red-500 hover:bg-gray-700 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-[5px] md:py-2 rounded flex items-center gap-1 whitespace-nowrap">
            <span>Product Profile</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 384 512">
              <path d="M224 0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24V0zM224 0v128h128L224 0zM176 320v-80H128c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h48v-80c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v80h48c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-48v80c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24z" />
            </svg>
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 animate-slide-down">
          {navLinks.map(({ name, path }) => (
            <Link
              to={path}
              key={name}
              className={`block py-2 px-3 rounded hover:bg-gray-100 font-medium ${
                isActive(path) ? "text-[#fcae04]" : ""
              }`}
            >
              {name}
            </Link>
          ))}
          <Link
            to="/insights/blogs"
            className="block py-2 px-3 hover:bg-gray-100 font-medium"
          >
            Blogs
          </Link>
          <Link
            to="/insights/news"
            className="block py-2 px-3 hover:bg-gray-100 font-medium"
          >
            News & Events
          </Link>
        </div>
      )}
    </header>
  );
}
