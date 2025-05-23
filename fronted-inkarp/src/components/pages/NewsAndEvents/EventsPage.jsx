import React, { useState } from 'react';
import Button from '../UI/Button';

const labCards = [
  {
    id: 1,
    category: 'Asia Labex & Labotica Conclave 2025',
    title: 'You Are Invited To Attend The Asia Labex Exhibition & Labotica Conclave 2025',
    description: 'Date: May 25th - 28nd, 2025\nLocation: Parade Ground, Sector-17, Chandigarh, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    date: '2025-05-25',
  },
  {
    id: 2,
    category: 'Asia Labex & Labotica Conclave 2025',
    title: 'You Are Invited To Attend The Asia Labex Exhibition & Labotica Conclave 2025',
    description: 'Date: March 20th - 22nd, 2025\nLocation: Parade Ground, Sector-17, Chandigarh, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    date: '2025-03-20',
  },
  {
    id: 3,
    category: 'Asia Labex & Labotica Conclave 2026',
    title: 'You Are Invited To Attend The Asia Labex Exhibition & Labotica Conclave 2025',
    description: 'Date: March 20th - 22nd, 2026\nLocation: Parade Ground, Sector-17, Chandigarh, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    date: '2026-03-20',
  },
  {
    id: 3,
    category: 'Asia Labex & Labotica Conclave 2026',
    title: 'You Are Invited To Attend The Asia Labex Exhibition & Labotica Conclave 2025',
    description: 'Date: March 20th - 22nd, 2026\nLocation: Parade Ground, Sector-17, Chandigarh, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    date: '2026-03-20',
  },
  {
    id: 3,
    category: 'Asia Labex & Labotica Conclave 2026',
    title: 'You Are Invited To Attend The Asia Labex Exhibition & Labotica Conclave 2025',
    description: 'Date: March 20th - 22nd, 2026\nLocation: Parade Ground, Sector-17, Chandigarh, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    date: '2026-03-20',
  },
  {
    id: 3,
    category: 'Asia Labex & Labotica Conclave 2026',
    title: 'You Are Invited To Attend The Asia Labex Exhibition & Labotica Conclave 2025',
    description: 'Date: March 20th - 22nd, 2026\nLocation: Parade Ground, Sector-17, Chandigarh, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    date: '2026-03-20',
  },
  {
    id: 3,
    category: 'Asia Labex & Labotica Conclave 2026',
    title: 'You Are Invited To Attend The Asia Labex Exhibition & Labotica Conclave 2025',
    description: 'Date: March 20th - 22nd, 2026\nLocation: Parade Ground, Sector-17, Chandigarh, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    date: '2026-03-20',
  },
];

const LabCard = ({ category, title, description, image }) => (
  <div className="bg-white rounded-3xl shadow-md overflow-hidden relative p-5 pb-20 border border-red-500 group transition duration-300 ease-in-out transform hover:scale-105 hover:ring-4 hover:ring-red-600 hover:ring-offset-2 hover:border-none">
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
  const [filterMonth, setFilterMonth] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [upcomingOnly, setUpcomingOnly] = useState(false);

  const today = new Date();

  const resetFilters = () => {
    setFilterMonth('');
    setFilterYear('');
    setUpcomingOnly(false);
  };

  const filteredCards = labCards.filter((card) => {
    const eventDate = new Date(card.date);
    const matchesMonth = filterMonth ? eventDate.getMonth() + 1 === parseInt(filterMonth) : true;
    const matchesYear = filterYear ? eventDate.getFullYear() === parseInt(filterYear) : true;
    const isUpcoming = upcomingOnly ? eventDate >= today : true;
    return matchesMonth && matchesYear && isUpcoming;
  });

  return (
    <div className="min-h-screen md:px-16">
      <div className="bg-[url('https://www.inkarp.co.in/assets/images/webinar-banner.jpg')] bg-cover bg-center h-[400px] relative">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Empowering Labs Through Knowledge</h1>
          <p className="text-lg max-w-2xl text-center">Join our expert-led webinars on lab technologies, automation, and research advancements.</p>
          <a href="#upcoming" className="mt-5 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">View Upcoming Events</a>
        </div>
      </div>
    
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-10 justify-center bg-white p-4 rounded-lg shadow border border-red-100">
        {/* Month Filter */}
        <div>
          <label className="text-sm block text-gray-700 mb-1 font-medium">Month</label>
          <select
            className="bg-white border border-gray-300 px-4 py-2 rounded text-sm shadow-sm"
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
          >
            <option value="">All Months</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i + 1}>
                {new Date(0, i).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <div>
          <label className="text-sm block text-gray-700 mb-1 font-medium">Year</label>
          <select
            className="bg-white border border-gray-300 px-4 py-2 rounded text-sm shadow-sm"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          >
            <option value="">All Years</option>
            {[2024, 2025, 2026].map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Upcoming Filter */}
        <div className="flex items-center gap-2 pt-6">
          <input
            type="checkbox"
            checked={upcomingOnly}
            onChange={() => setUpcomingOnly(!upcomingOnly)}
            className="accent-red-600"
            id="upcoming"
          />
          <label htmlFor="upcoming" className="text-sm text-gray-700 font-medium">Upcoming Only</label>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="ml-auto text-sm bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Reset Filters
        </button>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No events found for selected filters.</p>
        ) : (
          filteredCards.map((card) => <LabCard key={card.id} {...card} />)
        )}
      </div>
    </div>
  );
};

export default EventsPage;
