import React from 'react';
import { useState } from 'react';
const blogData = [
  {
    id: 1,
    title: ' Hello ',
    description: 'In the realm of precision oncology, the characterization of circulating tumor cells (CTCs) through non-invasive methods like liquid biopsy',
    image: 'https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg',
    date: 'June 22, 2024',
  },
  {
    id: 2,
    title: ' for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform',
    description: 'In the realm of precision oncology, the characterization of circulating tumor cells (CTCs) through non-invasive methods like liquid biopsy',
    image: 'https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg',
    date: 'June 25, 2024',
  },
  {
    id: 3,
    title: 'Analytical Validation of an Immunofluorescence Assay for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform',
    description: 'In the realm of precision oncology, the characterization of circulating tumor cells (CTCs) through non-invasive methods like liquid biopsy',
    image: 'https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg',
    date: 'June 25, 2024',
  },
  {
    id: 4,
    title: 'Analytical Validation of an Immunofluorescence Assay for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform',
    description: 'In the realm of precision oncology, the characterization of circulating tumor cells (CTCs) through non-invasive methods like liquid biopsy',
    image: 'https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg',
    date: 'June 25, 2024',
  },
  {
    id: 5,
    title: 'Analytical Validation of an Immunofluorescence Assay for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform',
    description: 'In the realm of precision oncology, the characterization of circulating tumor cells (CTCs) through non-invasive methods like liquid biopsy',
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
    <div className="w-[96%] mx-auto py-10">
      {/* Filter Controls */}
      <div className='bg-white mb-5 w-[98%] h-60 mx-auto rounded-lg flex items-center justify-center'>

      </div>
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Filter by Section"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sectionFilter}
          onChange={(e) => setSectionFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Title/Name"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Date (e.g., June 25, 2024)"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
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
  );
}
