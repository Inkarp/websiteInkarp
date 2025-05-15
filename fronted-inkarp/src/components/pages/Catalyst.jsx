import React from 'react';

const Catalyst = () => {
  const cards = [
    {
      id: 1,
      title: "Catalyst A",
      image: "https://www.inkarp.co.in/assets/images/catalystcue.jpeg",
    },
    {
      id: 2,
      title: "Catalyst B",
      image: "https://www.inkarp.co.in/assets/images/catalystcue.jpeg",
    },
    {
      id: 3,
      title: "Catalyst C",
      image: "https://www.inkarp.co.in/assets/images/catalystcue.jpeg",
    },
    {
      id: 4,
      title: "Catalyst D",
      image: "https://www.inkarp.co.in/assets/images/catalystcue.jpeg",
    },
    {
      id: 4,
      title: "Catalyst D",
      image: "https://www.inkarp.co.in/assets/images/catalystcue.jpeg",
    },
    {
      id: 4,
      title: "Catalyst D",
      image: "https://www.inkarp.co.in/assets/images/catalystcue.jpeg",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mt-3 text-white">
      {/* Header Image */}
      <div className="mb-10  overflow-hidden ">
        <img
          src="https://www.inkarp.co.in/assets/images/catalystcue.jpeg"
          alt="Catalyst"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-[280px] h-[420px] overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[380px] object-cover"
            />
            <div className="text-center py-3">
              <h2 className="text-lg font-semibold text-white">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalyst;
