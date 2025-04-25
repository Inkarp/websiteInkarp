import React, { useEffect, useState } from 'react';
import AnimatedNumbers from 'react-animated-numbers';
import { motion } from 'framer-motion';

const counters = [
  { label: 'Principals', value: 50, suffix: '+' },
  { label: 'Customers', value: 50, suffix: 'k+' },
  { label: 'Branches', value: 12, suffix: '' },
  { label: 'Awards', value: 10, suffix: '' },
];

const CIRCLE_RADIUS = 80;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
const SHARED_FILL_PERCENT = 90;

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
          <motion.div
            key={index}
            className="w-full"
            initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
            whileHover={{
              rotateX: -5,
              rotateY: 5,
              scale: 1.07,
              transition: { type: 'spring', stiffness: 200, damping: 10 },
            }}
            animate={{ rotateX: 0, rotateY: 0, scale: 1 }}
            style={{
              animation: 'fadeUp 0.6s ease-out',
              animationDelay: `${index * 0.6}s`,
              animationFillMode: 'both',
              transformStyle: 'preserve-3d',
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
                        fontWeight: '700',
                        fontSize: '28px',
                        color: 'white',
                      }}
                    />
                    <span
                      className="ml-1 text-xl sm:text-2xl md:text-3xl"
                      style={{
                        fontWeight: '600',
                        fontSize: '25px',
                        color: 'white',
                      }}
                    >
                      {counter.suffix}
                    </span>
                  </div>
                  <p className="text-xl font-semibold sm:text-center md:text-lg text-gray-800 absolute left-34 top-[15%] hidden lg:block" style={{ fontFamily: 'MaxOT' }}>
                    {counter.label}
                  </p>
                </div>
              </div>
              <p
                className="block lg:hidden text-xl font-semibold text-gray-800"
                style={{ fontFamily: 'MaxOT' }}
              >
                {counter.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Principles;
