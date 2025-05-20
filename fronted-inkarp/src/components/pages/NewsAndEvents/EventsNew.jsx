import React from 'react';

const cardData = [
  {
    id: 1,
    image: 'https://www.inkarp.co.in/assets/images/India-Mumbai-2025.jpeg',
    title: 'Analytica Lab India - Mumbai',
    description: {
      date: '23rd - 25th April 2025',
      location: 'Stall G031, Pavilion 1 & 2',
      venue: 'Jio Convention Centre, BKC, Mumbai',
    },
  },
  {
    id: 2,
    image: 'https://www.inkarp.co.in/assets/images/India-Mumbai-2025.jpeg',
    title: 'BioAsia - Hyderabad',
    description: {
      date: '26th - 28th Feb 2025',
      location: 'Stall D112',
      venue: 'HITEX Exhibition Centre, Hyderabad',
    },
  },
  {
    id: 3,
    image: 'https://www.inkarp.co.in/assets/images/India-Mumbai-2025.jpeg',
    title: 'India Lab Expo - Bengaluru',
    description: {
      date: '12th - 14th March 2025',
      location: 'Booth B015',
      venue: 'Bengaluru International Exhibition Centre',
    },
  },
  {
    id: 4,
    image: 'https://www.inkarp.co.in/assets/images/India-Mumbai-2025.jpeg',
    title: 'Smart Lab Summit - Delhi',
    description: {
      date: '5th - 7th May 2025',
      location: 'Stall A009',
      venue: 'Pragati Maidan, New Delhi',
    },
  },
  {
    id: 5,
    image: 'https://www.inkarp.co.in/assets/images/India-Mumbai-2025.jpeg',
    title: 'ChemBio India - Chennai',
    description: {
      date: '15th - 17th June 2025',
      location: 'Stall C023',
      venue: 'Chennai Trade Centre, Chennai',
    },
  },
  {
    id: 6,
    image: 'https://www.inkarp.co.in/assets/images/India-Mumbai-2025.jpeg',
    title: 'LabTech Pune 2025',
    description: {
      date: '20th - 22nd July 2025',
      location: 'Stall B008',
      venue: 'Auto Cluster Exhibition Centre, Pune',
    },
  },
  {
    id: 7,
    image: 'https://www.inkarp.co.in/assets/images/India-Mumbai-2025.jpeg',
    title: 'East India Analytical Expo - Kolkata',
    description: {
      date: '2nd - 4th August 2025',
      location: 'Stall F018',
      venue: 'Science City, Kolkata',
    },
  },
  {
    id: 8,
    image: 'https://www.inkarp.co.in/assets/images/India-Mumbai-2025.jpeg',
    title: 'Lab Innovations - Ahmedabad',
    description: {
      date: '10th - 12th Sept 2025',
      location: 'Stall E020',
      venue: 'Helipad Exhibition Centre, Gandhinagar',
    },
  },
  {
    id: 9,
    image: 'https://www.inkarp.co.in/assets/images/India-Mumbai-2025.jpeg',
    title: 'Goa Pharma Tech Meet',
    description: {
      date: '18th - 19th Oct 2025',
      location: 'Hall 1, Table T007',
      venue: 'Dr. Shyama Prasad Mukherjee Stadium, Goa',
    },
  },
  {
    id: 10,
    image: 'https://www.inkarp.co.in/assets/images/India-Mumbai-2025.jpeg',
    title: 'Uttar Pradesh Science Expo - Lucknow',
    description: {
      date: '25th - 27th Nov 2025',
      location: 'Stall G045',
      venue: 'Indira Gandhi Pratishthan, Lucknow',
    },
  },
];

const Card = ({ title, description, image }) => {
  return (
    <div className="relative group w-full aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white transform transition-transform duration-500">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-fit-cover group-hover:scale-140 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-white px-5 py-6 flex flex-col justify-center transform rotate-x-90 group-hover:rotate-x-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-bottom">
        <p className="text-xl font-bold text-gray-800 mb-2">{title}</p>
        <p className="text-sm text-gray-600 mb-4 font-medium">
          <span className="text-red-500 font-semibold">Date:</span> {description.date} <br />
          <span className="text-red-500 font-semibold">Location:</span> {description.location} <br />
          <span className="text-red-500 font-semibold">Venue:</span> {description.venue}
        </p>
        <div className="flex gap-3">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default function EventsNew() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 p-5 max-w-screen-xl mx-auto">
      {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
