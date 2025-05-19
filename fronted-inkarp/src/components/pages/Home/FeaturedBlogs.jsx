import React, { useRef, useState } from "react";
import { CalendarDays, User2, ArrowRight } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "Enabling Innovation in Modern Hospital Labs",
    date: "May 10, 2025",
    author: "Inkarp Editorial",
    category: "Life Sciences",
    image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg",
    content:
      "Explore how cutting-edge lab instruments are transforming patient-centric diagnostics in hospital environments.",
  },
  {
    id: 2,
    title: "New Approaches to Anatomy & Imaging Workflows",
    date: "May 9, 2025",
    author: "Inkarp Team",
    category: "Medical Research",
    image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg",
    content:
      "Discover efficient imaging and tissue analysis workflows using Inkarp’s advanced microscopy solutions.",
  },
  {
    id: 3,
    title: "Essential Lab Manual for Specimen Processing",
    date: "May 8, 2025",
    author: "Inkarp Team",
    category: "Clinical Labs",
    image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg",
    content:
      "Download a free lab manual to streamline contemporary specimen testing protocols using Inkarp systems.",
  },
  {
    id: 4,
    title: "How Automation Drives Precision in Pharma QA",
    date: "May 7, 2025",
    author: "Inkarp Insights",
    category: "Pharmaceutical",
    image: "https://xleb-demo.pbminfotech.com/demo1/wp-content/themes/xleb/images/tab.jpg",
    content:
      "See how pharma teams are integrating automation tools like Mya 4 and Hei-VAP for regulatory-ready testing.",
  },
];

export default function FeaturedBlogs() {
  const [featured, setFeatured] = useState(articles[0]);
  const [activeId, setActiveId] = useState(articles[0].id);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  const fadeUp = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const fadeOpacity = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2 },
    },
  };

  const handleSelect = (item) => {
    setActiveId(item.id);
    setFeatured(item);
  };

  return (
    <section className="py-12 px-12 mx-auto">
     
        <div className="text-center mb-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-xs font-semibold border px-4 py-1 rounded-full inline-block mb-3 text-[#be0010] border-[#be0010]"
        >
          WHAT WE DO
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-4xl font-bold text-slate-900 mb-10"
        >
          Latest insights from our lab partners <br /> and scientific specialists
        </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Featured */}
          <AnimatePresence mode="wait">
            <motion.div
              key={featured.id}
              className="bg-white p-6 rounded-3xl flex flex-col lg:col-span-2 shadow"
              variants={fadeOpacity}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <motion.img
                  src={featured.image}
                  alt="featured"
                  className="rounded-3xl w-full md:w-[40%] object-cover h-[320px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                />

                <div className="flex flex-col justify-between">
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">
                    {featured.date} /{" "}
                    <span className="text-[#be0010] font-medium">{featured.category}</span>
                  </p>

                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                    {featured.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-6">{featured.content}</p>

                  <button className="px-6 py-3 bg-[#be0010] text-white text-sm font-bold rounded-full w-fit flex items-center gap-2 hover:bg-red-700 transition">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Blog List */}
          <motion.div
            className="flex flex-col gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {articles.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                onClick={() => handleSelect(item)}
                className={`flex items-center gap-4 border-b pb-4 cursor-pointer transition rounded-xl p-2 ${
                  activeId === item.id
                    ? "bg-[#fef2f2] border-[#be0010] shadow-md ring-2 ring-[#be0010]"
                    : "hover:bg-gray-50"
                }`}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-xl object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-1">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User2 size={14} />
                      BY {item.author}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800 line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
