import React, { useRef, useState } from "react";
import { CalendarDays, User2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  return (
    <section className="bg-white py-12 mx-auto">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-4xl font-bold text-slate-900 mb-10"
        >
          Latest insights from our lab partners
          <br /> and scientific specialists
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid lg:grid-cols-3 gap-10"
        >
          {/* Left Feature */}
          <div className="bg-red-100 p-6 rounded-3xl lg:col-span-2">
            <img
              src={featured.image}
              alt={featured.title}
              className="rounded-3xl mb-4 object-cover w-full h-[300px]"
            />
            <h3 className="text-xl font-semibold">{featured.title}</h3>
            <p className="text-sm mt-2">{featured.content}</p>
          </div>

          {/* Right List */}
          <div className="flex flex-col gap-4">
            {articles.map((item) => (
              <div
                key={item.id}
                onClick={() => setFeatured(item)}
                className="flex items-start gap-4 border-b pb-4 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
