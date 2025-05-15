import React, { useEffect, useState } from 'react';

const quotes = [
  {
    text: "At Inkarp, we dont just sell instruments. We enable possibilities and shape progress.",
    author: "S. Balu",
  },
  {
    text: "At Inkarp, our name is a reflection of our identity - a promise to innovate,nuture,and deliver with knowledge,accountability, reliability, and passion.",
    author: "Inkarp",
  },
  {
    text: "A scientific breakthrough begins with the right tools in the right hands.",
    author: "Visionary Scientist",
  },
  {
    text: "Empowering research isn't a tagline. It's a promise we keep.",
    author: "Inkarp Leadership",
  },
  {
    text: "Our legacy is not in sales, but in every experiment we’ve helped succeed.",
    author: "R&D Partner",
  },
];

export default function Quotes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setAnimate(true);
      }, 200);
    }, 6000);

    setAnimate(true);
    return () => clearInterval(interval);
  }, []);

  const { text, author } = quotes[currentIndex];

  return (
    <div className="w-full mx-auto max-w-4xl py-10">
      {/* Card UI 1: Slide-in Text */}
      {/* <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-gray-200 text-center relative overflow-hidden">
        <p
          className={`text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed italic transition-all duration-700 ease-in-out transform ${
            animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
          “{text}”
        </p>
        <div
          className={`mt-4 text-sm font-medium text-red-600 tracking-wide transition-all duration-700 ease-in-out transform ${
            animate ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          — {author}
        </div>
      </div> */}
      <div className="mt-12 p-6 md:p-8 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-inner text-center relative">
        <p className="text-xl font-medium text-gray-700 italic mb-2">“{text}”</p>
        <div className="text-sm text-gray-500 font-semibold">— {author}</div>
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-700 rotate-45 shadow-md" />
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {quotes.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? 'bg-red-600 scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* UI 2: Card with Left Border */}
      
      {/* <div className="mt-12 bg-white border-l-4 border-red-500 p-6 md:p-8 shadow-md rounded-md">
        <p className="text-lg md:text-xl italic text-gray-800 mb-2">“{text}”</p>
        <p className="text-sm font-semibold text-gray-600">— {author}</p>
      </div> */}
     

      {/* UI 3: Shadow Bubble Quote */}
      
      
     
    </div>
  );
}