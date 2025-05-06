import React, { useState } from 'react';

const testimonials = Array.from({ length: 100 }).map((_, i) => ({
  name: `User ${i + 1}`,
  profession: 'Professional',
  text: `This is testimonial number ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.`,
  image: i % 3 === 0 ? `https://randomuser.me/api/portraits/men/${(i % 50) + 1}.jpg` : ''
}));

export default function Testimonial() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-white py-50 my-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">What Say Our Patients!</h2>

      <div className="relative max-w-4xl mx-auto">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 text-5xl text-blue-500 hover:text-blue-700"
        >
          ←
        </button>

        <div className="flex justify-center items-center overflow-hidden">
          {testimonials.map((t, index) => {
            const isActive = index === active;
            const isBefore = index === (active - 1 + testimonials.length) % testimonials.length;
            const isAfter = index === (active + 1) % testimonials.length;

            return (
              <div
                key={index}
                className={`transition-all duration-500 mx-2 flex flex-col items-center absolute top-0 left-1/2 transform -translate-x-1/2 ${
                  isActive
                    ? 'scale-100 opacity-100 z-20'
                    : isBefore || isAfter
                    ? 'scale-95 opacity-40 z-10 blur-sm'
                    : 'hidden'
                }`}
              >
                <div className="flex flex-col items-center">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4 object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 flex items-center justify-center bg-blue-500 text-white text-3xl font-bold rounded-full mb-4">
                      {t.name.charAt(0)}
                    </div>
                  )}

                  <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md w-[300px] sm:w-[400px]">
                    <p className="mb-4">{t.text}</p>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="italic text-sm">{t.profession}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 text-5xl text-blue-500 hover:text-blue-700"
        >
          →
        </button>
      </div>
    </div>
  );
}