import React, { useState } from "react";

const blogs = [
  {
    img: "https://cdn.sanity.io/images/34ent8ly/production/f31810d13e2e27f7f502218b8f4f28e0008e1ed7-3000x3000.png?w=640&q=75",
    title: "Remix: a practical guide",
    link: "https://bejamas.com/hub/guides/guide-to-remix-framework",
  },
  {
    img: "https://cdn.sanity.io/images/34ent8ly/production/adffce6e572b1e67f8301c0cd45ea0019a9e0be8-4167x4167.png?w=640&q=75",
    title: "Nuxt: a practical guide",
    link: "https://bejamas.com/hub/tutorials/practical-guide-to-nuxt-js",
  },
  {
    img: "https://cdn.sanity.io/images/34ent8ly/production/69cca46986d67b738f488daf17ac61a9f8f00068-3000x3000.png?w=640&q=75",
    title: "Solid: a practical guide",
    link: "https://bejamas.io/blog/practical-guide-to-solidjs-library/",
  },

];

export default function BlogCardList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className=""
     
    >
      <div className="max-w-7xl mx-auto p-6">
        <section className="bg-white border shadow-lg rounded-lg p-8">
          <h1 className="text-4xl text-center font-bold text-red-700 mb-8">
            <a
              href="https://bejamas.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blogs
            </a>
          </h1>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-white border shadow-lg rounded-lg overflow-hidden transition-all opacity-50 duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-50"
                    : "opacity-100 "
                }`}
              >
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4"
                >
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {blog.title}
                  </h2>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
