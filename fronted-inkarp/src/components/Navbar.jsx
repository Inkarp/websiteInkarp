import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ArrowDownToLine, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses =
    "whitespace-nowrap min-w-fit block text-black dark:text-gray-200 lg:mx-1 transition transform hover:-translate-y-1 hover:text-gray-900 dark:hover:text-gray-400 hover:bg-red-300 duration-300 rounded-full px-3 py-3 text-[17px] font-bold lg-text-sm lg:font-semibold lg:rounded-full lg:p-2 lg:transition lg:duration-300 lg:hover:bg-red-300 lg:hover:text-gray-900 dark:lg:hover:text-gray-400 font-[MaxOT]";

  return (
    <>
      <nav className={`fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-[96%] rounded-xl transition-all duration-300 shadow-xl bg-white ${scrolled ? 'py-1 scale-95' : 'py-2 scale-100'}`}>
        <div className="max-w-screen-xl w-full mx-auto flex items-center  px-4 sm:px-6 lg:px-8">
          
          {/* === LEFT: Logo === */}
          <div className="flex items-center gap-x-4 min-w-0 flex-1 justify-start">
            <Link to="/">
              <img
                className="w-36 h-auto animate-logoPulse"
                src="/inkarp old.svg"
                alt="Logo"
              />
            </Link>
          </div>

          {/* === CENTER: Navigation === */}
          <div className="hidden lg:flex items-center gap-x-2 justify-center">
            {/* Product Profile */}
            <button className="flex items-center px-3 py-2 text-sm font-medium tracking-wide text-white bg-red-700 rounded-lg hover:bg-gray-600 transition duration-300">
              Product Profile <ArrowDownToLine className="ml-2" />
            </button>

            {/* Divider */}
            <div className="border-l border-gray-300 h-6 mx-4" />

            {/* Nav Links */}
            {[{ label: 'Home', to: '/' },
              { label: 'Our Story', to: '/about' },
              { label: 'Verticals', to: '/verticals' },
              { label: 'Careers', to: '/careers' },
              { label: 'Contact Us', to: '/contact' },
            ].map(link => (
              <Link key={link.to} to={link.to} className={navLinkClasses}>
                {link.label}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <button className={`${navLinkClasses} flex items-center gap-1`}>
                Insights & Updates
                <ChevronDown className="w-4 h-4 mt-1" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-1 z-50 min-w-[180px]">
                <Link
                  to="/insights&updates/blogs"
                  className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-red-100 dark:hover:bg-gray-800 rounded-t-lg"
                >
                  Blog
                </Link>
                <Link
                  to="/insights&updates/news&events"
                  className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-red-100 dark:hover:bg-gray-800 rounded-b-lg"
                >
                  News & Events
                </Link>
              </div>
            </div>

            {/* CatalystCue */}
            <Link to="/catalyst">
              <img
                src="catalystcue.svg"
                alt="CatalystCue"
                className="w-44 h-16 transition-transform duration-300 hover:bg-red-300 rounded-full px-3 py-3"
              />
            </Link>
          </div>

          {/* === RIGHT: Actions === */}
          <div className="flex items-center gap-x-3 flex-1 justify-end">
            {/* Search Button */}
            <button
              onClick={() => setShowSearchModal(true)}
              className="flex items-center px-3 py-2 text-white bg-red-700 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Hamburger Menu */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600"
              >
                {isOpen ? <X className="w-6 h-6" /> : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* === Mobile Menu === */}
        {isOpen && (
          <div className="lg:hidden px-4 pt-4 pb-6 space-y-2">
            <button className="flex items-center w-full px-4 py-2 text-sm font-medium tracking-wide text-white bg-red-700 rounded-lg hover:bg-gray-600 transition duration-300">
              Product Profile <ArrowDownToLine className="ml-2" />
            </button>

            {[{ label: 'Home', to: '/' },
              { label: 'Our Story', to: '/about' },
              { label: 'Verticals', to: '/verticals' },
              { label: 'Careers', to: '/careers' },
              { label: 'Contact Us', to: '/contact' },
              { label: 'Blog', to: '/insights&updates/blogs' },
              { label: 'News & Events', to: '/insights&updates/news&events' },
              { label: 'CatalystCue', to: '/catalyst' }
            ].map(link => (
              <Link key={link.to} to={link.to} className="block text-lg px-4 py-2 text-gray-800 rounded hover:bg-red-100">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* === Search Modal === */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-gray-100 flex flex-col items-center justify-center p-6 mx-auto rounded-lg shadow-lg transition-transform duration-300 transform scale-100 opacity-85">
          <button
            onClick={() => setShowSearchModal(false)}
            className="absolute top-5 right-5 text-gray-600 hover:text-black"
          >
            <X size={28} />
          </button>
          <h2 className="text-3xl/20 font-bold mb-2 text-black">Start Searching</h2>
          <input
            type="text"
            placeholder="Start Typing ...."
            className="w-full max-w-xl px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ring-red-400 focus:ring-opacity-100 focus:ring-offset-2 transition duration-300 placeholder:text-lg placeholder:text-black placeholder:font-bold"
            autoFocus
          />
        </div>
      )}

      {/* === Custom CSS === */}
      <style>
        {`
          @keyframes logoPulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.08);
            }
          }

          .animate-logoPulse {
            animation: logoPulse 2.5s ease-in-out infinite;
          }

          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
