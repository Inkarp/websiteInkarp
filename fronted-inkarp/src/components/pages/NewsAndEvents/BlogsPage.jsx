import React from 'react';

const blogData = [
  {
    id: 1,
    title: 'Analytical Validation of an Immunofluorescence Assay for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform',
    description: 'In the realm of precision oncology, the characterization of circulating tumor cells (CTCs) through non-invasive methods like liquid biopsy',
    image: 'https://www.inkarp.co.in/assets/images/Analytical-Validation.jpeg',
    date: 'June 25, 2024',
  },
  {
    id: 2,
    title: 'Analytical Validation of an Immunofluorescence Assay for ARv7 Protein Expression on Circulating Tumor Cells Using the RareCyte Platform',
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
  return (
    <div className="mt-24 py-10 w-[96%] mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {blogData.map((blog) => (
        <div
          key={blog.id}
          className="relative flex w-100 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
            <div className="absolute inset-0 bg-white opacity-5" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
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
            <button className="group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-black shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5">
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
    </div>
  );
}
