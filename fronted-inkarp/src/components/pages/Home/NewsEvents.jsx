import React from 'react';

const newsEvents = [
  {
    id: 1,
    title: 'Community Cleanup Drive',
    date: 'April 20, 2025',
    description: 'Join us for a neighborhood cleanup to make our community sparkle!',
  },
  {
    id: 2,
    title: 'Annual Science Fair',
    date: 'April 25, 2025',
    description: 'Explore innovative projects and support young scientists.',
  },
  {
    id: 3,
    title: 'Charity Fun Run',
    date: 'May 5, 2025',
    description: 'Run for a cause and enjoy a fun-filled morning with family and friends.',
  },
];

const NewsEvents = () => {
  return (
    <aside className="relative w-[90%] mx-auto">
      <div className="absolute -top-10 right-6 hidden md:block z-10">
        <img
          className="ml-auto max-w-none"
          src="https://cruip.com/wp-content/themes/cruip-2/dist/images/stacked-templates-3.png"
          width="272"
          height="289"
          role="presentation"
          alt=""
        />
      </div>

      <div className="relative bg-white rounded-3xl overflow-hidden p-8 md:px-12 md:py-14 md:pr-80">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            className="w-full h-full object-cover"
            src="https://cruip.com/wp-content/themes/cruip-2/dist/images/cta-bg-02.svg"
            width="1104"
            height="214"
            role="presentation"
            alt=""
          />
        </div>

        <div className="relative text-center md:text-left">
          <h3 className="text-xl font-xl bg-clip-text text-transparent bg-gradient-to-r from-red-800/70 to-black pb-6">
            News & Events
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsEvents.map((item) => (
              <div
                key={item.id}
                className="bg-red-500/5 backdrop-blur-md rounded-2xl p-6 text-black shadow-md"
              >
                <h4 className="text-lg text-black font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-black  mb-2">{item.date}</p>
                <p className="text-black  mb-4">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-red-500 hover:red-300 font-medium transition"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4 fill-current text-indigo-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 11 11"
                  >
                    <path d="M5.977 10.368 4.953 9.354 8.02 6.286H.568V4.805H8.02L4.953 1.742 5.977.723 10.8 5.546z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NewsEvents;
