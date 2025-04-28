import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowDownToLine } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses =
    "block text-black dark:text-gray-200 transition transform hover:-translate-y-1 hover:text-gray-900 dark:hover:text-gray-400 hover:bg-red-300 duration-300 rounded-full px-2 py-2 text-[17px]  tracking-wide";

  return (
    <>
      <nav
        className={`bg-white shadow-lg rounded-full transition-all duration-300 mx-auto w-[96%] fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${
          scrolled ? "h-20 scale-95 shadow-md" : "h-24 scale-100"
        }`}
      >
        <div className="relative flex items-center justify-between h-full w-full px-6">
          {/* Left Part: Nav Links */}
          <div
            className="hidden lg:flex items-center"
            style={{ fontFamily: "MaxOT" }}
          >
            {[
              { label: "Home", to: "/" },
              { label: "Our Story", to: "/about" },
              { label: "Verticals", to: "/verticals" },
              { label: "Contact Us", to: "/contact" },
              { label: "Careers", to: "/careers" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className={navLinkClasses}>
                {link.label}
              </Link>
            ))}

            {/* Dropdown for Insights & Updates */}
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
          </div>

          {/* Center Part: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img
                className="w-36 sm:ml-5 h-auto transition-transform duration-700 animate-logoPulse"
                src="/inkarp old.svg"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Right Part: Product Profile + Search + CatalystCue */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CatalystCue Image - Visible only on large screens */}
            <Link to="/catalyst" className="hidden lg:block">
              <img
                src="/catalystcue.svg"
                alt="CatalystCue"
                className="w-20 sm:w-28 h-auto transition-transform duration-300 hover:bg-red-300 rounded-full px-2 py-2"
              />
            </Link>

            {/* Product Profile Button */}
            <button className="flex items-center justify-center px-2 sm:px-4 py-2 text-white bg-red-700 rounded-lg hover:bg-gray-600 transition duration-300 text-[13px] sm:text-[15px] font-bold">
              Product Profile <ArrowDownToLine className="ml-2 w-4 h-4" />
            </button>

            {/* Animated Search */}
            <div className="relative  max-w-12 focus-within:max-w-full transition-[max-width] ease-in-out duration-300 hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="block w-full border-none outline-none bg-red-100 rounded-full p-[12px] px-4 text-base placeholder:text-transparent focus:placeholder:text-gray-500"
              />
              <i className="fa fa-search absolute top-1/2 right-6 -translate-y-1/2 translate-x-1/2 pointer-events-none text-red-800"></i>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none ml-2"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="px-4 py-4 lg:hidden flex flex-col gap-2 bg-white rounded-lg shadow-lg mt-2 font-[17px] font-[MaxOT]">
            {[
              { label: "Home", to: "/" },
              { label: "Our Story", to: "/about" },
              { label: "Verticals", to: "/verticals" },
              { label: "Careers", to: "/careers" },
              { label: "Contact Us", to: "/contact" },
              { label: "Blog", to: "/insights&updates/blogs" },
              { label: "News & Events", to: "/insights&updates/news&events" },
              { label: "CatalystCue", to: "/catalyst" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-black font-bold hover:bg-red-100 px-3 py-2 rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Scoped animation for Logo */}
      <style>{`
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-logoPulse {
          animation: logoPulse 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default Header;
