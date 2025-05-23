import React from 'react';
import Button from '../UI/Button';

const labCards = [
  {
    id: 1,
    category: 'Asia Labex & Labotica Conclave 2025',
    title: 'You Are Invited To Attend The Asia Labex Exhibition & Labotica Conclave 2025',
    description: 'Date: March 20th - 22nd, 2025\nLocation: Parade Ground, Sector-17, Chandigarh, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
  },
  {
    id: 2,
    category: 'Asia Labex & Labotica Conclave 2025',
    title: 'You Are Invited To Attend The Asia Labex Exhibition & Labotica Conclave 2025',
    description: 'Date: March 20th - 22nd, 2025\nLocation: Parade Ground, Sector-17, Chandigarh, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
  },
  {
    id: 3,
    category: 'Asia Labex & Labotica Conclave 2025',
    title: 'You Are Invited To Attend The Asia Labex Exhibition & Labotica Conclave 2025',
    description: 'Date: March 20th - 22nd, 2025\nLocation: Parade Ground, Sector-17, Chandigarh, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
  },
  {
    id: 3,
    category: 'Asia Labex & Labotica Conclave 2025',
    title: 'You Are Invited To Attend The Asia Labex Exhibition & Labotica Conclave 2025',
    description: 'Date: March 20th - 22nd, 2025\nLocation: Parade Ground, Sector-17, Chandigarh, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
  },  
];

const LabCard = ({ category, title, description, image }) => (
  <div className="bg-white rounded-3xl shadow-md overflow-hidden relative p-5 pb-20 group transition duration-300 ease-in-out transform hover:scale-105 hover:ring-4 hover:ring-red-600 hover:ring-offset-2">
    <img
      src={image}
      alt={title}
      className="rounded-2xl w-full h-48 object-contain"
    />
    <div className="mt-5">
      <p className="text-sm text-red-600 font-semibold uppercase tracking-wide">
        {category}
      </p>
      <h3 className="text-xl font-semibold text-gray-900 mt-1">{title}</h3>
      <p className="text-sm text-gray-500 mt-4 whitespace-pre-line">{description}</p>
    </div>
    <div className="absolute bottom-5 right-5">
      <Button />
    </div>
  </div>
);

const EventsPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {labCards.map((card) => (
          <LabCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;