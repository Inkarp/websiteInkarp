import React, { useState, useEffect } from "react";

export default function NavbarNew() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => centerLogo();
    const centerLogo = () => {
      const logo = document.getElementById("logo");
      if (logo && window.innerWidth >= 768) {
        const container = document.querySelector(".container");
        const containerWidth = container ? container.offsetWidth : 0;
        const logoWidth = logo.offsetWidth;
        logo.style.position = "absolute";
        logo.style.left = "50%";
        logo.style.marginLeft = `-${logoWidth / 2}px`;
        logo.style.top = "10px";
        logo.style.background = "black";
        logo.style.borderRadius = "0 0 100% 100%";
        logo.style.padding = "12px";
      }
    };

    window.addEventListener("resize", handleResize);
    centerLogo();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>{`
        .navbar {
          background: rgba(33, 45, 57, 0.8);
          margin-bottom: 0;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          padding: 10px 0;
        }

        .navbar-brand h2 {
          margin-top: 0;
          font-weight: bold;
          color: white;
        }

        .navbar-toggle {
          border: none;
          background: transparent;
        }

        .icon-bar {
          display: block;
          width: 22px;
          height: 2px;
          background-color: white;
          margin: 4px 0;
        }

        .navbar-collapse {
          display: none;
        }

        .navbar-collapse.open {
          display: block;
        }

        .navbar-nav {
          list-style: none;
          padding-left: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .navbar-nav li {
          padding: 10px;
        }

        .navbar-nav li a {
          color: white;
          font-weight: bold;
          text-decoration: none;
          transition: background 0.4s;
        }

        .navbar-nav li a:hover,
        .navbar-nav li.active a {
          background: #ed0121;
          color: white;
        }

        @media (min-width: 768px) {
          .navbar-header {
            display: none;
          }

          .navbar-collapse {
            display: block !important;
          }

          .navbar-nav {
            flex-direction: row;
            justify-content: flex-end;
          }

          .navbar-nav li {
            padding: 0 15px;
          }
        }
      `}</style>

      <div className="navbar" role="navigation">
        <div className="container" style={{ position: "relative" }}>
          <div className="navbar-header visible-xs">
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <h2>TastyBox</h2>
            </a>
          </div>

          <div
            id="navbar"
            className={`navbar-collapse ${isOpen ? "open" : ""}`}
          >
            <div className="hidden-xs" id="logo">
              <a href="#header">
                <img
                  src="https://41.media.tumblr.com/3172b0af03ae569209fe2b15c2757d78/tumblr_ntjox0Wmuv1ud7rr3o1_100.png"
                  alt=""
                />
              </a>
            </div>

            <ul className="navbar-nav navbar-right">
              <li><a href="#story">Story</a></li>
              <li><a href="#reservation">Reservation</a></li>
              <li><a href="#chefs">Our Chefs</a></li>
              <li><a href="#facts">Facts</a></li>
              <li><a href="#food-menu">Food Menu</a></li>
              <li><a href="#special-offser">Special Offers</a></li>
              <li style={{ display: "none" }}><a href="#header"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
