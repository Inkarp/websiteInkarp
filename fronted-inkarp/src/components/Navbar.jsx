import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ArrowDownToLine } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll and update state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses =
    "block text-gray-700 dark:text-gray-200 lg:mx-1 transition transform hover:-translate-y-1 hover:text-gray-900 dark:hover:text-gray-400 hover:bg-red-300 duration-300 rounded-full px-3 py-3 text-[16px] font-bold lg-text-sm lg:font-semibold lg:rounded-full lg:p-2 lg:transition lg:duration-300 lg:hover:bg-red-300 lg:hover:text-gray-900 dark:lg:hover:text-gray-400";


  return (
    <nav className={`rounded-full transition-all duration-300 shadow-xl w-[96%] sticky top-3 z-50 bg-white mx-auto ${scrolled ? 'py-2 scale-95' : 'py-2 scale-100'}`}>
      <div className="container px-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              className="w-32 h-auto transition-transform duration-300 sm:w-32 sm:h-24"
              src="/inkarp old.svg"
              alt="Logo"
            />
          </Link>
          <button className="flex items-center justify-center px-3 py-2 mx-5 text-sm font-medium tracking-wide text-white bg-red-700 rounded-lg hover:bg-gray-600 transition duration-300">
            Product Profile <ArrowDownToLine className="ml-2" />
          </button>

          {/* Search Button for Mobile */}
          <div className="lg:hidden ml-4">
            <button className="flex items-center px-4 py-2 text-white bg-red-700 rounded-lg hover:bg-gray-600 transition duration-300">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 ml-2 focus:outline-none"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isOpen
            ? "translate-x-0 opacity-100"
            : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent dark:bg-gray-900 lg:shadow-none lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-y-0 ">
            {[
              { label: 'Home', to: '/' },
              { label: 'Our Story', to: '/about' },
              { label: 'Verticals', to: '/verticals' },
              { label: 'Careers', to: '/careers' },
              // { label: 'Insights and Updates', to: '/insights',
              //   children: [
              //     { label: 'Blog', to: '/insights/blog' },
              //     { label: 'NewsLetter', to: '/insights/newsletter' },
              //   ],
              //  },
              { label: 'Contact Us', to: '/contact' },
            ].map(link => (
              <Link key={link.to} to={link.to} className={navLinkClasses}>
                {link.label}
              </Link>
            ))}

            <div className="relative group">
              <button
                className={`${navLinkClasses} flex items-center gap-1`}
              >
                Insights & Updates
                <ChevronDown className="w-4 h-4 mt-1" />
              </button>
              {/* Dropdown Items */}
              <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-1 z-50 min-w-[180px]">
                <Link
                  to="/insights&updates/blog"
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

            <Link to="/catalyst"><img src='catalystcue.svg' alt='CatalystCue' className='w-32 h-auto lg:ml-5 lg:mr-2 transition-transform duration-300 hover:bg-red-300 duration-300 rounded-full px-3 py-3'
            /></Link>

            {/* Search Button (Desktop) */}
            <div className="hidden lg:flex ml-4">
              <button className="flex items-center px-4 py-2 text-white bg-red-700 rounded-lg hover:bg-gray-600 transition duration-300">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
