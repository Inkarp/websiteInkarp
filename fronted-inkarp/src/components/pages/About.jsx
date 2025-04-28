import React from "react";

const About = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-wrap justify-end items-end w-10 h-10 hover:w-28 hover:h-28 transition-all duration-700 ease-out group">
      {/* Logo Circle */}
      <div className="bg-black/30 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center relative z-10">
        <img
          src="https://rafaelavlucas.github.io/assets/codepen/logo_white.svg"
          alt="Logo"
          className="w-5 h-5"
        />
      </div>

      {/* Portfolio Icon */}
      <a
        href="https://www.rafaelalucas.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 group-hover:bottom-20 transition-all duration-500 ease-in-out w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center"
      >
        <img
          src="https://rafaelavlucas.github.io/assets/codepen/link.svg"
          alt="Portfolio"
          className="w-5 h-5"
        />
      </a>

      {/* Dribbble Icon */}
      <a
        href="https://dribbble.com/rafaelalucas"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-1/2 right-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-12 group-hover:right-12 transition-all duration-500 ease-in-out w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center"
      >
        <img
          src="https://rafaelavlucas.github.io/assets/codepen/dribbble.svg"
          alt="Dribbble"
          className="w-5 h-5"
        />
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/rafaelalucas/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 group-hover:right-20 transition-all duration-500 ease-in-out w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center"
      >
        <img
          src="https://rafaelavlucas.github.io/assets/codepen/linkedin.svg"
          alt="LinkedIn"
          className="w-5 h-5"
        />
      </a>
    </div>
  );
};

export default About;
