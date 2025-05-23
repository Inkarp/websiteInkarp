import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, ArrowDownToLine, X } from "lucide-react";

export default function NavbarNew() {
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Verticals", path: "/verticals" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
    // { name: "CatalystCue", path: "/catalyst-cue" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    setInsightsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="flex flex-col h-full bg-gray-200 py-4 px-5 space-y-2 ">
        {/* Logo */}
        {/* <div className="fixed inset-0 -z-10 overflow-hidden">
          <img src="black.jpg" className="w-full h-full object-cover opacity-100" alt="background" />
        </div> */}
        <div className="flex">
          <Link to="/">
            <img
              src="inkarp old.svg"
              alt="Logo"
              className="h-[100px] w-full object-cover"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 space-y-2 pt-5 text-md font-semibold">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                isActive(path)
                  ? "bg-red-500 text-white shadow"
                  : "text-black hover:bg-gray-300"
              }`}
            >
              {name}
            </Link>
          ))}

          {/* Dropdown */}
          <div>
            <button
              onClick={() => setInsightsOpen(!insightsOpen)}
              className="flex items-center justify-between w-full px-2 py-2 rounded-md text-black hover:bg-gray-100 transition-all"
            >
              <span>Insights & Updates</span>
              <ChevronDown className="h-4 w-5 " color="red" />
            </button>
            {insightsOpen && (
              <div className="ml-4 space-y-1 mt-1">
                <Link
                  to="/insights/blogs"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  Blogs
                </Link>
                <Link
                  to="/insights/news&events"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  News & Events
                </Link>
                <Link
                  to="/insights/news&events/webinars"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                >
                  Webinars
                </Link>
              </div>
            )}
          </div>
          <Link to="catalyst-cue" className="mx-auto" >
          <img src="catalystcue.svg" className="ml-3 w-24 h-15" />
          </Link>
        </nav>

        {/* Bottom Actions */}
        <div className="space-y-2 pt-5 border-t border-gray-200">
          <button
            onClick={() => setShowSearchModal(true)}
            className="flex items-center gap-2 px-4 py-2 w-full text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
          <Link to="/productProfile">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-md w-full hover:bg-red-600">
            Product Profile
            <ArrowDownToLine className="w-4 h-4" />
          </button>
          </Link>
        </div>
      </div>

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
            className="w-full max-w-xl px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ring-red-400 placeholder:text-black placeholder:font-medium"
            autoFocus
          />
        </div>
      )}
    </>
  );
}
