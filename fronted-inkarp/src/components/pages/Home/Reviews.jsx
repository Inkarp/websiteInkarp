import React, { useState, useEffect } from "react";

const allReviews = [
  { name: "John Doe", text: "Absolutely love this product!" },
  { name: "Jane Smith", text: "It has changed my workflow completely." },
  { name: "Chris Brown", text: "Highly recommended!" },
  { name: "Emily Davis", text: "A must-have for professionals!" },
  { name: "Mike Taylor", text: "Fantastic support and features." },
  { name: "Sara Lee", text: "Easy to use and super efficient!" },
  { name: "Tom Cruise", text: "Impressed beyond words." },
  { name: "Linda Scott", text: "This tool is now essential for me." },
  { name: "Tom Cruise", text: "Impressed beyond words." },
  { name: "Linda Scott", text: "This tool is now essential for me." },
];

function Reviews() {
  const waveAnimation = `
    @keyframes waveFloat {
      0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      50% {
        transform: translateY(-10px) scale(1.05);
        opacity: 0.95;
      }
    }
  `;

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const chunkSize = 5;
  const delay = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + chunkSize) % allReviews.length);
        setFade(true);
      }, 500);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  // Seamlessly wrap reviews using duplication logic
  const visibleReviews = [
    ...allReviews,
    ...allReviews,
  ].slice(index, index + chunkSize);

  return (
    <>
      <style>{waveAnimation}</style>
      <h1 className="text-4xl font-bold text-center mb-2 mt-10 text-white  tracking-tight">
        What People Are Saying
      </h1>
      <div className="overflow-hidden relative w-full max-w-6xl mx-auto p-6  rounded-3xl">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center transition-all duration-500 ease-in-out transform ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          {visibleReviews.map(({ name, text }, i) => (
            <div
              key={i}
              className="w-full p-4 bg-gray-50 rounded-xl text-center shadow-md flex flex-col items-center bg-red-50"
              style={{
                animation: "waveFloat 3s ease-in-out infinite",
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold">
                {name.charAt(0)}
              </div>
              <p className="text-lg text-gray-700 italic mt-3">{text}</p>
              <p className="font-semibold text-gray-900 mt-2">- {name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Reviews;
