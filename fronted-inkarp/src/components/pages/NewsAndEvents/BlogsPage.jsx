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
    title: 'Analytical Validation of Immunofluorescence Assay',
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
    <div className="w-[96%] mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar UI */}
      <div className="space-y-6">
        {/* Search Box */}
        <div className="bg-[#011936] text-white p-6 rounded-3xl shadow-md space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <FaFlask className="text-white" />
            Search
          </div>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search ..."
              className="w-full py-2 pl-4 pr-10 rounded-full bg-[#011936] border border-gray-500 text-white placeholder:text-gray-400 outline-none"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
            <FaSearch className="absolute right-4 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Categories */}
        <div className="bg-[#edf1f9] text-[#011936] p-6 rounded-2xl shadow-sm border border-[#d5e3f0]">
          <div className="flex items-center gap-2 text-lg font-semibold mb-4">
            <FaFlask className="text-blue-500" />
            Categories
          </div>

          <ul className="space-y-3 text-sm">
            <li className="flex justify-between items-center border-b pb-2 text-gray-700">
              <span onClick={() => setSectionFilter('chemistry')} className="cursor-pointer hover:underline">CHEMISTRY</span>
              <span>(7)</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2 text-gray-700">
              <span onClick={() => setSectionFilter('gemological')} className="cursor-pointer hover:underline">GEMOLOGICAL</span>
              <span>(1)</span>
            </li>
            <li className="flex justify-between items-center text-gray-700">
              <span onClick={() => setSectionFilter('scientific')} className="cursor-pointer hover:underline">SCIENTIFIC</span>
              <span>(1)</span>
            </li>
          </ul>
        </div>

        {/* Scroll to Top Button (as shown in UI) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-300 flex items-center justify-center mx-auto"
        >
          <BiUpArrow className="text-blue-600" />
        </button>
      </div>

      {/* Blog Grid */}
      <div className="md:col-span-3 space-y-6">
        {/* Date Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Filter by Date (e.g., June 25, 2024)"
            className="w-full sm:w-1/2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
          <button
            onClick={() => {
              setNameFilter('');
              setSectionFilter('');
              setDateFilter('');
            }}
            className="text-sm text-blue-500 underline"
          >
            Reset Filters
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="relative flex w-full flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl shadow-lg group">
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
  );
}
