import React, { useState } from 'react';
import { FaSearch, FaFlask } from 'react-icons/fa';
import { BiUpArrow } from 'react-icons/bi';

const blogData = [
  {
    id: 1,
    title: 'Hello',
    description: 'Characterization of circulating tumor cells through liquid biopsy...',
    image: 'https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg',
    date: 'June 22, 2024',
  },
  {
    id: 2,
    title: 'ARv7 Protein Expression',
    description: 'Non-invasive methods in oncology diagnostics...',
    image: 'https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg',
    date: 'June 25, 2024',
  },
  {
    id: 3,
    title: 'Analytical Validation of ',
    description: 'Validation of ARv7 using RareCyte platform...',
    image: 'https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg',
    date: 'June 25, 2024',
  },
];

export default function BlogsPage() {
  const [sectionFilter, setSectionFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const filteredBlogs = blogData.filter((blog) => {
    const sectionMatch = blog.description.toLowerCase().includes(sectionFilter.toLowerCase());
    const nameMatch = blog.title.toLowerCase().includes(nameFilter.toLowerCase());
    const dateMatch = blog.date.toLowerCase().includes(dateFilter.toLowerCase());
    return sectionMatch && nameMatch && dateMatch;
  });

  return (
    <div>
      {/* Top Bar UI */}
      <div className="bg-black text-white px-4 py-3 flex items-center justify-between w-full">
        {/* Left Dropdown */}
        <div className="flex items-center gap-2">
          <select className="bg-[#1a1a1a] text-white px-3 py-1 rounded border border-gray-600">
            <option>All logs</option>
            <option>Blog events</option>
            <option>API calls</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="flex-1 mx-4 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1a1a1a] text-white px-4 py-1.5 rounded border border-gray-600 placeholder:text-gray-400"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <select className="bg-[#1a1a1a] text-white px-3 py-1 rounded border border-gray-600">
            <option>Live tail</option>
            <option>Paused</option>
          </select>
          <div className="bg-[#1a1a1a] px-3 py-1 rounded border border-gray-600">
            GMT+5:30
          </div>
          <button className="border border-gray-600 px-2 py-1 rounded hover:bg-gray-800">
            ⛶
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[96%] mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
       
        {/* Blog Grid */}
        <div className="md:col-span-3 space-y-6">

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="relative flex w-full flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative mx-4 -mt-6 h-full overflow-hidden rounded-xl shadow-lg group">
                  <img src={blog.image} className="h-full w-full object-cover" alt={blog.title} />
                </div>

                <div className="p-6">
                  <h5 className="mb-1 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {blog.title}
                  </h5>
                  <p className="text-sm text-gray-500 mb-2">📅 {blog.date}</p>
                  <p className="text-base text-gray-700">
                    {blog.description}
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <button className="group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-black shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    <span className="relative flex items-center gap-2">
                      Register Now
                      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 transform transition-transform group-hover:translate-x-1">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
            {filteredBlogs.length === 0 && (
              <p className="text-center text-gray-500 col-span-full">No blogs found matching the filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
