import React from 'react';

const contentCards = [
  { count: 50, suffix: '+', label: 'Principals', description: 'Trusted Principal Companies' , color: 'from-red-400 to-pink-300' },
  { count: 50000, suffix: '+', label: 'Customers', description: 'Satisfied Customers Across India', color: 'from-green-400 to-green-200' },
  { count: 12, suffix: '', label: 'Branches', description: 'Operational Branches', color: 'from-purple-400 to-purple-200' },
  { count: 10, suffix: '', label: 'Awards', description: 'Recognitions and Achievements', color: 'from-yellow-400 to-yellow-200' },
];

const Principles = () => {
  return (
    <section className="py-10">
      <div className="flex flex-wrap justify-center gap-10">
        {contentCards.map((card, index) => (
          <div key={index} className="group perspective w-48 h-48">
            <div className="relative preserve-3d w-full h-full duration-700 group-hover:rotate-y-180">
              {/* Front */}
              <div
                className={`absolute backface-hidden w-full h-full bg-gradient-to-br ${card.color} rounded-2xl flex flex-col justify-center items-center shadow-lg p-4`}
              >
                <div className="text-4xl font-bold text-white">{card.count}{card.suffix}</div>
                <div className="mt-2 text-lg font-semibold text-white">{card.label}</div>
              </div>

              {/* Back */}
              <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-white rounded-2xl flex flex-col justify-center items-center shadow-lg p-4 text-center">
                <p className="text-gray-700 text-lg">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add perspective and rotation utility */}
      <style>
        {`
          .perspective {
            perspective: 1000px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
        `}
      </style>
    </section>
  );
};

export default Principles;
