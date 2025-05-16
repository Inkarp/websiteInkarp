import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const cardVariants = {
  hidden: { opacity: 0, y: -80, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.5,
      duration: 1.5,
      ease: 'easeOut',
    },
  }),
};

const NewsEvents = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <aside className="relative w-[96%] mx-auto mt-3">
      {/* Decorative Image */}
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

      {/* Main Container */}
      <div
        ref={ref}
        className="relative bg-white rounded-3xl overflow-hidden p-8 md:px-12 md:py-14 md:pr-80"
      >
        {/* Background Pattern */}
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

        {/* Section Heading */}
        <div className="relative text-center md:text-left">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-xl font-xl bg-clip-text text-transparent bg-gradient-to-r from-red-800/70 to-black pb-6"
          >
            News & Events
          </motion.h3>

          {/* Animated Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsEvents.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardVariants}
                className="bg-red-500/5 backdrop-blur-md rounded-2xl p-6 text-black shadow-md"
              >
                <h4 className="text-lg text-black font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-black mb-2">{item.date}</p>
                <p className="text-black mb-4">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-red-500 hover:text-red-300 font-medium transition"
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NewsEvents;
