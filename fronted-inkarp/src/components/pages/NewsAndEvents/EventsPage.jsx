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
    title: 'Pharma Webinar 2024',
    date: '03 March 2024',
    location: 'Online',
    image: 'https://www.inkarp.co.in/assets/images/Pharmaceutical-e.jpeg',
    category: 'Webinar',
  },
];

const categories = ['All', 'Conference', 'Expo', 'Webinar'];
const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter Logic
  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    const monthInDate = event.date.toLowerCase();
    const matchesMonth =
      selectedMonth === 'All' || monthInDate.includes(selectedMonth.toLowerCase());

    return matchesCategory && matchesSearch && matchesMonth;
  });

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="md:w-1/4 bg-white p-6 border-r border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
        <ul className="space-y-2 mb-8">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-2 rounded ${selectedCategory === category
                    ? 'bg-red-300 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Filter by Month</label>
            <select
              className="w-full border px-3 py-2 rounded text-sm"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Search Events</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded text-sm"
              placeholder="Search by title or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="text-right">
            <button
              className="text-blue-600 text-sm underline"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedMonth('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Events</h1>
        {filteredEvents.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[450px]"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-1">{event.date}</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                  <div className="mt-4">
                    <Button width="10px" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No events match your filters.</p>
        )}
      </main>
    </div>
  );
}
