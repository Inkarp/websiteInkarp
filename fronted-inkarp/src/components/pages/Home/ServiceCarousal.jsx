import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const services = [
  {
    category: 'PATHOLOGY',
    title: 'Diabetes Testing',
    description: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: 'https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png',
  },
  {
    category: 'PATHOLOGY',
    title: 'Elemental Analysis',
    description: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: 'https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png',
  },
  {
    category: 'BIOSAFETY',
    title: 'Chemical Research',
    description: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: 'https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png',
  },
  {
    category: 'BIOSAFETY',
    title: 'Chemical Research',
    description: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: 'https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png',
  },
  {
    category: 'BIOSAFETY',
    title: 'Chemical Research',
    description: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: 'https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png',
  },
  {
    category: 'BIOSAFETY',
    title: 'Chemical Research',
    description: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: 'https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png',
  },
  {
    category: 'BIOSAFETY',
    title: 'Chemical Research',
    description: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: 'https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png',
  },
  {
    category: 'BIOSAFETY',
    title: 'Chemical Research',
    description: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: 'https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png',
  },
  {
    category: 'BIOSAFETY',
    title: 'Chemical Research',
    description: 'Our clinical pathologists are available seven days a week to render diagnoses.',
    image: 'https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png',
  },
];

const ITEMS_PER_PAGE = 3;

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + ITEMS_PER_PAGE) % services.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - ITEMS_PER_PAGE;
      return newIndex < 0 ? services.length - ITEMS_PER_PAGE : newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // auto scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleServices = services.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

  // For seamless looping at the end
  const displayServices =
    visibleServices.length < ITEMS_PER_PAGE
      ? [...visibleServices, ...services.slice(0, ITEMS_PER_PAGE - visibleServices.length)]
      : visibleServices;

  return (
    <div className="px-12 py-10 flex flex-col md:flex-row items-center ">
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/3 space-y-6 z-10">
        <div>
          <p className="text-sm font-semibold uppercase">Our Service</p>
          <h2 className="text-4xl font-bold mt-2 leading-tight">Reliable & High <br /> Quality Service</h2>
        </div>

        <div className="flex w-[30%] rounded-full py-2 items-center shadow-lg justify-center bg-white gap-4">
          <button onClick={prev} className="w-10 h-10 hover:rounded-full hover:bg-red-200 flex items-center justify-center">
            <ChevronLeft />
          </button>
          <hr className='bg-black h-4 w-[2px]' />
          <button onClick={next} className="w-10 h-10 hover:rounded-full hover:bg-red-200 flex items-center justify-center">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="w-full md:w-2/3 mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayServices.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-md w-full"
          >
            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <p className="text-xs text-blue-700 font-semibold uppercase mb-1">{service.category}</p>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-end">
                <button className="bg-blue-100 p-2 rounded-full">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}