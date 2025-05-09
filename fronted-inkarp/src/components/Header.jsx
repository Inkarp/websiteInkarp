import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, ArrowDownToLine, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setInsightsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-2 mx-auto z-[50] w-[96%] rounded-xl transition-all duration-300 shadow-xl bg-white transform-gpu ${
          scrolled ? "py-1 scale-95" : "py-0 scale-100"
        }`}
      >
        <div className="flex justify-between items-center h-[72px] px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="inkarp old.svg"
              alt="Logo"
              className="h-12 w-24 sm:h-14 sm:w-28 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex font-medium text-sm lg:text-base">
            <ul className="flex items-center space-x-2 lg:space-x-4 whitespace-nowrap">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className={`relative group px-2 lg:px-3 py-2 ${
                      isActive(path) ? "text-[red]" : "text-black"
                    }`}
                  >
                    <span className="relative z-10">
                      {name}
                      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#fcae04] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
                    </span>
                  </Link>
                </li>
              ))}
              {/* Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setInsightsOpen(!insightsOpen)}
                  className="flex items-center px-2 lg:px-3 py-2 text-black relative group"
                >
                  <span className="relative z-10">
                    Insights & Updates
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#fcae04] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
                  </span>
                  <ChevronDown className="h-4 w-4 ml-1 opacity-60" />
                </button>
                {insightsOpen && (
                  <ul className="absolute top-full left-0 bg-white border mt-2 w-48 rounded-md shadow-md text-sm z-50">
                    <li>
                      <Link
                        to="/insights/blogs"
                        className="group block px-4 py-2 hover:bg-gray-100 font-medium relative text-black"
                      >
                        Blogs
                        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#fcae04] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/insights/news"
                        className="group block px-4 py-2 hover:bg-gray-100 font-medium relative text-black"
                      >
                        News & Events
                        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#fcae04] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <button onClick={() => setShowSearchModal(true)}>
              <Search className="h-5 sm:h-5 lg:h-6 text-gray-700" />
            </button>

            <button className="bg-red-500 hover:bg-gray-700 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 lg:px-4 py-1 sm:py-[5px] lg:py-2 rounded flex items-center gap-1">
              <span>Product Profile</span>
              <ArrowDownToLine className="h-4 w-4" />
            </button>

            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden px-4 pb-4 space-y-2 animate-slide-down">
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

      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-white/90 flex flex-col items-center justify-center p-6">
          <button
            onClick={() => setShowSearchModal(false)}
            className="absolute top-5 right-5 text-gray-600 hover:text-black"
          >
            <X size={28} />
          </button>
          <h2 className="text-3xl font-bold mb-4 text-black">Start Searching</h2>
          <input
            type="text"
            placeholder="Start Typing..."
            className="w-full max-w-xs sm:max-w-md lg:max-w-xl px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ring-red-400 placeholder:text-black placeholder:font-medium"
            autoFocus
          />
        </div>
      )}
    </>
  );
}
