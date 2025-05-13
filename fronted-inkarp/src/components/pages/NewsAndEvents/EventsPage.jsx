import React, { useState } from 'react';
import Button from '../UI/Button';

const eventsData = [
  {
    id: 1,
    title: '2nd International Conference on Biotechnology',
    date: '13-14 December 2024',
    location: 'Hyderabad, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    category: 'Conference',
  },
  {
    id: 2,
    title: 'PMEC India Expo 2024',
    date: '14-16 September 2024',
    location: 'Delhi, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    category: 'Expo',
  },
  {
    id: 3,
    title: 'PMEC India Expo 2024',
    date: '14-16 September 2024',
    location: 'Delhi, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    category: 'Expo',
  },
  {
    id: 4,
    title: 'PMEC India Expo 2024',
    date: '14-16 September 2024',
    location: 'Delhi, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    category: 'Expo',
  },
  {
    id: 5,
    title: 'PMEC India Expo 2024',
    date: '14-16 September 2024',
    location: 'Delhi, India',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    category: 'Expo',
  },
  // Add more events as needed
];

const categories = ['All', 'Conference', 'Expo', 'Webinar'];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents =
    selectedCategory === 'All'
      ? eventsData
      : eventsData.filter((event) => event.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100 mt-25">
      {/* Sidebar */}
      <aside className="md:w-1/4 bg-white p-6 border-r border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-2 rounded ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
                
              </button>
            </li>
          ))}
          
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Events</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1">{event.date}</p>
                <p className="text-gray-600">{event.location}</p>
              </div>
              <Button width="10px" /> 
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
