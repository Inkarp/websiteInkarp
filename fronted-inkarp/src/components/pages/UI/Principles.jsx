import React, { useEffect, useState } from 'react';
import AnimatedNumbers from 'react-animated-numbers';

const counters = [
  { label: 'Principals', value: 50, suffix: '+' },
  { label: 'Customers', value: 50, suffix: 'k+' },
  { label: 'Branches', value: 12, suffix: '' },
  { label: 'Awards', value: 10, suffix: '' },
];

const CIRCLE_RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
const SHARED_FILL_PERCENT = 90; // All circles will stop at 90%

const Principles = () => {
  const [strokeOffset, setStrokeOffset] = useState(CIRCUMFERENCE);

  useEffect(() => {
    const offset = ((100 - SHARED_FILL_PERCENT) / 100) * CIRCUMFERENCE;
    setStrokeOffset(offset);
  }, []);

  return (
    <section className="py-10 mx-auto w-[96%] rounded-xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="w-full"
            style={{
              animation: 'fadeUp 0.6s ease-out',
              animationDelay: `${index * 0.6}s`,
              animationFillMode: 'both',
            }}
          >
            <div className="relative w-46 h-46 mx-auto">
              <svg className="absolute top-0 left-0 w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r={CIRCLE_RADIUS}
                  stroke=""
                  strokeWidth="3"
                  fill="transparent"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r={CIRCLE_RADIUS}
                  stroke="red"
                  strokeWidth="3"
                  fill="transparent"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={strokeOffset}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 2s ease-out' }}
                />
              </svg>

              <div className="w-full h-full flex flex-col items-center justify-center rounded-full z-10 relative">
                <div className="bg-[linear-gradient(90deg,black,red)] text-white rounded-full w-30 h-30 shadow-lg flex items-center justify-center relative z-10">
                  <div className="flex items-center justify-center">
                    <AnimatedNumbers
                      animateToNumber={counter.value}
                      includeComma
                      transitions={(i) => ({
                        type: 'spring',
                        mass: 1,
                        damping: 10,
                        stiffness: 120,
                      })}
                      fontStyle={{
                        fontWeight: '500',
                        fontSize: '28px',
                        color: 'white',
                      }}
                    />
                    <span
                      className="ml-1 text-xl sm:text-2xl md:text-3xl"
                      style={{
                        fontWeight: '500',
                        fontSize: '25px',
                        color: 'white',
                      }}
                    >
                      {counter.suffix}
                    </span>
                  </div>
                  <p className=" text-xl sm:text-base md:text-lg text-gray-800 font-semibold absolute left-35.5 top-[15%]">
                    {counter.label}
                  </p>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Principles;
