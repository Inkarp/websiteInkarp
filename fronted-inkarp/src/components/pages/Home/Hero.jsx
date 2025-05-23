import { React,useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";


const slides = [
  {
    id: 1,
    title: "Advances of Science",
    subtitle: "Make Easier Life",
    image: "https://static.wixstatic.com/media/88aac0_7a16b3f5f3c443219743b1328910a67d~mv2.png",
  },
  {
    id: 2,
    title: "Precision for Progress",
    subtitle: "Innovation in Every Lab",
    image: "https://static.wixstatic.com/media/88aac0_c4682f9e957f40b2b8f63c2dce380533~mv2.png",
  },
  {
    id: 3,
    title: "Smart Technology",
    subtitle: "Smarter Research",
    image: "https://static.wixstatic.com/media/88aac0_7a16b3f5f3c443219743b1328910a67d~mv2.png",
  },
  {
    id: 4,
    title: "Empowering Discovery",
    subtitle: "From Concept to Cure",
    image: "https://static.wixstatic.com/media/88aac0_15aa8aecbf5b45b391dab7df5bde448e~mv2.png",
  },
  {
    id: 5,
    title: "Future of Science",
    subtitle: "Starts Today",
    image: "https://static.wixstatic.com/media/88aac0_c4682f9e957f40b2b8f63c2dce380533~mv2.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
  <div className="relative w-[96%] mx-auto mt-2 h-[600px] rounded-none md:rounded-3xl overflow-hidden">
    {/* Background image */}
    <AnimatePresence mode="wait">
      <motion.div
        key={slides[current].id}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[current].image})` }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* ✅ Search Bar Positioned in Top Right */}
    <div className="absolute top-6 right-6 z-20">
      <div className="relative text-gray-600">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none shadow"
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
          <svg
            className="h-4 w-4 fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.966 56.966"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786 
              c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,
              13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 
              c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,
              55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,
              17s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </div>
    </div>

    {/* Text Content */}
    <motion.div
      key={`text-${slides[current].id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4"
    >
      <span className=" swing-top-bwd uppercase tracking-widest border px-4 py-1 rounded-full text-xs mb-4 inline-block">
        Best Solutions for Laboratory
      </span>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight swing-top-bwd font-[MaxOT]">
        {slides[current].title}
        <br />
        {slides[current].subtitle}
      </h1>
    </motion.div>

    {/* Right-Side Controls */}
    <div className="bg-white p-4 absolute rounded-l-xl right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 z-20">
      <motion.button
        onClick={prevSlide}
        className="bg-gray-200/70 text-black p-2 rounded-full hover:bg-red-200 shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="bg-gray-200/70 text-black p-2 rounded-full hover:bg-red-200 shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight />
      </motion.button>
    </div>

    {/* Watch Video Button */}
    <div className="absolute bottom-4 right-4 cursor-pointer bg-white/80 flex items-center gap-2 px-5 py-4 rounded-full shadow hover:text-red-500 transition-all duration-300">
      <div className="bg-red border-2 rounded-full p-2">
        <Play className="w-4 h-4" />
      </div>
      <span className="text-sm font-medium">Watch Video</span>
    </div>
  </div>
);

}
