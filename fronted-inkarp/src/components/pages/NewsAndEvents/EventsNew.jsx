import { React, useState } from 'react';

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
    image: 'https://www.inkarp.co.in/assets/images/International-Poultry.jpeg',
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
    image: 'https://www.inkarp.co.in/assets/images/International-Poultry.jpeg',
    title: 'Hello Hi this is Sharath',
    description: {
      date: '25th - 27th Dec 2025',
      location: 'Stall G045',
      venue: 'Indira Gandhi Pratishthan, Lucknow',
    },
  },
];


const Card = ({ title, description, image }) => (
  <div className="relative group w-[350px] h-[350px] rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white transform transition-transform duration-500">
    <img
      src={image}
      alt={title}
      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-white px-5 py-6 flex flex-col justify-center transform rotate-x-90 group-hover:rotate-x-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-bottom">
      <p className="text-xl font-bold text-gray-800 mb-2">{title}</p>
      <p className="text-sm text-gray-600 mb-4 font-medium">
        <span className="text-red-500 font-semibold">Date:</span> {description.date} <br />
        <span className="text-red-500 font-semibold">Location:</span> {description.location} <br />
        <span className="text-red-500 font-semibold">Venue:</span> {description.venue}
      </p>
      <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition">
        Join Us
      </button>
    </div>
  </div>
);

export default function EventsNew() {
  const [showFilter, setShowFilter] = useState(false);
  const [monthFilter, setMonthFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const sortData = (data) => {
    if (!sortField) return data;

    return [...data].sort((a, b) => {
      let valA = sortField === 'title' ? a.title : new Date(a.description.date.split('-').pop());
      let valB = sortField === 'title' ? b.title : new Date(b.description.date.split('-').pop());

      if (sortOrder === 'asc') return valA > valB ? 1 : -1;
      else return valA < valB ? 1 : -1;
    });
  };

  const filteredData = sortData(
    cardData.filter((card) => {
      const dateMatch = !monthFilter || card.description.date.toLowerCase().includes(monthFilter);
      const searchMatch =
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.venue.toLowerCase().includes(searchQuery.toLowerCase());
      return dateMatch && searchMatch;
    })
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Top Toolbar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by title or venue..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/3 border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
        />

        {/* Filter + Sort */}
        <div className="flex justify-end gap-2">
          {/* Sort Button with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="border px-4 py-2 rounded-md text-sm flex items-center gap-1"
            >
              Sort by
            </button>
            {showSortDropdown && (
              <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white border z-10 transition">
                <div className="p-2 text-sm space-y-2">
                  <button
                    onClick={() => {
                      setSortField('title');
                      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                      setShowSortDropdown(false);
                    }}
                    className="w-full text-left hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    Title ({sortOrder === 'asc' ? 'A → Z' : 'Z → A'})
                  </button>
                  <button
                    onClick={() => {
                      setSortField('date');
                      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                      setShowSortDropdown(false);
                    }}
                    className="w-full text-left hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    Date ({sortOrder === 'asc' ? 'Oldest' : 'Newest'})
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Filter Button */}
          <div className="relative">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="border px-4 py-2 rounded-md text-sm flex items-center gap-1"
            >
              Filter
            </button>
            {showFilter && (
              <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white border z-10 transition-opacity duration-200">
                <div className="p-4">
                  <label className="block text-sm font-medium mb-1">Filter by Month</label>
                  <select
                    className="w-full border rounded-md px-2 py-1 text-sm"
                    value={monthFilter}
                    onChange={(e) => setMonthFilter(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="jan">January</option>
                    <option value="feb">February</option>
                    <option value="mar">March</option>
                    <option value="apr">April</option>
                    <option value="may">May</option>
                    <option value="jun">June</option>
                    <option value="jul">July</option>
                    <option value="aug">August</option>
                    <option value="sept">September</option>
                    <option value="oct">October</option>
                    <option value="nov">November</option>
                    <option value="dec">December</option>
                  </select>
                </div>
                <div className="flex justify-between px-4 pb-3">
                  <button
                    className="text-sm text-blue-600 hover:underline"
                    onClick={() => {
                      setMonthFilter('');
                      setSearchQuery('');
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((card) => <Card key={card.id} {...card} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">No events found.</p>
        )}
      </div>
    </div>
  );
}


