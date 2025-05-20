import { useState } from "react";
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

  return (
    <div className="relative w-[96%] mx-auto mt-2 h-[600px] rounded-none md:rounded-3xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

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
        <h1 className="text-4xl md:text-6xl font-bold leading-tight swing-top-bwd">
          {slides[current].title}
          <br />
          {slides[current].subtitle}
        </h1>
        {/* <motion.button
          onClick={() => alert("More Details clicked!")}
          className="mt-6 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          More Details <span className="inline-block ml-2">↗</span>
        </motion.button> */}
      </motion.div>

      {/* Right-Side Controls */}
      <div className=" bg-white p-4 absolute rounded-l-xl right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 z-20">
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
      <div   
        // whileHover={{ scale: 1.05 }}
        // whileTap={{ scale: 0.95 }}
        className="absolute bottom-4 right-4 cursor-pointer bg-white/80  flex items-center gap-2 px-5 py-4 rounded-full shadow hover:text-red-500 transition-all duration-300"
      >
        <div className="bg-red border-2 rounded-[50%] p-2">
        <Play className="w-4 h-4" />
        </div>
        <span className="text-sm font-medium">Watch Video</span>
      </div>
    </div>
  );
}
