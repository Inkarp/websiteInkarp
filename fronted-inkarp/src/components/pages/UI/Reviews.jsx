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
  const chunkSize = 4; // Number of reviews to show at once
  const delay = 4000; // 4 seconds

  // Rotate reviews every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + chunkSize) % allReviews.length);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  // Slice visible reviews based on current index
  const visibleReviews = allReviews
    .concat(allReviews) // to avoid overflow issues
    .slice(index, index + chunkSize);

  return (
    <>
    <h1 className="text-2xl font-bold ml-50">Google Reviews</h1>
    <div className="overflow-hidden relative w-full p-6 shadow-xl rounded-lg">
      
      <style>{waveAnimation}</style>

      <div className="flex gap-6 justify-center flex-wrap transition-opacity duration-700 ease-in-out">
        {visibleReviews.map(({ name, text }, i) => (
          <div
            key={i}
            className="min-w-[250px] p-4 bg-gray-50 rounded-lg text-center shadow-md flex flex-col items-center"
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
