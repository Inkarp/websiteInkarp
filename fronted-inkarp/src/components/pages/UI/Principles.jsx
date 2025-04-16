import React from 'react';
import AnimatedNumbers from 'react-animated-numbers';

const counters = [
  { label: 'Principals', value: 50, suffix: '+', color: 'from-blue-500 to-blue-300' },
  { label: 'Customers', value: 50, suffix: 'k+', color: 'from-green-500 to-green-300' },
  { label: 'Branches', value: 12, suffix: '', color: 'from-purple-500 to-purple-300' },
  { label: 'Awards', value: 10, suffix: '', color: 'from-pink-500 to-pink-300' },
];

const Principles = () => {
  return (
    <section className="w-full py-20 bg-gray-200 text-gray-800 ">
      {/* Inline animation keyframes */}
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

      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-y-14 text-center">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
            style={{
              animation: 'fadeUp 0.8s ease-out',
              animationDelay: `${index * 0.2}s`,
              animationFillMode: 'both',
            }}
          >
            <div className={`text-5xl font-extrabold ${counter.color} flex items-end`}>
              <AnimatedNumbers
                animateToNumber={counter.value}
                transitions={(i) => ({
                  type: 'spring',
                  duration: 1.2 + i * 0.1,
                })}
                fontStyle={{
                  fontWeight: 'bold',
                }}
                includeComma
              />
              <span className="ml-1 text-3xl"> {counter.suffix}</span>
            </div>
            <p className="mt-3 text-lg text-gray-700 font-semibold">{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Principles;
