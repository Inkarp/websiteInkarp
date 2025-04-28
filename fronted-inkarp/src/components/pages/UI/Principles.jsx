import React from 'react';
import AnimatedNumbers from 'react-animated-numbers';

const counters = [
  { label: 'Principals', value: 50, suffix: '+', color: 'from-red-500 to-red-300' },
  { label: 'Customers', value: 50000, suffix: '+', color: 'from-green-500 to-green-300' },
  { label: 'Branches', value: 12, suffix: '', color: 'from-purple-500 to-purple-300' },
  { label: 'Awards', value: 10, suffix: '', color: 'from-pink-500 to-pink-300' },
];

const Principles = () => {
  return (
    <section className="py-10 mx-auto bg-white w-[96%] text-gray-800 rounded-full shadow-xl">
      {/* Place keyframes in a <style> tag in the HTML header or a separate CSS file */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 flex flex-wrap justify-center gap-y-10 text-center">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4"
            style={{
              animation: `fadeUp 0.5s ease-out`,
              animationDelay: `${index * 0.8}s`,
              animationFillMode: 'both',
            }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold flex items-center justify-center">
              <AnimatedNumbers
                animateToNumber={counter.value}
                transitions={(i) => ({
                  type: 'spring',
                  duration: 1.2 + i * 0.1,
                })}
                style={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(90deg, black, red)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                includeComma
              />
              <span
                className="ml-1 text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(90deg, black, red, white)',
                }}
              >
                {counter.suffix}
              </span>
            </div>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 font-semibold">{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Principles;
