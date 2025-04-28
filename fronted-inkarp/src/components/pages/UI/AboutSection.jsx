import React, { useEffect } from 'react';
import Parallax from 'parallax-js';

const  AboutSection = () => {
    useEffect(() => {
        const scene = document.getElementById('scene');
        if (scene) {
          new Parallax(scene, {
            scalarX: 5,  // smaller = slower (default is 10)
            scalarY: 10,
            frictionX: 0.5, // Optional: slower friction = smoother movement
            frictionY: 0.5
          });
        }
      }, []);
      

  return (
    <div className="relative w-full min-h-screen  overflow-hidden">

      {/* Main Heading */}
      <header className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-10 py-24 relative">
        <article className="bg-white/30 backdrop-blur-md p-10 rounded-md w-full md:w-1/2 z-10 animate-slideInRight">
          <p className="uppercase tracking-widest text-red-500 font-semibold mb-4 font-[MaxOT]">About Inkarp</p>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wider text-gray-600 mb-6 font-[MaxOT]">One Stop Solution
          for all research needs</h2>
          <p className="text-base md:text-lg leading-relaxed mb-8 font-[Roboto]">
          Our mission is to become a one stop solution for all research solutions, we are developing a holistic platform that integrates the supply of high-quality products, installation support, and reliable after-sales support. We are currently focusing on providing technologically advanced after-sales support with the best-in-class trained engineers to guarantee that your research requirements are dealt on time. As Inkarp, we are doing all we can to analyse the evolution of science and enable our customers in simplifying their application requirements.
          </p>
          <button className="px-8 py-4 border border-gray-400 uppercase tracking-wider font-bold hover:shadow-inner hover:bg-gray-100 transition">Know More</button>
        </article>

        <figure className="w-full md:w-1/2 h-[500px] mt-10 md:mt-0 relative overflow-hidden animate-slideInUp">
          <img
            id="scene"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520856707909-75c4048cc858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
            alt="Behind the mountains"
          />
        </figure>
      </header>

      {/* About Floating Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col space-y-2 items-end group">
        <a href="https://www.rafaelalucas.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black/20 backdrop-blur-sm flex justify-center items-center rounded-full group-hover:translate-y-[-50px] transition">
          <span className="w-5 h-5 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: 'url(https://rafaelavlucas.github.io/assets/codepen/link.svg)' }}></span>
        </a>
        <a href="https://dribbble.com/rafaelalucas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black/20 backdrop-blur-sm flex justify-center items-center rounded-full group-hover:translate-y-[-100px] transition">
          <span className="w-5 h-5 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: 'url(https://rafaelavlucas.github.io/assets/codepen/dribbble.svg)' }}></span>
        </a>
        <a href="https://www.linkedin.com/in/rafaelalucas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black/20 backdrop-blur-sm flex justify-center items-center rounded-full group-hover:translate-x-[-50px] transition">
          <span className="w-5 h-5 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: 'url(https://rafaelavlucas.github.io/assets/codepen/linkedin.svg)' }}></span>
        </a>
        <div className="w-10 h-10 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: 'url(https://rafaelavlucas.github.io/assets/codepen/logo_white.svg)' }}></div>
      </div>
    </div>
  );
};

export default AboutSection;
