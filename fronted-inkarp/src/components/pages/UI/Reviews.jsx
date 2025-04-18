import React from "react";

const reviews = [
  { name: "John Doe", text: "Absolutely love this product!" },
  { name: "Jane Smith", text: "It has changed my workflow completely." },
  { name: "Chris Brown", text: "Highly recommended!" },
  { name: "Emily Davis", text: "A must-have for professionals!" },
];

function Reviews() {
  const slideAnimation = `
    @keyframes slide {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <div className="overflow-hidden relative w-full p-6 bg-white shadow-xl rounded-lg">
      {/* Inject keyframes for sliding animation */}
      <style>{slideAnimation}</style>

      <div className="flex gap-6" style={{ animation: "slide 10s linear infinite", width: "max-content" }}>
        {reviews.concat(reviews).map(({ name, text }, index) => (
          <div
            key={index}
            className="min-w-[300px] p-4 bg-gray-50 rounded-lg text-center shadow-md flex flex-col items-center"
          >
            {/* Profile Avatar */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold">
              {name.charAt(0)}
            </div>

            {/* Review Text */}
            <p className="text-lg text-gray-700 italic mt-3">{text}</p>
            <p className="font-semibold text-gray-900 mt-2">- {name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;